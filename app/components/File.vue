<template lang='pug'>
  .file(draggable="true",@mousedown='stopPropagation',@click='click')
    span {{file}}
</template>
<script>
// var gui = require('nw.gui')
var fs = require('fs')
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
      console.error('dentro il click ', this.file, this.cwd)
      console.error(`devo controllare se ${this.cwd}/${this.file} e una dir o meno`)
      fs.stat(path.join(this.cwd, this.file), (err, stats) => {
        if (err) {
          console.error('QUI DEVO NOTIFY ! ', err)
          return
        }

        if (stats.isDirectory()) {
          console.error('una directory ?!')
          console.error(this)
          this.setCwd(path.join(this.cwd, this.file))
        }
      })
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