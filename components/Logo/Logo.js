export default {
  name: 'Logo',
  data() {
    return {
      classParent: this.classParent ? this.classParent : ''
    }
  },
  props: {
    classParent: String
  }
}
