<template>
  <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 animate-bounce-in">
    <div class="text-center mb-6">
      <div class="w-32 h-32 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold animate-pulse-glow shadow-lg">
        {{ initials }}
      </div>
      <h2 class="text-2xl font-bold mb-2 text-gray-100">{{ profile.name }}</h2>
      <p class="text-teal-400 text-lg">{{ profile.title }}</p>
    </div>
   
    <div class="space-y-3">
      <ContactItem icon="📧" :text="profile.email" />
      <ContactItem icon="📧" :text="profile.email2" />
      <ContactItem icon="📱" :text="profile.phone" />
      <ContactItem icon="📍" :text="profile.location" />
      <ContactItem icon="🔗" :text="profile.github" :link="profile.github" />
    </div>
   
    <button
      @click="downloadResume"
      :disabled="isDownloading"
      class="w-full mt-6 bg-gradient-to-r from-teal-500 to-teal-500 hover:from-teal-600 hover:to-orange-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isDownloading ? 'Downloading...' : 'Download Resume PDF' }}
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
  data() {
    return {
      isDownloading: false
    }
  },
  computed: {
    initials() {
      return this.profile.name.split(' ').map(n => n[0]).join('')
    }
  },
  methods: {
    async downloadResume() {
      try {
        this.isDownloading = true
        
        const link = document.createElement('a')
        link.href = '/cv-ver2-2.pdf' 
        link.download = `${this.profile.name.replace(/\s+/g, '_')}_CV.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        

        this.$emit('download')
        
      } catch (error) {
        console.error('Download failed:', error)
        alert('Download failed. Please try again.')
      } finally {
        this.isDownloading = false
      }
    }
  }
}
</script>