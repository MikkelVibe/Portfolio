<template>
    <div class="project-card">
        <div class="image-wrapper">
            <img :src="project.imagePath" :alt="project.name" class="project-image" />
        </div>
        <div class="project-info">
            <div class="project-header">
                <h2 class="project-title">{{ project.name }}</h2>
                <a :href="project.link" target="_blank" class="external-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="tech-list">
                <span class="tech-badge" v-for="(tech, index) in project.technologies" :key="index">
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    project: {
        name: string;
        imagePath: string;
        intro: string;
        technologies: string[];
        link: string;
    };
}>();
</script>

<style scoped>
.project-card {
    width: 100%;
    flex: 1 1 calc(33.333% - 1rem);
    max-height: 50rem;
    box-sizing: border-box;
    background-color: #1a1a1a;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.image-wrapper {
    overflow: hidden;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
}

.project-image {
    width: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.image-wrapper:hover .project-image {
    transform: scale(1.05);
}

.project-info {
    padding: 1.5rem;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
}

.external-link {
    background-color: #3b82f6;
    padding: 0.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
}

.external-link:hover {
    background-color: #2563eb;
}

.arrow-icon {
    width: 1.25rem;
    height: 1.25rem;
    stroke: white;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-badge {
    background-color: #2d2d2d;
    border: 1px solid #444;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
}
</style>
