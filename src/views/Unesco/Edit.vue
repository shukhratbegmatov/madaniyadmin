<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Объекты ЮНЕСКО</h3>
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
                          <label for="first_name">region</label>
                          <input class="form-control" id="first_namee" v-model="region1" type="text"  required>
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
                          <label for="first_name">region</label>
                          <input class="form-control" id="first_namee" v-model="region2" type="text"  required>
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
                          <label for="first_name">region</label>
                          <input class="form-control" id="first_namee" v-model="region3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>

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
                          <input class="form-control" id="first_namee" v-model="title4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">region</label>
                          <input class="form-control" id="first_namee" v-model="region4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">description</label>

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

            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">longitude</label>
                <input class="form-control" id="first_namee" v-model="longitude" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">latitude</label>
                <input class="form-control" id="first_namee" v-model="latitude" type="text"  required>
              </div>
            </div>
            <div class="main_image">
              <div>Main image</div>
              <img :src="imageUrl[0]" width="97%" height="80px" style="object-fit: cover;margin-bottom: 40px" alt="">
            </div>
            <input type="file" class="d-none" id="cr_image"
                   multiple
                   @change="trySubmitFile"
                   accept="image/*"
                   name="datafiles"
                   ref="datafiles"
            >
            <div>
              <label for="cr_image" class="btn btn-primary file_label">main image</label>
            </div>

            <div class="main_image">
              <div>Image</div>
              <img :src="imageUrl1[0]" width="97%" height="80px" style="object-fit: cover;margin-bottom: 40px" alt="">
            </div>
            <input type="file" class="d-none" id="cr_imagee"
                   multiple
                   @change="trySubmitFile1"
                   accept="image/*"
                   name="datafiless"
                   ref="datafiless"
            >
            <div>
              <label for="cr_imagee" class="btn btn-primary file_label">Images</label>
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
      myImages:[],
      imageUrl:[],
      files_name:[],
      content:'',
      about:'',
      website:'',
      obligation:'',
      requirement:'',
      work_condition:'',
      longitude:'',
      latitude:'',
      main_image:'',
      region:'',

      myImages1:[],
      imageUrl1:[],
      files_name1:[],

      title1:'',
      region1:'',
      description1:'',

      title2:'',
      region2:'',
      description2:'',

      title3:'',
      region3:'',
      description3:'',

      title4:'',
      region4:'',
      description4:'',

    }
  },
  mounted() {

    this.$http.get('/api/object/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{

          this.title1=res.data.title
          this.region1=res.data.region
          this.description1=res.data.description
          this.longitude=res.data.longitude
          this.latitude=res.data.latitude
        })

    this.$http.get('/api/object/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{

          this.title2=res.data.title
          this.region2=res.data.region
          this.description2=res.data.description
        })
    this.$http.get('/api/object/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{

          this.title3=res.data.title
          this.region3=res.data.region
          this.description3=res.data.description
        })
    this.$http.get('/api/object/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{

          this.title4=res.data.title
          this.region4=res.data.region
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

      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("region", this.region1);
      form.append("title", this.title1);
      form.append("description", this.description1);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("main_image", this.myImages[0]);

      this.$http.put('/api/object/'+this.$route.query.id+'/',
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
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
    put_uzl(){


      const form = new FormData();

      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("region", this.region2);
      form.append("title", this.title2);
      form.append("description", this.description2);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("main_image", this.myImages[0]);
      this.$http.put('/api/object/'+this.$route.query.id+'/',
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
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
    put_uzk(){

      const form = new FormData();

      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("region", this.region3);
      form.append("title", this.title3);
      form.append("description", this.description3);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("main_image", this.myImages[0]);

      this.$http.put('/api/object/'+this.$route.query.id+'/',

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

          .catch(error =>{
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
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

      const form = new FormData();

      for(let i=0;i<this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("region", this.region4);
      form.append("title", this.title4);
      form.append("description", this.description4);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("main_image", this.myImages[0]);

      this.$http.put('/api/object/'+this.$route.query.id+'/',

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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.region, {
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
