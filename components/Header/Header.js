export default {
  name: 'Header',
  setup() {
    let navOpen = useState('navOpen', () => 0);
    return {
      navOpen
    }
  },
  computed: {
    isMain() {
      if (this.$route.path == '/') {
        return true;
      } else {
        return false;
      }
    }
  }
}
