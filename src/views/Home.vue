<template>
  <main class="main">
    
    <img class="going-merry" src="../assets/going-merry.png" alt="">
    <div class="main-home">
      <section>
      <div class="title">
        <h1>AceCode</h1>
      </div>


      <div class="title-button">
        <p>
          Somos uma empresa de tecnologia focada em desenvolvimento web, criando sites e aplicativos personalizados para nossos clientes.
          
        </p>
        <a href="https://www.instagram.com/marco_antoniotk/" target="_blank">Contato <img class="arrow-up-img" src="https://yhwconsulting.netlify.app/img/arrow-right-up-line.png" alt=""></a>
      </div>


    
      <div class="capacitacoes">
        <ul>
            <li>FRONT-END</li>
            <LI>BACK-END</LI>
            <LI>FULL-STACK</LI>
        </ul>
      </div>
    </section>

      <Tecnologias class="tec" v-for="(tec, index) in this.tecs" :key="index" :msg="tec.msg" :title="tec.title">
      
      </Tecnologias>

    </div>

    <Footer/>
    
  </main>

</template>

<script>
  import Tecnologias from '../components/Tecnologias.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name:'HomeVue',
    components:{
      Tecnologias,
      Footer
    },
    data(){
        return {
           tecs:[
            {
              title: "Front-end",
              msg: "Na nossa empresa, somos especializados em aproveitar todo o potencial das seguintes tecnologias: Vue.js, HTML, CSS e JavaScript (JS). Essas ferramentas são essenciais para a criação de interfaces de usuário impressionantes, experiências de usuário dinâmicas e aplicativos web de alto desempenho. Com nossa experiência e paixão por essas tecnologias, estamos prontos para enfrentar os desafios mais complexos de desenvolvimento front-end e oferecer soluções de qualidade excepcional aos nossos clientes."
            },
            {
              title: "back-end",
              msg:"Além de nossa especialização em front-end, também somos proficientes no desenvolvimento de back-end, utilizando tecnologias essenciais como PHP e MySQL. Essa combinação poderosa nos permite criar sistemas robustos, seguros e altamente funcionais. Com nossa experiência abrangente em ambas as áreas, estamos preparados para fornecer soluções completas e integradas que atendam às necessidades específicas de nossos clientes, desde a interface de usuário até o armazenamento de dados e a lógica de negócios"
            },
            {
              title:"FULL-stack",
              msg:'Além de nossa especialização em desenvolvimento front-end e back-end, também somos especialistas em full stack. Isso significa que estamos equipados para lidar com todas as camadas do desenvolvimento de aplicações web, desde a criação da interface de usuário até o gerenciamento de bancos de dados e a lógica de negócios. Nossos desenvolvedores são proficientes em uma ampla gama de tecnologias e linguagens, garantindo que possamos oferecer soluções completas e integradas que atendam às demandas complexas de nossos clientes'
            
            }
          ]
        }
      }
  }


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

*{
    font-family: 'Kanit', sans-serif;
}


.main {
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
}

.title{
    display: flex;
    justify-content: center;
}
.title h1 {
    font-size: 84px;
    color: #2e2e2e;
}


/* TITLE BUTTON */
.title-button {
  margin-top: 96px;
  display: flex;
  justify-content: space-between;

  align-items: center;
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

.tec {
  margin-top: 80px;
  margin-bottom: 110px;
}

/*CAPACITACOES*/

.capacitacoes {
    margin-top: 70px;
    width: 100%;
    display: flex;
    justify-content: center
}

.capacitacoes ul{
  width: 70%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    font-size: 20px;
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
  .capacitacoes ul {
    font-size: 16px;
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

@media (max-width: 570px ){

  .title-button a {
     width: 70px;
     height: 35px;
     font-size: 12px;
  }

  .capacitacoes li {
    font-size: 12px;
  }

  .tec {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .title-button {
    margin:0 ;
  }
}
  




</style>

