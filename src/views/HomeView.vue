<template>
  <div id="cesiumContainer"></div>
</template>

<script>
// @ is an alias to /src


import {Viewer} from "cesium";
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }

}
const viewer = new Viewer("cesiumContainer");
</script>
