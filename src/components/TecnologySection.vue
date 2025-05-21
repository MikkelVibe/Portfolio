<template>
    <transition name="zoom-fade-rotate">
        <section class="technologies-section" v-if="loaded">
            <h2 class="title">Technologies</h2>
            <p class="subtitle">These are the technologies I am most proficient in.</p>
            <div class="tech-container">
                <TechCard v-for="(tech, index) in technologies" :key="index" :tech="tech" />
            </div>
        </section>
    </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TechCard from './TechCard.vue';
export default defineComponent({
    components: { TechCard },
    data() {
        return {
            technologies: [] as any[],
            loaded: false,
        };
    },
    mounted() {
        fetch('src/assets/technologies.json')
            .then((response) => response.json())
            .then((data) => {
                // Filter here before assigning
                this.technologies = data.filter((t: { enabled: boolean }) => t.enabled);
                this.loaded = true; // triggers the animation
            })
            .catch((error) =>
                console.error('Error loading technologies JSON:', error)
            );
    },
});
</script>
<style scoped>
.technologies-section {
    padding-bottom: 2rem;
    color: #1e1e1e;
    max-width: 1300px;
    margin: 0 auto;
    text-align: left;
    width: 100%;
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #fff;
}

.subtitle {
    font-size: 1.1rem;
    color: #bbb;
    margin-bottom: 2rem;
    font-weight: 500;
}

.tech-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
}

/* Cool Animation */
.zoom-fade-rotate-enter-from {
    opacity: 0;
    transform: scale(0.9) rotateX(15deg);
}

.zoom-fade-rotate-enter-active {
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.zoom-fade-rotate-enter-to {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
}

@media (min-width: 768px) {
    .tech-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 767px) and (min-width: 481px) {
    .tech-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .title {
        font-size: 1.75rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .tech-container {
        gap: 0.75rem;
    }
}
</style>