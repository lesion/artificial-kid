<template lang='pug'>
  #navbar
    ui-menu( :options='computedFavs',show-icons,show-secondary-text)
</template>
<script>
export default {
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