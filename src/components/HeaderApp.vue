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
    <div class="bg-black pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 d-flex align-items-center">
                    <div class="header-left ">
                        <!-- <a href="home">
                            <img src="logo.png" alt="Logo">
                        </a> -->
                        <h1 class="text-white">Logo</h1>
                    </div>
                </div>

                
                <div class="col-10 d-flex justify-content-end align-items-center  ">

                    <div class="dropdown d-sm-none d-block d-flex justify-content-end align-items-center ">
                        <a class="btn btn-black dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
    
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Home</a></li>
                            <li><a class="dropdown-item" href="#second-main">Competenze Tecniche</a></li>
                            <li><a class="dropdown-item" href="#third-main">Progetti</a></li>
                            <li><a class="dropdown-item" href="#quarter-main">Chi sono</a></li>
                            <li><a class="dropdown-item" href="#fifth-main">Contatti</a></li>
                        </ul>
                    </div>

                    <div class="d-sm-flex justify-content-end align-items-center d-none d-sm-block">

                        <div class="mx-2">
                            <a href="#" class="text-decoration-none text-white">
                                Home
                            </a>
                        </div>
                        <div class="mx-2">
                            <a href="#second-main" class="text-decoration-none text-white">
                                Competenze Tecniche
                            </a>
                        </div>
                        <div class="mx-2">
                            <a href="#third-main" class="text-decoration-none text-white">
                                Progetti
                            </a>
                        </div>
                        <div class="mx-2">
                            <a href="#quarter-main" class="text-decoration-none text-white">
                                Chi sono
                            </a>
                        </div>
                        <div class="mx-2" >
                            <a href="#fifth-main" class="text-decoration-none text-white">
                                Contatti
                            </a>
                        </div>

                    </div>

                    <!-- <div>
                        <a href="home" class="text-decoration-none text-dark">
                            HOME
                        </a>
                    </div>
                    <div class="header-left text-danger">
                        <p class="">{{ store.name }}</p>
                        
                    </div> -->
                </div>
    
            </div>
    
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
