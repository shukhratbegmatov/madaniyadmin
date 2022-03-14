<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid p-0">
      <div class="row">
        <Side_menu></Side_menu>
        <div class="col">
          <div class="buttons_create">
            <div>
              <h3 class="font-weight-bold mb-3">Пресс-секретарь</h3>
            </div>
            <router-link to="/press-secretary/create"
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
    <div class=" main_card">
      <div class="mains_card_child">
        <div class="card">
          <div class="p-3">

          </div>
          <div class="d-flex">
            <div class="input-group mb-3">

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
              <th>Title</th>
              <th>Create at</th>
              <th>Update at</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody v-if=" $store.state.press">

            <tr v-for="(item,index) in  $store.state.press.results" :key="index">

              <td><div class="father_tabel">{{ item.id }}</div></td>
              <td><div class="father_tabel">{{ item.title }}</div></td>
              <td><div class="father_tabel">{{ item.created_on }}</div></td>
              <td><div class="father_tabel">{{ item.updated_on }}</div></td>
              <td>
                <router-link :to="'/press-secretary/edit?id='+item.id" class="btn">
                  <b-icon icon="pencil" scale="1" variant="white"></b-icon>
                </router-link>
                <button class="btn" @click="deletes(item=item.id)">
                  <b-icon icon="x-circle" scale="1" variant="danger"></b-icon>
                </button>
              </td>
            </tr>

            </tbody>
          </table>
          <div class="pagenations">
            <paginate
                :page-count="$store.state.press.total_pages"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
            >
            </paginate>
          </div>
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
      page_size:1
    }
  },

  mounted() {
    this.$store.dispatch('press',{
      "page_size":this.page_size
    })
  },
  methods: {
    clickCallback (pageNum){
      console.log(pageNum)
      this.$store.dispatch('press',{
        "page_size":pageNum
      })
    },
    selected_page_size(){
      this.$store.dispatch('press',{
        "page_size":this.page_size
      })
    },
    deletes(item) {

      let isBoss = confirm("You really want to delete?");
      if (isBoss == true) {
        this.$http.delete('/api/press-secretary/' + item + '/',
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
