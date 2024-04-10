import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
declare module '@vue' {
  export interface GlobalComponents {
    FaIcon: typeof FontAwesomeIcon
  }
}

// ne pas mettre  les sous dépendances car non compatible avec pnmp
// declare module '@vue/runtime-core' => declare module '@vue'
// Les fichier [filenam].d.ts
