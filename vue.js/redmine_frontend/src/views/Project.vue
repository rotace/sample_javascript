<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Project {{ route.params.id }}</v-card-title>
      <v-card-subtitle>{{ item }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script setup>
  import api from '../api'
  import { useRoute } from 'vue-router'
  const item = ref(null)
  const route = useRoute()
  onMounted(async () => {
    const data = await api.get(`/api/projects/${route.params.id}.json`)
    item.value = data.project
  })
</script>
