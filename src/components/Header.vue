<template>
  <header>
    <div class="div-nav">
      <div>
        <img class="logo" src="../assets/one_piece_logo.png" alt="Logo" />
      </div>
      <nav>
        <img class="menu-icon" @click="abrirMenu" src="../assets/menu-icon.png" />
        <div @click="fecharMenu" :class="{ closeBarra: menuActive }" class="barra-nav-close"></div>
        <div :class="{ active: menuActive }" class="barra-nav" id="barra-nav">
          <ul>
            <li><router-link @click="fecharMenulink" to="/home">Home</router-link></li>
            <li><router-link @click="fecharMenulink" to="/Contato">Contato</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'HeaderVue',
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    fecharMenulink: function (){
      this.fecharMenu()
    },
    abrirMenu: function () {
      this.menuActive = true
    },
    fecharMenu: function () {
      this.menuActive = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px gray;
  position: relative;
  z-index: 1;
}

.div-nav {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
}

ul li {
  margin-right: 12px;
}

ul a {
  text-decoration: none;
  color: #5060b5;
  font-size: 19px;
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
}

.logo {
  width: 50px;
}

.barra-nav {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: -40%;
  width: 40%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 7%;
  transition: right 1s;
  
}

#barra-nav ul {
  display: flex;
  flex-direction: column;
}
.barra-nav-close {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: none;
  background-color: #2e2e2e;
  background: rgba(46, 46, 46, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  transition: all 2s;
  
}

.active {
  display: flex;
  right: 0;
}

.closeBarra {
  width: 100%;
  height: 100vh;
  display: block;
}

img {
  width: 30px;
  cursor: pointer;
}

@media (min-width: 700px) {
  .barra-nav-close,
  .menu-icon {
    display: none;
  }
  .barra-nav {
    position: relative;
    height: auto;
    width: auto;
    background: none;
  }

  #barra-nav ul {
    display: flex;
    flex-direction: row;
  }
}
</style>
