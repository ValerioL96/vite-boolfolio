<script >


export default  {
    components:{

    },

    data(){
            return{

                projectDrescriptionList: [
    {
        id: 1,
        name: 'Boolzapp',
        image: 'src/assets/img/Screenshot_6-9-2024_17587_.jpeg',
        description: 'Progetto di un\'applicazione di messaggistica ispirata a WhatsApp, sviluppata esclusivamente per il frontend. Questa applicazione, ancora in fase di sviluppo, utilizza JavaScript, HTML e CSS per creare un\'interfaccia utente interattiva e visivamente accattivante. Il progetto si concentra esclusivamente sul design e sull\'aspetto dell\'interfaccia, senza includere la logica di backend per la gestione delle conversazioni in tempo reale. Attraverso l\'uso di JavaScript, HTML e CSS, è stato progettato un layout che simula un\'esperienza di messaggistica moderna e intuitiva, con l\'obiettivo di offrire una base solida per futuri sviluppi backend.',
    },
    {
        id: 2,
        name: 'Discord',
        image: 'src/assets/img/Screenshot_6-9-2024_175638_.jpeg',
        description: 'Clone di Discord, realizzato esclusivamente per il frontend. Questo progetto, sviluppato utilizzando solo HTML e CSS, è un\'implementazione estetica di un\'applicazione di chat e comunicazione in gruppi, ideale per community e gaming. Attualmente, l\'applicazione non include alcuna funzionalità interattiva o dinamica, ma si concentra sulla creazione di un\'interfaccia utente visivamente accattivante e ben strutturata. Il design è progettato per simulare l\'aspetto di un\'applicazione moderna di comunicazione, fornendo una base visiva solida per futuri sviluppi e aggiustamenti',
    },
    {
        id: 3,
        name: 'Boolfolio_Db',
        image: 'src/assets/img/Screenshot_30-8-2024_114828_127.0.0.1.jpeg',
        description: 'WebApp gestionale per la creazione e gestione di progetti personali, utilizzando Laravel per il BackOffice. L\'applicazione consente una gestione centralizzata dei progetti, inizialmente popolati con dati fittizi per testare le funzionalità. Successivamente, è stata trasformata in un database personale che contiene i miei progetti e che è stato integrato con un\'altra applicazione sviluppata in Vue.js, per una visualizzazione e interazione più dinamica.',
    },
],

            }
        },

}

</script>

<template>
    <div class="container-fluid my-4">
        <h1 class="text-center m-4">Progetti</h1>
    <div class="row mx-4" v-for="project in projectDrescriptionList" :key="project.id">
        <div class="col-6 mb-5">
        <img :src="project.image" :alt="project.name" class="img-fluid border border-secondary rounded" />
        </div>
        <div class="col-6 mb-4 text-center d-flex flex-column justify-content-center">
        <h2>{{ project.name }}</h2>
        <h6>{{ project.description }}</h6>
        </div>
    </div>
    </div>


    

</template>

<style lang="scss" scoped>

.container-fluid {
    margin-top: 2rem;
}

.row {
    margin-bottom: 1rem;
}

.img-fluid {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 0.5rem;
}

.img-fluid:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.col-6 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-center {
    text-align: center;
}

h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
}

h2:hover {
    color: #007bff; /* Cambia il colore del testo al passaggio del mouse */
    transform: translateY(-3px); /* Solleva leggermente il testo */
}

h6 {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    transition: color 0.3s ease, transform 0.3s ease;
}

h6:hover {
    color: #007bff; /* Cambia il colore del testo al passaggio del mouse */
    transform: translateY(-1px); /* Solleva leggermente il testo */
}

.card-description {
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.card-description:hover {
    color: #007bff; /* Cambia il colore del testo al passaggio del mouse */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Aggiunge un'ombra al testo */
}
</style>
