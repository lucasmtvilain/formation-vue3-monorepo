<script setup lang="ts">
import { ref } from 'vue'

// withDefauts => pour mettre des valeurs par défauts
const props = defineProps<{
  icon: string
  action: () => Promise<void>
}>()

const emits = defineEmits<{
  //(e: 'onError', err: string): void
  onError: [err: string]
  start: []
}>()

const isDoing = ref<boolean>(false)

const doAction = async () => {
  try {
    isDoing.value = true
    emits('start')
    await props.action()
    //throw new Error('Parameter is not a number!')
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      emits('onError', err.message.concat(' HHHHHHHAAAAAAAAAAAAA!!!!!!!!!'))
    } else {
      emits('onError', ' HHHHHHHAAAAAAAAAAAAA!!!!!!!!!')
    }
  } finally {
    isDoing.value = false
  }
}
</script>

<template>
  <button @click="doAction" :disabled="isDoing">
    <fa-icon :icon="isDoing ? 'fa-solid fa-circle-notch' : props.icon" :spin="isDoing" />
  </button>
</template>

<style scoped lang="scss"></style>
