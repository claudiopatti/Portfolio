import { reactive } from 'vue';


const iMieiDati = reactive({
    skills : [
        {id: 1, name: 'HTML', level: 3, icon: '<i class="fa-brands fa-html5"></i>', side: 'Front-end'},
        {id: 2, name: 'CSS', level: 3, icon: '<i class="fa-brands fa-css"></i>', side: 'Front-end'},
        {id: 3, name: 'SCSS', level: 2, icon: '<i class="fa-brands fa-sass"></i>', side: 'Front-end'},
        {id: 4, name: 'JavaScript', level: 2, icon: '<i class="fa-brands fa-js"></i>', side: 'Front-end'},
        {id: 5, name: 'Vue.js', level: 2, icon: '<i class="fa-brands fa-vuejs"></i>', side: 'Front-end'},
        {id: 6, name: 'PHP', level: 2, icon: '<i class="fa-brands fa-php"></i>', side: 'Back-end'},
        {id: 7, name: 'Laravel', level: 2, icon: '<i class="fa-brands fa-laravel"></i>', side: 'Back-end'},
        {id: 8, name: 'Bootstrap', level: 2, icon: '<i class="fa-brands fa-bootstrap"></i>', side: 'Front-end'},
        {id: 9, name: 'MySQL', level: 2, icon: '<i class="fa-brands fa-mysql"></i>', side: 'Database'},
        {id: 10, name: 'Vite', level: 2, icon: '<i class="fa-brands fa-vite"></i>', side: 'Back-end'},
        {id: 11, name: 'Postman', level: 2, icon: '<i class="fa-brands fa-postman"></i>', side: 'Database'},
    ]
});

export default iMieiDati