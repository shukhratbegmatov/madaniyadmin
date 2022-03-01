import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "../router";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    managment_category:[],
    managment_categoryid: {},
    managment:[],
    managmentid:[],
    council_advice:[],
    structure:[],
    territorial:[],
    docs_category:[],
    document:[],
    museum:[],
    news:[],
    organization:[],
    press:[],
    services:[],
    vacancy:[],
    slider:[],
    files:[],
    stats:[],
    object:[],
    abouts:[],
    subs:[],
    isactive:true
  },

  actions: {
    manGetfunc({state}){
      axios.get('/api/management/',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.managment_category=res.data
          })
    },
    manGetfuncId({state}){
      axios.get('/api/management/'+router.currentRoute.params.id,{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.managment_categoryid=res.data
          })
    },

    manMainGetfunc({state}){
      axios.get('/api/leaders',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.managment=res.data
          })
    },

    manMainGetfuncid({state}){
      axios.get('/api/leaders/'+router.currentRoute.params.id,{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.managmentid=res.data
          })
    },
    councilAdvice({state}){
      axios.get('/api/council-advice/',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.council_advice=res.data
          })
    },
    sutructure({state}){
      axios.get('/api/structure',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.structure=res.data
          })
    },
    territorial({state}){
      axios.get('/api/territorial',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.territorial=res.data
          })
    },
    docs_category({state},creditailes){
      axios.get('/api/docs-category?page_size='+creditailes.page_size,{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.docs_category=res.data
          })
    },

    document({state},creditailes){
      axios.get('/api/docs?page_size'+creditailes.page_size,{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.document=res.data
          })
    },

    museum({state}){
      axios.get('/api/museum',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.museum=res.data
          })
    },

    news({state}){
      axios.get('/api/news',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.news=res.data
          })
    },

    organization({state}){
      axios.get('/api/organization',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.organization=res.data
          })
    },

    press({state}){
      axios.get('/api/press-secretary',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.press=res.data
          })
    },

    services({state}){
      axios.get('/api/service',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.services=res.data
          })
    },

    vacancy({state}){
      axios.get('/api/vacancy',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.vacancy=res.data
          })
    },

    slider({state}){
      axios.get('/api/slider',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.slider=res.data
          })
    },

    files({state}){
      axios.get('/api/files',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.files=res.data
          })
    },
    stats({state}){
      axios.get('/api/stats',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.stats=res.data
          })
    },
    object({state}){
      axios.get('/api/object',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.object=res.data
          })
    },
    about({state}){
      axios.get('/api/about',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.abouts=res.data
          })
    },

    subs({state}){
      axios.get('/api/subs',{
        headers:{
          'Accept-Language':localStorage.getItem('lang')
        }
      })
          .then(res=>{
            state.subs=res.data
          })
    },

  },



  modules: {
  }
})
