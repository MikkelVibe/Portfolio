<template>
    <div class="main-wrapper">
        <Header />
        <TimeLine />
        <TechnologySection />
        <Portfolio />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Portfolio from '../components/Portfolio.vue';
import TechnologySection from '../components/TecnologySection.vue';
import TimeLine from '../components/TimeLine.vue';

export default {
    components: {
        Header,
        Portfolio,
        TechnologySection,
        TimeLine
    }
}
</script>

<style scoped>
.main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #000;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (max-width: 768px) {
    .main-wrapper>* {
        margin-bottom: 2.5rem;
    }
}
</style>