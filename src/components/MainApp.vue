<script >
import store from '../data/store.js'

export default {
    name: 'HeaderApp',
    data() {
        return {
            store,
            change_skill: true,
        }
    },
    methods: {
        changeSkillBack () {
            this.change_skill = true;
        },
        changeSkillFront () {
            this.change_skill = false;
        }
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

            <h1 class="text-center fs-1 py-2">Competenze </h1>
            <div class="row">
                <div @click="changeSkillFront()" class="col-6">

                    <h2 v-if="this.change_skill == true" class="text-center fs-1 pt-2">Competenze Front-End</h2>
                    <h2 v-else-if="this.change_skill == false" class="text-center fs-1 button-skill-click">Competenze Front-End</h2>


                </div>

                <div @click="changeSkillBack()" class="col-6">

                    <h2 v-if="this.change_skill == false" class="text-center fs-1 pt-2">Competenze Back-End</h2>
                    <h2 v-else-if="this.change_skill == true" class="text-center fs-1 button-skill-click">Competenze Back-End</h2>
                    
                </div>
            </div>

            <div v-if="this.change_skill == false" class="row">

                <div class="col p-0">

                    <h3 class="title-skill">Front-End</h3>

                    <div class="container-name-skill">
                        <div  v-for="skill in store.skills" :key="skill.id">
                            <div v-if="skill.side == 'Front-end'" class="pb-2">
                                {{ skill.name }}
                                <span v-html="skill.icon"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
            <div v-else-if="this.change_skill == true" class="row" >
                <div class="col-6">
                    
                    <h3 class="title-skill skill-back">Back-End</h3>

                    <div class="container-name-skill">
                        <div class="" v-for="skill in store.skills" :key="skill.id">
                            <div v-if="skill.side == 'Back-end'" class="pb-2">
                                {{ skill.name }}
                                <span v-html="skill.icon"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">

                    <h3 class="title-skill">Database</h3>

                    <div class="container-name-skill">
                        <div class="" v-for="skill in store.skills" :key="skill.id">
                            <div v-if="skill.side == 'Database'" class="pb-2">
                                {{ skill.name }}
                                <span v-html="skill.icon"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="container pt-5 Third-main" id="third-main">
    <div class="row">
        <div class="col column-project">
            <h2 class="py-4">Progetti</h2>

            <div class="row pb-4">
                
            </div>

        </div>
    </div>
</div>

<div class="container pt-5 Quarter-main" id="quarter-main">
    <div class="row">
        <div class="col column-about">
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
        <div class="col column-contact  ">
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
    // height: 400px;
    width: 100%;
    cursor: pointer;

    .column-Skills{
        background-color: #f0f0f0;
        height: 100%;
        .col-4 {
            padding: 0;
            // height: 100%;
            & .container-name-skill{
                height: 100%;
                padding-left: 10px;
                padding-top: 10px;
                background-color: #0a72d5;
                color: white;
                font-size: 30px;
                font-weight: bold;
            }

            & .skill-back{
                border-left: 0;
                border-right: 0;
            }
        }

        .col-6{
            padding: 0;

            .button-skill-click {
                border: 10px solid grey;
                background-color: #0a72d5;
            }
        }
    }
}

.Fifth-main{

    .icon-contact{
        font-size: 500px;
        color: #0a72d5;
    }
}

.title-skill {
    font-size: 40px;
    background-color: #0a72d5;
    border: 10px solid grey;
    margin-bottom: 0;
    
}


</style>
