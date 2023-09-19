<template>
    <main class="main">
      
      <img class="going-merry" src="../assets/going-merry.png" alt="">
      <div class="main-home">
        <section>
        <div class="title">
          <h1>CONTATO</h1>
        </div>
  
  
        <div class="title-button">
          <p>
            Somos uma empresa de tecnologia focada em desenvolvimento web, criando sites e aplicativos personalizados para nossos clientes.
            
          </p>
          <a href="#">Contato <img class="arrow-up-img" src="https://yhwconsulting.netlify.app/img/arrow-right-up-line.png" alt=""></a>
        </div>
  
  
      
        
      </section>
  
        
  
      </div>
  
      <Footer/>
      
    </main>
  
  </template>
  
  <script>
    
    import Footer from '../components/Footer.vue';
  
    export default {
      name:'ContatoVue',
      components:{
        Footer
      },
    }
  
  
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
  
  *{
      font-family: 'Kanit', sans-serif;
  }
  
  
  .main {
    background-image: url(../assets/img1.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: auto;
  }
  
  .going-merry {
    width: 80px;
    position: absolute;
    top: 10px;
    right: 100px;
  }
  
  
  .main-home {
    padding-top: 94px;
    width:60%;
    margin: 0 auto;
    height: calc(100vh - 60px);
  }
  
  .title{
      display: flex;
      justify-content: center;
  }
  .title h1 {
      font-size: 50px;
      color: #2e2e2e;
  }
  
  
  /* TITLE BUTTON */
  .title-button {
    margin-top: 96px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    height: 150px;
    width: 100%;
    font-size: 20px;
   
    
  }
  .title-button p {
    display: block;
    width: 80%;
    color: gray;
   
  
  }
  .title-button a {
    background-color: #5060b5;
    position: relative;
    border: none;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    width: 120px;
    height: 50px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .arrow-up-img {
      width: 15px;
      position: absolute;
      top: 2px;
      right: 2px;
  }
  
  
  /*CAPACITACOES*/
  
  .capacitacoes {
      margin-top: 70px;
      width: 100%;
      display: flex;
      justify-content: center
  }
  
  .capacitacoes ul{
      list-style: none;
      display: flex;
      gap: 40px;
      font-weight: bold;
  }
  
  
  @media(max-width: 1324px){
    .main-home {
      width: 75%;
    }
  
    .title-button p{
      width: 70%;
      font-size: 16px;
    }
  
    .going-merry {
      display: none;
    }
  }
  
  
  @media(max-width: 750px){
  
    .capacitacoes{
      margin-top: 0;
    }
    .main-home {
      padding-top: 20px;
    }
  
    .title h1 {
      font-size: 48px;
    }
    
    .title-button {
      margin-top: 20px;
    }
  
    .title-button p {
      font-size: 13px;
    }
  }
  
  
  
  
  
  </style>
  
  