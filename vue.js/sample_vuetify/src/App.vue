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
        <template v-slot:activator="activatorProps">
          <v-icon icon="mdi-wifi-strength-4" class="ms-2" v-bind="activatorProps.props"></v-icon>
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
        <template v-slot:activator="activatorProps">
          <v-icon icon="mdi-signal" class="ms-2" v-bind="activatorProps.props"></v-icon>
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
        <template v-slot:activator="activatorProps">
          <v-icon icon="mdi-battery" class="ms-2" v-bind="activatorProps.props"></v-icon>
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
        <template v-slot:activator="activatorProps">
          <button class="ms-2" v-bind="activatorProps.props">3:13PM</button>
        </template>
      </v-bottom-sheet>
      
    </v-system-bar>

    <!-- アプリケーションバー -->
    <v-app-bar title="Header"></v-app-bar>

    <!-- ナビゲーション１ -->
    <v-navigation-drawer permanent>
      <v-list-item v-for="i in 20">
        <v-card variant="tonal" @click="console.log(`Item${i}`)">
          <v-card-title>Item{{ i }}</v-card-title>
          <v-card-subtitle>abcde</v-card-subtitle>
        </v-card>
      </v-list-item>
    </v-navigation-drawer>

    <!-- ナビゲーション２ -->
    <v-navigation-drawer permanent>
      <v-list-item v-for="i in 20" lines="three" @click="console.log('navi')">
        
        <v-list-item-title>
          Title{{ i }}
        </v-list-item-title>
        
        <v-list-item-subtitle>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </v-list-item-subtitle>

        <v-list-item-action>
          <p>{{ i }}</p>
          <v-spacer></v-spacer>
          <v-icon color="secondary">mdi-star</v-icon>  
        </v-list-item-action>

      </v-list-item>
    </v-navigation-drawer>

    <!-- ナビゲーション３ -->
    <v-navigation-drawer location="right" permanent >
      <v-list-item v-for="i in 20">
        <v-card @click="console.log(`Item${i}`)">
          <v-card-title>Item{{ i }}</v-card-title>
          <v-card-subtitle>abcde</v-card-subtitle>
        </v-card>
      </v-list-item>
    </v-navigation-drawer>
    
    <v-main>

      <!-- コンテナ -->
      <v-container>
        <v-col>
          <v-row>
            <v-btn variant="tonal">ButtonA</v-btn>
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
  const btmNavState = ref(1)
</script>

