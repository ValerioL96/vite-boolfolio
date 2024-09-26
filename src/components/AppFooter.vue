<script>
export default  {
    components: {},

    data(){
        return {
            navLinkNames: [
                {
                    label: "Homepage",
                    name: "home"
                },
                {
                    label: "Project",
                    name: "blog"
                },
                {
                    label: "About",
                    name: "about"
                },
            ],
            contactsList: [
                {
                    id: 1,
                    name: '3473443637',
                    image: 'src/assets/icon/smartphone (1).png',
                },
                {
                    id: 2,
                    name: 'v.lembo1396@gmail.com',
                    image: 'src/assets/icon/email.png',
                },
            ],
            socialsList: [
                {
                    id: 1,
                    name: 'valeriolembo',
                    image: 'src/assets/icon/linkedin.png',
                    url: 'https://www.linkedin.com/in/valeriolembo/'
                },
                {
                    id: 2,
                    name: 'ValerioL96',
                    image: 'src/assets/icon/github.png',
                    url: 'https://github.com/ValerioL96'
                },
            ]
        }
    },

    methods: {
        sendEmail(email) {
            window.location.href = `mailto:${email}`; // Apri il client di posta elettronica
        },
        callContact(phoneNumber) {
            window.location.href = `tel:${phoneNumber}`; // Inizia una chiamata
        }
    }
}
</script>


<template>
    <nav class="navbar">
        <div class="container-fluid d-flex justify-content-between">
            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Resource</h2>
                <ul class="navbar-nav">
                    <li class="nav-item me-4" v-for="navItem in navLinkNames" :key="navItem.name">
                        <router-link :to="{ name: navItem.name }" class="links">
                            {{ navItem.label }}
                        </router-link>
                    </li>
                </ul>
            </section>

            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Contacts</h2>
                <ul class="navbar-nav">
                    <li v-for="contact in contactsList" :key="contact.id" class="d-flex align-items-center contact-item">
                        <img :src="contact.image" alt="contact-image" class="icon-image mx-2">
                        <h6 
                            class="contact-text" 
                            v-if="contact.id === 1" 
                            @click="callContact(contact.name)" 
                            style="cursor: pointer;"
                        >
                            {{ contact.name }}
                        </h6>
                        <h6 
                            class="contact-text" 
                            v-if="contact.id === 2" 
                            @click="sendEmail(contact.name)" 
                            style="cursor: pointer;"
                        >
                            {{ contact.name }}
                        </h6>
                    </li>
                </ul>
            </section>

            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Socials</h2>
                <ul class="navbar-nav">
                    <li v-for="social in socialsList" :key="social.id" class="d-flex align-items-center social-item">
                        <img :src="social.image" alt="social-image" class="icon-image mx-2">
                        <a class="nav-link" :href="social.url" target="_blank">
                            <h6 class="social-text">{{ social.name }}</h6>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </nav>
</template>



<style lang="scss" scoped>
.navbar {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)); /* Sfondo sfumato */
    padding: 1rem 2rem; /* Aggiunta imbottitura laterale per maggiore spazio */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombra */
}

.navbar-brand {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem; /* Distanza inferiore ottimizzata */
    color: #007bff; /* Colore blu per il titolo */
}

.navbar-nav {
    list-style: none;
    padding-left: 0;
}

.nav-item {
    margin-bottom: 0.5rem; /* Distanza tra gli elementi del nav */
}

.links {
    text-decoration: none;
    color: #343a40; /* Colore del testo */
    transition: color 0.3s ease;
}

.links:hover {
    color: #007bff; /* Colore del testo al passaggio del mouse */
    text-decoration: underline;
}

.icon-image {
    height: 30px;
    width: 30px;
}

.contact-item, .social-item {
    margin-bottom: 0.5rem; /* Distanza uniforme tra contatti e social */
}

.contact-text, .social-text {
    margin: 0; /* Rimuovi margini */
    color: #343a40; /* Colore del testo */
    transition: color 0.3s ease;
}

.contact-text:hover, .social-text:hover {
    color: #007bff; /* Colore al passaggio del mouse */
}
</style>
