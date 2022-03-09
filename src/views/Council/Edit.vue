<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Научно-экспертный совет</h3>
            </div>
          </div>
    <div class=" main_card">
      <b-card no-body>
        <div class="row">
          <div class="col-md-9">
            <b-tabs card>
              <b-tab title="Rus" active>
                <b-card-text>
                  <form @submit.prevent="post_ru()">
                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">resolution</label>
                          <input class="form-control" id="first_namee" v-model="resolution1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task1" type="text"  required>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
              <b-tab title="Uzbek lotin" >

                <b-card-text>
                  <form @submit.prevent="put_uzl()">
                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">resolution</label>
                          <input class="form-control" id="first_namee" v-model="resolution2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task2" type="text"  required>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
              <b-tab title="Uzbek kyrl">

                <b-card-text>
                  <form @submit.prevent="put_uzk()">
                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">resolution</label>
                          <input class="form-control" id="first_namee" v-model="resolution3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task3" type="text"  required>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
              <b-tab title="English">

                <b-card-text>
                  <form @submit.prevent="put_en()">
                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">resolution</label>
                          <input class="form-control" id="first_namee" v-model="resolution4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task4" type="text"  required>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-card>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
import Side_menu from '../../components/Side_menu'
import Navbar from "../../components/Navbar";
import axios from "axios";
export default {
  components: {
    Navbar,
    Side_menu
  },
  data(){
    return{
      id:'',
      title:'',
      resolution1:'',
      task1:'',
      resolution2:'',
      task2:'',
      resolution3:'',
      task3:'',
      resolution4:'',
      task4:'',
    }
  },
  mounted() {
    axios.get('/api/council-advice/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
    .then(res=>{
      this.resolution1=res.data.resolution
      this.task1=res.data.resolution
    })

    axios.get('/api/council-advice/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{
          this.resolution2=res.data.resolution
          this.task2=res.data.resolution
        })

    axios.get('/api/council-advice/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{
          this.resolution3=res.data.resolution
          this.task3=res.data.resolution
        })
    axios.get('/api/council-advice/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{
          this.resolution4=res.data.resolution
          this.task4=res.data.resolution
        })
    this.id=this.$route.query.id
  },
  methods:{
    post_ru(){
      this.$http.put('/api/council-advice/'+this.$route.query.id+'/',
          {
            "resolution":this.resolution1,
            "task":this.task1
          },
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'ru'
            }
          })

          .then(res=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })
            this.id=res.data.id
            this.title=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzl(){

      this.$http.put('/api/council-advice/'+this.$route.query.id+'/',
          {
            "resolution":this.resolution2,
            "task":this.task2
          },
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-latn'
            }
          })

          .then(()=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })
            this.title=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzk(){

      this.$http.put('/api/council-advice/'+this.$route.query.id+'/',
          {
            "resolution":this.resolution3,
            "task":this.task3
          },
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-cyrl'
            }
          })

          .then(()=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })
            this.title=''
          })

          .catch(error =>{
            if(error.response.data.resolution){
              this.$toasted.show("resolution  "+error.response.data.resolution, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }


            if(error.response.data.longitude){
              this.$toasted.show("longitude  "+error.response.data.longitude, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.latitude){
              this.$toasted.show("latitude  "+error.response.data.latitude, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.main_image){
              this.$toasted.show("Main image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.exhibit_quantity){
              this.$toasted.show("exhibit_quantity  "+error.response.data.exhibit_quantity, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_en(){
      this.$http.put('/api/council-advice/'+this.$route.query.id+'/',
          {
            "resolution":this.resolution4,
            "task":this.task4
          },
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'en'
            }
          })

          .then(()=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })
            this.title=''
          })

          .catch(error =>{
            if(error.response.data.resolution){
              this.$toasted.show("resolution  "+error.response.data.resolution, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }


            if(error.response.data.longitude){
              this.$toasted.show("longitude  "+error.response.data.longitude, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.latitude){
              this.$toasted.show("latitude  "+error.response.data.latitude, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.main_image){
              this.$toasted.show("Main image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.exhibit_quantity){
              this.$toasted.show("exhibit_quantity  "+error.response.data.exhibit_quantity, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    }
  }
}
</script>
<style>
.main_card{
  margin-top: 50px;
}
.form-inline{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.custom-select{
  height: 30px;
  margin: 20px;
}
.media{
  margin-top: 80px;
}
.file_label{
  width: 200px;
}
</style>
