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
    <div class="bg-black">
        <div class="container First-main">
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
        
    </div>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="image-up-layout-competenze"><path fill="#CAF0F8" fill-opacity="1" d="M0,192L84.7,256L169.4,32L254.1,256L338.8,288L423.5,224L508.2,224L592.9,160L677.6,224L762.4,128L847.1,192L931.8,192L1016.5,32L1101.2,160L1185.9,160L1270.6,64L1355.3,160L1440,192L1440,320L1355.3,320L1270.6,320L1185.9,320L1101.2,320L1016.5,320L931.8,320L847.1,320L762.4,320L677.6,320L592.9,320L508.2,320L423.5,320L338.8,320L254.1,320L169.4,320L84.7,320L0,320Z"></path></svg>

<div class="Second-main" id="second-main">
    
    <div class="row g-0">
        <div class="col column-Skills px-0">

            <h1 class="text-center py-2 pt-sans-bold">COMPET<span class="text-title">ENZE</span>  </h1>

            <div class="container pb-5 mb-3">

                <div class="row">
                    <div @click="changeSkillFront()" class="col-6 ">
    
                        <h2 v-if="this.change_skill == true" class="text-center fs-1 pt-2 button-skill-without-click">Front-End</h2>
                        <h2 v-else-if="this.change_skill == false" class="text-center fs-1 button-skill-click">Front-End</h2>
    
    
                    </div>
    
                    <div @click="changeSkillBack()" class="col-6">
    
                        <h2 v-if="this.change_skill == false" class="text-center fs-1 pt-2 button-skill-without-click">Back-End</h2>
                        <h2 v-else-if="this.change_skill == true" class="text-center fs-1 button-skill-click">Back-End</h2>
                        
                    </div>
                </div>
    
                <div v-if="this.change_skill == false" class="row container-title-skill">
    
                    <div class="col p-0">
                        <div>
                            <h3 class="title-skill">Linguaggi e Framework</h3>
    
                        </div>
    
    
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
                
                <div v-else-if="this.change_skill == true" class="" >
    
                    <div class="row container-title-skill">
    
                        <div class="col-6">
    
                            <h3 class="title-skill skill-back">Linguaggi e Framework</h3>
    
                        </div>
    
                        <div class="col-6">
    
                            <h3 class="title-skill">Database & API</h3>
    
                        </div>
    
                    </div>
    
                    <div class="row">
                        <div class="col-6">
                            
                            <!-- <h3 class="title-skill skill-back">Linguaggi e Framework</h3> -->
        
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
        
                            <!-- <h3 class="title-skill">Database & API</h3> -->
        
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
    </div>

</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="image-down-layout-competenze"><path fill="#CAF0F8" fill-opacity="1" d="M0,192L84.7,256L169.4,32L254.1,256L338.8,288L423.5,224L508.2,224L592.9,160L677.6,224L762.4,128L847.1,192L931.8,192L1016.5,32L1101.2,160L1185.9,160L1270.6,64L1355.3,160L1440,192L1440,320L1355.3,320L1270.6,320L1185.9,320L1101.2,320L1016.5,320L931.8,320L847.1,320L762.4,320L677.6,320L592.9,320L508.2,320L423.5,320L338.8,320L254.1,320L169.4,320L84.7,320L0,320Z"></path></svg>

<div class="Third-main pt-1" id="third-main">
    <div class="row g-0">
        <div class="col column-project">
            <h1 class="py-4 text-center pt-sans-bold">PROGE<span class="text-title">TTI</span></h1>

            <div class="container">

                <div class="row card-project">
    
                    <img class="px-0" src="../assets/immagine di Boolbnb.png" alt="Immagine-Boolbnb">
    
                </div>
                
            </div>


        </div>
    </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="image-up-layout-chisono"><path class="pb-2" fill="#CAF0F8" fill-opacity="1" d="M0,128L14.1,112C28.2,96,56,64,85,80C112.9,96,141,160,169,170.7C197.6,181,226,139,254,101.3C282.4,64,311,32,339,69.3C367.1,107,395,213,424,256C451.8,299,480,277,508,245.3C536.5,213,565,171,593,138.7C621.2,107,649,85,678,96C705.9,107,734,149,762,160C790.6,171,819,149,847,149.3C875.3,149,904,171,932,197.3C960,224,988,256,1016,234.7C1044.7,213,1073,139,1101,106.7C1129.4,75,1158,85,1186,90.7C1214.1,96,1242,96,1271,106.7C1298.8,117,1327,139,1355,170.7C1383.5,203,1412,245,1426,266.7L1440,288L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>

