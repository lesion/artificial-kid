<template lang='pug'>
  #navbar
    ui-menu( :options='computedFavs',show-icons,show-secondary-text)
</template>
/**
 * nn posso usare ui-menu, devo fare una roba mia (drag/drop, style)
 * Preferiti, sezione tags e operazioni varie (tipo, mostra solo imgs/docs/video)
 */
<script>
import { setCwd } from '../vuex/actions'
export default {
  vuex: {
    actions: { setCwd },
    getters: {
      cwd: state => state.cwd
    }
  },
  data () {
    return {
      favourites: [ ]
    }
  },
  ready () {
    console.error('dentro activate !')
    this.favourites = ['photossssss', 'papers', 'people', '-', 'sdf']
  },
  computed: {
    computedFavs () {
      return this.favourites.map(f => {
        if (f === '-') return {type: 'divider'}
        return {text: f, icon: f, secondaryText: f}
      })
    }
  }
}
</script>
<style scoped>
  #navbar {
    display: inline;
    float: left;
  }
</style>