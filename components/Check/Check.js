export default {
  name: 'Check',
  data() {
    return {
      block: 'check',
      isChecked: false,
      classChecked: 'check_checked',
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
  methods: {
    handleClick() {
      this.$emit('update:checked', this.value);
    },
    setChecked() {
      this.isChecked = true;
      this.$refs.input.setAttribute('checked', 'checked');
    },
    removeChecked() {
      this.isChecked = false;
      this.$refs.input.removeAttribute('checked');
    }
  },
  watch: {
    checked() {
      if (this.checked == this.value) {
        this.setChecked();
      } else {
        this.removeChecked();
      }
    }
  },
  created() {
    this.compMods = this.mods.split(', ');
  },
  mounted() {
    if (this.index == 0) {
      this.$emit('update:checked', this.value);
      this.setChecked();
    }
  },
  props: {
    mods: String,
    index: String,
    name: String,
    checked: String,
    value: String,
  },
  emits: ['update:checked'],
}
