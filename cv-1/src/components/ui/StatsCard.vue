<template>
  <div class="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
    <div :class="[
      'text-2xl font-bold',
      colorClass
    ]">{{ value }}</div>
    <div class="text-sm text-gray-400">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    colorClass() {
      const colorMap = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        green: 'text-green-400',
        yellow: 'text-yellow-400'
      }
      return colorMap[this.color] || 'text-blue-400'
    }
  }
}
</script>