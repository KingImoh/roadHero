<script lang="ts">
  import "mapbox-gl/dist/mapbox-gl.css";
  import mapboxgl, { Marker } from "mapbox-gl";
  import { onMount } from "svelte";

  import type { Coordinates } from "$lib/types";
  import { fly } from "svelte/transition";

  function setupMap(center: Coordinates) {
    // $MapDetails.currentPos = center;

    // $MapDetails.map = new Map({
    //   container: "map",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: $MapDetails.currentPos,
    //   zoom: 14,
    // });

    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: center, // starting position [lng, lat]
      zoom: 16, // starting zoom
    });

    new Marker().setLngLat(center).addTo(map);

    map.doubleClickZoom.enable();

    map.dragPan.enable({
      linearity: 0.3,
      easing: t => t,
      maxSpeed: 1400,
      deceleration: 2500,
    });

    map.dragRotate.enable();
    // map.addLayer({
    //   id: "point",
    //   type: "circle",
    //   source: {
    //     type: "geojson",
    //     data: {
    //       type: "FeatureCollection",
    //       features: [
    //         {
    //           type: "Feature",
    //           properties: {},
    //           geometry: {
    //             type: "Point",
    //             coordinates: center,
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   paint: {
    //     "circle-radius": 10,
    //     "circle-color": "#3887be",
    //   },
    // });
  }

  onMount(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2luZ2ltb2giLCJhIjoiY2xhdjVmNWIwMDJnazNxc2o3aW14bHJseCJ9._HBlCjjOJ5fD-y6OoRqI0Q";

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });

    function onSuccess(position: GeolocationPosition) {
      let supposedCurrentPos: Coordinates = [position.coords.longitude, position.coords.latitude];
      setupMap(supposedCurrentPos);
    }

    function onError() {
      let bazeUniversityBlockDLibrary = [7.405533646178658, 9.006449673032344];
      let bazeUniversity: Coordinates = [7.405952340281745, 9.007773176138375];
      setupMap(bazeUniversity);
    }
  });
</script>

<div id="map" class="w-screen h-screen -z-1" />
