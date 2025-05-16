<template>
    <div class="project-card">
        <div class="image-wrapper">
            <img :src="project.imagePath" :alt="project.name" class="project-image" />
        </div>
        <div class="project-info">
            <h2 class="project-title">{{ project.name }}</h2>
            <p class="project-intro">{{ project.intro }}</p>
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
    };
}>();
</script>

<style scoped>
.project-card {
    background-color: #1a1a1a;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-4px);
}

.image-wrapper {
    max-height: 400px;
    overflow: hidden;
}

.project-image {
    width: 100%;
    object-fit: cover;
}

.project-info {
    padding: 2rem;
}

.project-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.project-intro {
    font-size: 1.2rem;
    color: #17c3b2;
    margin-bottom: 1.5rem;
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