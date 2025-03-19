<template>  
    <div class="container">
        <h1>{{ project.name }}</h1>
        <p>{{ project.content }}</p>
    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>