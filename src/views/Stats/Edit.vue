<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Статистика</h3>
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
                          <label for="first_name">object_quantity</label>
                          <input class="form-control" id="first_namee" v-model="object_quantity" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">restored_object</label>
                          <input class="form-control" id="first_namee" v-model="restored_object" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">restoring_object</label>
                          <input class="form-control" id="first_namee" v-model="restoring_object" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">object_in_rent_state</label>
                          <input class="form-control" id="first_namee" v-model="object_in_rent_state" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">object_in_rent</label>
                          <input class="form-control" id="first_namee" v-model="object_in_rent" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">museum_funds_quantity</label>
                          <input class="form-control" id="first_namee" v-model="museum_funds_quantity" type="text"  required>
                        </div>
                      </div>
                      <div class="col-md-12  mb-3">
                        <div>
                          <label for="first_name">exhibit_quantity</label>
                          <input class="form-control" id="first_namee" v-model="exhibit_quantity" type="text"  required>
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
      object_quantity:'',
      restored_object:'',
      restoring_object:'',
      object_in_rent_state:'',
      object_in_rent:'',
      exhibit_quantity:'',
      museum_funds_quantity:''

    }
  },
  mounted() {
    this.$http.get('/api/management')
        .then(res=>{
          this.selected=res.data
        })
    this.$http.get('/api/stats/'+this.$route.query.id,{
      headers:{
        'Accept-Language':'ru'
      }
    })
        .then(res=>{
        this.museum_funds_quantity=res.data.museum_funds_quantity
          this.exhibit_quantity=res.data.exhibit_quantity
          this.object_in_rent=res.data.object_in_rent
          this.object_in_rent=res.data.object_in_rent
          this.object_in_rent_state=res.data.object_in_rent_state
          this.restoring_object=res.data.restoring_object
          this.restored_object=res.data.restored_object
          this.object_quantity=res.data.object_quantity
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
      form.append("object_quantity", this.object_quantity);
      form.append("restored_object", this.restored_object);
      form.append("restoring_object", this.restoring_object);
      form.append("object_in_rent_state", this.object_in_rent_state);
      form.append("object_in_rent", this.object_in_rent);
      form.append("exhibit_quantity", this.exhibit_quantity);
      form.append("museum_funds_quantity", this.museum_funds_quantity);
      this.$http.put('/api/stats/'+this.id+'/',
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
            if(error.response.data.object_quantity){
              this.$toasted.show("object_quantity  "+error.response.data.object_quantity, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.restored_object){
              this.$toasted.show("restored_object  "+error.response.data.restored_object, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.restoring_object){
              this.$toasted.show("restoring_object  "+error.response.data.restoring_object, {
                duration: 1000,
                'type': 'error'
              })
            }


            if(error.response.data.object_in_rent_state){
              this.$toasted.show("object_in_rent_state  "+error.response.data.object_in_rent_state, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.object_in_rent){
              this.$toasted.show("object_in_rent  "+error.response.data.object_in_rent, {
                duration: 1000,
                'type': 'error'
              })
            }
            if(error.response.data.museum_funds_quantity){
              this.$toasted.show("museum_funds_quantity  "+error.response.data.museum_funds_quantity, {
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

      form.append("url", this.url);
      form.append("title", this.title);
      form.append("description", this.description);
      this.$http.put('/api/service/'+this.id+'/',
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
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_uzk(){

      const form = new FormData();

      form.append("url", this.url);
      form.append("title", this.title);
      form.append("description", this.description);
      this.$http.put('/api/service/'+this.id+'/',

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
          .catch(()=> {
            this.$toasted.show("Errors", {
              duration: 1000,
              'type': 'danger'
            })
          })
    },
    put_en(){

      const form = new FormData();

      form.append("url", this.url);
      form.append("title", this.title);
      form.append("description", this.description);
      this.$http.put('/api/service/'+this.id+'/',

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
