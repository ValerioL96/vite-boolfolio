<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';



export default  {
    components:{
      AppHeader,
      AppFooter
    },

    data(){
            return{
    
            }
        },

}

</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style lang="scss">

@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './styles/general.scss';

</style>
