<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default  {
    components:{
      AppHeader,
      AppMain,
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
    <AppMain/>
  </main>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style lang="scss">

@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './styles/general.scss';

</style>
