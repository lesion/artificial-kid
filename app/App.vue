<template lang='pug'>
  #app
    headerbar
    .container
      navbar
      explorer
</template>
<script>
// var gui = require('nw.gui')
// var win = gui.Window.get()
import Navbar from './components/Navbar'
import Explorer from './components/Explorer'
import Headerbar from './components/Headerbar'

export default {
  components: { Navbar, Explorer, Headerbar }
}
</script>

<style>
html, body, div, ul, a, li {
  box-sizing: border-box;
}
html {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  background-color: #eee;
  padding: 0;
  margin: 0;
}

body {
  color: #444;
  padding: 0;
  margin: 0;
  width: 100%;
}

#app {
  position: absolute;
  bottom: 0px;
  top: 0px;
}

a {
  color: #99c;
  text-decoration: none;
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
