<template>
<section>
    <object style="height:98vh" v-if="urlDocumento" :data="urlDocumento" type="application/pdf" width="100%" height="100%"></object>
    <no-data class="container-no-data" v-else mensagem="Documento não carregado..."></no-data>
</section>
</template>

<script src="./pdf.js"></script>
<style src="./style.css" scoped></style>
