<template>
    <section class="hero-section">
        <div class="content">
            <p class="location">BASED IN DENMARK</p>
            <h1 class="headline">
                <span class="white">Aspiring Full-stack </span>
                <span class="blue">Web Developer</span>
                <span class="white"> and Designer</span>
            </h1>
            <p class=" description">
                Hi, I'm Mikkel — a computer science student with a special interest for web.
            </p>

            <div class="social-icons" aria-label="Social and contact links">
                <a href="https://www.linkedin.com/in/mikkelvibechristensen/" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn Profile" class="icon-link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor"
                        class="icon">
                        <title>LinkedIn</title>
                        <path
                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56v14.5H.22V8.5zm7.6 0h4.38v2h.06c.61-1.16 2.12-2.38 4.36-2.38 4.66 0 5.52 3.06 5.52 7.04V23h-4.6v-6.5c0-1.56-.03-3.57-2.17-3.57-2.18 0-2.51 1.7-2.51 3.44V23H7.82V8.5z" />
                    </svg>
                </a>

                <a href="https://github.com/MikkelVibeUCN" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub Profile" class="icon-link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor"
                        class="icon">
                        <title>GitHub</title>
                        <path
                            d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6a3.18 3.18 0 0 0-1.34-1.76c-1.1-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.48 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.34-5.47-5.96a4.67 4.67 0 0 1 1.24-3.24 4.34 4.34 0 0 1 .12-3.19s1-.32 3.3 1.23a11.36 11.36 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.34 4.34 0 0 1 .12 3.19 4.67 4.67 0 0 1 1.24 3.24c0 4.63-2.8 5.66-5.48 5.96a2.87 2.87 0 0 1 .82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 0z" />
                    </svg>
                </a>

                <a :href="mailtoLink" aria-label="Send email" class="icon-link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor"
                        class="icon">
                        <title>Email</title>
                        <path d="M1.5 4.5h21v15h-21v-15zm19.5 2.75-9 7.25-9-7.25v11h18v-11zm-9 5.5 9-7.25H3l9 7.25z" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const encodedEmail = "bWlrdmNsYW5nYWFAaG90bWFpbC5jb20=";

function decodeBase64(str: string) {
    return atob(str);
}

const mailtoLink = `mailto:${decodeBase64(encodedEmail)}`;
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

    animation: colorShift 6s linear infinite;
    --animated-color: #17c3b2;
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

    animation: fadeSlideUp 1s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}

.headline .blue {
    color: var(--animated-color);
}

.headline .white {
    color: #fff;
}

.description {
    color: #aaa;
    font-size: 1rem;
    margin-top: 1.5rem;
}

.social-icons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    z-index: 3;
}

.icon-link {
    color: #aaa;
    transition: transform 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.icon-link:hover,
.icon-link:focus {
    color: var(--animated-color);
    transform-origin: center;
    transform: translateY(-2px);
    outline: none;
}

.icon {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
    transition: fill 0.3s ease;
}

@keyframes fadeSlideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes colorShift {
    0% {
        color: #17c3b2;
        filter: hue-rotate(0deg);
    }

    25% {
        color: #9b59b6;
        filter: hue-rotate(90deg);
    }

    50% {
        color: #e91e63;
        filter: hue-rotate(180deg);
    }

    75% {
        color: #1abc9c;
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
