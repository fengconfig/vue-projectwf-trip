import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'
export default function scrollHook() {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollHandler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if (scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return { isReachBottom, scrollTop, scrollHeight, clientHeight }
}
