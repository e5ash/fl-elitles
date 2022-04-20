export default {
  name: 'Map',
  data() {
    return {
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
    loadScript() {
      let script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

      document.body.append(script);
    },
    createMap() {
      ymaps.ready(()=>{
        let map;
        map = new ymaps.Map(this.id, {
          center: this.position,
          zoom: 12,
          controls: []
          }, {
          searchControlProvider: 'yandex#search'
        })

        let placemark = new ymaps.Placemark(this.position, {}, {});

        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom');
      });
    }
  },
  mounted() {
    this.position = this.pos.split(', ');
    if (!this.isMapLoaded) {
      this.isMapLoaded = !this.isMapLoaded;
      this.loadScript();
    }
    setTimeout(()=>{
      this.createMap();
    }, 500);
  },
  props: {
    id: String,
    pos: String,
    mods: String
  }
}
