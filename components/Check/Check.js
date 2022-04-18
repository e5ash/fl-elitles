export default {
  name: 'Check',
  data() {
    return {
      isChecked: false,
      classChecked: 'check_checked'
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
  mounted() {
    if (this.index == 0) {
      this.$emit('update:checked', this.value);
      this.setChecked();
    }
  },
  props: {
    index: String,
    name: String,
    checked: String,
    value: String,
  },
  emits: ['update:checked'],
}
