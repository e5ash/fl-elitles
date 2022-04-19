export default {
  name: 'Map',
  data() {
    return {
      map: null,
      placemark: null,
      position: [],
    }
  },
  setup() {
    let isMapLoaded = useState('isMapLoaded');
    return {
      isMapLoaded
    }
  },
  methods: {
    createMap() {
      ymaps.ready(()=>{
        this.map = new ymaps.Map(this.id, {
          center: this.position,
          zoom: 12,
          controls: []
          }, {
          searchControlProvider: 'yandex#search'
        })

        this.placemark = new ymaps.Placemark(this.position, {}, {});

        this.map.geoObjects.add(this.placemark);
        this.map.behaviors.disable('scrollZoom');
      });
    }
  },
  mounted() {
    this.position = this.pos.split(', ');

    if (!this.isMapLoaded) {
      this.isMapLoaded = !this.isMapLoaded;
    }
    this.createMap();
  },
  props: {
    id: String,
    pos: String,
    mods: String
  }
}
