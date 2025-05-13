<template>
  <v-app-bar color="primary">
    <template #prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    </template>

    <v-app-bar-title>
      Application
    </v-app-bar-title>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" permanent>
    <v-list nav>
      <v-list-item prepend-icon="mdi-forum" title="Top" value="top" @click="router.push('/')" />
      <v-list-item prepend-icon="mdi-forum" title="Projects" value="projects" @click="router.push('/projects')" />
      <v-list-item prepend-icon="mdi-forum" title="Issues" value="issues" @click="router.push('/issues')" />
      <v-list-item prepend-icon="mdi-forum" title="Fields" value="fields" @click="router.push('/fields')" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router'
const drawer = ref(false)
const router = useRouter()
</script>
