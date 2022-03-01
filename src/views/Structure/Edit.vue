<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Структура</h3>
            </div>
          </div>
    <div class=" main_card">
      <b-card no-body>
        <div class="row">
          <div class="col-md-3 media m-3">
            <input type="file" class="d-none" id="cr_image"
                   multiple
                   @change="trySubmitFile"
                   accept="image/*"
                   name="datafiles"
                   ref="datafiles"
            >
            <div>
              <label for="cr_image" class="btn btn-primary file_label" >image</label>
            </div>
            <div>
              <button @click="post_ru()" class="btn btn-success">Submit</button>
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
      title:'',
      url:'',
      myImages:[],
      imageUrl:[],
      files_name:[],
      id:''
    }
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
      this.$http.put('/api/structure/'+this.$route.query.id,
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'ru'
            }
          })

          .then(res=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
            this.id=res.data.id
          })
    },
    put_uzl(){
      const form = new FormData();
      form.append("image", this.myImages[0]);
      this.$http.put('/api/structure/'+this.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-latn'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
          })
    },
    put_uzk(){

      const form = new FormData();
      form.append("image", this.myImages[0]);
      this.$http.put('/api/structure/'+this.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'uz-cyrl'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

            })
          })
    },
    put_en(){

      const form = new FormData();
      form.append("image", this.myImages[0]);
      this.$http.put('/api/structure/'+this.id+'/',
          form,
          {
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('m_token'),
              'Accept-Language':'en'
            }
          })

          .then(()=> {
            this.$toasted.show("Create data success", {
              duration: 1000,
              'type': 'info'

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
