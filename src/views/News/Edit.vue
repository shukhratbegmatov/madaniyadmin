<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Новости</h3>
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
                          <label for="first_name">content</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="content1"
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
              <b-tab title="Uzbek lotin" >

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
                          <label for="first_name">content</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="content2"
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
                          <label for="first_name">content</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="content3"
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
                          <input class="form-control" id="first_namee" v-model="title4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">content</label>
                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="content4"
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
              <img :src="imageUrl[0]" width="97%" height="300px" style="object-fit: cover;margin-bottom: 40px" alt="">
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
export default {
  components: {
    Navbar,
    Side_menu
  },
  data(){
    return{
      id:'',

      selected:[],
      selectitem:'',
      leader:'',
      reception:'',
      task:'',
      previous_work:'',
      education:'',
      department:'',
      birthdate:'',
      phone_number:'',
      email:'',
      address:'',
      description:'',
      myImages:[],
      imageUrl:[],
      files_name:[],

      title1:'',
      content1:'',

      title2:'',
      content2:'',

      title3:'',
      content3:'',


      title4:'',
      content4:'',

    }
  },
  mounted() {

    this.$http.get('/api/news/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{

          this.title1=res.data.title
          this.content1=res.data.content

          this.imageUrl.push(res.data.image)
        })

    this.$http.get('/api/news/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{

          this.title2=res.data.title
          this.content2=res.data.content
        })
    this.$http.get('/api/news/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{

          this.title3=res.data.title

          this.content3=res.data.content
        })
    this.$http.get('/api/news/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{

          this.title4=res.data.title
          this.content4=res.data.content
        })
    this.id=this.$route.query.id
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
    post_ru(){
      const form = new FormData();
      if(this.myImages.length==0){
        form.append("content", this.content1);
        form.append("title", this.title1);
      }
      else {
        form.append("content", this.content1);
        form.append("title", this.title1);
        form.append("image", this.myImages[0]);

      }

      this.$http.put('/api/news/'+this.$route.query.id+'/',
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
            this.birthdate=''
            this.phone_number=''
            this.email=''
          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.content){
              this.$toasted.show("content  "+error.response.data.content, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.image){
              this.$toasted.show("image  "+error.response.data.image, {
                duration: 1000,
                'type': 'error'
              })
            }


          })
    },
    put_uzl(){

      const form = new FormData();
      if(this.myImages.length==0){
        form.append("content", this.content1);
        form.append("title", this.title1);
      }
      else {
        form.append("content", this.content1);
        form.append("title", this.title1);
        form.append("image", this.myImages[0]);

      }

      this.$http.put('/api/news/'+this.$route.query.id+'/',
          form,
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
            this.document_number=''
            this.published_date=''
            this.leader=''
            this.reception=''
            this.task=''
            this.previous_work=''
            this.education=''
            this.department=''
            this.birthdate=''
            this.phone_number=''
            this.email=''
          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.content){
              this.$toasted.show("content  "+error.response.data.content, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.image){
              this.$toasted.show("image  "+error.response.data.image, {
                duration: 1000,
                'type': 'error'
              })
            }


          })
    },
    put_uzk(){

      const form = new FormData();
      if(this.myImages.length==0){
        form.append("content", this.content1);
        form.append("title", this.title1);
      }
      else {
        form.append("content", this.content1);
        form.append("title", this.title1);
        form.append("image", this.myImages[0]);

      }

      this.$http.put('/api/news/'+this.$route.query.id+'/',

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
            this.birthdate=''
            this.phone_number=''
            this.email=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_en(){

      const form = new FormData();
      if(this.myImages.length==0){
        form.append("content", this.content1);
        form.append("title", this.title1);
      }
      else {
        form.append("content", this.content1);
        form.append("title", this.title1);
        form.append("image", this.myImages[0]);

      }

      this.$http.put('/api/news/'+this.$route.query.id+'/',

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
            this.birthdate=''
            this.phone_number=''
            this.email=''
          })
          .catch(error =>{
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.content){
              this.$toasted.show("content  "+error.response.data.content, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.image){
              this.$toasted.show("image  "+error.response.data.image, {
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
