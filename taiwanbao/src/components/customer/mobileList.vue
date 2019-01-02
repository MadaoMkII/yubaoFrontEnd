<template>
	<div class="mobileList pull-right">
		<div v-if="!loginFlag" class="col-sm-12 col-xs-12 pull-right">
			<router-link to="/login" class="pull-right" style="color: #fff;font-size: 1em;margin-top: 1.5em;">會員登錄</router-link>
		</div>
		<div v-if="loginFlag" class="dropdown pull-right">
	        <!--<img class="pull-left" src="../../assets/images/mobile/logo.png" style="width: 20%;margin-left: 40%;"/>-->
	        <button type="button" class="btn dropdown-toggle pull-right" id="dropdownMenu1" data-toggle="dropdown"
	                style="background: none;color: #fff;font-size: 2em;padding: 0;margin-right: 0.2em;">...
	        </button>
	        <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1" style="margin-top: 0.5em;">
	          <img src="../../assets/images/mobile/arrow.png" style="position: absolute;right: 0;top: -1em;"/>
	          <li role="presentation">
	            <router-link role="menuitem" tabindex="-1" to="/appealList" style="line-height: 2em;"><img
	              src="../../assets/images/mobile/askicon.png" style="width: 1em;margin-right: 0.5em;"/>申訴</router-link>
	          </li>
	          <li role="presentation">
	            <router-link role="menuitem" tabindex="-1" to="/orderList" style="line-height: 2em;"><img
	              src="../../assets/images/mobile/dealicon.png" style="width: 1em;margin-right: 0.5em;"/>交易記錄</router-link>
	          </li>
	          <!--<li role="presentation">
	            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img
	              src="../../assets/images/mobile/RBdealicon.png" style="width: 1em;margin-right: 0.5em;"/>R幣交易明細</a>
	          </li>-->
	          <li role="presentation">
	            <router-link role="menuitem" tabindex="-1" to="/help" style="line-height: 2em;"><img
	              src="../../assets/images/mobile/helpicon.png" style="width: 1em;margin-right: 0.5em;"/>幫助中心</router-link>
	          </li>
	          <!--<li role="presentation">
	            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img
	              src="../../assets/images/mobile/messageicon.png" style="width: 1em;margin-right: 0.5em;"/>消息</a>
	          </li>-->
	          <li role="presentation">
	            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;" @click="loginOut"><img
	              src="../../assets/images/mobile/logouticon.png" style="width: 1em;margin-right: 0.5em;"/>登出</a>
	          </li>
	        </ul>
	    </div>
	</div>
	
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	export default {
		name: 'mobileList',
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
</style>