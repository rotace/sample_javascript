<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      Application
    </v-app-bar-title>

  </v-app-bar>

  <v-navigation-drawer permanent v-model="drawer">
    <v-list nav>
      <v-list-item prepend-icon="mdi-forum" title="Projects" value="projects" @click="router.push('/projects')"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="Versions" value="versions" @click="router.push('/versions')"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="Issues" value="issues" @click="router.push('/issues')"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router';
const drawer = ref(false)
const router = useRouter()
</script>
