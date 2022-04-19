export default {
  name: 'Field',
  data() {
    return {
      block: 'field',
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
    mods: String,
    type: String,
    name: String,
    title: String,
    value: String,
    placeholder: String,
    requred: Boolean
  }
}
