/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faAngleRight,
  faPlus,
  faRotateRight,
  faTrashCan,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons'

import type { Plugin } from 'vue'

/* add icons to the library */
library.add(faAngleRight, faPlus, faRotateRight, faTrashCan, faCircleNotch)

export const icon: Plugin = (app) => {
  app.component('fa-icon', FontAwesomeIcon)
}

//const app = createApp(App)
