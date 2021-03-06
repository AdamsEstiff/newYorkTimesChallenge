import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/reset.css'
import locale from 'element-ui/lib/locale'


locale.use(lang);

Vue.use(VueResource);
Vue.use(InertiaApp);
Vue.use(ElementUI);
Vue.use(InertiaApp);
//en la parte de arriba traigo todos los elementos necesarios para correr la aplicacion web


// aqui se dice donde se van a correr los los archivos y de que forma, basicamente aqui se le dice que hacer al script
const app = document.getElementById('app');
app.setAttribute(':class',"{'loaded': loaded}");
new Vue({

    render: h => h(InertiaApp, {
        props: {

            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),

        },
        data(){

            return{
                loaded:true
            }
        },
    }),
}).$mount(app);
