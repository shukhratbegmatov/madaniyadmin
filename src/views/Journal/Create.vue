<template>
  <div>

    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Журнал</h3>
            </div>
          </div>
          <div class=" main_card">
            <b-card no-body>
            <form @submit.prevent="put_uzl()">
              <div class="row p-3">
                  <div class="col-md-6">
                    <div>
                      <label for="first_name">Journal_number</label>
                      <input class="form-control" id="first_namee" v-model="document_number" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <label for="first_name">published_date</label>
                      <input class="form-control" id="first_namee" v-model="published_date" type="date"  required>
                    </div>
                  </div>

                  <div class="col-md-6">
                      <div class="image_groups"> Clear documents
                        <div @click="imageUrl=[];myImages=[]">
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
                        </div></div>
                    <div>
                    </div>
                      <input type="file" class="d-none" id="cr_image"
                             multiple
                             @change="trySubmitFile"
                             accept="*"
                             name="datafiles"
                             ref="datafiles"
                      >
                      <div>
                        <label for="cr_image" class="btn btn-primary file_label">files</label>
                      </div>
                  </div>
                <div class="col-md-6 mt-2">
                  <div class="p-3">
                    <img :src="imageUrl[1]" width="120px" height="200px" style="object-fit: contain">
                  </div>
                    <input type="file" class="d-none" id="cr_image"
                           multiple
                           @change="trySubmitFile"
                           accept="*"
                           name="datafiles"
                           ref="datafiles"
                    >
                    <div>
                      <label for="cr_image" class="btn btn-primary file_label">Image</label>
                    </div>
                </div>
                <div class="col-md-6">
                  <button class="text-white btn">Create</button>
                </div>
              </div>
            </form>
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
      title:'',
      selected:[],
      document_number:'',
      published_date:'',
      selectitem:'',
      link:'',
      myImages:[],
      imageUrl:[],
      files_name:[],
      description1:'',
      description2:'',
      description3:'',
      description4:''

    }
  },
  mounted() {
    this.$http.get('/api/journal/-category')
        .then(res=>{
          this.selected=res.data
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
    post_ru(){
      if(this.link==''){
        this.link=null
      }
      const form = new FormData();
      form.append("file", this.myImages[0]);
      form.append("image", this.myImages[1]);
      form.append(" journal_number", this.document_number);
      form.append("published_date", this.published_date);
      this.$http.put('/api/journal/'+this.id+'/',
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
            console.log(error.response.data)
          })
    },
    put_uzl(){

      if(this.link==''){
        this.link=null
      }
      const form = new FormData();

      form.append("file", this.myImages[0]);
      form.append("image", this.myImages[1]);
      form.append(" journal_number", this.document_number);
      form.append("published_date", this.published_date);
      this.$http.post('/api/journal/',
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
            console.log(error.response.data)
          })
    },
    put_uzk(){

      if(this.link==''){
        this.link=null
      }
      const form = new FormData();

      form.append("file", this.myImages[0]);
      form.append("image", this.myImages[1]);
      form.append(" journal_number", this.document_number);
      form.append("published_date", this.published_date);
      this.$http.put('/api/journal/'+this.id+'/',
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
            console.log(error.response.data)
          })
    },
    put_en(){

      if(this.link==''){
        this.link=null
      }
      const form = new FormData();

      form.append("file", this.myImages[0]);
      form.append("image", this.myImages[1]);
      form.append(" journal_number", this.document_number);
      form.append("published_date", this.published_date);
      this.$http.put('/api/journal/'+this.id+'/',
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
            console.log(error.response.data)
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
