import type { Directive } from 'vue'

type FocusValues = 'selectall' | 'focus'

export const vFocus: Directive<HTMLElement, FocusValues | undefined> = {
  mounted: (el, binding, vnode, prevVnode) => {
    const value = binding.value
    if (value === 'selectall' && el instanceof HTMLInputElement) {
      el.select()
      return
    }
    el.focus()
  }
}
