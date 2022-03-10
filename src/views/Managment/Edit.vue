<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">О нас</h3>
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
                          <label for="first_name">leader</label>
                          <input class="form-control" id="first_namee" v-model="leader1" type="text"  required>
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
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">previous_work</label>
                          <input class="form-control" id="first_namee" v-model="previous_work1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">education</label>
                          <input class="form-control" id="first_namee" v-model="education1" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">department</label>
                          <input class="form-control" id="first_namee" v-model="department1" type="text"  required>
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
                          <label for="first_name">leader</label>
                          <input class="form-control" id="first_namee" v-model="leader2" type="text"  required>
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
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">previous_work</label>
                          <input class="form-control" id="first_namee" v-model="previous_work2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">education</label>
                          <input class="form-control" id="first_namee" v-model="education2" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">department</label>
                          <input class="form-control" id="first_namee" v-model="department2" type="text"  required>
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
                          <label for="first_name">leader</label>
                          <input class="form-control" id="first_namee" v-model="leader3" type="text"  required>
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
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">previous_work</label>
                          <input class="form-control" id="first_namee" v-model="previous_work3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">education</label>
                          <input class="form-control" id="first_namee" v-model="education3" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">department</label>
                          <input class="form-control" id="first_namee" v-model="department3" type="text"  required>
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
                          <label for="first_name">leader</label>
                          <input class="form-control" id="first_namee" v-model="leader4" type="text"  required>
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
                          <label for="first_name">task</label>
                          <input class="form-control" id="first_namee" v-model="task4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">previous_work</label>
                          <input class="form-control" id="first_namee" v-model="previous_work4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">education</label>
                          <input class="form-control" id="first_namee" v-model="education4" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">department</label>
                          <input class="form-control" id="first_namee" v-model="department4" type="text"  required>
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
                <label for="first_name">phone_number</label>
                <input class="form-control" id="first_namee" v-model="phone_number" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">email</label>
                <input class="form-control" id="first_namee" v-model="email" type="text"  required>
              </div>
            </div>
            <div class="col-md-12  mb-3">
              <label for="first_name">Managment category</label>
              <select class="form-control px-5" v-model="selectitem" id="inputGroupSelect01">
                <option :value="item.id" v-for="(item,index) in selected.results" :key="index">{{item.title}}</option>
              </select>
            </div>
            <div>
              <label for="first_name">Region</label>
              <select v-model="status" class="form-control mb-3 px-5">
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
                <option value="14">Xorazm</option>
                <option value="13">Qoraqalpog'iston</option>
              </select>
            </div>
            <div class="col-md-12  mb-3">
              <div>
                <label for="first_name">Birthdate</label>
                <input class="form-control" id="first_namee" v-model="birthdate1" type="date"  required>
              </div>
            </div>
            <div class="main_image">

              <div class="image_groups"> Main image
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
      title1:'',
      leader1:'',
      reception1:'',
      task1:'',
      previous_work1:'',
      education1:'',
      department1:'',
      title2:'',
      leader2:'',
      reception2:'',
      task2:'',
      previous_work2:'',
      education2:'',
      department2:'',

      title3:'',
      leader3:'',
      reception3:'',
      task3:'',
      previous_work3:'',
      education3:'',
      department3:'',

      title4:'',
      leader4:'',
      reception4:'',
      task4:'',
      previous_work4:'',
      education4:'',
      department4:'',

      selected:[],
      status:'',
      selectitem:'',


      birthdate:'',
      phone_number:'',
      email:'',

      myImages:[],
      imageUrl:[],
      files_name:[],

    }
  },
  mounted() {
    this.$http.get('/api/management')
        .then(res=>{
          this.selected=res.data
        })

    this.$http.get('/api/leaders/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{
          this.title1=res.data.title
          this.leader1=res.data.leader
          this.reception1=res.data.reception
          this.task1=res.data.task
          this.previous_work1=res.data.previous_work
          this.education1=res.data.education
          this.department1=res.data.department
          this.phone_number=res.data.phone_number
          this.email=res.data.email
          this.selectitem=res.data.management_category_id
          this.status=res.data.status
        })

    this.$http.get('/api/leaders/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-latn'
      }
    })
        .then(res=>{
          this.title2=res.data.title
          this.leader2=res.data.leader
          this.reception2=res.data.reception
          this.task2=res.data.task
          this.previous_work2=res.data.previous_work
          this.education2=res.data.education
          this.department2=res.data.department
        })

    this.$http.get('/api/leaders/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'uz-cyrl'
      }
    })
        .then(res=>{
          this.title3=res.data.title
          this.leader3=res.data.leader
          this.reception3=res.data.reception
          this.task3=res.data.task
          this.previous_work3=res.data.previous_work
          this.education3=res.data.education
          this.department3=res.data.department
        })


    this.$http.get('/api/leaders/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'en'
      }
    })
        .then(res=>{
          this.title4=res.data.title
          this.leader4=res.data.leader
          this.reception4=res.data.reception
          this.task4=res.data.task
          this.previous_work4=res.data.previous_work
          this.education4=res.data.education
          this.department4=res.data.department
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
      form.append("image", this.myImages[0]);
      form.append("leader", this.leader1);
      form.append("title", this.title1);
      form.append("reception", this.reception1);
      form.append("task", this.task1);
      form.append("previous_work",this.previous_work1);
      form.append("education", this.education1);
      form.append("department", this.department1);
      form.append("birthdate", this.birthdate);
      form.append("phone_number",this.phone_number);
      form.append("status",this.status);

      form.append("email", this.email);
      form.append("management_category_id", this.selectitem);
      this.$http.put('/api/leaders/'+this.$route.query.id+'/',
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
            if(error.response.data.leader){
              this.$toasted.show("leader  "+error.response.data.leader, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.birthdate){
              this.$toasted.show("Birthdate  "+error.response.data.birthdate, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("leader  "+error.response.data.reception, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.task){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.previous_work){
              this.$toasted.show("leader  "+error.response.data.previous_work, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.education){
              this.$toasted.show("education  "+error.response.data.education, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.department){
              this.$toasted.show("department  "+error.response.data.department, {
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
            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzl(){

      const form = new FormData();
      form.append("image", this.myImages[0]);
      form.append("leader", this.leader2);
      form.append("title", this.title2);
      form.append("reception", this.reception2);
      form.append("task", this.task2);
      form.append("previous_work",this.previous_work2);
      form.append("education", this.education2);
      form.append("department", this.department2);
      form.append("birthdate", this.birthdate);
      form.append("phone_number",this.phone_number);
      form.append("status",this.status);

      form.append("email", this.email);
      form.append("management_category_id", this.selectitem);
      this.$http.put('/api/leaders/'+this.$route.query.id+'/',
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
            if(error.response.data.leader){
              this.$toasted.show("leader  "+error.response.data.leader, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.birthdate){
              this.$toasted.show("Birthdate  "+error.response.data.birthdate, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("leader  "+error.response.data.reception, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.task){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.previous_work){
              this.$toasted.show("leader  "+error.response.data.previous_work, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.education){
              this.$toasted.show("education  "+error.response.data.education, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.department){
              this.$toasted.show("department  "+error.response.data.department, {
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
            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_uzk(){

      const form = new FormData();
      form.append("image", this.myImages[0]);
      form.append("leader", this.leader3);
      form.append("title", this.title3);
      form.append("reception", this.reception3);
      form.append("task", this.task3);
      form.append("previous_work",this.previous_work3);
      form.append("education", this.education3);
      form.append("department", this.department3);
      form.append("birthdate", this.birthdate);
      form.append("phone_number",this.phone_number);
      form.append("status",this.status);

      form.append("email", this.email);
      form.append("management_category_id", this.selectitem);
      this.$http.put('/api/leaders/'+this.$route.query.id+'/',

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
            if(error.response.data.title){
              this.$toasted.show("title  "+error.response.data.title, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.leader){
              this.$toasted.show("leader  "+error.response.data.leader, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.birthdate){
              this.$toasted.show("Birthdate  "+error.response.data.birthdate, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("leader  "+error.response.data.reception, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.task){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.previous_work){
              this.$toasted.show("leader  "+error.response.data.previous_work, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.education){
              this.$toasted.show("education  "+error.response.data.education, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.department){
              this.$toasted.show("department  "+error.response.data.department, {
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
            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
                duration: 1000,
                'type': 'error'
              })
            }
          })
    },
    put_en(){

      const form = new FormData();
      form.append("image", this.myImages[0]);
      form.append("leader", this.leader4);
      form.append("title", this.title4);
      form.append("reception", this.reception4);
      form.append("task", this.task4);
      form.append("previous_work",this.previous_work4);
      form.append("education", this.education4);
      form.append("department", this.department4);
      form.append("birthdate", this.birthdate);
      form.append("phone_number",this.phone_number);
      form.append("status",this.status);

      form.append("email", this.email);
      form.append("management_category_id", this.selectitem);
      this.$http.put('/api/leaders/'+this.$route.query.id+'/',

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
            if(error.response.data.leader){
              this.$toasted.show("leader  "+error.response.data.leader, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.birthdate){
              this.$toasted.show("Birthdate  "+error.response.data.birthdate, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.reception){
              this.$toasted.show("leader  "+error.response.data.reception, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.task){
              this.$toasted.show("task  "+error.response.data.task, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.previous_work){
              this.$toasted.show("leader  "+error.response.data.previous_work, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.education){
              this.$toasted.show("education  "+error.response.data.education, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.department){
              this.$toasted.show("department  "+error.response.data.department, {
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
            if(error.response.data.email){
              this.$toasted.show("email  "+error.response.data.email, {
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
