<template>
    
    <section class="tec">
        <div class="title">
            <h1>{{ title }}</h1><span class="ponto-blue"></span>
        </div>
        <div class="description">
            <p>
                {{msg }}
            </p>

        </div>
        
    </section>
</template>

<script>

    export default {
        name:'TecnologiasVue',
        props:['title', 'msg']
    }

</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

    *{
        font-family: 'Kanit', sans-serif;
    }



    .title {
        display: inline-flex;
        align-items: center;
        border-bottom: 3.5px solid rgb(0, 149, 255);
    }

    .ponto-blue{
        display: block;
        width: 10px;
        height: 10px;
        background-color: rgb(0, 149, 255);
        margin-left: 10px;
    }

    .description {
        margin-top: 15px;
        margin-left: 10px;
    }

    .description p {
        color: gray;
    }


    h1 {
        text-transform: uppercase;
    }

</style>