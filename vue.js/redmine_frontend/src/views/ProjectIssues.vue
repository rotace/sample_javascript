<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Project {{ route.params.id }} Issues</v-card-title>
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
  const items = ref([])
  const route = useRoute()
  onMounted(async () => {
    const data = await api.get(`/api/projects/${route.params.id}/issues.json`)
    data.issues.forEach(item => {items.value.push(item)})
  })
</script>
