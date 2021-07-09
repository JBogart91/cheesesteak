<template>
  <nav class="nav">
    <img id="logo-icon" src="../assets/img/cheesesteaklogo.png" alt="cheesesteak" class="icon img">
    <div v-for="item in items" :key="item.href">
      <nuxt-link :to="item.href" :class="getClass(item)">{{ item.label }}</nuxt-link>
    </div>
  </nav>
</template>
 
<script>
export default {
  props: {
    items: Array
  },
  methods: {
    getClass (item) {
      const itemPath = this.normalisePath(item.href)
      const currentPath = this.normalisePath(this.$route.path)
      const isActive = itemPath === currentPath
      return ['nav-item', isActive && 'active']
    },
    normalisePath (path) {
      return `/${path.split('/').filter(i => i).join('/')}`
    }
  }
}
</script>

 <style scoped>
  .nav {
    background-color: #333;
    overflow: hidden;
  }

  .icon {
    margin: 0;
    height: 48px;
    width: 48px;
  }
  
  .img {
    float: left;
    display: block;
    margin-left: 14px;
    margin-right: 14px;
  }

  .nav .nav-item {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .nav .nav-item:hover {
    background-color: #ddd;
    color: black;
  }

  .nav .nav-item.active {
    border-bottom: 4px solid #9ad9d7;
  }
 </style>
