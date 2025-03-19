<template>
    <div class="tech-card">
      <img :src="getImageUrl(tech.icon)" alt="Tech Icon" class="tech-icon" />
      <div class="tech-info">
        <h4 class="tech-title">{{ tech.name }}</h4>
        <p class="tech-subtitle">{{ tech.description }}</p>
      </div>
    </div>
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
  .tech-card {
    display: flex;
    align-items: center;
    background-color: #181818; /* Dark background */
    border-radius: 18px;
    padding: 12px 16px;
    width: 200px; /* Adjust width as needed */
    height: 50px;
    gap: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: filter 0.1s ease-in-out;
  }
  
  .tech-card:hover {
    filter: brightness(1.3); /* Slightly brighter */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); /* Soft glow */
}
  .tech-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
  
  .tech-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    line-height: 8px;
  }
  
  .tech-title {
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    padding-top: 16px;
    line-height: 0;
  }
  
  .tech-subtitle {
    color: #a0a0a0; /* Grayish text for subtitle */
    font-size: 12px;
    line-height: 1.2;
  }
  </style>
  