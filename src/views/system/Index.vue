<template>
  <el-container class="container">
    <el-header>
      <div class="header">
        <div class="logo">
          动脉智能XX后台管理系统
        </div>
        <div class="headbar" style="float: left">
          <div class="bar-item" v-on:click="isCollapse=!isCollapse">
            <icon :icon-class="iconClass"></icon>
          </div>
        </div>
        <div class="headbar" style="float: right">
          <div class="bar-item">
            <el-dropdown style="height: 46px">
              <span class="el-dropdown-link">
                <icon icon-class="ren"></icon><font>李玉洋</font><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="bar-item">
            <i class="el-icon-bell"><el-badge is-dot class="item"></el-badge></i>
          </div>
          <div class="bar-item">
            <i class="el-icon-share"></i>

          </div>
          <div class="bar-item" @click="exit">
            <icon icon-class="exit"></icon>
          </div>
        </div>
      </div>
    </el-header>

    <el-container>
      <el-aside :width="isCollapse?'65px':'221px'">
        <el-menu default-active="1-4-1" :collapse="isCollapse" accordion >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item><el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import {removeToken} from "../../utils/auth";

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item),
        isCollapse: false
      }
    },
    computed: {
      iconClass: function () {
        return (this.isCollapse)?'zhankai':'shousuo';
      }
    },
    methods: {
      exit: function () {
        removeToken();
        this.$router.push({ path: '/login' })
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $font-color1: #eee;
  $font-color2: #fff;
  .container{
    height: 100%;
    .el-header{
      background-color:#01AAED;
      .logo{
        float: left;
        font-size: 22px;
        font-family: 黑体;
        color: #fff
      }
      .header{
        line-height: 60px;
        height: 60px;
        width: 100%;
        .headbar{
          .bar-item{
            float: left;
            color: $font-color1;
            padding: 0px 5px;
            margin-left: 20px;
            height: 58px;
            border-top: 2px solid transparent;
            -webkit-transition: all 0.3s;
            cursor:pointer;
            .el-dropdown{
              color: $font-color1;
            }
          }
          .bar-item:hover{
            color: $font-color2;
            border-top: 2px solid #eee;
          }
          font{
            padding-left: 5px;
            font-size: 14px;
          }
        }
      }
    }
    .el-aside{
      .el-menu{
        border: 0px;
      }
    }
    .el-main{
      background: #f5f7fa;
    }
  }
</style>
