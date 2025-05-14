<template>
  <v-form @submit.prevent>
    <v-container>
      <v-text-field v-model="subject" label="表題" />
      <v-select v-model="selectedProjectId" item-title="name" item-value="id" :items="projects" label="プロジェクト"
        :rules="[v => !!v || 'Project is required.']" />
      <v-select v-model="selectedTrackerId" item-title="name" item-value="id" :items="trackers" label="トラッカー"
        :rules="[v => !!v || 'Tracker is required.']" />
      <v-select v-show="hasVersion" v-model="selectedVersionId" item-title="name" item-value="id" :items="versions"
        label="バージョン" :rules="[v => !!v || 'Version is required.']" />
      <v-select v-show="hasCategory" v-model="selectedCategoryId" item-title="name" item-value="id" :items="categories"
        label="カテゴリ" :rules="[v => !!v || 'Category is required.']" />
      <v-text-field v-for="(field, index) in customFields" :key="field.id" :label="field.name" v-model="field.value"
        :rules="nameRules" />
    </v-container>

    <v-footer app color="primary">
      <v-container>
        <v-row>
          <v-btn class="mr-2" type="validate">Validate</v-btn>
          <v-btn class="mr-2" type="reset">Reset</v-btn>
          <v-btn class="mr-2" type="submit" @click="submit">Submit</v-btn>
        </v-row>
      </v-container>
    </v-footer>
  </v-form>
</template>

<script setup>
import api from '@/api'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const nameRules = ref([
  v => {
    if (v) return true
    return 'Name is required.'
  },
  v => {
    if (v?.length <= 10) return true
    return 'Name must be less than 10 characters.'
  },
])

const issue = ref(null)

const subject = ref('')

const projects = ref([])
const selectedProjectId = ref(null)

const trackers = ref([])
const selectedTrackerId = ref(null)

const versions = ref([])
const hasVersion = ref(false)
const selectedVersionId = ref(null)

const categories = ref([])
const hasCategory = ref(false)
const selectedCategoryId = ref(null)

const customFields = ref([])

// 読み込み時
onMounted(async () => {
  const _issue = await api.get(`/api/issues/${route.params.id}.json`)
  issue.value = _issue.issue

  // 表題
  subject.value = issue.value.subject

  // プロジェクト
  const _project = await api.get(`/api/projects/${issue.value.project.id}.json?include=trackers,issue_categories,issue_custom_fields`)
  projects.value.length = 0
  projects.value.push(_project.project)
  selectedProjectId.value = issue.value.project.id

  // トラッカー
  trackers.value.length = 0
  _project.project?.trackers?.forEach(item => { trackers.value.push(item) })
  selectedTrackerId.value = issue.value.tracker.id

  // カテゴリ
  categories.value.length = 0
  _project.project?.issue_categories?.forEach(item => { categories.value.push(item) })
  selectedCategoryId.value = issue.value.category.id

  // バージョン
  versions.value.length = 0
  const _versions = await api.get(`/api/projects/${issue.value.project.id}/versions.json`)
  _versions.versions?.forEach(item => { versions.value.push(item) })
  selectedVersionId.value = issue.value.fixed_version.id

  // カスタムフィールド
  customFields.value.length = 0
  issue.value.custom_fields?.forEach(item => { customFields.value.push(item) })
})

// トラッカー選択時
watch(selectedTrackerId, async newId => {

  if (newId != null) {
    const _trackers = await api.get('/api/trackers.json')
    const _fields = _trackers.trackers.find(item => item.id == newId)?.enabled_standard_fields

    // バージョン
    hasVersion.value = _fields.includes('fixed_version_id')

    // カテゴリ
    hasCategory.value = _fields.includes('category_id')
  }
})

async function submit() {
  const data = {
    issue: {
      subject: subject.value,
      project_id: selectedProjectId.value,
      tracker_id: selectedTrackerId.value,
      ...(hasVersion ? { fixed_version_id: selectedVersionId.value } : {}),
      ...(hasCategory ? { category_id: selectedCategoryId.value } : {}),
      custom_fields: customFields.value,
    },
  }
  console.log(data)
  await api.put(`/api/issues/${route.params.id}.json`, data)
  router.push(`/issues/${route.params.id}`)
}

</script>
