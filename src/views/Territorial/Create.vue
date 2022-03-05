<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Территориальные управления</h3>
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
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">email</label>
                <input class="form-control" id="first_namee" v-model="email" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">phone_number</label>
                <input class="form-control" id="first_namee" v-model="phone_number" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">Region</label>
                <select v-model="selected" class="form-control">
                  <option value="1">Toshkent</option>
                  <option value="2" >Qashqadaryo</option>
                  <option value="3">Surxondaryo</option>
                  <option value="4">Samarqand</option>
                  <option value="5" >Buxoro</option>
                  <option value="6">Jizzax</option>
                  <option value="7">Namangan</option>
                  <option value="8" >Navoiy</option>
                  <option value="9">Andijon</option>
                  <option value="10">Fargona</option>
                  <option value="11" >Sirdaryo</option>
                  <option value="12">Toshkent viloyati</option>
                  <option value="13">Qoraqalpog'iston</option>
                  <option value="14">Xorazm</option>
                </select>
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
import Navbar from "../../components/Navbar";
import Side_menu from '../../components/Side_menu'
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


      title2:'',
      address2:'',
      reception2:'',
      description2:'',

      title3:'',
      address3:'',
      reception3:'',
      description3:'',

      title4:'',
      address4:'',
      reception4:'',
      description4:'',

      title1:'',
      address1:'',
      reception1:'',
      description1:'',
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
      form.append("address", this.address1);
      form.append("title", this.title1);
      form.append("description", this.description1);
      form.append("reception", this.reception1);
      form.append("phone_number", this.phone_number);
      form.append("email", this.email);
      form.append("region", this.selected);

      this.$http.put('/api/territorial/'+this.id+'/',
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

          })
          .catch(error =>{
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


            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.Region, {
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
      form.append("address", this.address2);
      form.append("title", this.title2);
      form.append("description", this.description2);
      form.append("reception", this.reception2);
      form.append("phone_number", this.phone_number);
      form.append("email", this.email);
      form.append("region", this.selected);

      this.$http.post('/api/territorial/',
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
            this.birthdate=''

          })

          .catch(error =>{
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


            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.Region, {
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
      form.append("address", this.address3);
      form.append("title", this.title3);
      form.append("description", this.description3);
      form.append("reception", this.reception3);
      form.append("phone_number", this.phone_number);
      form.append("email", this.email);
      form.append("region", this.selected);

      this.$http.put('/api/territorial/'+this.id+'/',

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

          })

          .catch(error =>{
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


            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.Region, {
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
      form.append("address", this.address4);
      form.append("title", this.title4);
      form.append("description", this.description4);
      form.append("reception", this.reception4);
      form.append("phone_number", this.phone_number);
      form.append("email", this.email);
      form.append("region", this.selected);

      this.$http.put('/api/territorial/'+this.id+'/',

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

          })

          .catch(error =>{
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


            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
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
            if(error.response.data.region){
              this.$toasted.show("region  "+error.response.data.Region, {
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
  margin-top: 280px;
}
.file_label{
  width: 200px;
}
</style>
