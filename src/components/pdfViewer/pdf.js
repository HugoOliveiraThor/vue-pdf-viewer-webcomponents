export default {
  name: 'pdf',
  props: {
      urlDocumento: {
          type: String,
          required: false,
          default: ''
      }
  },
  components: {
      'no-data': () => import('../empty-data/empty-data')
  }
}