<template>
  <div class="text-center p-4 bg-dark-tertiary rounded-lg hover:bg-dark-secondary transition-all duration-300 border border-gray-800 hover:border-teal-500/30">
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
      default: 'teal'
    }
  },
  computed: {
    colorClass() {
      const colorMap = {
        teal: 'text-teal-400',
        orange: 'text-orange-400',
        green: 'text-green-400',
        yellow: 'text-yellow-400',
        blue: 'text-teal-400', 
        purple: 'text-orange-400' 
      }
      return colorMap[this.color] || 'text-teal-400'
    }
  }
}
</script>