<template>
 <div class="home">
     <div class="navbar">
         <nav>
             <div class="box-icon">
             <box-icon type='logo' name='twitter'></box-icon>
             <box-icon name='facebook' type='logo' ></box-icon>
             </div>
             <div class="mid-nav">
                 <box-icon name='cube' type='solid' ></box-icon>
                 <label class="logo right">CoughLoud 2</label>
             </div>
             <ul>
                 <li><box-icon type='solid' name='home'></box-icon></li>
                 <li><box-icon name='menu-alt-left' ></box-icon></li>
                 <li><a href="#">About Us</a></li>
             </ul>
         </nav>
     </div>
 </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'My Header'
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }
    nav{
        background-color: #E7D39F;
        height: 80px;
        width: 100%;
    }
    label.logo{
        color: white;
        font-size: 35px;
        line-height: 80px;
        padding: 0 100px;
        font-weight: bold;
    }
    nav ul{
        float: right;
        margin-right: 20px;
    }
    nav ul li{
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
    }
    nav ul li a{
        color: white;
        font-size: 17px;
        text-transform: uppercase;

    }
</style>
