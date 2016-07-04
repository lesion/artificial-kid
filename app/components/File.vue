<template lang='pug'>
  .file
    span {{file}}
</template>
<script>
export default {
  props: ['file']
}
</script>
<style>
  .file {
    display: inline-block;
    height: 80px;
    width: 80px;
    margin: 3px;
    margin-bottom: 40px;
    border: 1px solid #bbb;
    float: left;
    overflow: hidden;
  }

  .file span {
    max-width: 40px;
    max-height: 20px;
    overflow: hidden;
    position: absolute;
    margin-top: 40px;
  }
</style>