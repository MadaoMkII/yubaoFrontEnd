<template>
	<div class="mobileEntry">
		<div class="hidden-lg hidden-md">
			<div class="row nomargin" style="background: #ff8500;">
				<div class="col-sm-12 col-xs-12">
					<div class="dropdown">
						<p class="pull-left" style="font-size: 1em;color: #fff;margin-left: 50%;position: relative;left: -2em;margin-top: 1em;">代充</p>
					    <button type="button" class="btn dropdown-toggle pull-right" id="dropdownMenu1" data-toggle="dropdown" style="background: none;color: #fff;font-size: 2em;padding: 0;">...</button>
					    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1" style="margin-top: 3em;">
					        <img src="../../assets/images/mobile/arrow.png" style="position: absolute;right: 0;top: -1em;"/>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/askicon.png" style="width: 1em;margin-right: 0.5em;"/>申訴</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/dealicon.png" style="width: 1em;margin-right: 0.5em;"/>交易記錄</a>
					        </li>
					        <!-- <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/RBdealicon.png" style="width: 1em;margin-right: 0.5em;"/>R幣交易明細</a>
					        </li> -->
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/helpicon.png" style="width: 1em;margin-right: 0.5em;"/>幫助中心</a>
					        </li>
					        <!-- <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/messageicon.png" style="width: 1em;margin-right: 0.5em;"/>消息</a>
					        </li> -->
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;" @click="loginOut"><img src="../../assets/images/mobile/logouticon.png" style="width: 1em;margin-right: 0.5em;" />登出</a>
					        </li>
					    </ul>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="padding: 5em 0;margin-bottom: 5em;">
				<div class="col-sm-12 col-xs-12">
					<div class="row nomargin" style="margin-bottom: 1em;">
						<router-link to="/RBrecharge"><img src="../../assets/images/mobile/rbchongzhi.png" style="width: 100%;"/></router-link>
					</div>
					<div class="row nomargin" style="margin-bottom: 1em;">
						<router-link to="/aliRecharge"><img src="../../assets/images/mobile/zhifubaochongzhi.png" style="width: 100%;"/></router-link>
					</div>
					<div class="row nomargin">
						<router-link to="/wechatRecharge"><img src="../../assets/images/mobile/weixinchongzhi.png" style="width: 100%;"/></router-link>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="position: fixed;bottom: 0;background: #fff;width: 100%;border-top: 0.05em solid #ccc;padding-top: 0.5em;">
				<router-link to="index">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/shouyeicon.png" style="width: 2em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">首頁</p></center>
			</div>
		</router-link>
		<router-link v-if="loginFlag" to="/supersede">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/daifuicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">代付</p></center>
			</div>
		</router-link>
		<a v-if="!loginFlag" v-on:click="toLogin()">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/daifuicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">代付</p></center>
			</div>
		</a>
		<router-link v-if="loginFlag" to="/mobileEntry">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/daigouicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">代充</p></center>
			</div>
		</router-link>
		<a v-if="!loginFlag" v-on:click="toLogin()">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/daigouicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">代充</p></center>
			</div>
		</a>
		<router-link v-if="loginFlag" to="/center">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/huiyuanicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">會員中心</p></center>
			</div>
		</router-link>
		<a v-if="!loginFlag" v-on:click="toLogin()">
			<div class="col-xs-3 col-sm-3 nopadding">
				<center><img src="../../assets/images/mobile/huiyuanicon.png" style="width: 2em;margin-top: 0.1em;"/></center>
				<center><p style="font-size: 0.8em;color: #333;margin-bottom: 0.5em;">會員中心</p></center>
			</div>
		</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import '../../../static/css/PCstyle.css'
	export default {
		name: 'mobileEntry',
		data(){
			return{
				loginFlag:false
			}
		},
		mounted:function () {
			this.getInfo();
		},
		methods:{
			getInfo: function () {
		        $.ajax({
		          type: 'get',
		          url: getService() + "/user/getInfo",
		          dataType: "json",
		          data: {},
		          xhrFields: {
		            withCredentials: true
		          },
		          crossDomain: true,
		          success: function (res) {
		            if (res.error_code == 0) {
		            	this.loginFlag = true;
		//            this.userInfo = res.data;
		            }
		            else{
		            	this.loginFlag = false;
		            }
		          }.bind(this)
		        });
		   },
		   toLogin:function () {
		   		var _this = this;
		   		alert('請先登陸');
		   		_this.$router.push({path:'/login'});
		   },
		   loginOut:function(){
		   	var _this = this;
	        $.ajax({
	          type: 'get',
	          url: getService() + "/user/logout",
	          dataType: "json",
	          data: {},
	          xhrFields: {
	            withCredentials: true
	          },
	          crossDomain: true,
	          success: function (res) {
	            if (res.error_code == 0 || res.error_code == 200) {
	              _this.$router.push({path:'/index'});
	            }else{

	            }
	          }
	        });
	      },
		}
	}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
</style>