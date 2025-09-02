<template>
  <span class="bg-gradient-to-r from-teal-600/30 to-orange-600/30 border border-teal-500/30 px-3 py-1 rounded-full text-xs text-gray-200 hover:border-teal-400 transition-colors">
    {{ tech }}
  </span>
</template>

<script>
export default {
  name: 'TechBadge',
  props: {
    tech: {
      type: String,
      required: true
    }
  }
}
</script>