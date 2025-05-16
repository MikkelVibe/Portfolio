<template>
    <section class="projects-section">
        <div class="project-container">
            <Project v-for="(project, index) in projects" :key="index" :project="project" />

        </div>
    </section>
</template>
<script>
import Project from './Project.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    components: {
        Project
    },
    data() {
        return {
            projects: [
            ]
        }
    },
    mounted() {
        fetch('src/assets/projects.json')
            .then((response) => response.json())
            .then((data) => {
                this.projects = data
            })
            .catch((error) =>
                console.error('Error loading projects JSON:', error)
            );
    },

});
</script>


<style scoped>
.projects-section {
    padding-bottom: 5rem;
    color: #1e1e1e;
    max-width: 1300px;
    margin: 0 auto;
    text-align: left;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    padding-right: 1rem;
    padding-left: 0;
}
</style>