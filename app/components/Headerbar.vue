<template lang='pug'>
  ui-toolbar(hide-nav-icon,flat)
      span &nbsp;&nbsp;&nbsp;
      a(href='#') ciao 
      span  / 
      a(href='#') prova
      a {{ cwd }}
      .actions(slot='actions')
        ui-icon-button(icon='settings',type='flat')
        ui-textbox(placeholder='search',icon-right)
</template>
<script>
import actions from '../vuex/actions'

export default {
  vuex: {
    actions,
    getters: {
      cwd: state => state.cwd
    }
  }
}
</script>
<style  lang='stylus' scoped>
  
</style>