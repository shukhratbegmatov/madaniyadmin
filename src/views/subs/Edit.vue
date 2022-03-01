<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Управление</h3>
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
                          <label for="first_name">about</label>
                          <input class="form-control" id="first_namee" v-model="about" type="text"  required>
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
                          <label for="first_name">about</label>
                          <input class="form-control" id="first_namee" v-model="about" type="text"  required>
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
                          <label for="first_name">about</label>
                          <input class="form-control" id="first_namee" v-model="about" type="text"  required>
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
                          <label for="first_name">about</label>
                          <input class="form-control" id="first_namee" v-model="about" type="text"  required>
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
      about:'',
      id:'',
      title:'',
      selected:[],
      document_number:'',
      published_date:'',
      selectitem:'',

      myImages:[],
      imageUrl:[],
      files_name:[],

      myImages1:[],
      imageUrl1:[],
      files_name1:[],

    }
  },
  mounted() {
    this.$http.get('/api/docs')
        .then(res=>{
          this.selected=res.data
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

      for(let i=0;i<=this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("about", this.about);
      form.append("main_image", this.myImages[0]);
      this.$http.put('/api/about/'+this.id+'/',
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
            this.document_number='',
                this.published_date='',
                this.selectitem=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzl(){

      const form = new FormData();

      for(let i=0;i<=this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("about", this.about);
      form.append("main_image", this.myImages[0]);
      this.$http.post('/api/about/',
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
            this.document_number='',
                this.published_date='',
                this.selectitem=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzk(){

      const form = new FormData();

      for(let i=0;i<=this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("about", this.about);
      form.append("main_image", this.myImages[0]);
      this.$http.post('/api/about/',
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
            this.document_number='',
                this.published_date='',
                this.selectitem=''
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

      for(let i=0;i<=this.myImages.length;i++){
        form.append(`images[${i}]image`,  this.myImages1[i]);
      }
      form.append("about", this.about);
      form.append("main_image", this.myImages[0]);
      this.$http.post('/api/about/',
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
            this.document_number='',
                this.published_date='',
                this.selectitem=''
          })
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
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
