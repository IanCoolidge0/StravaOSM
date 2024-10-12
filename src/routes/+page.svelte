<script>
    import { page } from "$app/stores";
</script>

<h1>Strava app</h1>
<p>Whats good</p>

{#if $page.data.session}
    <p>Your Strava user name is {$page.data.session.user?.name}</p>
    <p>Your Strava token expires at {$page.data.session.expires}</p>
    <a href='/auth/signout'>Sign out</a>
{:else}
    <a href='/auth/signin'>Sign in</a>
{/if}
