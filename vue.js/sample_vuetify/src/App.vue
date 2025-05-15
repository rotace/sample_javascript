<template>
  <v-app>

    <!-- システムバー -->
    <v-system-bar>

      <v-bottom-sheet v-model="wifiState">
        <!-- デフォルトスロット（ボトムシートの表示要素） -->
        <template v-slot>
          <v-card>
            <v-card-title>Wifi</v-card-title>
            <v-card-text>This is Wifi State Area</v-card-text>
            <v-card-actions>
              <v-btn @click="wifiState = !wifiState">Details</v-btn>
              <v-btn @click="wifiState = !wifiState">Setting</v-btn>
              <v-btn @click="wifiState = !wifiState">Disable</v-btn>
            </v-card-actions>
          </v-card>
        </template> 
        <!-- アクティベータスロット（ボトムシートのトリガー要素） -->
        <template v-slot:activator="{ props }">
          <v-icon icon="mdi-wifi-strength-4" class="ms-2" v-bind="props"></v-icon>
        </template>
      </v-bottom-sheet>

      <v-bottom-sheet v-model="signalState">
        <!-- デフォルトスロット（ボトムシートの表示要素） -->
        <template v-slot>
          <v-card>
            <v-card-title>Signal</v-card-title>
            <v-card-text>This is Signal State Area</v-card-text>
          </v-card>
        </template> 
        <!-- アクティベータスロット（ボトムシートのトリガー要素） -->
        <template v-slot:activator="{ props }">
          <v-icon icon="mdi-signal" class="ms-2" v-bind="props"></v-icon>
        </template>
      </v-bottom-sheet>

      <v-bottom-sheet v-model="batteryState">
        <!-- デフォルトスロット（ボトムシートの表示要素） -->
        <template v-slot>
          <v-card>
            <v-card-title>Battery</v-card-title>
            <v-card-text>This is Battery State Area</v-card-text>
          </v-card>
        </template> 
        <!-- アクティベータスロット（ボトムシートのトリガー要素） -->
        <template v-slot:activator="{ props }">
          <v-icon icon="mdi-battery" class="ms-2" v-bind="props"></v-icon>
        </template>
      </v-bottom-sheet>

      <v-bottom-sheet v-model="clockState">
        <!-- デフォルトスロット（ボトムシートの表示要素） -->
        <template v-slot>
          <v-card>
            <v-card-title>Clock</v-card-title>
            <v-card-text>This is Clock State Area</v-card-text>
          </v-card>
        </template>
        <!-- アクティベータスロット（ボトムシートのトリガー要素） -->
        <template v-slot:activator="{ props }">
          <button class="ms-2" v-bind="props">3:13PM</button>
        </template>
      </v-bottom-sheet>
      
    </v-system-bar>

    <!-- アプリケーションバー -->
    <v-app-bar title="Header">
      <v-btn prepend-icon="mdi-target" @click="nav1State = !nav1State" :active="nav1State">Targets</v-btn>
      <v-btn prepend-icon="mdi-alpha-u-circle-outline" @click="nav2State = !nav2State" :active="nav2State">Units</v-btn>
      <v-btn prepend-icon="mdi-alpha-p-circle-outline" @click="nav3State = !nav3State" :active="nav3State">Plans</v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-badge>
        <v-btn icon="mdi-tag"></v-btn>
      </v-badge>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item v-for="i in 3">
              <v-list-item-title>Menu {{ i }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

    </v-app-bar>

    <!-- ナビゲーション１ -->
    <v-navigation-drawer v-model="nav1State" permanent>
      <template v-slot:prepend>
        <v-text-field label="Search" class="ml-4" density="compact" prepend-icon="mdi-magnify" clearable single-line hide-details />
      </template>
      <v-list-item v-for="i in 20">
        <v-card variant="outlined">
          <v-card-title>Item{{ i }}</v-card-title>
          <v-card-subtitle>abcde</v-card-subtitle>
          <v-expansion-panels>
            <v-expansion-panel v-for="i in 3" :key="i" title="title" text="aaaaaaaaaaaaaaaaaaaaaaaaa"/>
          </v-expansion-panels>
          <v-card-text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</v-card-text>
          <v-card-actions>
            <v-btn>Edit</v-btn>
            <v-btn>Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-navigation-drawer>

    <!-- ナビゲーション２ -->
    <v-navigation-drawer v-model="nav2State" permanent>
      <template v-slot:prepend>
        <v-text-field label="Search" class="ml-4" density="compact" prepend-icon="mdi-magnify" clearable single-line hide-details />
      </template>
      <v-list-item v-for="i in 20" class="py-3" >

        <v-list-item-action style="font-size: 12px">
          <v-icon class="mr-1" color="secondary">mdi-wifi</v-icon>
          <p>Network</p>
          <v-spacer></v-spacer>
          <v-btn size="x-small" rounded="2" prepend-icon="mdi-history">10:31 AM</v-btn>
          <v-icon class="ml-2">mdi-dots-horizontal</v-icon>
        </v-list-item-action>

        <v-list-item-title>
          Unit {{ i }}
        </v-list-item-title>
        
        <v-list-item-subtitle>
          ABC DD ID:5
        </v-list-item-subtitle>

        <v-list-item-action style="font-size: 12px">
          <v-icon color="secondary">mdi-target</v-icon>
          <p>No Activity</p>
          <v-spacer></v-spacer>
          
          <v-btn size="x-small" class="ml-2" variant="outlined" prepend-icon="mdi-file-tree">
            Weapon
            <v-menu activator="parent" open-on-hover location="top end" origin="start center">
              <v-list density="compact">
                <v-list-item v-for="i in 3" @click="console.log('')">
                  <v-list-item-title>Weapon {{ i }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </v-list-item-action>

      </v-list-item>
    </v-navigation-drawer>

    <!-- ナビゲーション３ -->
    <v-navigation-drawer v-model="nav3State" location="right" permanent >
      <v-list-item v-for="i in 20">
        <v-card>
          <v-card-title>Item{{ i }}</v-card-title>
          <v-card-subtitle>abcde</v-card-subtitle>
          <v-card-actions>
            <v-chip size="x-small" color="primary" variant="outlined">Active</v-chip>
            <v-chip size="x-small" color="secondary" variant="outlined">Ready</v-chip>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <!-- ツールバー -->
      <v-toolbar>
        <v-toolbar-title>TOOLBAR</v-toolbar-title>
        <v-toolbar-items>
          <v-btn icon="mdi-wifi"></v-btn>
          <v-btn icon="mdi-signal"></v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- バナー -->
      <v-banner
        class="my-4"
        color="error"
        icon="mdi-weather-hurricane"
        lines="one"
      >
        <v-banner-text>Banner with one line of text.</v-banner-text>
        <template v-slot:actions>
          <v-btn>Action</v-btn>
        </template>
      </v-banner>

      <v-banner
        class="my-4"
        color="deep-purple-accent-4"
        icon="mdi-lock"
        lines="one"
      >
        <v-banner-text>Banner with one line of text.</v-banner-text>
        <template v-slot:actions>
          <v-btn>Action</v-btn>
        </template>
      </v-banner>

      <!-- アラート -->
      <v-alert type="success">Success.</v-alert>
      <v-alert type="info">Info</v-alert>
      <v-alert type="warning">Warning!</v-alert>
      <v-alert type="error">Error!</v-alert>

      <!-- コンテナ -->
      <v-container>


        <v-col>
          <v-row>
            <v-btn>ButtonA</v-btn>
            <v-btn>ButtonB</v-btn>
          </v-row>
          <v-row>
            <v-btn>ButtonA</v-btn>
            <v-btn>ButtonB</v-btn>
          </v-row>
        </v-col>
        
      </v-container>

      <!-- ボトムナビゲーション -->
      <v-bottom-navigation
        v-model="btmNavState"
      >
        <v-btn icon="mdi-history"></v-btn>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-map-marker"></v-btn>
      </v-bottom-navigation>

      <!-- フローティングアクションボタン -->
      <v-fab
        app
        icon="mdi-plus"
        color="secondary"
        elevation="8"
        @click="console.log('fab')"
      />
    </v-main>

    <!-- フッター -->
    <v-footer
      app
    >
      Footer
    </v-footer>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const wifiState = ref(false)
  const signalState = ref(false)
  const batteryState = ref(false)
  const clockState = ref(false)
  const nav1State = ref(true)
  const nav2State = ref(true)
  const nav3State = ref(true)
  const btmNavState = ref(1)
</script>

