<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Projects</v-card-title>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :value="item"
          @click="router.push(`/projects/${item.id}/issues`)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
  import api from '@/api'
  import { useRouter } from 'vue-router'
  const items = ref([])
  const router = useRouter()
  onMounted(async () => {
    const data = await api.get('/api/projects.json')
    data.projects.forEach(item => {items.value.push(item)})
  })
</script>
