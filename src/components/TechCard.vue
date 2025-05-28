<template>
  <component :is="tech.link ? 'a' : 'div'" :href="tech.link" target="_blank" rel="noopener" class="tech-card-link">
    <div class="tech-card">
      <img :src="getImageUrl(tech.icon)" alt="Tech Icon" class="tech-icon" />
      <div class="tech-info">
        <h4 class="tech-title">{{ tech.name }}</h4>
        <p class="tech-subtitle">{{ tech.description }}</p>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    tech: Object
  },
  methods: {
    getImageUrl(iconPath) {
      return new URL(iconPath, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
.tech-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.tech-card {
  display: flex;
  align-items: center;
  background-color: #181818;
  border-radius: 12px;
  padding: 12px 16px;
  gap: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease;
  cursor: pointer;
}

.tech-card:hover {
  transform: scale(1.05);
  background-color: #222;
}

.tech-icon {
  max-width: 40px;
  max-height: 40px;
  width: auto;
  height: auto;
  border-radius: 6px;
  object-fit: contain;
  transition: transform 0.25s ease;
}


.tech-card:hover .tech-icon {
  transform: rotate(5deg) scale(1.1);
}

.tech-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.tech-title {
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding-top: 16px;
  line-height: 0;
}

.tech-subtitle {
  color: #a0a0a0;
  font-size: 12px;
  line-height: 1.2;
}
</style>
