<template>
    <div>
    <h1>Home Page</h1>
    <p>Welcome to the Vuetify + Vue 3 + TypeScript project!</p>

    <v-btn color="primary" class="mt-4" @click="increment">
      Clicked {{ count }} times
    </v-btn>
    <v-card title="Card title" text="..." variant="tonal">
  <v-card-actions>
    <v-btn variant="tonal">Click me</v-btn>
  </v-card-actions>
</v-card>
    </div>

</template>

<script lang="ts" setup>
// A simple reactive counter
import { ref } from 'vue'

const count = ref<number>(0)

function increment() {
  count.value++
}
</script>
