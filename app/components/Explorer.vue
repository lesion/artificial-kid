<template lang='pug'>
  #explorer
    #selector(v-show='selecting')
    file(v-for='file in files', track-by='$index', :file='file')
</template>

<script>
import File from './File'
import fs from '../fs'
export default {
  vuex: {
    getters: {
      cwd: state => state.cwd
    }
  },
  components: { File },
  watch: {
    cwd (val) {
      console.error('cambia il cwd !')
      fs.ls(this.cwd)
        .then(files => {
          console.error(files)
          this.files = files
        }) // scroll to top ...
        .catch(console.error)
    }
  },
  data () {
    return {
      selecting: false,
      files: [ ]
    }
  },
  ready (a) {
    console.error('dentro activate !')
    fs.ls(this.cwd)
      .then(files => {
        this.files = files
      }) // scroll to top ...
      .catch(console.error)
  }
}
</script>
<style scoped>
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
  
  #explorer {
    display: block;
    padding: 10px;
    height: 100%;
    overflow: scroll;
  }

  #explorer span {
    float: left;
    padding-left: 10px;
  }
</style>