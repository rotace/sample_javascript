<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Issues of {{ project?.name }}</v-card-title>
      <v-list>
        <v-list-item v-for="item in items" :key="item.id" :value="item">
          <v-list-item-title>{{ item.subject }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
  import api from '../api'
  import { useRoute } from 'vue-router'
  const project = ref(null)
  const items = ref([])
  const route = useRoute()
  onMounted(async () => {
    const projectData = await api.get(`/api/projects/${route.params.id}.json`)
    project.value = projectData.project
    const data = await api.get(`/api/projects/${route.params.id}/issues.json`)
    data.issues.forEach(item => {items.value.push(item)})
  })
</script>
