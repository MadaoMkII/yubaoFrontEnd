<template>
	<div class="appealList" v-cloak>
		<!--PC端-->
		<div style="min-height: 600px;">
			<div class="row nomargin bar hidden-sm hidden-xs" style="background: #ff8500;height: 34px;margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding">
					<div class="row nomargin">
						<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
							<router-link to="/center" class="pull-left" style="margin-right: 30px;">會員中心</router-link>
							<a href="javascript:void(0)" class="pull-left" style="margin-right: 30px;" v-on:click="showAppealModal()"><img src="../../assets/images/shensuicon.png" class="pull-left"/>申訴&提問</a>
							<router-link to="appealList" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/listicon.png" class="pull-left"/>工單</router-link>
							<a href="" class="pull-right">登出</a>
							<router-link to="/index" class="pull-right" style="margin-right: 30px;"><img src="../../assets/images/homeicon.png" class="pull-left"/>首頁</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin hidden-lg hidden-md" style="background: #ff8500;margin: 0;">
				<div class="col-sm-6 col-xs-6 col-sm-offset-3 col-xs-offset-3">
					<p style="margin-bottom: 0;line-height: 42px;color: #fff;">我的申訴&提問</p>
				</div>
	    		<mobileList></mobileList>
			</div>
			<div class="row nomargin" id="appealList" style="margin: 0;margin-top: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 15px;border: 1px solid #ccc;border-radius: 5px; background:#fff;">
					<div class="row nomargin" style="border-bottom: 1px solid #ccc;">
						<h5 class="pull-left" style="font-weight: bold;">我的申訴&提問</h5>
					</div>
					<div class="row nomargin" style="margin-top: 15px;background: #eee;border-radius: 5px;">
						<div class="col-lg-7 col-md-7 col-sm-5 col-xs-5" style="padding: 0 15px;">
							<p class="pull-left" style="margin-bottom: 0;line-height: 34px;">問題內容</p>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="padding: 0 15px;">
							<p class="pull-left" style="margin-bottom: 0;line-height: 34px;">送出時間</p>
						</div>
						<div class="col-lg-1 col-md-1 col-sm-3 col-xs-3" style="padding: 0 15px;">
							<p class="pull-left" style="margin-bottom: 0;line-height: 34px;">操作</p>
						</div>
					</div>
					<div class="row nomargin" style="border-bottom: 1px solid #ccc;" v-for="item in appealList">
						<div class="col-lg-7 col-md-7 col-sm-5 col-xs-5" style="padding: 0 15px;">
							<p class="pull-left" style="margin-bottom: 0;line-height: 34px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;text-align: left;">{{item.description}}</p>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="padding: 0 15px;">
							<p class="pull-left hidden-sm hidden-xs" style="margin-bottom: 0;line-height: 34px;">{{item.created_at}}</p>
							<p class="pull-left hidden-lg hidden-md" style="margin-bottom: 0;line-height: 34px;font-size: 10px;text-align: left;">{{item.created_at}}</p>
						</div>
						<div class="col-lg-1 col-md-1 col-sm-3 col-xs-3" style="padding: 0 15px;">
							<a href="javascript:void(0)" v-on:click="checkAppeal(item.appealFormID)"><p class="pull-left" style="margin-bottom: 0;line-height: 34px;">查看</p></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" id="appealDetail" style="margin: 0;margin-top: 30px;display: none;">
				<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding" style="padding: 15px;border: 1px solid #ccc;border-radius: 5px;background: #fff;">
					<div class="row nomargin" style="border-bottom: 1px solid #ccc;">
						<h5 class="pull-left" style="font-weight: bold;">申诉&提问详情</h5>
						<a href="javascript:void(0)" class="pull-left" v-on:click="backToList()" style="margin-left: 15px;margin-top: 8px;">返回</a>
					</div>
					<div class="row nomargin" style="margin-top: 10px;">
						<h4 class="pull-left" style="text-align: left;">问题描述：{{appealDetail.description}}</h4>
					</div>
					<div class="row nomargin" style="margin-top: 10px;">
						<p class="pull-left" style="color: #999;font-size: 12px;margin-bottom: 0;text-align: left;">{{appealDetail.L1_Issue}}->{{appealDetail.L2_Issue}}->{{appealDetail.L3_Issue}}</p>
					</div>
					<div class="row nomargin" style="margin-top: 10px;">
						<p class="pull-left" style="color: #999;font-size: 12px;margin-bottom: 0;text-align: left;">{{appealDetail.created_at}}</p>
					</div>
					<div class="row nomargin" style="margin-top: 10px;" v-for="item in appealDetail.imagesFileArray">
						<img v-bind:src="item" style="width: 100%;" class="pull-left"/>
					</div>
					<div class="row nomargin" id="appealResponse" style="border-top: 1px solid #ccc;margin-top: 10px;padding-top: 10px;text-align: left;background: #ccedff;padding: 10px 15px;">
						<!--<p style="background: #ccedff;">【客服回復】{{appealDetail.response}}</p>-->
					</div>
				</div>
			</div>
			<appeal></appeal>
		</div>
		<pageFooter class="hidden-sm hidden-xs"></pageFooter>
     	<mobileFooter class="hidden-lg hidden-md"></mobileFooter>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import appeal from './appeal.vue'
	import pageFooter from './pagefooter.vue'
	import mobileFooter from './mobileFooter.vue'
	import mobileList from './mobileList.vue'
	import '../../../static/css/PCstyle.css'
	export default {
		name: 'appealList',
		data(){
			return{
				appealList:[],
				appealDetail:''
			}
		},
		components:{
			appeal,
			pageFooter,
		  	mobileFooter,
		  	mobileList
		},
		mounted:function () {
			this.getAppeals();
		},
		methods:{
			showAppealModal:function () {
		  		$('#appealModal').modal('show');
		  	},
			getAppeals:function () {
				$.ajax({
		  			type:'get',
		  			url:getService()+"/appealForm/getMyAppealForm",
		  			dataType: "json",
		  			data:{
		  				
		  			},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		this.appealList = res.data;
				    		for (var i=0;i<this.appealList.length;i++) {
				    			this.appealList[i].created_at = this.transformDate(this.appealList[i].created_at);
				    		}
				    	}
				    }.bind(this)
		  		});
			},
			//	  	时间戳转为日期
		  	transformDate:function (timeStamp) {
		  		var date = new Date(timeStamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        var y = date.getFullYear();    
			    var m = date.getMonth() + 1;    
			    m = m < 10 ? ('0' + m) : m;    
			    var d = date.getDate();    
			    d = d < 10 ? ('0' + d) : d;    
			    var h = date.getHours();  
			    h = h < 10 ? ('0' + h) : h;  
			    var minute = date.getMinutes();  
			    var second = date.getSeconds();  
			    minute = minute < 10 ? ('0' + minute) : minute;    
			    second = second < 10 ? ('0' + second) : second;   
			    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
	//	        var str = Y+M+D+h+m+s;
	//	        return date;
		  	},
		  	checkAppeal:function (appealID) {
		  		this.appealDetail = '';
		  		var param = {
		  			appealFormID:appealID
		  		}
		  		$.ajax({
		  			type:'post',
		  			url:getService()+"/appealForm/getAppealFormById",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		this.appealDetail = res.data[0];
				    		this.appealDetail.updated_at = this.transformDate(this.appealDetail.updated_at);
				    		this.appealDetail.created_at = this.transformDate(this.appealDetail.created_at);
//				    		this.appealDetail.response = this.appealDetail.response.replace(/<.*?>/ig,"");
//				    		$('#appealResponse').html(this.appealDetail.response);
							if (this.appealDetail.response == undefined || this.appealDetail.response == '') {
								$('#appealResponse').hide();
							}
							else{
								$('#appealResponse').show();
								$('#appealResponse').html(
									'<div class="row" style="font-size: 12px;color: #999;margin-top: 10px;">'+this.appealDetail.updated_at+'</div>'
									+'<div class="row" style="margin-top: 10px;margin-bottom: 15px;">【客服回復】</div>'
									+this.appealDetail.response
								);
							}
				    	}
				    }.bind(this)
		  		});
		  		$('#appealList').hide();
		  		$('#appealDetail').show();
		  	},
		  	backToList:function () {
		  		$('#appealList').show();
		  		$('#appealDetail').hide();
		  	}
		}
	}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
</style>