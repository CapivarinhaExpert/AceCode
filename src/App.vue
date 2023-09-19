
<template>
<Header></Header>


<Router-view/>
</template>


<script>
import {RouterView, RouterLink } from 'vue-router';
import Header from './components/Header.vue';

export default{
  name:'App',
  components:{
    Header
  }
}

</script>


<style>
  *{
    margin: 0%;
    padding: 0%;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  a{
    transition: all 0.5s;
  }
  a:hover{
    opacity: 0.5;
  }
</style>



