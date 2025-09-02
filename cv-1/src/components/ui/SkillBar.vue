<template>
  <div class="space-y-2">
    <div class="flex justify-between items-center">
      <span class="text-gray-300">{{ skill.name }}</span>
      <span class="text-sm text-gray-400">{{ skill.level }}%</span>
    </div>
    <div class="w-full bg-gray-700 rounded-full h-2">
      <div 
        class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
        :style="{ width: animatedLevel + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SkillBar',
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const animatedLevel = ref(0)
    
    onMounted(() => {
      setTimeout(() => {
        animatedLevel.value = props.skill.level
      }, 300)
    })
    
    return {
      animatedLevel
    }
  }
}
</script>
