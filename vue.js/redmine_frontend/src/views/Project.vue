<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Project {{ project?.name }}</v-card-title>
      <v-card-subtitle>{{ project }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script setup>
  import api from '@/api'
  import { useRoute } from 'vue-router'
  const project = ref(null)
  const route = useRoute()
  onMounted(async () => {
    const projectData = await api.get(`/api/projects/${route.params.id}.json`)
    project.value = projectData.project
  })
</script>
