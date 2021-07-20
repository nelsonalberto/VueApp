<template>
    <div class="nav-header">
      <ul class="nav-header_container">
        <router-link active-class="active" tag="li" to="/">
          <a>Home</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/users">
          <a>Users</a>
        </router-link>
      </ul>
    </div>
    <router-view class="container"></router-view>
</template>

<script>
export default
{
  name: 'App',
  components:
  {
    
  }
}
</script>

<style scoped>
  .container
  {
      margin-top: 6%;
  }

  .nav-header
  {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #e8e8e8;
  }

  .nav-header_container
  {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .nav-header_container a
  {
     font-weight: bold;
     font-size: 18px;
     padding: 2px 4px;
  }

  .nav-header_container .active a
  {
      color: blue;
  }
</style>
