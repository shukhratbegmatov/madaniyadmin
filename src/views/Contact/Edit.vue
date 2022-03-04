<template>
  <div>

    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Контакты</h3>
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
                                <label for="first_name">address</label>
                                <input class="form-control" id="first_namee" v-model="address1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_bus</label>
                                <input class="form-control" id="first_namee" v-model="by_bus1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_metro</label>
                                <input class="form-control" id="first_namee" v-model="by_metro1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">order</label>
                                <input class="form-control" id="first_namee" v-model="order1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">reference_point</label>
                                <input class="form-control" id="first_namee" v-model="reference_point1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">working_days</label>
                                <input class="form-control" id="first_namee" v-model="working_days1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">lunch</label>
                                <input class="form-control" id="first_namee" v-model="lunch1" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">weekend</label>
                                <input class="form-control" id="first_namee" v-model="weekend1" type="text"  required>
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
                                <label for="first_name">address</label>
                                <input class="form-control" id="first_namee" v-model="address2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_bus</label>
                                <input class="form-control" id="first_namee" v-model="by_bus2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_metro</label>
                                <input class="form-control" id="first_namee" v-model="by_metro2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">order</label>
                                <input class="form-control" id="first_namee" v-model="order2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">reference_point</label>
                                <input class="form-control" id="first_namee" v-model="reference_point2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">working_days</label>
                                <input class="form-control" id="first_namee" v-model="working_days2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">lunch</label>
                                <input class="form-control" id="first_namee" v-model="lunch2" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">weekend</label>
                                <input class="form-control" id="first_namee" v-model="weekend2" type="text"  required>
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
                                <label for="first_name">address</label>
                                <input class="form-control" id="first_namee" v-model="address3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_bus</label>
                                <input class="form-control" id="first_namee" v-model="by_bus3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_metro</label>
                                <input class="form-control" id="first_namee" v-model="by_metro3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">order</label>
                                <input class="form-control" id="first_namee" v-model="order3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">reference_point</label>
                                <input class="form-control" id="first_namee" v-model="reference_point3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">working_days</label>
                                <input class="form-control" id="first_namee" v-model="working_days3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">lunch</label>
                                <input class="form-control" id="first_namee" v-model="lunch3" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">weekend</label>
                                <input class="form-control" id="first_namee" v-model="weekend3" type="text"  required>
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
                                <label for="first_name">address</label>
                                <input class="form-control" id="first_namee" v-model="address4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_bus</label>
                                <input class="form-control" id="first_namee" v-model="by_bus4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">by_metro</label>
                                <input class="form-control" id="first_namee" v-model="by_metro4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">order</label>
                                <input class="form-control" id="first_namee" v-model="order4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">reference_point</label>
                                <input class="form-control" id="first_namee" v-model="reference_point4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">working_days</label>
                                <input class="form-control" id="first_namee" v-model="working_days4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">lunch</label>
                                <input class="form-control" id="first_namee" v-model="lunch4" type="text"  required>
                              </div>
                            </div>
                            <div class="col-md-12  mb-3">
                              <div>
                                <label for="first_name">weekend</label>
                                <input class="form-control" id="first_namee" v-model="weekend4" type="text"  required>
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
                      <label for="first_name">email</label>
                      <input class="form-control" id="first_namee" v-model="email" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">first_phone_number</label>
                      <input class="form-control" id="first_namee" v-model="first_phone_number" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">second_phone_number</label>
                      <input class="form-control" id="first_namee" v-model="second_phone_number" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">third_phone_number</label>
                      <input class="form-control" id="first_namee" v-model="third_phone_number" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">fax</label>
                      <input class="form-control" id="first_namee" v-model="fax" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">latitude</label>
                      <input class="form-control" id="first_namee" v-model="latitude" type="text"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3 mb-3">
                    <div>
                      <label for="first_name">longitude</label>
                      <input class="form-control" id="first_namee" v-model="longitude" type="text"  required>
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
      document_number:'',
      published_date:'',
      selectitem:'',
      link:'',
      myImages:[],
      imageUrl:[],
      files_name:[],

      longitude:'',
      latitude:'',
      fax:'',
      third_phone_number:'',
      second_phone_number:'',
      first_phone_number:'',
      email:'',


      weekend4:'',
      lunch4:'',
      working_days4:'',
      reference_point4:'',
      order4:'',
      by_metro4:'',
      by_bus4:'',
      address4:'',

      weekend3:'',
      lunch3:'',
      working_days3:'',
      reference_point3:'',
      order3:'',
      by_metro3:'',
      by_bus3:'',
      address3:'',

      weekend2:'',
      lunch2:'',
      working_days2:'',
      reference_point2:'',
      order2:'',
      by_metro2:'',
      by_bus2:'',
      address2:'',

      weekend1:'',
      lunch1:'',
      working_days1:'',
      reference_point1:'',
      order1:'',
      by_metro1:'',
      by_bus1:'',
      address1:''



    }
  },
  mounted() {
    this.$http.get('/api/contact/'+this.$route.query.id,{
      'Accept-Language':'ru'
    })
        .then(res=>{
              this.longitude=res.data.longitude,
              this.latitude=res.data.latitude,
              this.fax=res.data.fax,
              this.third_phone_number=res.data.third_phone_number,
              this.second_phone_number=res.data.second_phone_number
              this.first_phone_number=res.data.first_phone_number,
              this.email=res.data.email,


              this.weekend1=res.data.weekend,
              this.lunch1=res.data.lunch,
              this.working_days1=res.data.working_days,
              this.reference_point1=res.data.reference_point,
              this.order1=res.data.order,
              this.by_metro1=res.data.by_metro,
              this.by_bus1=res.data.by_bus,
              this.address1=res.data.address
        })

    this.$http.get('/api/contact/'+this.$route.query.id,{
      'Accept-Language':'uz-latn'
    })
        .then(res=>{
          this.longitude=res.data.longitude,
              this.latitude=res.data.latitude,
              this.fax=res.data.fax,
              this.third_phone_number=res.data.third_phone_number,
              this.second_phone_number=res.data.second_phone_number
          this.first_phone_number=res.data.first_phone_number,
              this.email=res.data.email,


              this.weekend2=res.data.weekend,
              this.lunch2=res.data.lunch,
              this.working_days2=res.data.working_days,
              this.reference_point2=res.data.reference_point,
              this.order2=res.data.order,
              this.by_metro2=res.data.by_metro,
              this.by_bus2=res.data.by_bus,
              this.address2=res.data.address
        })

    this.$http.get('/api/contact/'+this.$route.query.id,{
      'Accept-Language':'uz-cyrl'
    })
        .then(res=>{
          this.longitude=res.data.longitude,
              this.latitude=res.data.latitude,
              this.fax=res.data.fax,
              this.third_phone_number=res.data.third_phone_number,
              this.second_phone_number=res.data.second_phone_number
          this.first_phone_number=res.data.first_phone_number,
              this.email=res.data.email,


              this.weekend3=res.data.weekend,
              this.lunch3=res.data.lunch,
              this.working_days3=res.data.working_days,
              this.reference_point3=res.data.reference_point,
              this.order3=res.data.order,
              this.by_metro3=res.data.by_metro,
              this.by_bus3=res.data.by_bus,
              this.address3=res.data.address
        })

    this.$http.get('/api/contact/'+this.$route.query.id,{
      'Accept-Language':'en'
    })
        .then(res=>{
          this.longitude=res.data.longitude,
              this.latitude=res.data.latitude,
              this.fax=res.data.fax,
              this.third_phone_number=res.data.third_phone_number,
              this.second_phone_number=res.data.second_phone_number
          this.first_phone_number=res.data.first_phone_number,
              this.email=res.data.email,


              this.weekend4=res.data.weekend,
              this.lunch4=res.data.lunch,
              this.working_days4=res.data.working_days,
              this.reference_point4=res.data.reference_point,
              this.order4=res.data.order,
              this.by_metro4=res.data.by_metro,
              this.by_bus4=res.data.by_bus,
              this.address4=res.data.address
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
      form.append("by_bus", this.by_bus1);
      form.append("by_metro", this.by_metro1);
      form.append("order", this.order1);
      form.append("reference_point", this.reference_point1);
      form.append("working_days", this.working_days1);
      form.append("lunch", this.lunch1);
      form.append("weekend", this.weekend1);

      form.append("email", this.email);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("first_phone_number", this.first_phone_number);
      form.append("second_phone_number", this.second_phone_number);
      form.append("third_phone_number", this.third_phone_number);
      form.append("fax", this.fax);
      this.$http.patch('/api/contact/'+this.$route.query.id+'/',
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

      const form = new FormData();
      form.append("address", this.address1);
      form.append("by_bus", this.by_bus1);
      form.append("by_metro", this.by_metro1);
      form.append("order", this.order1);
      form.append("reference_point", this.reference_point1);
      form.append("working_days", this.working_days1);
      form.append("lunch", this.lunch1);
      form.append("weekend", this.weekend1);

      form.append("email", this.email);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("first_phone_number", this.first_phone_number);
      form.append("second_phone_number", this.second_phone_number);
      form.append("third_phone_number", this.third_phone_number);
      form.append("fax", this.fax);
      this.$http.put('/api/contact/'+this.id+'/',
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

      const form = new FormData();
      form.append("address", this.address1);
      form.append("by_bus", this.by_bus1);
      form.append("by_metro", this.by_metro1);
      form.append("order", this.order1);
      form.append("reference_point", this.reference_point1);
      form.append("working_days", this.working_days1);
      form.append("lunch", this.lunch1);
      form.append("weekend", this.weekend1);

      form.append("email", this.email);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("first_phone_number", this.first_phone_number);
      form.append("second_phone_number", this.second_phone_number);
      form.append("third_phone_number", this.third_phone_number);
      form.append("fax", this.fax);
      this.$http.put('/api/contact/'+this.id+'/',
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

      const form = new FormData();
      form.append("address", this.address1);
      form.append("by_bus", this.by_bus1);
      form.append("by_metro", this.by_metro1);
      form.append("order", this.order1);
      form.append("reference_point", this.reference_point1);
      form.append("working_days", this.working_days1);
      form.append("lunch", this.lunch1);
      form.append("weekend", this.weekend1);

      form.append("email", this.email);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("first_phone_number", this.first_phone_number);
      form.append("second_phone_number", this.second_phone_number);
      form.append("third_phone_number", this.third_phone_number);
      form.append("fax", this.fax);
      this.$http.put('/api/contact/'+this.id+'/',
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
  margin-top: 280px;
}
.file_label{
  width: 200px;
}
</style>
