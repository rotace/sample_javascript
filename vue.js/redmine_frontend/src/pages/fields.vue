<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-title>Fields</v-card-title>
      <v-list>
        <v-list-item v-for="item in items" :key="item.id" :value="item">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import api from '@/api'
const items = ref([])
onMounted(async () => {
  const data = await api.get('/api/custom_fields.json')
  data.custom_fields.forEach(item => { items.value.push(item) })
})
</script>
