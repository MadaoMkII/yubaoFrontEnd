<template>
	<div class="rightheader" style="background: #fff;">
		<div class="row">
			<div class="col-lg-12 col-md-12" style="padding-right: 50px;">
				<a href="javascript:void(0)" class="pull-right">
					<p class="pull-right" style="line-height: 40px;font-size: 12px;color: #666;" @click="loginOut">登出</p>
					<img src="../../assets/images/administrator/logouticon.png" class="pull-right" style="width: 18px;margin-top: 11px;margin-right: 10px;"/>
				</a>
				<a href="javascript:void(0)" class="pull-right">
					<p class="pull-right" style="line-height: 40px;font-size: 12px;color: #666;margin-right: 30px;">{{userRoleName}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'rightHeader',
		data(){
			return {
				userRoleName:'你好，管理員！'
			}
		},
		components:{
		},
		mounted:function () {
		},
		methods:{
			loginOut:function(){
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
		              this.$router.push({path:'/index'});
		            }else{

		            }
		          }.bind(this)
		        });
		      }
		}
	}
</script>

<style>
</style>