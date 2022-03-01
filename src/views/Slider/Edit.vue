<template>
  <div>
    <Navbar></Navbar><div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Слайдер</h3>
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
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" v-model="title1" type="text"  required>
                        </div>
                      </div>

                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description1"
                          />

                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                    </div>
                  </form>
                </b-card-text>
              </b-tab>
              <b-tab title="Uzbek lotin">

                <b-card-text>
                  <form  @submit.prevent="put_uzl()">
                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" type="text" v-model="title2"  required>
                        </div>
                      </div>

                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description2"
                          />

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
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" type="text"  v-model="title3" required>
                        </div>
                      </div>

                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description3"
                          />

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
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" type="text" v-model="title4"  required>
                        </div>
                      </div>

                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description4"
                          />

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
          <div class="col-md-3 media">

            <div class="col-md-12  mb-3 px-3">
              <div>
                <label for="first_name">Url</label>
                <input class="form-control" id="first_name" type="text" v-model="url"  required>
              </div>
            </div>
            <input type="file" class="d-none" id="cr_image"
                   multiple
                   @change="trySubmitFile"
                   accept="image/*"
                   name="datafiles"
                   ref="datafiles"
            >
            <div>
              <div class="main_image">
                <div class="image_groups">Image
                  <button @click="imageUrl=[];myImages=[]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_1112_13609)">
                        <path d="M6 20C6 10.0589 14.0589 2 24 2C33.9411 2 42 10.0589 42 20C42 29.9411 33.9411 38 24 38C14.0589 38 6 29.9411 6 20Z" fill="#FEF8E6"/>
                        <path d="M16 11.969L31.999 27.965M16 27.965L31.999 11.969" stroke="#05057D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_1112_13609" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="3"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.16 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1112_13609"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1112_13609" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </button></div>
                <img :src="imageUrl[0]" width="97%" height="80px" style="object-fit: cover;margin-bottom: 40px" alt="">
              </div>
              <label for="cr_image" class="btn btn-primary file_label">Image</label>
            </div>
            <input type="file" class="d-none" id="cr_imagee"
                   multiple
                   @change="trySubmitFile1"
                   accept="image/*"
                   name="datafiless"
                   ref="datafiless"
            >
            <div>
              <div class="main_image">
                <div class="image_groups">Logo
                  <button @click="imageUrl1=[];myImages1=[]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_1112_13609)">
                        <path d="M6 20C6 10.0589 14.0589 2 24 2C33.9411 2 42 10.0589 42 20C42 29.9411 33.9411 38 24 38C14.0589 38 6 29.9411 6 20Z" fill="#FEF8E6"/>
                        <path d="M16 11.969L31.999 27.965M16 27.965L31.999 11.969" stroke="#05057D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_1112_13609" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="3"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.16 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1112_13609"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1112_13609" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
                <img :src="imageUrl1[0]" width="97%" height="80px" style="object-fit: cover;margin-bottom: 40px" alt="">
              </div>
              <label for="cr_imagee" class="btn btn-primary file_label">Logo</label>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

import {
  quillEditor
} from "vue-quill-editor";
import Navbar from "../../components/Navbar";
import Side_menu from '../../components/Side_menu'
export default {
  components: {
    Navbar,
    quillEditor,
    Side_menu
  },
  data(){
    return{

      url:'',
      myImages:[],
      imageUrl:[],
      files_name:[],
      myImages1:[],
      imageUrl1:[],
      files_name1:[],
      id:'',

      title1:'',
      description1:'',


      title2:'',
      description2:'',


      title3:'',
      description3:'',


      title4:'',
      description4:''

    }
  },
  mounted() {

    this.$http.get('/api/slider/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{

          this.title1=res.data.title
          this.description1=res.data.description
        })

    this.$http.get('/api/slider/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{

          this.title2=res.data.title
          this.description2=res.data.description
        })
    this.$http.get('/api/slider/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{

          this.title3=res.data.title

          this.description3=res.data.description
        })
    this.$http.get('/api/slider/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{

          this.title4=res.data.title
          this.description4=res.data.description
        })

  },
  methods:{
    trySubmitFile(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        this.files_name.push(e.target.files[i])
      }
      var files = Array.from(e.target.files);
      console.log(typeof (files))
      files.forEach((file) => {
        this.myImages.push(file);
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageUrl.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    trySubmitFile1(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        this.files_name1.push(e.target.files[i])
      }
      var files = Array.from(e.target.files);
      console.log(typeof (files))
      files.forEach((file) => {
        this.myImages1.push(file);
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageUrl1.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    post_ru(){
      const form = new FormData();
      form.append("pc_image", this.myImages[0]);
      form.append("title", this.title1);
      form.append("url", this.url);
      form.append("logo", this.myImages1[0]);
      form.append("description", this.description1);
      this.$http.put('/api/slider/'+this.$route.query.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'ru'
            }
          })

          .then(res=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
            this.id=res.data.id
          })
          .catch(error =>{
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.logo){
              this.$toasted.show("Logo  "+error.response.data.logo, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.pc_imag){
              this.$toasted.show("pc_imag  "+error.response.data.pc_imag, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.url){
              this.$toasted.show("url  "+error.response.data.url, {
                duration: 1000,
                'type': 'error'
              })
            }
            console.log(error.response.data)
          })
    },
    put_uzl(){
      const form = new FormData();
      form.append("pc_image", this.myImages[0]);
      form.append("title", this.title2);
      form.append("url", this.url);
      form.append("logo", this.myImages1[0]);
      form.append("description", this.description2);
      this.$http.put('/api/slider/'+this.$route.query.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-latn'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
          })
          .catch(error =>{
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.logo){
              this.$toasted.show("Logo  "+error.response.data.logo, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.pc_imag){
              this.$toasted.show("pc_imag  "+error.response.data.pc_imag, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.url){
              this.$toasted.show("url  "+error.response.data.url, {
                duration: 1000,
                'type': 'error'
              })
            }
            console.log(error.response.data)
          })
    },
    put_uzk(){

      const form = new FormData();

      form.append("pc_image", this.myImages[0]);
      form.append("title", this.title3);
      form.append("url", this.url);
      form.append("logo", this.myImages1[0]);
      form.append("description", this.description3);
      this.$http.put('/api/slider/'+this.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-cyrl'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
          })

          .catch(error =>{
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.logo){
              this.$toasted.show("Logo  "+error.response.data.logo, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.pc_imag){
              this.$toasted.show("pc_imag  "+error.response.data.pc_imag, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.url){
              this.$toasted.show("url  "+error.response.data.url, {
                duration: 1000,
                'type': 'error'
              })
            }
            console.log(error.response.data)
          })
    },
    put_en(){

      const form = new FormData();

      form.append("pc_image", this.myImages[0]);
      form.append("title", this.title4);
      form.append("url", this.url);
      form.append("logo", this.myImages1[0]);
      form.append("description", this.description4);
      this.$http.put('/api/slider/'+this.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'en'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
          })

          .catch(error =>{
            if(error.response.data.description){
              this.$toasted.show("description  "+error.response.data.description, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.logo){
              this.$toasted.show("Logo  "+error.response.data.logo, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.pc_imag){
              this.$toasted.show("pc_imag  "+error.response.data.pc_imag, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.url){
              this.$toasted.show("url  "+error.response.data.url, {
                duration: 1000,
                'type': 'error'
              })
            }
            console.log(error.response.data)
          })
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditorOrg.quill;
    },
  },
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
  margin-top: 280px;
}
.file_label{
  width: 200px;
}
</style>
