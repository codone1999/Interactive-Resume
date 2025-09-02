<template>
  <div class="fixed bottom-8 right-8">
    <button 
      @click="$emit('click')"
      class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-2xl animate-pulse-glow"
    >
      📄
    </button>
  </div>
</template>

<script>
export default {
  name: 'FloatingActionButton',
  emits: ['click']
}
</script>