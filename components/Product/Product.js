export default {
  name: 'Product',
  computed: {
    to() {
      return {
        path: this.href ? String(this.href) : '/catalog/category'
      }
    }
  },
  props: {
    classParent: String,
    title: String,
    image: String,
    href: String
  }
}
