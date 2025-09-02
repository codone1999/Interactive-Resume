<template>
  <div class="flex items-center space-x-3">
    <span class="text-blue-400">{{ icon }}</span>
    <a 
      v-if="link" 
      :href="link" 
      class="text-sm hover:text-blue-400 transition-colors"
    >
      {{ text }}
    </a>
    <span v-else class="text-sm">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>