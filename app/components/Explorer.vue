<template lang='pug'>
  #explorer
    file(v-for='file in files',track-by='$index', :file='file')
</template>
<script>
import shell from 'shelljs'
import File from './File'

export default {
  components: { File },
  data () {
    return {
      cwd: '/home/lesion',
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
  #explorer {
    display: block;
    padding: 10px;
    height: 100%;
  }

  #explorer span {
    float: left;
    padding-left: 10px;
  }
</style>