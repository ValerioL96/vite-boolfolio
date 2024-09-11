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
    <nav class="navbar  ">
        <div class="container-fluid col-10">
            <div class="logo d-flex">
                <img src="../assets/icon/L.png" class="logo border border-2 rounded-circle mx-2" alt="">
            <h1 class="navbar-brand fs-3" style="color: #7daae6; text-shadow: 1px 1px 0 #5a8fd1, -1px -1px 0 #5a8fd1, 1px -1px 0 #5a8fd1, -1px 1px 0 #5a8fd1;">Boolfolio</h1>
            </div>
            
            
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

<style lang="scss" scoped>
.logo{
    vertical-align:bottom;
    height: 45px;
    width: 45px;
}
</style>
