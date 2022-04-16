<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Открытые данные</h3>
            </div>
          </div>
          <div class=" main_card">
            <b-card no-body>
              <div class="row">
                <div class="col-md-9">
                  <b-tabs card>
                    <b-tab title="Uzbek lotin"  active>

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
                                <input class="form-control" id="first_namee" v-model="description" type="text"  required>
                              </div>
                            </div>

                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">owner</label>
                                <input class="form-control" id="first_namee" v-model="owner" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">contact</label>
                                <input class="form-control" id="first_namee" v-model="contact" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">id_number</label>
                                <input class="form-control" id="first_namee" v-model="id_number" type="text"  required>
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
                                <input class="form-control" id="first_namee" v-model="title2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">description</label>
                                <input class="form-control" id="first_namee" v-model="description2" type="text"  required>
                              </div>
                            </div>

                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">owner</label>
                                <input class="form-control" id="first_namee" v-model="owner2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">contact</label>
                                <input class="form-control" id="first_namee" v-model="contact2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">id_number</label>
                                <input class="form-control" id="first_namee" v-model="id_number2" type="text"  required>
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
                                <input class="form-control" id="first_namee" v-model="description3" type="text"  required>
                              </div>
                            </div>

                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">owner</label>
                                <input class="form-control" id="first_namee" v-model="owner3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">contact</label>
                                <input class="form-control" id="first_namee" v-model="contact3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">id_number</label>
                                <input class="form-control" id="first_namee" v-model="id_number3" type="text"  required>
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
                                <input class="form-control" id="first_namee" v-model="description4" type="text"  required>
                              </div>
                            </div>

                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">owner</label>
                                <input class="form-control" id="first_namee" v-model="owner4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">contact</label>
                                <input class="form-control" id="first_namee" v-model="contact4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">id_number</label>
                                <input class="form-control" id="first_namee" v-model="id_number4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">initial_published_date</label>
                                <input class="form-control" id="first_namee" v-model="initial_published_date4" type="date"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">last_published_date</label>
                                <input class="form-control" id="first_namee" v-model="last_published_date4" type="date"  required>
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
                      <label for="first_name">url</label>
                      <input class="form-control" id="first_namee" v-model="url" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">initial_published_date</label>
                      <input class="form-control" id="first_namee" v-model="initial_published_date" type="date"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">last_published_date</label>
                      <input class="form-control" id="first_namee" v-model="last_published_date" type="date"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <input type="file"  id="cr_imagee"
                           multiple
                           @change="trySubmitFile"
                           accept="*"
                           name="datafiles1"
                           ref="datafiles1"
                    >
                    <div>
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
      about:'',
      id:'',

      selected:[],
      document_number:'',
      published_date:'',
      selectitem:'',
      url:'',
      myImages:[],
      imageUrl:[],
      files_name:[],

      myImages1:[],
      imageUrl1:[],
      files_name1:[],

      title:'',
      description:'',
      last_published_date:'',
      initial_published_date:'',
      id_number:'',
      contact:'',
      owner:'',

      title2:'',
      description2:'',
      last_published_date2:'',
      initial_published_date2:'',
      id_number2:'',
      contact2:'',
      owner2:'',

      title3:'',
      description3:'',
      last_published_date3:'',
      initial_published_date3:'',
      id_number3:'',
      contact3:'',
      owner3:'',

      title4:'',
      description4:'',
      last_published_date4:'',
      initial_published_date4:'',
      id_number4:'',
      contact4:'',
      owner4:'',

    }
  },
  mounted() {
    this.$http.get('/api/open-data/'+this.$route.query.id+'/',{
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('m_token'),
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{
          this.title=res.data.title
          this.description=res.data.description
          this.owner=res.data.owner
          this.contact=res.data.contact
          this.id_number=res.data.id_number
          this.url=res.data.url
          this.initial_published_date=(res.data.initial_published_date).slice(0,10)
          this.last_published_date=(res.data.last_published_date).slice(0,10)
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

      if( this.myImages.length==0){

        form.append("owner", this.owner2);
        form.append("contact", this.contact2);
        form.append("id_number", this.id_number2);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description2);
        form.append("title", this.title2);
        form.append("url", this.url);
      }
      else {
        form.append("owner", this.owner2);
        form.append("contact", this.contact2);
        form.append("id_number", this.id_number2);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description2);
        form.append("title", this.title2);
        form.append("url", this.url);
        form.append("file", this.myImages[0]);
      }
      this.$http.put('/api/open-data/'+this.$route.query.id+'/',
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
      if( this.myImages.length==0) {
        form.append("owner", this.owner);
        form.append("contact", this.contact);
        form.append("id_number", this.id_number);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description);
        form.append("title", this.title);
        form.append("url", this.url);

      }
      else {
        form.append("owner", this.owner);
        form.append("contact", this.contact);
        form.append("id_number", this.id_number);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description);
        form.append("title", this.title);
        form.append("url", this.url);
        form.append("file", this.myImages[0]);

      }

      this.$http.put('/api/open-data/'+this.$route.query.id+'/',
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

          })
          .catch(error=> {
            this.$toasted.show(error.response.data.url, {
              duration: 1000,
              'type': 'error'
            })
          })
    },
    put_uzk(){

      const form = new FormData();
      if( this.myImages.length==0) {
        form.append("owner", this.owner3);
        form.append("contact", this.contact3);
        form.append("id_number", this.id_number3);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description3);
        form.append("title", this.title3);
        form.append("url", this.url);
      }
      else {
        form.append("owner", this.owner3);
        form.append("contact", this.contact3);
        form.append("id_number", this.id_number3);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description3);
        form.append("title", this.title3);
        form.append("url", this.url);
        form.append("file", this.myImages[0]);
      }


      this.$http.put('/api/open-data/'+this.$route.query.id+'/',
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
      if( this.myImages.length==0) {

        form.append("owner", this.owner4);
        form.append("contact", this.contact4);
        form.append("id_number", this.id_number4);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description4);
        form.append("title", this.title4);
        form.append("url", this.url);
      }
      else {
        form.append("owner", this.owner4);
        form.append("contact", this.contact4);
        form.append("id_number", this.id_number4);
        form.append("initial_published_date", this.initial_published_date);
        form.append("last_published_date", this.last_published_date);
        form.append("description", this.description4);
        form.append("title", this.title4);
        form.append("url", this.url);
        form.append("file", this.myImages[0]);
      }

      this.$http.put('/api/open-data/'+this.$route.query.id+'/',
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
