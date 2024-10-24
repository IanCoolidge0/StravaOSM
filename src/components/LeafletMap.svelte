<script lang="ts">
  import { MapLibre, LineLayer, HeatmapLayer, GeoJSON } from "svelte-maplibre";
  import '../style.css';
  import { onMount } from "svelte";
  import type { MultiLineString } from "geojson";

  export let polylines: [number, number][][];

  let centerX = 0;
  let centerY = 0;

  let data: MultiLineString = {
    type: 'MultiLineString',
    coordinates: [[[0, 0]]]
  };

  onMount(() => {
    let cx = 0;
    let cy = 0;
    let total = 0;
    for (const line of polylines) {
        for (const point of line) {
            cx += point[0];
            cy += point[1];
            total++;
        }
    }
    centerX = cx / total;
    centerY = cy / total;

    // lat/lon coordinates need to be transposed on the map
    data.coordinates = polylines.map((line) => line.map(([x, y]) => [y, x]));
  });
</script>

<p>here's all your activities:</p>
<MapLibre 
    center={[centerY, centerX]}
    class='map'
    zoom={9}
    standardControls
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
>
    <GeoJSON id="line" {data}>
        <!-- <LineLayer layout={{ 'line-cap': 'round', 'line-join': 'round' }}
        paint={{
            'line-color': 'green',
            'line-width': 5
        }} /> -->
        <HeatmapLayer layout={{ 'visibility': 'visible' }}
        paint={{
            "heatmap-radius": 25,
            "heatmap-weight": 0.3,
            "heatmap-opacity": 0.6
        }} />
    </GeoJSON>
</MapLibre>