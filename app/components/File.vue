<template lang='pug'>
  a.file(draggable="true",@click='click', :title='file.type')
    span {{file.name}}
</template>
<script>
// var gui = require('nw.gui')
var path = require('path')
import {setCwd} from '../vuex/actions'
export default {
  vuex: {
    actions: {setCwd},
    getters: {
      cwd: state => state.cwd
    }
  },
  props: ['file'],
  methods: {
    stopPropagation (e) {
      e.stopPropagation()
    },
    click (e) {
      e.preventDefault()
      e.stopPropagation()
      // if(e.ctrlKey)

      if (this.file.isdir) {
        this.setCwd(path.join(this.cwd, this.file.name))
      }
      // console.error(gui.Shell)
      // console.error('aprp')
      // gui.Shell.openItem(this.$parent.cwd + '/' + this.file)
    }
  }
}
</script>
<style>
  .file {
    transition: all .2s;
    display: inline-block;
    cursor: pointer;
    height: 80px;
    width: 80px;
    margin: 3px;
    padding: 2px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #bbb;
    float: left;
    overflow: hidden;
    font-size: 14px;
    border-radius: 10px;
    font-family: Arial;
    /*box-shadow: 2px -1px 0px 0px rgba(0,0,0,0.75);*/
  }

  .file:hover {
    box-shadow: inset 0px 0px 0px 2px rgba(100,100,200,0.75);
    border: 1px solid transparent;
    background-color: #cce;
  }

</style>