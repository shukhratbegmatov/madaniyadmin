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
            <div>
              <router-link to="/contact/create"
                           class="btn bg-primary  text-white d-inline-flex align-items-center me-2"
                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg class="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create
              </router-link>
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
                </div>
                <table class="table table-flush" id="datatable">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Create at</th>
                    <th>Update at</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody v-if=" $store.state.contacts">
                  <tr v-for="(item,index) in  $store.state.contacts" :key="index">

                    <td><div class="father_tabel">{{ item.id }}</div></td>
                    <td><div class="father_tabel">{{ item.address }}</div></td>
                    <td><div class="father_tabel">{{ item.created_on }}</div></td>
                    <td><div class="father_tabel">{{ item.updated_on }}</div></td>
                    <td>
                      <router-link :to="'/contact/edit?id='+item.id" class="btn">
                        <b-icon icon="pencil" scale="1" variant="white"></b-icon>
                      </router-link>
                      <button class="btn" @click="deletes(item=item.id)">
                        <b-icon icon="x-circle" scale="1" variant="danger"></b-icon>
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
      page_size:10
    }
  },

  mounted() {
    this.$store.dispatch('contact_func',{
      "page_size":this.page_size
    })
  },
  methods: {
    selected_page_size(){
      this.$store.dispatch('contact',{
        "page_size":this.page_size
      })
    },
    deletes(item) {

      let isBoss = confirm("You really want to delete?");
      if (isBoss == true) {
        this.$http.delete('/api/contact/' + item + '/',
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
