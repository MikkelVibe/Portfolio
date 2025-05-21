<template>
    <section class="projects-section" v-scroll-reveal>
        <h2 class="title" v-scroll-reveal>My portfolio</h2>
        <div class="project-container">
            <Project v-for="(project, index) in projects" :key="project.id || index" :project="project" v-scroll-reveal
                :style="{ transitionDelay: (index * 120) + 'ms' }" />
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
            projects: []
        };
    },
    directives: {
        scrollReveal: {
            mounted(el) {
                console.log('[Reveal] Element is being observed:', el);

                el.classList.add('before-enter');
                console.log('[Reveal] → before-enter added');

                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            console.log('[Reveal] ✅ Element entered viewport:', el);
                            el.classList.add('enter');
                            el.classList.remove('before-enter');
                            console.log('[Reveal] → enter added, before-enter removed');
                            observer.unobserve(el);
                            console.log('[Reveal] 🔁 Unobserved for performance');
                        }
                    },
                    { threshold: 0.1 }
                );

                observer.observe(el);
            }
        }
    },
    mounted() {
        fetch('/assets/projects.json')
            .then((response) => response.json())
            .then((data) => {
                this.projects = data;
            })
            .catch((error) =>
                console.error('Error loading projects JSON:', error)
            );
    }
});
</script>

<style scoped>
.projects-section {
    padding-bottom: 5rem;
    color: #1e1e1e;
    max-width: 1300px;
    text-align: left;
    margin: 0 auto;
    overflow: hidden;
}

.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #fff;
}

/* Animation classes */
.before-enter {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
}

.enter {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (max-width: 768px) {
    .project-container {
        grid-template-columns: 1fr;
    }
}
</style>
