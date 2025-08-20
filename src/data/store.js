import { reactive } from 'vue';


const iMieiDati = reactive({
    tech : [
        {id: 1, name: 'Html', level: 3, icon: "fa-brands fa-html5", side: 'Front-end'},
        {id: 2, name: 'CSS', level: 3, icon: "fa-brands fa-css", side: 'Front-end'},
        {id: 3, name: 'SCSS', level: 2, icon: "fa-brands fa-sass", side: 'Front-end'},
        {id: 4, name: 'JavaScript', level: 2, icon: "fa-brands fa-js", side: 'Front-end'},
        {id: 5, name: 'VueJs', level: 2, icon: "fa-brands fa-vuejs", side: 'Front-end'},
        {id: 6, name: 'PHP', level: 2, icon: "fa-brands fa-php", side: 'Back-end'},
        {id: 7, name: 'Laravel', level: 2, icon: "fa-brands fa-laravel", side: 'Back-end'},
        {id: 8, name: 'Bootstrap', level: 2, icon: "fa-brands fa-bootstrap", side: 'Front-end'},
        {id: 9, name: 'MySQL', level: 2, icon: "fa-brands fa-mysql", side: 'Database'},
        {id: 10, name: 'Vite', level: 2, icon: "fa-brands fa-vite", side: 'Back-end'},
        {id: 11, name: 'Postman', level: 2, icon: "fa-brands fa-postman", side: 'Database'},
    ],

    projects: [{
        id: 1,
        title: "Boolzap",
        description: "Ho creato una web app per messaggiare con un layout simile a whatsapp in Vue.Js, Bootstrap5, Html & CSS. Ho implementato la possibilità di cercare e filtrare tra i contatti, mandare messaggi (con possibilità di inserire emoji) con orario attuale reale, al quale si riceverà una risposta preimpostata, i messaggi si possono anche modificare ed eliminare. I messaggi non ci saranno più al refresh della pagina.",
        image: "src/assets/immagine di Boolbnb.png",
        technologies: [
            1, 5, 6, 9
        ],
        git_link: "https://www.example.com",
    },
    {
        id: 2,
        title: "Boolflix",
        description: "Web app che permette di ricercare film e serie tv tramite il server di \'The Movie DB\', il layout riprende netflix.",
        image: "src/assets/immagine di Boolbnb.png",
        technologies: [
            2, 4, 7, 8
        ],
        git_link: "https://www.example.com",
    },
    {
        id: 3,
        title: "BoolBnb",
        description: "Web app che permette di ricercare film e serie tv tramite il server di \'The Movie DB\', il layout riprende netflix.",
        image: "src/assets/immagine di Boolbnb.png",
        technologies: [
            2, 4, 7, 8
        ],
        git_link: "https://www.example.com",
    },
 ],

});


export default iMieiDati