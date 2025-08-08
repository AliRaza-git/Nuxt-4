
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  let $logger: any = null;

  // Getters
  const dubbleDec = computed(() => count.value - 2);
  const dubbleInc = computed(() => count.value + 2);

  // Actions
  function increment() {
    count.value++;
    if ($logger) $logger.log(`Counter incremented to ${count.value}`);
  }

  function decrement() {
    count.value--;
    if ($logger) $logger.log(`Counter decremented to ${count.value}`);
  }

  // Method to set logger (will be called from component)
  function setLogger(logger: any) {
    $logger = logger;
  }

  return {
    count,
    decrement,
    increment,
    dubbleDec,
    dubbleInc,
    setLogger
  };
});