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
    <nav class="navbar  mb-4">
        <div class="container-fluid col-10">
            <h2 class="navbar-brand">Boolfolio</h2>
            
                <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item mx-4 " v-for="navItem in navLinkNames">
                        <router-link :to="{ name: navItem.name }" class="links">
                            {{ navItem.label }}
                        </router-link>
                    </li>
                </ul>
            
            <form class="d-flex" action="http://localhost:8000/api/search" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-dark" type="submit">Search</button>
            </form>
        </div>
</nav>
</template>

<style lang="scss">

</style>
