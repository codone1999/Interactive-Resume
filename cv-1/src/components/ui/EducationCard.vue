<template>
  <div class="bg-dark-secondary border border-gray-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-[1.02] animate-slide-up mb-6 hover:shadow-lg hover:shadow-teal-500/10">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 class="text-2xl font-bold text-teal-400 mb-2">{{ education.degree }}</h3>
        <p class="text-xl text-orange-400 mb-2">{{ education.school }}</p>
        <p class="text-gray-300">GPA: {{ education.gpa }}</p>
      </div>
      <span class="bg-gradient-to-r from-teal-600 to-teal-600 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 text-white">
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