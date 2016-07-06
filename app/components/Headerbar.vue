<template lang='pug'>
  ui-toolbar(hide-nav-icon,flat)
      span(v-for="path in breadcrum")
        a(@click='setCwd(path.fullPath)',href='#') {{path.path}}
        span /
      .actions(slot='actions')
        ui-icon-button(icon='settings',type='flat')
        ui-textbox(placeholder='search',icon-right)
</template>
<script>
import {setCwd} from '../vuex/actions'
// let path = require('path')

export default {
  vuex: {
    actions: { setCwd },
    getters: {
      cwd: state => state.cwd
    }
  },
  computed: {
    breadcrum () {
      let r = this.cwd.split('/')
      let ret = []
      let lastPath = ''
      r.forEach(dir => {
        lastPath += dir + '/'
        let current = { path: dir, fullPath: lastPath }
        ret.push(current)
      })
      console.error(ret)
      return ret
    }
  }
}
</script>
<style  lang='stylus' scoped>
  
</style>