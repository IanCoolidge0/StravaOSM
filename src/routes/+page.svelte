<script lang="ts">
    export let data;
</script>

<p>You're in! Hi {data.user}</p>
<p><img src={data.profile} alt='profile'/></p>
<a href='/auth/signout'>Sign out</a>