<template>
  <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-bounce-in">
    <div class="text-center mb-6">
      <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold animate-pulse-glow">
        {{ initials }}
      </div>
      <h2 class="text-2xl font-bold mb-2">{{ profile.name }}</h2>
      <p class="text-blue-400 text-lg">{{ profile.title }}</p>
    </div>
    
    <div class="space-y-3">
      <ContactItem icon="📧" :text="profile.email" />
      <ContactItem icon="📧" :text="profile.email2" />
      <ContactItem icon="📱" :text="profile.phone" />
      <ContactItem icon="📍" :text="profile.location" />
      <ContactItem icon="🔗" :text="profile.github" link="#" />
    </div>
    
    <button 
      @click="$emit('download')"
      class="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      Download Resume PDF
    </button>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue'

export default {
  name: 'ProfileCard',
  components: {
    ContactItem
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  emits: ['download'],
  computed: {
    initials() {
      return this.profile.name.split(' ').map(n => n[0]).join('')
    }
  }
}
</script>