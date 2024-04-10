<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NewArticle } from '@gestionstock/commons'
import { useArticleStore } from '../store/ArticleStore'
import { vFocus } from '@/directives/vFocus'

const isAdding = ref<boolean>(false)
const errorMsg = ref<string>('')
const newArticle = ref<NewArticle>({
  name: 'Truc',
  price: 0,
  qty: 1
})

const articlesStore = useArticleStore()
const $router = useRouter()

const handleSubmit = async () => {
  try {
    isAdding.value = true

    const sumettedArticle: NewArticle = { ...newArticle.value }
    await articlesStore.add(sumettedArticle)
    await $router.push({ name: 'stockList' })
  } catch (err: any) {
    console.log('err: ', err)
    errorMsg.value = err.message
  } finally {
    isAdding.value = false
  }
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit()">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" v-focus="'selectall'" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
        <span class="error"></span>
      </label>
      <div class="error">
        {{ errorMsg }}
      </div>
      <button class="primary" :disabled="isAdding">
        <fa-icon
          :icon="'fa-solid ' + (isAdding ? 'fa-circle-notch' : 'fa-plus')"
          :spin="isAdding"
        />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #aaa;
      border-radius: 0.3em;
    }
  }

  div.error {
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}
</style>