<div class="Quarter-main" id="quarter-main">
    <div class="row g-0">
        <div class="col column-about">
            <div class="container">

                <h2 class="py-4 pt-sans-bold">CHI <span class="text-title">SONO</span></h2>
    
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
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="image-down-layout-chisono"><path class="my-2" fill="#CAF0F8" fill-opacity="1" d="M0,128L14.1,112C28.2,96,56,64,85,80C112.9,96,141,160,169,170.7C197.6,181,226,139,254,101.3C282.4,64,311,32,339,69.3C367.1,107,395,213,424,256C451.8,299,480,277,508,245.3C536.5,213,565,171,593,138.7C621.2,107,649,85,678,96C705.9,107,734,149,762,160C790.6,171,819,149,847,149.3C875.3,149,904,171,932,197.3C960,224,988,256,1016,234.7C1044.7,213,1073,139,1101,106.7C1129.4,75,1158,85,1186,90.7C1214.1,96,1242,96,1271,106.7C1298.8,117,1327,139,1355,170.7C1383.5,203,1412,245,1426,266.7L1440,288L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>

<div class="Fifth-main pt-5 " id="fifth-main">
    <div class="container">

        <div class="row g-0 ">
            <div class="col column-contact  ">
                <h1 class="py-4 d-flex justify-content-center pt-sans-bold">CONTA <span class="text-title">TTI</span></h1>
    
                
                <div class="d-flex justify-content-center">
                    <i class="fa-solid fa-share-nodes icon-contact"></i>
                </div>
    
                <div class="py-4 w-100">
                    <p class="d-flex justify-content-center fs-2 w-100">
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

</div>

</template>

<style lang="scss" scoped>

.First-main {
    height: 500px;
    background-color: black;
    padding-top: 120px;
}

.Second-main, .Quarter-main {
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: #CAF0F8;
    // margin-top: 30px;

    .column-Skills{
        background-color: #CAF0F8;
        height: 100%;
        width: 100%;

        .container-title-skill {
            height: 100%;

            
            .title-skill {
                font-size: 30px;
                background-color: #00B4D8;
                border: 10px solid #61a5c2;
                margin-bottom: 0;
                height: 100%;
                
            }
        }

        .col-6, .col {
            padding: 0;
            // height: 100%;
            & .container-name-skill{
                height: 400px;
                padding-left: 20px;
                padding-top: 10px;
                background-color: #00B4D8;
                color: #CAF0F8;
                font-size: 30px;
                font-weight: bold;
            }


            .button-skill-click {
                border: 10px solid #61a5c2;
                background-color: #00B4D8;

            }

            .button-skill-without-click {
                padding-bottom: 12px;

                &:hover {
                    background-color: rgba(0, 150, 199, $alpha: 0.3);
                    height: 100%;
                    // margin-bottom: 16px;

                    // opacity: 20%;
                }

            }
        }
    }

    // .column-project{
    //     background-color: #CAF0F8;
    //     height: 100%;
    //     padding-bottom: 20px;

    //     .card-project {
    //         width: 100%;
    //         height: 100%;
    //         margin: 0px auto;
    //         background-color: #00B4D8;
    //     }
    // }

    .column-about {
        // background-color: #CAF0F8;
        height: 100%;

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

.Third-main {
    background-color: white;
    translate: 0 -1px;

    .column-project{
        background-color: white;
        height: 100%;
        padding-bottom: 20px;
        translate: 0 20px;

        .card-project {
            width: 100%;
            height: 100%;
            margin: 0px auto;
            background-color: #00B4D8;
        }
    }
}

.Fifth-main{
    width: 100%;
    background-color: white;
    // transform: translateY(-10px);
    padding: 20px 0 50px 0;


    .icon-contact{
        font-size: 200px;
        color: #0096C7;
    }

    .column-contact {
        background-color: #CAF0F8;
        height: 100%;
        width: 100%;
        border-radius: 40px;

    }
}

.text-title {
    color: #00B4D8;
}

.pt-sans-bold {
    color: #005f73;
}

.image-up-layout-competenze {
    // transform: translateY(10px);
    background-color: black;
}

.image-down-layout-competenze {
    transform: rotate(180deg);
    translate: 0 -10px;
    background-color: white;
}

.image-up-layout-chisono {
    transform: translateY(10px);
    background-color: white;
    padding-top: 20px;


}

.image-down-layout-chisono {
    // transform: translateY(-10px);
    transform: rotate(180deg);
    background-color: white;
}

</style>
