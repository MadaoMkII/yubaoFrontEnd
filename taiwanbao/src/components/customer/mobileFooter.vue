<template>
	<div class="row nomargin" style="position: fixed;bottom: 0;background: #fff;width: 100%;border-top: 0.05em solid #ccc;padding-top: 0.5em;margin: 0;">
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
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	export default {
		name: 'mobileFooter',
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
		   }
		}
	}
</script>

<style>
</style>