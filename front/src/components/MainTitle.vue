<script setup lang="ts">
import { onMounted, onUnmounted, useSlots } from 'vue'

const slots = useSlots()
const child = slots.default?.()[0]?.children
onMounted(() => {
  window.document.title = `Gestion stock - ${child}`
})

onUnmounted(() => {
  window.document.title = `Gestion stock`
})
</script>

<template>
  <h1>Titre <slot> </slot></h1>
</template>
