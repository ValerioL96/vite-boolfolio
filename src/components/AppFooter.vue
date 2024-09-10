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
            ],
            contactsList:[
                {
                    id:1,
                    name:'3473443637',
                    image:'src/assets/icon/smartphone (1).png',
                },
                {
                    id:2,
                    name:'v.lembo1396@gmail.com',
                    image:'src/assets/icon/email.png',
                },
            ],
            socialsList:[
                {
                    id:1,
                    name:'valeriolembo',
                    image:'src/assets/icon/linkedin.png',
                    url: 'https://www.linkedin.com/in/valeriolembo/'
                },
                {
                    id:2,
                    name:'ValerioL96',
                    image:'src/assets/icon/github.png',
                    url: 'https://github.com/ValerioL96'
                },
            ]
            }
        },

}

</script>

<template>
    <nav class="navbar ">
        <div class="container-fluid d-flex flex-row justify-content-around">
            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Resource</h2>
            
                <ul class="navbar-nav">
                    <li class="nav-item me-4 " v-for="navItem in navLinkNames">
                        <router-link :to="{ name: navItem.name }" class="links">
                            {{ navItem.label }}
                        </router-link>
                    </li>
                </ul>
            </section>

            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Contacts</h2>
            
                <ul class="navbar-nav">
                    <li v-for="social in contactsList" :key="social.id" class="d-flex flex-row">
                        <img :src="social.image" alt="social-image" class="icon-image mx-2">
                        <span>
                            <a class="nav-link" aria-current="page" :href="social.url">
                                <h6>
                                    {{ social.name }}
                                </h6>
                            </a>
                        </span>
                    </li>
                </ul>
            </section>
            
            <section class="d-flex flex-column">
                <h2 class="navbar-brand">Socials</h2>
            
                <ul class="navbar-nav">
                    <li v-for="social in socialsList" :key="social.id" class="d-flex flex-row">
                        <img :src="social.image" alt="social-image" class="icon-image mx-2">
                        <span>
                            <a class="nav-link" aria-current="page" :href="social.url">
                                <h6>
                                    {{ social.name }}
                                </h6>
                            </a>
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    </nav>
</template>

<style lang="scss" scoped>


.icon-image{
    
    height: 30px;
    width: 30px;
}

</style>
