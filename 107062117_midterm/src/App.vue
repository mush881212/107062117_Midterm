<template>
  <div id="app">
    <el-menu
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#14072F"
      text-color="rgba(255, 255, 255, 0.7)"
      active-text-color="rgba(255, 255, 255, 1)"
    >
      <el-submenu index="1">
        <template slot="title">Home</template>
        <el-submenu index="2">
          <template slot="title">關於學院</template>
          <el-menu-item index="2-1"
            ><a href="https://art.nthu.edu.tw/?page_id=51" target="_blank"
              >學院簡介</a
            ></el-menu-item
          >
          <el-menu-item index="2-2"
            ><a href="https://art.nthu.edu.tw/?page_id=54" target="_blank"
              >未來展望</a
            ></el-menu-item
          >
          <el-menu-item index="2-3"
            ><a href="http://oga.nthu.edu.tw/school2.php" target="_blank"
              >姐妹學校</a
            ></el-menu-item
          >
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">學院師資</template>
          <el-menu-item index="3-1"
            ><a href="https://art.nthu.edu.tw/?page_id=819" target="_blank"
              >榮譽院長</a
            ></el-menu-item
          >
          <el-menu-item index="3-2"
            ><a href="https://art.nthu.edu.tw/?page_id=893" target="_blank"
              >歷任院長</a
            ></el-menu-item
          >
          <el-menu-item index="3-3"
            ><a href="https://art.nthu.edu.tw/?page_id=143" target="_blank"
              >現任院長/行政人員</a
            ></el-menu-item
          >
          <el-menu-item index="3-4"
            ><a href="http://music.site.nthu.edu.tw/?Lang=zh-tw" target="_blank"
              >音樂系專兼任師資</a
            ></el-menu-item
          >
          <el-menu-item index="3-5"
            ><a
              href="http://artdesign.site.nthu.edu.tw/?Lang=zh-tw"
              target="_blank"
              >藝設系專兼任師資</a
            ></el-menu-item
          >
          <el-menu-item index="3-6"
            ><a href="http://ipta.nthu.edu.tw/?page_id=30" target="_blank"
              >學士班專兼任師資</a
            ></el-menu-item
          >
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">榮譽榜</template>
          <el-menu-item index="4-1"
            ><a href="https://art.nthu.edu.tw/?page_id=1445" target="_blank"
              >教師獲獎</a
            ></el-menu-item
          >
          <el-menu-item index="4-2"
            ><a href="https://art.nthu.edu.tw/?page_id=1855" target="_blank"
              >春之獎學金</a
            ></el-menu-item
          >
          <el-menu-item index="4-3"
            ><a href="https://art.nthu.edu.tw/?page_id=1858" target="_blank"
              >春之卓越獎</a
            ></el-menu-item
          >
          <el-menu-item index="4-4"
            ><a href="https://art.nthu.edu.tw/?page_id=269" target="_blank"
              >學生獲獎</a
            ></el-menu-item
          >
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">活動花絮</template>
          <el-menu-item index="5-1"
            ><a href="https://art.nthu.edu.tw/?page_id=130" target="_blank"
              >國際交流</a
            ></el-menu-item
          >
        </el-submenu>
      </el-submenu>
    </el-menu>
    <router-view />
  </div>
</template>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap");
#app {
  font-family: "ZCOOL QingKe HuangYou", "Sue Ellen Francisco", cursive;
  letter-spacing: 0.45em;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  background: #14072f;
}

.el-menu.el-menu--horizontal {
  border: none;
  font-family: "ZCOOL QingKe HuangYou", "Sue Ellen Francisco", cursive;
  position: fixed;
  z-index: 99999;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
