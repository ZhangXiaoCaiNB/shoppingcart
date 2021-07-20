<template>
  <div id="app">
    <div id="nav">
      <router-link to="/booksList">书籍列表</router-link>
      <router-link to="/booksCart">购物车</router-link>
      <router-link to="/booksInventory">书籍库存</router-link>
      <router-link to="/customerAccount">客户账号&购买清单</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 25px;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #ff7300;
}
</style>
