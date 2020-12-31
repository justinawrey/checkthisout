<script>
  import identity from "../../api/identity";

  export let token;
  let confirmation = identity.confirm(token, false);

  function gotoApp() {
    window.location.href = "/";
  }
</script>

{#await confirmation}
  <p>Confirming sign up...</p>
{:then}
  <p>Sign up confirmed!</p>
  <button on:click={gotoApp}>Go to app</button>
{:catch error}
  <p>Something went wrong: {error}</p>
{/await}
