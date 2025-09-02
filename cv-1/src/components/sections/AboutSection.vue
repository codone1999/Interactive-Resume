<template>
  <section class="animate-fade-in">
    <div class="grid lg:grid-cols-3 gap-8 mb-12">
      <!-- Profile Card -->
      <div class="lg:col-span-1">
        <ProfileCard :profile="data" @download="$emit('download')" />
      </div>
      
      <!-- Summary -->
      <div class="lg:col-span-2">
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full animate-slide-up">
          <h3 class="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h3>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            {{ data.summary }}
          </p>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileCard from '@/components/ui/ProfileCard.vue'
import StatsCard from '@/components/ui/StatsCard.vue'

export default {
  name: 'AboutSection',
  components: {
    ProfileCard,
    StatsCard
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  emits: ['download']
}
</script>
