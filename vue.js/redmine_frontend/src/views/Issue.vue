<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th>項目</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in table" :key="i">
          <td>{{ r.name }}</td>
          <td>{{ r.value }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
  import api from '@/api'
  import { useRoute } from 'vue-router'
  const issue = ref(null)
  const route = useRoute()
  const table = ref([])
  onMounted(async () => {
    const issueData = await api.get(`/api/issues/${route.params.id}.json`)
    console.log(issueData)
    issue.value = issueData.issue
    table.value.push({ name: 'Id', value: issue.value.id })
    table.value.push({ name: 'Subject', value: issue.value.subject })
    table.value.push({ name: 'Project', value: issue.value.project.name })
    table.value.push({ name: 'Tracker', value: issue.value.tracker.name })
    table.value.push({ name: 'Category', value: issue.value.category.name })
    table.value.push({ name: 'Version', value: issue.value.fixed_version.name })
    issue.value.custom_fields.forEach( field => {
      table.value.push({ name: field.name, value:field.value })
    });
    // table.value.push({ name: 'Json', value: issue.value })
  })
</script>
