<template>
  <div id="app">
    <pdf-viewer urlDocumento="http://www.africau.edu/images/default/sample.pdf"></pdf-viewer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'pdf-viewer':() => import('./components/pdfViewer/pdf-viewer')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
