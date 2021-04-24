
<template>
 <footer>
     <p>{{copyright}}</p>
 </footer>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
      copyright:'Copyright 2020, thanks for ....'
    }
  }
}
</script>

<style lang="scss" scoped>
    footer{
        background-color: black;
        padding: 10px;
        
    }
    p{
        color:white;
        text-align: center;
        font-size: 28px;
        font-style: italic;
    }
</style>
