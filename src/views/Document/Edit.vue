<template>
  <div>

    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Файлы и документы</h3>
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
                          <label for="first_name">document_number</label>
                          <input class="form-control" id="first_namee" v-model="document_number1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">published_date</label>
                          <input class="form-control" id="first_namee" v-model="published_date1" type="date"  required>
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
                          <label for="first_name">document_number</label>
                          <input class="form-control" id="first_namee" v-model="document_number2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">published_date</label>
                          <input class="form-control" id="first_namee" v-model="published_date2" type="date"  required>
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
                          <label for="first_name">document_number</label>
                          <input class="form-control" id="first_namee" v-model="document_number3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">published_date</label>
                          <input class="form-control" id="first_namee" v-model="published_date3" type="date"  required>
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
                          <label for="first_name">document_number</label>
                          <input class="form-control" id="first_namee" v-model="document_number4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">published_date</label>
                          <input class="form-control" id="first_namee" v-model="published_date4" type="date"  required>
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

            <div class="col-md-12  mb-3 px-3 mb-3">
              <div>
                <label for="first_name">Link</label>
                <input class="form-control" id="first_namee" v-model="link" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3 px-3">
              <label for="first_name">Document category</label>
              <select class="form-control" v-model="selectitem" id="inputGroupSelect01">
                <option :value="item.id" v-for="(item,index) in selected.results" :key="index">{{item.title}}</option>
              </select>
            </div>
            <input type="file" class="d-none" id="cr_image"
                   multiple
                   @change="trySubmitFile"
                   accept="*"
                   name="datafiles"
                   ref="datafiles"
            >
            <div><div class="image_groups"> Clear documents
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
              <label for="cr_image" class="btn btn-primary file_label">files</label>
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
      title1:'',
      document_number1:'',
      published_date1:'',

      title2:'',
      document_number2:'',
      published_date2:'',

      title3:'',
      document_number3:'',
      published_date3:'',

      title4:'',
      document_number4:'',
      published_date4:'',
      selected:[],
      selectitem:'',

      myImages:[],
      imageUrl:[],
      files_name:[],
      link:'',

    }
  },
  mounted() {
    this.$http.get('/api/docs-category')
        .then(res=>{
          this.selected=res.data
        })

    this.$http.get('/api/docs/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{
            this.title1=res.data.title
          this.document_number1=res.data.document_number
          this.published_date1=res.data.published_date
          this.selectitem=res.data.document_category_id
        })


    this.$http.get('/api/docs/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{
          this.title2=res.data.title
          this.document_number2=res.data.document_number
          this.published_date2=res.data.published_date
          this.selectitem=res.data.document_category_id
          this.link=res.data.link
        })

    this.$http.get('/api/docs/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{
          this.title3=res.data.title
          this.document_number3=res.data.document_number
          this.published_date3=res.data.published_date
          this.selectitem=res.data.document_category_id
        })

    this.$http.get('/api/docs/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{
          this.title4=res.data.title
          this.document_number4=res.data.document_number
          this.published_date4=res.data.published_date
          this.selectitem=res.data.document_category_id
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
      form.append("file", this.myImages[0]);
      form.append("title", this.title1);
      form.append("document_number", this.document_number1);
      form.append("document_category_id", this.selectitem);
      form.append("published_date", this.published_date1);
      form.append("link", this.link);
      this.$http.put('/api/docs/'+this.$route.query.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'ru'
            }
          })

          .then(()=>{
            this.$toasted.show("Create data success",{
              duration: 1000,
              'type':'info'

            })

          })
          .catch(error =>{
            if(error.response.data.file){
              this.$toasted.show("file  "+error.response.data.file, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.document_category_id){
              this.$toasted.show("Document category  "+error.response.data.document_category_id, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzl(){

      const form = new FormData();
      form.append("file", this.myImages[0]);
      form.append("title", this.title2);
      form.append("document_number", this.document_number2);
      form.append("document_category_id", this.selectitem);
      form.append("published_date", this.published_date2);
      this.$http.put('/api/docs/'+this.$route.query.id+'/',
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


          })
          .catch(error =>{
            if(error.response.data.file){
              this.$toasted.show("file  "+error.response.data.file, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.document_category_id){
              this.$toasted.show("Document category  "+error.response.data.document_category_id, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzk(){

      const form = new FormData();
      form.append("file", this.myImages[0]);
      form.append("title", this.title3);
      form.append("document_number", this.document_number3);
      form.append("document_category_id", this.selectitem);
      form.append("published_date", this.published_date3);
      this.$http.put('/api/docs/'+this.$route.query.id+'/',
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


          })
          .catch(error =>{
            if(error.response.data.file){
              this.$toasted.show("file  "+error.response.data.file, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.document_category_id){
              this.$toasted.show("Document category  "+error.response.data.document_category_id, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_en(){

      const form = new FormData();
      form.append("file", this.myImages[0]);
      form.append("title", this.title4);
      form.append("document_number", this.document_number4);
      form.append("document_category_id", this.selectitem);
      form.append("published_date", this.published_date4);
      this.$http.put('/api/docs/'+this.$route.query.id+'/',
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


          })
          .catch(error =>{
            if(error.response.data.file){
              this.$toasted.show("file  "+error.response.data.file, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.document_category_id){
              this.$toasted.show("Document category  "+error.response.data.document_category_id, {
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
  margin-top: 280px;
}
.file_label{
  width: 200px;
}
</style>
