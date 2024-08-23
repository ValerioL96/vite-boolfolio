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
    <nav class="navbar bg-danger  mb-4">
        <div class="container-fluid">
            <h2 class="navbar-brand">Boolfolio</h2>
            
                <ul class="navbar-nav d-flex flex-row ">
                    <li class="nav-item me-4" v-for="navItem in navLinkNames">
                        <router-link :to="{ name: navItem.name }">
                            {{ navItem.label }}
                        </router-link>
                    </li>
                </ul>
            
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-dark" type="submit">Search</button>
            </form>
        </div>
</nav>
</template>

<style scoped>

</style>
