export default {
  name: 'Header',
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
