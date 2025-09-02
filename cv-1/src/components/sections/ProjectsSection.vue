<template>
  <section class="animate-fade-in">
    <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
      Featured Projects
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="(project, index) in data"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ui/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>