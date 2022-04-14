export default {
  name: 'Crt',
  data() {
    return {
      classParent: this.classParent ? this.classParent : ''
    }
  },
  props: {
    classParent: String
  }
}
