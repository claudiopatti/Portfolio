<script>
import store from '../data/store.js'
import ProjCards from './ProjCards.vue';
export default {
    name: 'Projects',
    components: { ProjCards },
    data() {
        return {
            store,
        }
    },
    mounted() {
    }
}
</script>
<template>
    <div class="back">
        <div class="container-fluid px-5">
            <h1 class="pt-sans-bold text-center my-4 young-serif text-shadow">PROGE<span class="text-title young-serif">TTI</span></h1>
            <div class="row justify-content-center my-2">
                <ProjCards class="my-2" v-for="project, index in store.projects" :key="index" :tech="store.projects[index].technologies" :proj="project" :img="project.image"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.back{
    background-color: white;
    padding-top: 5rem;
}
</style>















