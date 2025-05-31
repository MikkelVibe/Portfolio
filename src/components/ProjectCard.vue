<template>
    <div class="project-card">
        <router-link :to="`/project/${project.id}`" class="image-wrapper" href="/project">
            <img :src="project.imagePath" :alt="project.name" class="project-image" />
        </router-link>
        <div class="project-info">
            <div class="project-header">
                <h2 class="project-title">{{ project.name }}</h2>
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

export interface ProjectInfo {
    id: number
    name: string
    imagePath: string
    shortIntro: string
    description: string
    technologies: string[]
}

defineProps<{
    project: ProjectInfo;
}>();
</script>

<style scoped>
.project-card {
    width: 100%;
    flex: 1 1 calc(50% - 1rem);
    max-height: 50rem;
    box-sizing: border-box;
    background-color: #1a1a1a;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 20px solid #1a1a1a;
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
    cursor: pointer;
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

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-badge {
    background-color: #2d2d2d;
    border: 1px solid #444;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
    align-content: center;
    text-align: center;
}

.tech-badge:nth-child(5n) {
    flex-basis: 100%;
    height: 0;
    padding: 0;
    border: none;
    margin: 0;
    pointer-events: none;
    visibility: hidden;
}
</style>
