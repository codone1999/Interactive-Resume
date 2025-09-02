<template>
  <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02] animate-slide-up">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 class="text-2xl font-bold text-blue-400 mb-2">{{ education.degree }}</h3>
        <p class="text-xl text-purple-400 mb-2">{{ education.school }}</p>
        <p class="text-gray-400">GPA: {{ education.gpa }}</p>
      </div>
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0">
        {{ education.period }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationCard',
  props: {
    education: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>