<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    if(localStorage.getItem('m_token')===null){
      this.$router.push('/login')
    }
  }
}
</script>
