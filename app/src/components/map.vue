// takes in points to display
<template>
    <div id="map" class="map">
    </div>
</template>
<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css"
export default {
  name: 'Map',
  props: {
    layers: Array,
  },
  data() {
      return{
        map: null,
        tileLayer: null,
      }

  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap(){
      this.map = L.map('map',{center:[38.63, -90.23], zoom: 12});
      this.tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      });
      this.tileLayer.addTo(this.map);
    },
    
  }
}
</script>
<style lang="css">
  .map{
    width: 100%;
    height: 350px;
  } 
</style>