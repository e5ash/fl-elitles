export default {
  name: 'Button',
  data() {
    return {
      block: 'button',
      compMods: []
    }
  },
  computed: {
    modsBEM() {
      let arr = [];

      this.compMods.map((mod)=>{
        mod = `${this.block}_${mod}`;
        arr.push(mod);
      });

      return arr;
    }
  },
  created() {
    this.compMods = this.mods.split(', ');
  },
  props: {
    classParent: String,
    mods: String,
    href: String
  }
}
