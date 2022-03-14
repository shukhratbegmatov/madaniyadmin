<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Музеи</h3>
            </div>
          </div>
    <div class=" main_card">
      <b-card no-body>
        <div class="row">
          <div class="col-md-9">
            <b-tabs card>
              <b-tab title="Uzbek lotin" active >

                <b-card-text>
                  <form @submit.prevent="put_uzl()">

                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" v-model="title2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">address</label>
                          <input class="form-control" id="first_namee" v-model="address2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">reception</label>
                          <input class="form-control" id="first_namee" v-model="reception2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>
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
              <b-tab title="Rus" >
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
                          <label for="first_name">address</label>
                          <input class="form-control" id="first_namee" v-model="address1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">reception</label>
                          <input class="form-control" id="first_namee" v-model="reception1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>
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
              <b-tab title="Uzbek kyrl">

                <b-card-text>
                  <form @submit.prevent="put_uzk()">

                    <div class="row">
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">Title</label>
                          <input class="form-control" id="first_namee" v-model="title3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">address</label>
                          <input class="form-control" id="first_namee" v-model="address3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">reception</label>
                          <input class="form-control" id="first_namee" v-model="reception3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description3"
                          />   </div>
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
                          <input class="form-control" id="first_namee" v-model="title4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">address</label>
                          <input class="form-control" id="first_namee" v-model="address4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">reception</label>
                          <input class="form-control" id="first_namee" v-model="reception4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description4"
                          />  </div>
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

            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">Top museum</label>
              </div>
              <div class="mb-2">
                <a class="isUnesco p-2" :class="{'active':is_status==1}"  @click="is_status=1">True</a>
                <a class="isUnesco p-2" :class="{'active':is_status==0}" @click="is_status=0">  False</a>
              </div>
              <div>
                <label for="first_name">Web site</label>
                <input class="form-control" id="first_namee" v-model="website" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">latitude</label>
                <input class="form-control" id="first_namee" v-model="latitude" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">longitude</label>
                <input class="form-control" id="first_namee" v-model="longitude" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">phone_number</label>
                <input class="form-control" id="first_namee" v-model="phone_number" type="text"  required>
              </div>
            </div>
            <div class="main_image">
              <div class="image_groups"> clear files
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
              <div v-for="item in imageUrl" :key="item">
                <img :src="item" width="97%" height="300px" style="object-fit: cover;margin-bottom: 40px" alt="">
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
              <label for="cr_image" class="btn btn-primary file_label">image</label>
            </div>

            <div class="main_image">
              <div class="image_groups"> clear files
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
              <div >
                <img :src="imageUrl1[0]" width="97%" height="300px" style="object-fit: cover;margin-bottom: 40px" alt="">
              </div>
            </div>
            <input type="file" class="d-none" id="cr_imagee"
                   multiple
                   @change="trySubmitFile1"
                   accept="image/*"
                   name="datafiles1"
                   ref="datafiles1"
            >
            <div>
              <label for="cr_imagee" class="btn btn-primary file_label">Main image</label>
            </div>
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
import {
  quillEditor
} from "vue-quill-editor";
import Navbar from "../../components/Navbar";
export default {
  components: {
    Navbar,
    Side_menu,
    quillEditor
  },
  data(){
    return{
      is_status:0,
      id:'',
      selected:[],
      selectitem:'',
      leader:'',
      task:'',
      previous_work:'',
      education:'',
      department:'',
      birthdate:'',
      phone_number:'',
      email:'',
      myImages:[],
      imageUrl:[],
      files_name:[],


      title1:'',
      reception1:'',
      address1:'',
      description1:'',


      title2:'',
      reception2:'',
      address2:'',
      description2:'',


      title3:'',
      reception3:'',
      address3:'',
      description3:'',


      title4:'',
      reception4:'',
      address4:'',
      description4:'',
      files_name1:[],
      myImages1:[],
      imageUrl1:[],

        latitude:'',
        longitude:'',
      website:''

    }
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
      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`, this.myImages[i]);
      }
      form.append("main_image", this.myImages1[0]);
      form.append("address", this.address1);
      form.append("title", this.title1);
      form.append("reception", this.reception1);
      form.append("description", this.description1);
      form.append("phone_number",this.phone_number);
      form.append("longitude",this.longitude);
      form.append("latitude",this.latitude);
      form.append("status",this.is_status);
      form.append("website",this.website);
      this.$http.put('/api/museum/'+this.id+'/',
          form,
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
            this.document_number=''
            this.published_date=''
            this.leader=''
            this.reception=''
            this.task=''
            this.previous_work=''
            this.education=''
            this.department=''

          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.address){
              this.$toasted.show("address  "+error.response.data.address, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("reception  "+error.response.data.reception, {
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
            if(error.response.data.main_image){
              this.$toasted.show("main_image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.phone_number){
              this.$toasted.show("phone_number  "+error.response.data.phone_number, {
                duration: 1000,
                'type': 'error'
              })
            }

          })
    },
    put_uzl(){
      const form = new FormData();
      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`, this.myImages[i]);
      }
      form.append("main_image", this.myImages1[0]);
      form.append("address", this.address2);
      form.append("title", this.title2);
      form.append("reception", this.reception2);
      form.append("description", this.description2);
      form.append("phone_number",this.phone_number);
      form.append("longitude",this.longitude);
      form.append("latitude",this.latitude);
      form.append("status",this.is_status);
      form.append("website",this.website);
      this.$http.post('/api/museum/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-latn'
            }
          })

          .then(res=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })
            this.id=res.data.id
            this.title=''
            this.document_number=''
            this.published_date=''
            this.leader=''
            this.reception=''
            this.task=''
            this.previous_work=''
            this.education=''
            this.department=''

          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.address){
              this.$toasted.show("address  "+error.response.data.address, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("reception  "+error.response.data.reception, {
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
            if(error.response.data.main_image){
              this.$toasted.show("main_image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.phone_number){
              this.$toasted.show("phone_number  "+error.response.data.phone_number, {
                duration: 1000,
                'type': 'error'
              })
            }

          })
    },
    put_uzk(){

      const form = new FormData();
      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`, this.myImages1[i]);
      }
      form.append("main_image", this.myImages[0]);
      form.append("address", this.address3);
      form.append("title", this.title3);
      form.append("reception", this.reception3);
      form.append("description", this.description3);
      form.append("phone_number",this.phone_number);
      form.append("longitude",this.longitude);
      form.append("latitude",this.latitude);
      form.append("status",this.is_status);
      form.append("website",this.website);
      this.$http.put('/api/museum/'+this.id+'/',

          form,
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
            this.document_number=''
            this.published_date=''
            this.leader=''
            this.reception=''
            this.task=''
            this.previous_work=''
            this.education=''
            this.department=''

          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.address){
              this.$toasted.show("address  "+error.response.data.address, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("reception  "+error.response.data.reception, {
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
            if(error.response.data.main_image){
              this.$toasted.show("main_image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.phone_number){
              this.$toasted.show("phone_number  "+error.response.data.phone_number, {
                duration: 1000,
                'type': 'error'
              })
            }

          })
    },
    put_en(){

      const form = new FormData();
      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`, this.myImages1[i]);
      }
      form.append("main_image", this.myImages[0]);
      form.append("address", this.address4);
      form.append("title", this.title4);
      form.append("reception", this.reception4);
      form.append("description", this.description4);
      form.append("phone_number",this.phone_number);
      form.append("longitude",this.longitude);
      form.append("latitude",this.latitude);
      form.append("status",this.is_status);
      form.append("website",this.website);
      this.$http.put('/api/museum/'+this.id+'/',

          form,
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
            this.document_number=''
            this.published_date=''
            this.leader=''
            this.reception=''
            this.task=''
            this.previous_work=''
            this.education=''
            this.department=''

          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.address){
              this.$toasted.show("address  "+error.response.data.address, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("reception  "+error.response.data.reception, {
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
            if(error.response.data.main_image){
              this.$toasted.show("main_image  "+error.response.data.main_image, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.phone_number){
              this.$toasted.show("phone_number  "+error.response.data.phone_number, {
                duration: 1000,
                'type': 'error'
              })
            }

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
  margin-top: 80px;
}
.file_label{
  width: 200px;
}
</style>
