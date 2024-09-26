<script >

export default  {
    components:{
    },

    data(){
            return{
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
            ]
            }
        },

}

</script>

<template>
    <nav class="navbar rounded">
        <div class="container-fluid col-10">
            <div class="logo d-flex align-items-center">
                <img src="../assets/icon/L.png" class="logo border border-2 rounded-circle mx-2" alt="">
                <h1 class="navbar-brand fs-3" style="color: #7daae6; text-shadow: 1px 1px 0 #5a8fd1, -1px -1px 0 #5a8fd1, 1px -1px 0 #5a8fd1, -1px 1px 0 #5a8fd1;">Boolfolio</h1>
            </div>
            <ul class="navbar-nav d-flex flex-row ms-auto">
                <li class="nav-item mx-4" v-for="navItem in navLinkNames" :key="navItem.name">
                    <router-link :to="{ name: navItem.name }" class="links">
                        {{ navItem.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
.navbar {
    background-color: rgba(255, 255, 255, 0.9); /* Sfondo bianco semi-trasparente */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombra sotto la navbar */
    padding: 10px 20px; /* Spaziatura interna */
}

.logo {
    vertical-align: bottom;
    height: 45px;
    width: 45px;
}

.links {
    color: #0056b3; /* Colore dei link */
    text-decoration: none; /* Nessuna sottolineatura */
    transition: color 0.3s; /* Transizione per il colore */
}

.links:hover {
    color: #007bff; /* Colore più chiaro al passaggio del mouse */
}

/* Aggiungere un padding per la navbar */
.container-fluid {
    padding: 10px 0; /* Spaziatura verticale per la navbar */
}
</style>

