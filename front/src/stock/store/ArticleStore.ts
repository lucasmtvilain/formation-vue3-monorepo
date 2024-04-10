import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '../api'
import type { Article, NewArticle } from '../interfaces/article'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref<Article[] | undefined>()

  const add = async (newArticle: NewArticle) => {
    await api.add(newArticle)
    articles.value = await api.getArticles()
  }

  const remove = async (ids: Article['id'][]) => {
    await api.remove(ids)
    articles.value = await api.getArticles()
  }

  const refresh = async () => {
    articles.value = await api.getArticles()
  }

  return {
    articles,
    add,
    remove,
    refresh
  }
})

// Acienne façon
// export const useArticleStore = defineStore('articles', {
//   state: () => ({
//     articles: undefined as Article[] | undefined
//   }),
//   actions: {
//     async add(newArticle: NewArticle) {
//       await api.add(newArticle)
//       this.articles = await api.getArticles()
//     },
//     async remove(ids: Article['id'][]) {
//       await api.remove(ids)
//       this.articles = await api.getArticles()
//     },
//     async refresh() {
//       this.articles = await api.getArticles()
//     }
//   }
// })
