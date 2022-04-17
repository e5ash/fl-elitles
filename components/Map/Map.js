export default {
  name: 'Map',
  data() {
    return {
      map: null,
      placemark: null,
      position: [],
      interval: null
    }
  },
  methods: {
    async appendScript() {
      if (!document.getElementById('script-ymaps')) {
        const script = document.createElement('script');
        script.id = 'script-ymaps';
        document.body.append(script);
        script.setAttribute('async', '');
        script.setAttribute('defer', '');
        const response = await fetch('https://api-maps.yandex.ru/2.1/?lang=ru_RU');
        if (response.ok) {
          const text = await response.text();
          script.innerHTML = text;
        }
      } 
    },
    createMap() {
      if (!window.ymaps) {
        new Promise((res)=>{
          setTimeout(()=>{
            res();
          }, 500);
        }).then(()=>{
          this.initMap();
        });
        return false;
      }

      this.initMap();

    },
    initMap() {
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
  async mounted() {
    this.position = this.pos.split(', ');
    await this.appendScript();
    this.createMap();
  },
  props: {
    id: String,
    pos: String,
    mods: String
  }
}
