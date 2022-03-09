<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Пресс-секретарь</h3>
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
                          <input class="form-control" id="first_namee" v-model="title" type="text"  required>
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
                          <input class="form-control" id="first_namee" v-model="title" type="text"  required>
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
                          <input class="form-control" id="first_namee" v-model="title" type="text"  required>
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
                          <input class="form-control" id="first_namee" v-model="title" type="text"  required>
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
          <div class="col-md-3">
            <div class="col-md-12  mb-3 px-4 mt-4" >
              <div>
                <label for="first_name">published_date</label>
                <input class="form-control" id="first_namee" v-model="published_date" type="date"  required>
              </div>
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
      title:'',
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
      content:'',
      about:'',
      website:'',
      description1:'',
      description2:'',
      description3:'',
      description4:''

    }
  },
  mounted() {
    this.$http.get('/api/management')
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
      const form = new FormData();
      form.append("published_date", this.published_date);
      form.append("title", this.title);
      form.append("description", this.description1);
      this.$http.put('/api/press-secretary/'+this.id+'/',
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
            if(error.response.data.published_date){
              this.$toasted.show("title  "+error.response.data.published_date, {
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
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzl(){

      const form = new FormData();

      form.append("published_date", this.published_date);
      form.append("title", this.title);
      form.append("description", this.description2);
      this.$http.post('/api/press-secretary/',
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
            if(error.response.data.published_date){
              this.$toasted.show("title  "+error.response.data.published_date, {
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
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzk(){

      const form = new FormData();
      form.append("published_date", this.published_date);
      form.append("title", this.title);
      form.append("description", this.description3);
      this.$http.put('/api/press-secretary/'+this.id+'/',

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
            if(error.response.data.published_date){
              this.$toasted.show("published_date  "+error.response.data.published_date, {
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
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_en(){

      const form = new FormData();
      form.append("published_date", this.published_date);
      form.append("title", this.title);
      form.append("description", this.description4);
      this.$http.put('/api/press-secretary/'+this.id+'/',

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
