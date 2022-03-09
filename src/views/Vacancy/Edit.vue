<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Вакансии</h3>
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
                          <label for="first_name">description</label>

                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description1"
                          />
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">obligation</label>
                          <input class="form-control" id="first_namee" v-model="obligation1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">requirement</label>
                          <input class="form-control" id="first_namee" v-model="requirement1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">work_condition</label>
                          <input class="form-control" id="first_namee" v-model="work_condition1" type="text"  required>
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
                          <label for="first_name">description</label>

                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description2"
                          />
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">obligation</label>
                          <input class="form-control" id="first_namee" v-model="obligation2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">requirement</label>
                          <input class="form-control" id="first_namee" v-model="requirement2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">work_condition</label>
                          <input class="form-control" id="first_namee" v-model="work_condition2" type="text"  required>
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
                          <label for="first_name">description</label>

                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description3"
                          />
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">obligation</label>
                          <input class="form-control" id="first_namee" v-model="obligation3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">requirement</label>
                          <input class="form-control" id="first_namee" v-model="requirement3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">work_condition</label>
                          <input class="form-control" id="first_namee" v-model="work_condition3" type="text"  required>
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
                          <label for="first_name">description</label>

                          <quill-editor
                              :required="true"
                              ref="myQuillEditorOrg"
                              v-model="description4"
                          />
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">obligation</label>
                          <input class="form-control" id="first_namee" v-model="obligation4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">requirement</label>
                          <input class="form-control" id="first_namee" v-model="requirement4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">work_condition</label>
                          <input class="form-control" id="first_namee" v-model="work_condition4" type="text"  required>
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
            <div class="col-md-12 mt-5  mb-3">
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

      title1:'',
      description1:'',
      obligation1:'',
      requirement1:'',
      work_condition1:'',

      title2:'',
      description2:'',
      obligation2:'',
      requirement2:'',
      work_condition2:'',

      work_condition4:'',
      requirement4:'',
      obligation4:'',
      title3:'',
      description3:'',
      obligation3:'',
      requirement3:'',
      work_condition3:''

    }
  },
  mounted() {
    this.id=this.$route.query.id

    this.$http.get('/api/vacancy/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{

          this.title1=res.data.title
          this.work_condition1=res.data.work_condition
          this.description1=res.data.description
          this.obligation1=res.data.obligation
          this.requirement1=res.data.requirement
          this.work_condition1=res.data.work_condition
          this.published_date1=res.data.published_date
        })

    this.$http.get('/api/vacancy/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{

          this.title2=res.data.title
          this.work_condition2=res.data.work_condition
          this.description2=res.data.description
          this.obligation2=res.data.obligation
          this.requirement2=res.data.requirement
          this.work_condition2=res.data.work_condition
          this.published_date2=res.data.published_date
        })
    this.$http.get('/api/vacancy/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{

          this.title3=res.data.title
          this.work_condition3=res.data.work_condition
          this.description3=res.data.description
          this.obligation3=res.data.obligation
          this.requirement3=res.data.requirement
          this.work_condition3=res.data.work_condition
          this.published_date3=res.data.published_date
        })
    this.$http.get('/api/vacancy/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{

          this.title4=res.data.title
          this.work_condition4=res.data.work_condition
          this.description4=res.data.description
          this.obligation4=res.data.obligation
          this.requirement4=res.data.requirement
          this.work_condition4=res.data.work_condition
          this.published_date4=res.data.published_date
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
      form.append("obligation", this.obligation1);
      form.append("title", this.title1);
      form.append("description", this.description1);
      form.append("requirement", this.requirement1);
      form.append("work_condition", this.work_condition1);
      form.append("published_date", this.published_date);

      this.$http.put('/api/vacancy/'+this.id+'/',
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
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzl(){


      const form = new FormData();
      form.append("obligation", this.obligation2);
      form.append("title", this.title2);
      form.append("description", this.description2);
      form.append("requirement", this.requirement2);
      form.append("work_condition", this.work_condition2);
      form.append("published_date", this.published_date);

      this.$http.put('/api/vacancy/'+this.id+'/',
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
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzk(){

      const form = new FormData();
      form.append("obligation", this.obligation3);
      form.append("title", this.title3);
      form.append("description", this.description3);
      form.append("requirement", this.requirement3);
      form.append("work_condition", this.work_condition3);
      form.append("published_date", this.published_date);

      this.$http.put('/api/vacancy/'+this.id+'/',

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
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_en(){

      const form = new FormData();
      form.append("obligation", this.obligation4);
      form.append("title", this.title4);
      form.append("description", this.description4);
      form.append("requirement", this.requirement4);
      form.append("work_condition", this.work_condition4);
      form.append("published_date", this.published_date);

      this.$http.put('/api/vacancy/'+this.id+'/',

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
