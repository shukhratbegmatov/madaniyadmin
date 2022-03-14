<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Объекты</h3>
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
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">Title</label>
                                  <input class="form-control" id="first_namee" v-model="title2" type="text"  required>
                                </div>
                              </div>
                              <div>
                                <label for="first_name">description</label>

                                <quill-editor
                                    :required="true"
                                    ref="myQuillEditorOrg"
                                    v-model="description2"
                                />
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">address</label>
                                  <input class="form-control" id="first_namee" v-model="address2" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">ownership_type</label>
                                  <input class="form-control" id="first_namee" v-model="ownership_type2" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">negative_effect</label>
                                  <input class="form-control" id="first_namee" v-model="negative_effect2" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">required_actions</label>
                                  <input class="form-control" id="first_namee" v-model="required_actions2" type="text"  required>
                                </div>
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
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">Title</label>
                                  <input class="form-control" id="first_namee" v-model="title1" type="text"  required>
                                </div>
                              </div>
                              <div>
                                <label for="first_name">description</label>

                                <quill-editor
                                    :required="true"
                                    ref="myQuillEditorOrg"
                                    v-model="description1"
                                />
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">address</label>
                                  <input class="form-control" id="first_namee" v-model="address1" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">ownership_type</label>
                                  <input class="form-control" id="first_namee" v-model="ownership_type1" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">negative_effect</label>
                                  <input class="form-control" id="first_namee" v-model="negative_effect1" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">required_actions</label>
                                  <input class="form-control" id="first_namee" v-model="required_actions1" type="text"  required>
                                </div>
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
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">Title</label>
                                  <input class="form-control" id="first_namee" v-model="title3" type="text"  required>
                                </div>
                              </div>
                              <div>
                                <label for="first_name">description</label>

                                <quill-editor
                                    :required="true"
                                    ref="myQuillEditorOrg"
                                    v-model="description3"
                                />
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">address</label>
                                  <input class="form-control" id="first_namee" v-model="address3" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">ownership_type</label>
                                  <input class="form-control" id="first_namee" v-model="ownership_type3" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">negative_effect</label>
                                  <input class="form-control" id="first_namee" v-model="negative_effect3" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">required_actions</label>
                                  <input class="form-control" id="first_namee" v-model="required_actions3" type="text"  required>
                                </div>
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
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">Title</label>
                                  <input class="form-control" id="first_namee" v-model="title4" type="text"  required>
                                </div>
                              </div>
                              <div>
                                <label for="first_name">description</label>

                                <quill-editor
                                    :required="true"
                                    ref="myQuillEditorOrg"
                                    v-model="description4"
                                />
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">address</label>
                                  <input class="form-control" id="first_namee" v-model="address4" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">ownership_type</label>
                                  <input class="form-control" id="first_namee" v-model="ownership_type4" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">negative_effect</label>
                                  <input class="form-control" id="first_namee" v-model="negative_effect4" type="text"  required>
                                </div>
                              </div>
                              <div class="col-md-12  mb-3">
                                <div>
                                  <label for="first_name">required_actions</label>
                                  <input class="form-control" id="first_namee" v-model="required_actions4" type="text"  required>
                                </div>
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
                      <label for="first_name">condition</label>
                      <input class="form-control" id="first_namee" v-model="condition" type="number"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">technical_condition</label>
                      <input class="form-control" id="first_namee" v-model="technical_condition" type="number"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">is_secure</label>
                    </div>
                    <div>
                      <a class="isUnesco" :class="{'active':is_secure==true}" @click="is_secure=true">True</a>
                      <a class="isUnesco" :class="{'active':is_secure==false}" @click="is_secure=false">  False</a>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">is_on_Unesco</label>
                    </div>
                    <div>
                      <a class="isUnesco" :class="{'active':is_on_Unesco==true}" @click="is_on_Unesco=true">True</a>
                      <a class="isUnesco" :class="{'active':is_on_Unesco==false}" @click="is_on_Unesco=false">  False</a>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">longitude</label>
                      <input class="form-control" id="first_namee" v-model="longitude" type="number"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3">
                    <div>
                      <label for="first_name">latitude</label>
                      <input class="form-control" id="first_namee" v-model="latitude" type="number"  required>
                    </div>
                  </div>
                  <div class="col-md-12  mb-3 px-3">
                    <label for="first_name">Objects category</label>
                    <select class="form-control" v-model="selectitem" id="inputGroupSelect01">
                      <option :value="item.id" v-for="(item,index) in selected.results" :key="index">{{item.title}}</option>
                    </select>
                  </div>

                  <div>
                    <label for="first_name">Region</label>
                    <select v-model="region" class="form-control mb-3 px-5">
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
                      <option value="13">Xorazm</option>
                      <option value="14">Qoraqalpog'iston</option>
                    </select>
                  </div>
                  <div class="main_image">
                    <div class="image_groups"> clear files
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
                    <div>Image</div>
                    <img :src="imageUrl[0]" width="97%" height="300px" style="object-fit: cover;margin-bottom: 40px" alt="">
                  </div>

                  <input type="file" class="d-none" id="cr_image"
                         multiple
                         @change="trySubmitFile"
                         accept="image/*"
                         name="datafiles"
                         ref="datafiles"
                  >
                  <div>
                    <label for="cr_image" class="btn btn-primary file_label">Image</label>
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
      region:'',
      about1:'',
      about2:'',
      about3:'',
      about4:'',
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


      latitude:'',
      longitude:'',
      is_on_Unesco:true,
      is_secure:true,
      technical_condition:'',
      condition:'',


      required_actions1:'',
      negative_effect1:'',
      ownership_type1:'',
      address1:'',
      description1:'',
      title1:'',

      required_actions2:'',
      negative_effect2:'',
      ownership_type2:'',
      address2:'',
      description2:'',
      title2:'',

      required_actions3:'',
      negative_effect3:'',
      ownership_type3:'',
      address3:'',
      description3:'',
      title3:'',

      required_actions4:'',
      negative_effect4:'',
      ownership_type4:'',
      address4:'',
      description4:'',
      title4:'',

    }
  },
  mounted() {
    this.$http.get('/api/heritage-category')
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
      form.append("title", this.title1);
      form.append("description", this.description1);
      form.append("address", this.address1);
      form.append("ownership_type", this.ownership_type1);
      form.append("negative_effect", this.negative_effect1);
      form.append("required_actions", this.required_actions1);
      form.append("condition", this.condition);
      form.append("technical_condition", this.technical_condition);
      form.append("is_secure", this.is_secure);
      form.append("is_on_Unesco", this.is_on_Unesco);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("heritage_category_id", this.selectitem);
      form.append("region", this.region);
      form.append("image", this.myImages[0]);
      this.$http.put('/api/heritage/'+this.id+'/',
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
            this.title='',
                this.about='',
                this.document_number='',
                this.published_date=''
          })

          .catch(error =>{
            if(error.response.data.about){
              this.$toasted.show("about  "+error.response.data.about, {
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

      form.append("title", this.title2);
      form.append("description", this.description2);
      form.append("address", this.address2);
      form.append("ownership_type", this.ownership_type2);
      form.append("negative_effect", this.negative_effect2);
      form.append("required_actions", this.required_actions2);
      form.append("condition", this.condition);
      form.append("technical_condition", this.technical_condition);
      form.append("is_secure", this.is_secure);
      form.append("is_on_Unesco", this.is_on_Unesco);
      form.append("region", this.region);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("heritage_category_id", this.selectitem);
      form.append("image", this.myImages[0]);
      this.$http.post('/api/heritage/',
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
            this.title='',
                this.about='',
                this.document_number='',
                this.published_date=''
          })

          .catch(error =>{
            if(error.response.data.about){
              this.$toasted.show("about  "+error.response.data.about, {
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

      form.append("title", this.title3);
      form.append("description", this.description3);
      form.append("address", this.address3);
      form.append("ownership_type", this.ownership_type3);
      form.append("negative_effect", this.negative_effect3);
      form.append("required_actions", this.required_actions3);
      form.append("condition", this.condition);
      form.append("region", this.region);
      form.append("technical_condition", this.technical_condition);
      form.append("is_secure", this.is_secure);
      form.append("is_on_Unesco", this.is_on_Unesco);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("heritage_category_id", this.selectitem);
      form.append("image", this.myImages[0]);
      this.$http.put('/api/heritage/'+this.id+'/',
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
            this.about='',
                this.document_number='',
                this.published_date=''
          })

          .catch(error =>{
            if(error.response.data.about){
              this.$toasted.show("about  "+error.response.data.about, {
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

      form.append("title", this.title4);
      form.append("description", this.description4);
      form.append("address", this.address4);
      form.append("ownership_type", this.ownership_type4);
      form.append("negative_effect", this.negative_effect4);
      form.append("required_actions", this.required_actions4);
      form.append("condition", this.condition);
      form.append("technical_condition", this.technical_condition);
      form.append("is_secure", this.is_secure);
      form.append("is_on_Unesco", this.is_on_Unesco);
      form.append("region", this.region);
      form.append("longitude", this.longitude);
      form.append("latitude", this.latitude);
      form.append("heritage_category_id", this.selectitem);
      form.append("image", this.myImages[0]);
      this.$http.put('/api/heritage/'+this.id+'/',
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

            this.about='',
                this.title=''
            this.document_number='',
                this.published_date=''
          })

          .catch(error =>{
            if(error.response.data.about){
              this.$toasted.show("about  "+error.response.data.about, {
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
.card .isUnesco{
  background: #ffffff !important;
  width: 150px;
  height: 50px;
  padding: 10px 20px;
  color: #333333;
  border: 1px solid #333;
}
.card .isUnesco.active{
  background: #0ea271;
  color: #ffffff;
}
</style>
