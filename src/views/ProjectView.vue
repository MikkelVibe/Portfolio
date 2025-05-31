<template>
    <div class="page">
        <header class="header">
            <h1 class="title">{{ project === null ? "404" : project?.name }}</h1>
            <p class="subtitle">{{ project === null ? "Project not found" : project?.shortIntro }}</p>
        </header>

        <div v-if="project !== null" class="project-layout">
            <div class="hero-section">
                <img class="project-image" :src="project?.imagePath" :alt="project?.name" />
            </div>

            <div class="overview-section">
                <div class="overview-grid">
                    <div class="left-column">
                        <h2 class="overview-title">Project Overview</h2>

                        <div class="tech-stack">
                            <span v-for="tech in project?.technologies" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>

                        <div class="actions">
                            <a v-for="link in project.links" :key="link.name" :href="link.link" target="_blank"
                                class="btn btn-primary">
                                {{ link.name }}
                            </a>
                        </div>
                    </div>

                    <div class="right-column">
                        <div class="description">
                            <p>{{ project?.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export interface ProjectInfo {
    id: number
    name: string
    shortIntro: string
    description: string
    imagePath: string
    technologies: string[]
    links: Link[]
}

export interface Link {
    name: string,
    link: string
}

export default defineComponent({
    name: 'ProjectDetail',
    data() {
        return {
            project: null as ProjectInfo | null
        }
    },
    mounted() {
        const route = useRoute()
        const id = Number(route.params.id)
        fetch('/assets/projects.json')
            .then((response) => response.json())
            .then((data: ProjectInfo[]) => {
                this.project = data.find(p => p.id === id) || null
            })
            .catch((error) =>
                console.error('Error loading projects JSON:', error)
            )
    }
})
</script>

<style scoped>
.page {
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
    color: #fff;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
}

.header {
    text-align: center;
    padding: 80px 20px 40px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.title {
    font-size: clamp(36px, 8vw, 72px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 0 0 20px 0;
    background: linear-gradient(45deg, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    font-size: clamp(16px, 4vw, 24px);
    color: #888;
    margin: 0 0 40px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
}

.project-layout {
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.project-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.overview-section {
    padding: 40px 0;
}

.overview-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: flex-start;
}

.left-column {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.right-column {
    font-size: 16px;
    color: #ccc;
    line-height: 1.8;
}

.overview-title {
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 10px 0;
    color: #fff;
    letter-spacing: 1px;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tech-tag {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.btn-primary {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}

.btn-primary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

@media (max-width: 900px) {
    .overview-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .left-column {
        order: 1;
    }

    .right-column {
        order: 2;
    }

    .overview-title {
        font-size: 28px;
    }

    .actions {
        flex-direction: column;
        align-items: flex-start;
        /* Add this line */
    }

    .btn {
        justify-content: center;
        /* REMOVE width: 100%; */
    }

    .hero-section {
        padding: 20px 0;
    }

    .header {
        padding: 40px 20px 20px;
    }
}
</style>