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
            <div class="mains_card_child">
              <div class="card">
                <div class="p-3">
                  <router-link to="/objects/create"
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
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Search">
                      </div>
                      <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                  </form>
                </div>
                <b-table
                    id="my-table"
                    :items="items"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small
                >
                  <template #cell(show_details)="row">
                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                      dsamsakl
                    </b-button>
                  </template>
                </b-table>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                ></b-pagination>
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
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone',Action:'' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' ,Action:''},
        { id: 3, first_name: 'Barney', last_name: 'Rubble',Action:'' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' ,Action:''},
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' ,Action:''},
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' ,Action:''},
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo',Action:'' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' ,Action:''},
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' ,Action:''}
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  mounted() {
    this.$store.dispatch('about',{
      "page_size":this.page_size
    })
  },
  methods: {
    selected_page_size(){
      this.$store.dispatch('about',{
        "page_size":this.page_size
      })
    },
    deletes(item) {

      let isBoss = confirm("You really want to delete?");
      if (isBoss == true) {
        this.$http.delete('/api/about/' + item + '/',
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
