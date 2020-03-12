<template>
    <strong>{{$props.mensagem}}</strong>
</template>

<script>
export default {
  name: "empty-data",
  props: {
    mensagem: {
      type: String,
      required: false,
      default: "Não carregado..."
    },
  }
};
</script>

<style src="./styles.css" scoped></style>