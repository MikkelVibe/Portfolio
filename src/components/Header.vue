<template>
    <section class="hero-section">
        <div class="content">
            <p class="location">BASED IN DENMARK</p>
            <h1 class="headline">
                <span class="white">Aspiring Full-stack </span>
                <span class="blue">Web Developer</span>
                <span> and Designer</span>
            </h1>
            <p class="description">
                Hi, I'm Mikkel — a computer science student with a special interest for web.
            </p>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.hero-section {
    position: relative;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;

    background-image: radial-gradient(circle at 1px 1px, #3d3d3d 1px, transparent 0);
    background-size: 30px 30px;
    background-repeat: repeat;
}

.hero-section::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;

    background: radial-gradient(ellipse closest-side at center,
            transparent 61%,
            #000 100%);

    z-index: 1;
}

.content {
    max-width: 800px;
    margin: 0 auto;
    transform: translateY(-8vh);
    z-index: 2;
}

.location {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    color: #ccc;
    margin-bottom: 1rem;
    font-weight: 600;
}

.headline {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 0;

    /* Animate headline fade-in and slide-up */
    animation: fadeSlideUp 1s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}

.headline .blue {
    color: #17c3b2;
    /* fresh teal */
    animation: colorShift 6s linear infinite;
}

.headline .white {
    color: #fff;
}

.description {
    color: #aaa;
    font-size: 1rem;
    margin-top: 1.5rem;
}

/* Animations */
@keyframes fadeSlideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes colorShift {
    0% {
        color: #17c3b2;
        /* teal */
        filter: hue-rotate(0deg);
    }

    25% {
        color: #9b59b6;
        /* purple */
        filter: hue-rotate(90deg);
    }

    50% {
        color: #e91e63;
        /* pink */
        filter: hue-rotate(180deg);
    }

    75% {
        color: #1abc9c;
        /* turquoise */
        filter: hue-rotate(270deg);
    }

    100% {
        color: #17c3b2;
        filter: hue-rotate(360deg);
    }
}

@media (max-width: 768px) {
    .headline {
        font-size: 2.5rem;
    }

    .description {
        font-size: 0.9rem;
    }

    .location {
        font-size: 0.65rem;
    }

    .content {
        padding: 0 1rem;
        transform: translateY(-4vh);
    }
}

@media (max-width: 480px) {
    .headline {
        font-size: 2rem;
    }

    .description {
        font-size: 0.85rem;
    }

    .location {
        font-size: 0.6rem;
    }
}
</style>
