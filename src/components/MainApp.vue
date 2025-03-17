<script >
import store from '../data/store.js'

export default {
    name: 'HeaderApp',
    data() {
        return {
            store,
        }
    },
    methods: {
        
    }
}
</script>

<template>

<div class="container First-main pt-5">
    <div class="row">
        <div class="col-6 text-white">
            <h1>Claudio Patti</h1>

            <h3>Jr Full Stack Developer</h3>
        </div>
        <div class="col-6 text-white">
            <h1>Foto Mia Carina</h1>
        </div>
    </div>
</div>

<div class="container Second-main">
    <div class="row">
        <div class="col">
            <h2>Skills</h2>

            <ul>
                <li v-for="skill in store.skills" :key="skill.id">
                    {{ skill.name }}
                </li>
            </ul>

        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.First-main {
    height: 500px;
}

.Second-main{
    height: 400px;
}
</style>
