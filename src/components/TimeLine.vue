<template>
    <div class="timeline-container">
        <h2 class="header-title" v-scroll-reveal>Timeline</h2>

        <div class="tabs" v-scroll-reveal>
            <button :class="{ active: selectedTab === 'work' }" @click="selectedTab = 'work'" class="tab-button">
                Work
            </button>
            <button :class="{ active: selectedTab === 'education' }" @click="selectedTab = 'education'"
                class="tab-button">
                Education
            </button>
        </div>

        <div class="timeline" :key="selectedTab">
            <div v-for="(item, index) in sortedItems" :key="item.id" class="timeline-item" v-scroll-reveal
                :style="{ transitionDelay: (index * 100) + 'ms' }">
                <div class="timeline-content">
                    <div class="logo-container">
                        <div class="logo" :style="{ backgroundColor: item.color || '#4a5568' }">
                            {{ getInitials(selectedTab === 'education' ? item.institution : item.company) }}
                        </div>
                    </div>

                    <div class="content">
                        <template v-if="selectedTab === 'education'">
                            <div class="date-range">{{ formatPeriod(item.from, item.to) }}</div>
                            <h3 class="title">{{ item.institution }}</h3>
                            <h4 class="subtitle">{{ item.title }}</h4>
                            <ul v-if="item.highlights && item.highlights.length" class="highlights">
                                <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
                            </ul>
                            <div v-if="item.projects && item.projects.length" class="projects">
                                <a v-for="project in item.projects" :key="project.name" :href="project.url"
                                    target="_blank" rel="noopener noreferrer" class="project-tag">
                                    🔗 {{ project.name }}
                                </a>
                            </div>
                        </template>

                        <template v-else>
                            <h3 class="title">{{ item.company }}</h3>
                            <div v-for="(role, idx) in item.roles" :key="idx" class="role-block">
                                <div class="date-range">{{ formatPeriod(role.from, role.to) }}</div>
                                <h4 class="subtitle">{{ role.position }}</h4>
                                <ul v-if="role.highlights && role.highlights.length" class="highlights">
                                    <li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
                                </ul>
                                <div v-if="role.projects && role.projects.length" class="projects">
                                    <a v-for="project in role.projects" :key="project.name" :href="project.url"
                                        target="_blank" rel="noopener noreferrer" class="project-tag">
                                        🔗 {{ project.name }}
                                    </a>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const selectedTab = ref('work')
const timelineData = ref({ education: [], work: [] })

const vScrollReveal = {
    mounted(el) {
        el.classList.add('before-enter')
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add('enter')
                el.classList.remove('before-enter')
                observer.unobserve(el)
            }
        }, { threshold: 0.1 })
        observer.observe(el)
    }
}

onMounted(() => {
    fetch('/assets/timeline.json')
        .then(response => response.json())
        .then(data => {
            timelineData.value.education = data.education || []
            timelineData.value.work = data.work || []
        })
        .catch(e => console.log('Failed to load json', e))
})

const sortedItems = computed(() => {
    const items = timelineData.value[selectedTab.value] || []

    if (selectedTab.value === 'work') {
        return [...items].sort((a, b) => {
            const aFrom = a.roles?.[0]?.from || '0000-00'
            const bFrom = b.roles?.[0]?.from || '0000-00'
            return bFrom > aFrom ? 1 : -1
        })
    }

    return [...items].sort((a, b) => (b.from > a.from ? 1 : -1))
})

const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const [year, month] = dateStr.split('-')
    const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'short' })
    return `${monthName} ${year}`
}

const formatPeriod = (from, to) => {
    const fromStr = formatDate(from)
    const toStr = to ? formatDate(to) : 'Present'
    return `${fromStr} - ${toStr}`
}

const getInitials = (name) => {
    if (!name) return '?'
    return name.split(' ').map(word => word.charAt(0)).join('').substring(0, 3).toUpperCase()
}
</script>

<style scoped>
.timeline-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    padding-bottom: 2rem;
    background: transparent;
    color: #1e1e1e;
    text-align: left;
}

.header-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #fff;
}

.tabs {
    display: flex;
    background: #181818;
    border-radius: 12px;
    padding: 6px;
    margin-bottom: 10px;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.tab-button {
    flex: 1;
    padding: 12px 20px;
    background: transparent;
    border: none;
    border-radius: 8px;
    color: #a0a0a0;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: center;
}

.tab-button:hover {
    color: #ffffff;
    background: #222;
}

.tab-button.active {
    background: #222;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 20;
}

.timeline {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.timeline-item {
    background: #181818;
    border-radius: 12px;
    padding: 20px;
    border: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: default;
}

.timeline-item:hover {
    background: #222;
    transform: scale(1.005);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.timeline-content {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.logo-container {
    flex-shrink: 0;
}

.logo {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 13px;
    background: #4b5563;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
    flex: 1;
    min-width: 0;
}

.date-range {
    color: #a0a0a0;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
    letter-spacing: 0.025em;
}

.title {
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 4px 0;
    line-height: 1.3;
}

.subtitle {
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 14px 0;
    line-height: 1.4;
}

.highlights {
    list-style: none;
    padding: 0;
    margin: 0 0 14px 0;
}

.highlights li {
    color: #a0a0a0;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 5px;
    padding-left: 14px;
    position: relative;
}

.highlights li::before {
    content: "•";
    color: #ffffff;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
}

.projects {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.project-tag {
    background: #222;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    border: none;
    transition: all 0.25s ease;
    text-decoration: none;
    display: inline-block;
}

.project-tag:hover {
    background: #333;
    transform: scale(1.05);
    color: #ffffff;
}

.role-block {
    margin-bottom: 16px;
    padding-left: 10px;
    border-left: 2px solid #444;
}

.before-enter {
    opacity: 0;
    transform: scale(0.9) rotateX(15deg) translateY(40px);
}

.enter {
    opacity: 1;
    transform: scale(1) rotateX(0deg) translateY(0);
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 640px) {
    .timeline-content {
        flex-direction: column;
        gap: 12px;
    }

    .logo-container {
        align-self: flex-start;
    }

    .tabs {
        margin-bottom: 20px;
    }

    .tab-button {
        padding: 10px 16px;
        font-size: 13px;
    }

    .timeline-item {
        padding: 16px;
    }
}
</style>
