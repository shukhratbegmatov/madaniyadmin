<template>
  <div>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">{{ bodys}}</p>
    </b-modal>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Центр связи</h3>
            </div>
          </div>
          <div class=" main_card">
            <div class="mains_card_child">
              <div class="card">
                <div class="d-flex">
                  <div class="input-group mb-3">
                    <select v-model="page_size" @change="selected_page_size()" class="custom-select">
                      <option value="10" selected>10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">100</option>
                    </select>
                  </div>
                  <form>

                    <div class="form-inline">
                      <div class="form-group mx-sm-3 mb-2">
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Search">
                      </div>
                      <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                  </form>
                </div>
                <table class="table table-flush" id="datatable">
                  <thead class="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Full  name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody v-if=" $store.state.appeal">

                  <tr v-for="(item,index) in  $store.state.appeal" :key="index">
                    <th>{{item.id}}</th>
                    <th>{{item.full_name}}</th>
                    <th>{{item.phone_number}}</th>
                    <th>{{item.email}}</th>
                    <td><div class="father_tabel" v-html="item.body"></div></td>
                    <th>{{new Date(item.created_on).toLocaleString()}}</th>
                    <td>
                      <button class="btn" @click="shows(item)" v-b-modal.modal-1>
                        <b-icon icon="eye" scale="1" variant="danger"></b-icon>
                      </button>


                    </td>
                  </tr>

                  </tbody>
                </table>

              </div>
            </div>
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
  data() {
    return {
      data: [],
      page_size:10,
      bodys:''
    }
  },

  mounted() {
    this.$store.dispatch('appeal',{
      "page_size":this.page_size
    })
  },
  methods: {
    shows(item){
      this.bodys=item.body
    },
    selected_page_size(){
      this.$store.dispatch('api/appeal',{
        "page_size":this.page_size
      })
    },
    deletes(item) {

      let isBoss = confirm("You really want to delete?");
      if (isBoss == true) {
        this.$http.delete('/api/appeal/' + item + '/',
            {
              headers: {
                'Authorization': 'Token ' + localStorage.getItem('m_token'),
                'Accept-Language': 'uz-latin'
              }
            })
            .then(() => {
              this.$router.go('/')
            })

      }

    }
  }
}
</script>
<style>
.main_card {
  margin-top: 50px;
}

.form-inline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.custom-select {
  height: 30px;
  margin: 20px;
}
</style>
