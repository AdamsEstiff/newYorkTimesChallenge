<template>


</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                news:[],
                notice:{
                    image:''
                }
            }
        },
       mounted() {
           axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=JBArrZG9G3ZZfeMou7zvF7ViGsGIucU2').then(
               response=>this.news=response.data.results
           )
        }
    }
</script>
