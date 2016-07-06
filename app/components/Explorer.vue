<template lang='pug'>
  #explorer(@mousedown='startSelecting',
    @mouseup='endSelecting',
    @mousemove='selecting && moveSelecting(this)')
    #selector(v-show='selecting')
    file(v-for='file in files', track-by='$index', :file='file')
</template>

<script>
import shell from 'shelljs'
import File from './File'
export default {
  vuex: {
    getters: {
      cwd: state => state.cwd
    }
  },
  components: { File },
  methods: {
    startSelecting () {
      this.selecting = true
    },
    endSelecting () {
      this.selecting = false
      console.error('pigiato su explorer !')
    },
    moveSelecting () {
      // if (!this.selecting) return
      console.error(this)
    }
  },
  watch: {
    cwd (val) {
      console.error('msg', val)
      this.files = shell.ls(this.cwd)
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
    this.files = shell.ls(this.cwd)
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