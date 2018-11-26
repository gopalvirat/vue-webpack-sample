<template>
  <div>NOPE   
  <div id="demo">App</div> 
    <div><router-link to="/foo">Go to Foo</router-link></div>
     <router-link to="/bar">Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  window.$ = require('jquery')
  window.JQuery = require('jquery')
  export default {
    data () {
      return {
        msg: 'Hello from vue-loader!'
      }
    },
    mounted(){
      console.log($('#demo').html())
    }
  }
</script>

<style>
</style>