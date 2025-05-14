<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Issues</v-card-title>
      <v-list>
        <v-list-item v-for="item in items" :key="item.id" :value="item" @click="router.push(`/issues/${item.id}`)">
          <v-list-item-title>{{ item.subject }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>

  <v-footer app color="primary">
    <v-btn class="mr-2" @click="router.push('/issues/new')">Create</v-btn>
  </v-footer>
</template>

<script setup>
import api from '@/api'
import { useRouter } from 'vue-router'
const router = useRouter()
const items = ref([])
onMounted(async () => {
  const data = await api.get('/api/issues.json')
  data.issues.forEach(item => { items.value.push(item) })
})
</script>
