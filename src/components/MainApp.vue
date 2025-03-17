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

<div class="container mt-5 First-main pt-5">
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

<div class="container pt-5 Second-main" id="second-main">
    <div class="row">
        <div class="col column-Skills">
            <h2 class="py-4">Competenze Tecniche</h2>

            <div class="row pb-4">
                <div class="col-4" v-for="skill in store.skills" :key="skill.id">
                    {{ skill.name }}
                    <span v-html="skill.icon"></span>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="container pt-5 Third-main" id="third-main">
    <div class="row">
        <div class="col column-Skills">
            <h2 class="py-4">Progetti</h2>

            <div class="row pb-4">
                
            </div>

        </div>
    </div>
</div>

<div class="container pt-5 Quarter-main" id="quarter-main">
    <div class="row">
        <div class="col column-Skills">
            <h2 class="py-4">Chi sono</h2>

            <div>
                <p>
                    Descrizione
                </p>
            </div>

        </div>
    </div>
</div>

<div class="container pt-5 Fifth-main " id="fifth-main">

    <div class="row ">
        <div class="col column-Skills  ">
            <h1 class="py-4 d-flex justify-content-center">Contatti</h1>

            
            <div class="d-flex justify-content-center">
                <i class="fa-solid fa-share-nodes icon-contact"></i>
            </div>

            <div >
                <p class="d-flex justify-content-center">
                    <i class="fa-solid fa-envelope pt-1 pe-2"></i> Email: claudiopatti1997@gmail.com
                </p>
                <p class="d-flex justify-content-center">
                    <i class="fa-brands fa-github pt-1 pe-2"></i> Github:&nbsp; <a href="https://github.com/claudiopatti" class="text-decoration-none">Claudio Patti</a>
                </p>
                <p class="d-flex justify-content-center">
                    <i class="fa-brands fa-linkedin pt-1 pe-2"></i> Linkedin:&nbsp; <a href="https://www.linkedin.com/in/claudio-patti1997/" class="text-decoration-none">Claudio Patti</a>
                </p>
            </div>

        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.First-main {
    height: 500px;
}

.Second-main, .Third-main, .Quarter-main, .Fifth-main {
    height: 400px;
    width: 100%;

    .column-Skills{
        background-color: #f0f0f0;
    }
}

.Fifth-main{

    .icon-contact{
        font-size: 500px;
        color: #0a72d5;
    }
}
</style>
