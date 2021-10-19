<template>
<!--    //un row general para que abarque toda la vista-->
    <el-row :gutter="24">
<!--        //aqui es donde se aloja el logo de nytimes y tambien el input de busqueda-->
        <el-col :span="12">
            <a href="https://www.nytimes.com">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/512px-The_New_York_Times_Logo.svg.png">
            </a>
        </el-col>
        <el-col :span="12">
            <el-col class="button-position" :span="6">
<!--                //el boton de busqueda utiliza al metodo searching que filtra las opciones y utiliza el eventlistener-->
<!--                //keyup para que utilice el metodo searching cada vez que se escribe en el-->
                <input id="search" placeholder="Buscar" icon="el-icon-search"
                       class="mt-1 el-input el-input__inner my-input el-icon-search"
                       v-model="search" @keyup="searching">

            </el-col>
        </el-col>
        <el-col :span="24">
<!--            //aca se puede ver que se evalua se no se a escrito en el buscador, si no a ocurrido pues se deja el array-->
<!--            original-->
            <el-card v-if="search.length===0" class="mb-1">
<!--                //aca un foreach para recorrer el arreglo de las noticias con sus respectivas partes-->
                <span v-for="notice in notices">
                    <el-col :span="8" :xl="8" :lg="8" :ms="12" :sm="24" :xs="24">
                        <el-card class="notice_card mt-1 mb-1">
                            <div slot="header">
                                <span v-if="notice.image.length===0">
                                        <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png">
                                    </span>
                                    <span v-else>
                                        <img class="image" :src="notice.image">
                                    </span>                            </div>
                            <h1 class="title">{{ notice.title }}</h1>
                            <p class="abstract">{{ notice.abstract }}</p>
                            <a :href="notice.url" class="button-position mb-2">
                                <el-button icon="el-icon-edit">Leer más</el-button>
                            </a>
                        </el-card>
                    </el-col>
                </span>

            </el-card>
<!--            //aca el else, del if anterior, que muestra los resultados que pueden salir, segun lo que se busque-->
            <el-card v-else class="mb-1">
<!--                //aqui se verifica si hay datos coincidentes con la busqueda-->
                <span v-if="news.length!==0">
<!--                    //un foreach que muestra los datos coincidentes-->
                    <span v-for="notice in news">
                        <el-col :span="8" :xl="8" :lg="8" :ms="12" :sm="24" :xs="24">
                            <el-card class="notice_card mt-1 mb-2">
                                <div slot="header">
                                    <span v-if="notice.image.length===0">
                                        <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png">
                                    </span>
                                    <span v-else>
                                        <img class="image" :src="notice.image">
                                    </span>
                                </div>
                                <h1 class="title">{{ notice.title }}</h1>
                                <p class="abstract">{{ notice.abstract }}</p>
                                <a :href="notice.url" class="button-position mb-1">
                                    <el-button icon="el-icon-edit">Leer más</el-button>
                                </a>
                            </el-card>
                        </el-col>
                    </span>
                </span>
<!--                //aca se muestra un mensaje si es el caso de que no hay nada que mostrar-->
                <span v-else>
                    <el-row :span="24" :gutter="24">
                        <el-col :span="24">
                            <h1 class="mt-2 mb-2 nofound">No se encontraron datos que coincidan</h1>
                        </el-col>
                    </el-row>
                </span>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';


export default {
    //aca esta la informacion que traigo de bases de datos
    props: ['notices'],
    data() {
        return {
            //por aqui los datos por asi llamarlos, "locales"
            news: [],
            search: ''
        }
    },
    //aca el area para los metodos
    methods: {
        //aca el metodo searching que se activa cada vez alguien teclea algo en el input search
        searching() {
            //lo que hace es filtrar el array notice, lo que se digite en search, metiendolo en el array new y si no hay nada, pues elimina dicho array
            if (this.search.length > 0) {
                //aca filtra a notices, y lo mete en news
                this.news = this.notices.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                //aca se elimina los datos de news para hacer una nueva busqueda limpia
                this.news = [];
            }
        }
    }
}
</script>
