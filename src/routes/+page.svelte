<script lang="ts">
  import LeafletMap from '../components/LeafletMap.svelte';

    export let data;
</script>

<p>You're in! Hi {data.username}</p>
<p><img src={data.profile} alt='profile'/></p>
<p>You've been on {data.stats.all_ride_totals.count} bike rides, {data.stats.all_run_totals.count} runs, and {data.stats.all_swim_totals.count} swims.</p>
<LeafletMap polylines={data.polylines} />
<a href='/auth/signout'>Sign out</a>