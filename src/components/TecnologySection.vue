<template>
    <div class="tech-container">
      <TechCard v-for="(tech, index) in technologies" :key="index" :tech="tech" />
    </div>
</template>

<script>
import TechCard from './TechCard.vue';

export default {
    components: {
        TechCard
    },
    data() {
        return {
            technologies: []
        }
    },
    mounted() {
        fetch("src/assets/technologies.json")
        .then(response => response.json())
        .then(data => {
            this.technologies = data;
        })
        .catch(error => console.error("Error loading JSON:", error));
    }
}
</script>

<style scoped>
.tech-container {
  display: flex; /* Enables horizontal layout */
  flex-wrap: wrap; /* Allows wrapping if there are too many items */
  gap: 5px; /* Adds spacing between items */
  justify-content: center; /* Centers the cards horizontally */
  padding: 20px;
}
</style>