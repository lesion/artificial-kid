<template lang='pug'>
  a.file( :class='{ dropzone: file.isdir }',draggable="true",@click='click', :title='file.type')
    i.ui-icon.material-icons.ui-menu-item-icon {{icon}}
    span {{file.name}}
</template>
<script>
// var gui = require('nw.gui')
var path = require('path')
import {setCwd} from '../vuex/actions'

document.addEventListener('dragstart', event => {
  // store a ref. on the dragged elem
  // dragged = event.target
  // make it half transparent
  event.target.style.opacity = 0.5
}, false)

document.addEventListener('dragend', event => {
  // reset the transparency
  event.target.style.opacity = ''
}, false)

/* events fired on the drop targets */
document.addEventListener('dragover', event => {
  // prevent default to allow drop
  event.preventDefault()
}, false)

document.addEventListener('dragenter', event => {
    // highlight potential drop target when the draggable element enters it
  console.error('dentro qui !', event.target.classList)
  if (event.target.classList.contains('dropzone')) {
    event.target.style.background = 'purple'
  }
}, false)

document.addEventListener('dragleave', event => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains('dropzone')) {
    event.target.style.background = ''
  }
}, false)

export default {
  computed: {
    icon () {
      if (this.file.isdir) return 'folder'
      let icons = {
        'application/pdf': 'picture_as_pdf',
        'image/png': 'photo'
      }
      return icons[this.file.type]
    }
  },
  vuex: {
    actions: {setCwd},
    getters: {
      cwd: state => state.cwd
    }
  },
  props: ['file'],
  methods: {
    drop (e) {
      e.preventDefault()
      console.error('dropped !')
    },
    allowDrop (e) {
      console.error('dentro lalow Drop')
      if (!this.file.isdir) return
      e.preventDefault()
    },
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