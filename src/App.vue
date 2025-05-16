<template>
    <div class="app-wrapper">
        <Header />
        <TechnologySection />
        <Portfolio />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import TechnologySection from './components/TecnologySection.vue';

export default {
    components: {
        Header,
        Portfolio,
        TechnologySection
    }
}
</script>

<style scoped>
.app-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #000;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
}

@media (max-width: 768px) {
    .app-wrapper>* {
        margin-bottom: 2.5rem;
    }
}
</style>
