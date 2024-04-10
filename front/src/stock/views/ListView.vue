<script setup lang="ts">
import AsyncButton from '@/components/AsyncButton.vue'
import { useArticleStore } from '../store/ArticleStore'
import type { Article } from '@gestionstock/commons'
import { RouterLink } from 'vue-router' // Pour faire fonctionner avec pnpm.
import { computed, onMounted, ref } from 'vue'
import MainTitle from '@/components/MainTitle.vue'

const selectedArticles = ref<Set<Article>>(new Set<Article>())
const errorMsg = ref<string>('')
const articlesStore = useArticleStore()

const select = (a: Article) => {
  console.log('select')
  selectedArticles.value.has(a) ? selectedArticles.value.delete(a) : selectedArticles.value.add(a)
  selectedArticles.value = new Set(selectedArticles.value)
}

const remove = async () => {
  //try {
  errorMsg.value = ''
  const ids = [...selectedArticles.value].map((a) => a.id)
  await articlesStore.remove(ids)
  selectedArticles.value.clear()
  // } catch (err) {
  //   console.log('err: ', err)
  //   errorMsg.value = 'Erreur Technique'
  // }
}
const refresh = async (): Promise<void> => {
  //try {
  //errorMsg.value = ''
  //console.log('refreshing')

  await articlesStore.refresh()
  //console.log('refreshed')
  // } catch (err) {
  //   console.log('err: ', err)
  //   errorMsg.value = 'Erreur Technique'
  // }
}

onMounted(() => {
  if (articlesStore.articles === undefined) {
    articlesStore.refresh()
  }
})

const articles = computed(() => {
  return articlesStore.articles
})

const resetError = () => {
  errorMsg.value = 'start'
}

const setError = (err: string) => {
  errorMsg.value = err
}
</script>

<template>
  <main>
    <MainTitle>Liste des articles</MainTitle>
    <div class="content">
      <nav>
        <AsyncButton
          @start="resetError"
          @on-error="setError"
          title="Rafraîchir"
          :action="refresh"
          icon="fa-solid fa-rotate-right"
        >
        </AsyncButton>
        <router-link :to="{ name: 'stockAdd' }" class="button" title="Ajouter">
          <fa-icon icon="fa-solid fa-plus" />
        </router-link>
        <AsyncButton
          @start="resetError"
          @on-error="setError"
          :hidden="selectedArticles.size === 0"
          title="Supprimer"
          :action="remove"
          icon="fa-solid fa-trash-can"
          >a
        </AsyncButton>
      </nav>
      <div class="error">
        {{ errorMsg }}
      </div>
      <table>
        <thead>
          <th class="name">Nom</th>
          <th class="price">Prix</th>
          <th class="qty">Quantité</th>
        </thead>
        <tbody>
          <tr
            v-for="a in articles"
            :key="a.id"
            @click="select(a)"
            :class="{ selected: selectedArticles.has(a) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price number">{{ a.price }} €</td>
            <td class="qty number">{{ a.qty }}</td>
          </tr>
          <tr v-if="articles === undefined">
            <td colspan="3">
              <div class="loading">
                <fa-icon icon="fa-solid fa-circle-notch" :spin="true"></fa-icon>
                <span>Loading...</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 0.5em;
}

div.error {
  height: 2em;
  display: flex;
  align-items: center;
  font-weight: bold;
}

table {
  border: 0.1em solid #aaa;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;
  overflow: hidden;

  th,
  td {
    padding: 0.5em 1em;
  }

  thead {
    background: #aaa;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }

    .number {
      text-align: right;
    }
  }

  div.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
}
</style>
