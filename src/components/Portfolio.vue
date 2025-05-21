<template>
    <section class="projects-section">
        <h2 class="title">My portfolio</h2>
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
    text-align: left;
    margin: 0 auto;
}

.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #fff;
}

@media (max-width: 768px) {
    .project-container {
        grid-template-columns: 1fr;
    }
}
</style>