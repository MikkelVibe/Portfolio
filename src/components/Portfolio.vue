<template>
    <Project v-for="(project, index) in projects"
        :key="index"
        :project="project"
    />
</template>
<script>
import Project from './Project.vue';

export default {
    components: {
        Project
    },
    data() {
        return {
            projects: [
                {
                    imageUrl: "testUrl1",
                    name: "Name 1"
                },
                {
                    imageUrl: "testUrl2",
                    name: "Name 2"
                }
            ]
        }
    }
}
</script>
