<template>
  <div>
      <p>Name: {{name}} </p>
      <p>UserName: {{username}} </p>
      <p>Age: {{age}}</p>
      <slot></slot>
      <hr>
  </div>
</template>

<script>
export default 
{
    name: "Users",
    props:
    {
        name: {type: String, default: "No data"},
        username: {type: String, default: "No data"},
        age: {type: Number, default: 0}
    }
}
</script>
