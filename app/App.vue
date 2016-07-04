<template lang='pug'>
  #app
    ui-toolbar(brand='Zenone',show-brand,flat)
      a(href='#') ciao 
      span  / 
      a(href='#') prova
      .actions(slot='actions')
        ui-icon-button(icon='settings',type='flat')
        ui-textbox(placeholder='search',icon-right)
    .container
      navbar
      explorer
</template>
<script>
// var gui = require('nw.gui')
// var win = gui.Window.get()
import Navbar from './components/Navbar'
import Explorer from './components/Explorer'

export default {
  components: { Navbar, Explorer }
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
  height: 100%;
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
