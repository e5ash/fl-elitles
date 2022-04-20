import { toLink } from '~/utils';

export default {
  name: 'Product',
  computed: {
    to() {
      return this.href ? String(this.href) : '/catalog/category';
    }
  },
  methods: {
    toLink
  },
  props: {
    classParent: String,
    title: String,
    image: String,
    href: String
  }
}
