<template>
  <span class="bg-gradient-to-r from-blue-600/50 to-purple-600/50 px-3 py-1 rounded-full text-xs">
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