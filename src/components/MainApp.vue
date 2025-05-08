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

            <h1 class="text-center py-2 pt-sans-bold">COMPET<span class="text-primary">ENZE</span>  </h1>
            <div class="row">
                <div @click="changeSkillFront()" class="col-6">

                    <h2 v-if="this.change_skill == true" class="text-center fs-1 pt-2">Front-End</h2>
                    <h2 v-else-if="this.change_skill == false" class="text-center fs-1 button-skill-click">Front-End</h2>


                </div>

                <div @click="changeSkillBack()" class="col-6">

                    <h2 v-if="this.change_skill == false" class="text-center fs-1 pt-2">Back-End</h2>
                    <h2 v-else-if="this.change_skill == true" class="text-center fs-1 button-skill-click">Back-End</h2>
                    
                </div>
            </div>

            <div v-if="this.change_skill == false" class="row">

                <div class="col p-0">

                    <h3 class="title-skill">Linguaggi e Framework</h3>

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
                    
                    <h3 class="title-skill skill-back">Linguaggi e Framework</h3>

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

                    <h3 class="title-skill">Database & API</h3>

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
            <h1 class="py-4 text-center pt-sans-bold">PROGE<span class="text-primary">TTI</span></h1>

            <div class="row card-project">
                <img class="px-0" src="../assets/immagine di Boolbnb.png" alt="Immagine-Boolbnb">
                
            </div>

        </div>
    </div>
</div>

<div class="container pt-5 Quarter-main" id="quarter-main">
    <div class="row">
        <div class="col column-about">
            <h2 class="py-4 pt-sans-bold">CHI <span class="text-primary">SONO</span></h2>

            <div>
                <p class="description-design">
                    Buongiorno, Mi presento sono Claudio Patti. <br>
                    Sono un junior web developer che ha alle spalle ha varie esperienze lavorative in
                    diversi settori e che grazie a queste esperienze lavorative hai acquisito competenze
                    legate all'ambiente lavorativo e al lavoro di squadra, come ad esempio problem
                    solving,la capacità di organizzazione e lavoro in team.<br> 
                    Dopo il trasferimento a Bologna
                    ho deciso di seguire la mia passione per la programmazione, investendo in un corso
                    che mi avrebbe potuto dare una nuova carriera che allo stesso tempo mi piacesse e ho
                    deciso di fare il corso Boolean, completandolo con successo. Durante il corso, ho
                    acquisito competenze in sviluppo base (HTML, CSS) sviluppo front-end (JavaScript,
                    Vue.js) e back-end (PHP, Laravel), lavorando anche su progetti di gruppo, come ad
                    esempio, la replica del sito Airbnb. Alla conclusione del corso mi sono reso conto che
                    da quando ho iniziato a scrivere le prime righe di codice in HTML, avere un riscontro
                    visivo e immediato nella mia pagina web mi piaceva molto soprattutto andare a
                    ricreare i layout proposti o da noi pensati e poi vederli prendere forma pian piano.
                    questo mi ha fatto dire sì, è il lavoro che vorrei iniziare a fare.
                </p>
            </div>

        </div>
    </div>
</div>

<div class="container py-5  Fifth-main " id="fifth-main">

    <div class="row ">
        <div class="col column-contact  ">
            <h1 class="py-4 d-flex justify-content-center pt-sans-bold">CONTA <span class="text-primary">TTI</span></h1>

            
            <div class="d-flex justify-content-center">
                <i class="fa-solid fa-share-nodes icon-contact"></i>
            </div>

            <div class="py-4">
                <p class="d-flex justify-content-center fs-2">
                    <i class="fa-solid fa-envelope pt-2 pe-2"></i> Email: claudiopatti1997@gmail.com
                </p>
                <p class="d-flex justify-content-center fs-2">
                    <i class="fa-brands fa-github pt-2 pe-2"></i> Github:&nbsp; <a href="https://github.com/claudiopatti" class="text-decoration-none">Claudio Patti</a>
                </p>
                <p class="d-flex justify-content-center fs-2">
                    <i class="fa-brands fa-linkedin pt-2 pe-2"></i> Linkedin:&nbsp; <a href="https://www.linkedin.com/in/claudio-patti1997/" class="text-decoration-none">Claudio Patti</a>
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

.Second-main{
    height: 700px;
}

.Second-main, .Third-main, .Quarter-main {
    // height: 500px;
    width: 100%;
    cursor: pointer;
    // margin-top: 30px;

    .column-Skills{
        background-color: #f0f0f0;
        height: 600px;
        .col-6, .col {
            padding: 0;
            // height: 100%;
            & .container-name-skill{
                height: 400px;
                padding-left: 10px;
                padding-top: 10px;
                background-color: #0a72d5;
                color: white;
                font-size: 30px;
                font-weight: bold;
            }
            .button-skill-click {
                border: 10px solid grey;
                background-color: #0a72d5;
            }
        }
    }

    .column-project{
        background-color: #f0f0f0;
        height: 800px;

        .card-project {
            width: 1200px;
            height: 600px;
            margin: 0px auto;
            background-color: #0a72d5;
        }
    }

    .column-about {
        background-color: #f0f0f0;
        height: 800px;

        .description-design{
            padding: 20px;
            font-size: 20px;
        }

        // .card-project {
        //     width: 1200px;
        //     height: 600px;
        //     margin: 0px auto;
        //     background-color: #0a72d5;
        // }
    }
}

.Fifth-main{

    .icon-contact{
        font-size: 500px;
        color: #0a72d5;
    }

    .column-contact {
        background-color: #f0f0f0;
        // height: 800px;
    }
}

.title-skill {
    font-size: 40px;
    background-color: #0a72d5;
    border: 10px solid grey;
    margin-bottom: 0;
    
}


</style>
