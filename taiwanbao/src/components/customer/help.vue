<template>
	<div class="help">
		<!--PC端-->
		<div class="hidden-sm hidden-xs">
			<div class="row nomargin" style="margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding bar">
					<div class="row nomargin" >
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
							<p class="pull-left font12 nomargin" style="color: #999;line-height: 30px;margin-right: 30px;">左逛右逛遇到寳！</p>
							<!--<a href="javascript:void(0);" class="pull-left font12" style="color: #666;line-height: 30px;">返利教學&nbsp;&nbsp;|&nbsp;&nbsp;</a>
							<a href="javascript:void(0);" class="pull-left font12" style="color: #666;line-height: 30px;">代購教學&nbsp;&nbsp;|&nbsp;&nbsp;</a>-->
							<router-link to="/help" class="pull-left font12" style="color: #666;line-height: 30px;">幫助中心</router-link>
							<router-link v-if="!loginFlag" to="/login" class="pull-right font12" style="color: #00a6ff;line-height: 20px;display: inline-block;border: 0.5px solid #00a6ff;margin-top: 5px;background: #fff;padding: 0 10px;border-radius: 3px;">會員登錄</router-link>
							<router-link v-if="!loginFlag" to="/login" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">免費註冊</router-link>
							<a v-if="loginFlag"  class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px; cursor:pointer;" @click="loginOut">會員登出</a>
							<router-link v-if="loginFlag" to="/center" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">會員中心</router-link>
							<!-- <a href="javascript:void(0);" class="pull-right font12" style="color: #666;line-height: 30px;" @click="loginOut">會員登出</a>
							<a href="javascript:void(0);" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">會員中心</a> -->
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;padding-top: 20px;  background:#fff; padding-bottom:20px; box-shadow:0px 0px 2px 2px #ccc;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<div class="row nomargin" >
						<div class="col-lg-2 col-md-2 nopadding">
							<router-link to="/index"><img src="../../assets/images/yubaologo.png" class="pull-left" style="width: 100px;"/></router-link>
						</div>
						<div class="col-lg-10 col-md-10 nopadding">
							<img src="../../../static/images/lineQRCode.png" class="pull-right QRCode" v-on:click="showQRCode()" style="margin-left: 15px;"/>
							<button type="button" class="pull-right btn" style="background: #00a6ff;color: #fff;border-radius: 0;height: 34px;margin-top: 20px;" v-on:click="searchItem()">購物返R幣</button>
							<input type="text" v-model="itemName"  placeholder="粘貼淘寶/天貓寶貝標題，購物拿返利" class="pull-right" style="border: 0.5px solid #00a6ff;width: 400px;height: 34px;padding-left: 15px;font-size: 12px;margin-top: 20px;"/>
							<p style="display: inline-block;text-align: center;width: 128px;background: #00a6ff;color: #fff;font-size: 10px;position: absolute;right: 467px;">尋找淘寶/天貓上的寶貝</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;min-height: 400px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<div class="row nomargin" style="margin-top: 20px;">
						<div class="col-lg-12 col-md-12 nopadding" style="border: 0.5px solid #00a6ff;background: #e1eef5;border-radius: 5px;">
							<center><p class="nomargin" style="color: #666;line-height: 34px;">請使用快捷鍵 <span style="color: #00a6ff;">ctrl+f</span> 或 <span style="color: #00a6ff;">cmd+f</span> 搜索內容</p></center>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 5px;margin-bottom: 50px;">
						<!--幫助中心左側部分-->
						<div class="col-lg-4 col-md-4" style="padding-left: 0;">
							<div class="box" v-for="(item,index) in annoucementLeft">
								<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left nomargin title"><img src="../../assets/images/daifuicon.png" class="pull-left"/>{{item.model_name}}</p>
									</div>
								</div>
								<div style="border-bottom: 0.5px dashed #ccc;margin: 0 15px;" v-for="(aitem,aindex)  in item.announcementArray"  :class="[{noneBorder: aindex == item.announcementArray.length-1},'row','nomargin']">
									<div class="col-lg-12 col-md-12 nopadding">
										<a href="javascript:void(0);" class="pull-left" @click="popAnnoucement(aitem)">{{aitem.announcementTopic}}</a>
									</div>
								</div>
							</div>

						</div>
						<!--幫助中心左側部分 結束-->
						<!--幫助中心中間部分-->
						<div class="col-lg-4 col-md-4 nopadding">
							<div class="box" v-for="(item,index) in annoucementCenter">
								<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left nomargin title"><img src="../../assets/images/daifuicon.png" class="pull-left"/>{{item.model_name}}</p>
									</div>
								</div>
								<div style="border-bottom: 0.5px dashed #ccc;margin: 0 15px;" v-for="(aitem,aindex)  in item.announcementArray"  :class="[{noneBorder: aindex == item.announcementArray.length-1},'row','nomargin']">
									<div class="col-lg-12 col-md-12 nopadding">
										<a href="javascript:void(0);" class="pull-left" @click="popAnnoucement(aitem)">{{aitem.announcementTopic}}</a>
									</div>
								</div>
							</div>
						</div>
						<!--幫助中心中間部分結束-->
						<!--幫助中心右側部分-->
						<div class="col-lg-4 col-md-4" style="padding-right: 0;">
							<div class="box" v-for="(item,index) in annoucementRight">
								<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left nomargin title"><img src="../../assets/images/daifuicon.png" class="pull-left"/>{{item.model_name}}</p>
									</div>
								</div>
								<div style="border-bottom: 0.5px dashed #ccc;margin: 0 15px;" v-for="(aitem,aindex)  in item.announcementArray"  :class="[{noneBorder: aindex == item.announcementArray.length-1},'row','nomargin']">
									<div class="col-lg-12 col-md-12 nopadding">
										<a href="javascript:void(0);" class="pull-left" @click="popAnnoucement(aitem)">{{aitem.announcementTopic}}</a>
									</div>
								</div>
							</div>
							
						</div>
						<!--幫助中心右側部分結束-->
					</div>
				</div>
			</div>
			<QRCode></QRCode>
			<pageFooter></pageFooter>
			<!--<div class="row nomargin" style="margin: 0;margin-bottom: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<center>
						<p style="margin-bottom: 0;font-size: 10px;">
							<a href="javascript:void(0);" style="color: #666;">公司簡介</a>&nbsp;|&nbsp;<a href="javascript:void(0);" style="color: #666;">個人資料安全保障策略</a>&nbsp;|&nbsp;<a href="javascript:void(0);" style="color: #666;">會員條款</a>&nbsp;|&nbsp;<a href="javascript:void(0);" style="color: #666;">合作提案</a>&nbsp;|&nbsp;<a href="javascript:void(0);" style="color: #666;">聯繫方式</a>&nbsp;|&nbsp;<a href="/help" style="color: #666;">幫助</a>
						</p>
					</center>
					<center style="margin-top: 10px;"><p style="margin-bottom: 0;font-size: 10px;color: #999;">玉寶國際有限公司 © 版權所有 2018-2020</p></center>
				</div>
			</div>-->
		</div>
		<!--手機端-->
		<div class="hidden-lg hidden-md">
			<div class="row nomargin" style="margin: 0;background: #ff8500;border-bottom: 0.5em solid #f5f5f5;">
				<div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
					<p style="margin-bottom: 0;line-height: 42px;color: #fff;">幫助中心</p>
				</div>
	    		<mobileList></mobileList>
			</div>
			<div class="row nomargin" style="margin: 0;margin-bottom: 3em;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<div class="row nomargin" style="margin-top: 5px;margin-bottom: 50px;">
						<!--幫助中心左側部分-->
						<div class="col-lg-4 col-md-4 nopadding">
							<div class="box" style="border: none;" v-for="(item,index) in allAnnoucement">
								<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
									<div class="col-lg-12 col-md-12 nopadding">
										<p class="pull-left nomargin title"><img src="../../assets/images/daifuicon.png" class="pull-left"/>{{item.model_name}}</p>
									</div>
								</div>
								<div style="border-bottom: 0.5px dashed #ccc;margin: 0 15px;" v-for="(aitem,aindex)  in item.announcementArray"  :class="[{noneBorder: aindex == item.announcementArray.length-1},'row','nomargin']">
									<div class="col-lg-12 col-md-12 nopadding">
										<a href="javascript:void(0);" class="pull-left" @click="popAnnoucement(aitem)">{{aitem.announcementTopic}}</a>
									</div>
								</div>
							</div>
							
						</div>
						<!--幫助中心左側部分 結束-->
						
					</div>
				</div>
			</div>
			<mobileFooter class="hidden-lg hidden-md" ></mobileFooter>
		</div>
		<!-- 公告模态框（Modal） -->
		<div class="modal fade" id="noticeInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content" style="border-radius: 5px;">
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>帮助</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding" v-html="annoucetitle" style="border-bottom:0.5px #ccc solid; text-align:left">
		            			
		            		</div>
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding annoucemsg" v-html="annoucemsg" style="margin-top:20px;">
		            			
		            		</div>
		            	</div>
		            </div>
		            <!--<div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
		                <button type="button" class="btn btn-warning" data-dismiss="modal">关闭</button>
		            </div>-->
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import pageFooter from './pagefooter.vue'
	import mobileFooter from './mobileFooter.vue'
	import mobileList from './mobileList.vue'
	import QRCode from './QRCode.vue'
	import '../../../static/css/PCstyle.css'
	export default {
	  name: 'help',
	  data(){
	  	return {
	  		allAnnoucement:[],
	  		annoucementLeft:[],
	  		annoucementCenter:[],
	  		annoucementRight:[],
	  		annoucementLeftLen:0,
	  		annoucementCenterLen:0,
	  		annoucementRightLen:0,
	  		annoucetitle:'',
	  		annoucemsg:'',
	  		loginFlag:false,
	  		itemName:''
	  	}
	  },
	  components:{
	  	pageFooter,
	  	mobileFooter,
	  	mobileList,
	  	QRCode
	  },
	  mounted:function () {
	  	this.getAllHelpAnnouncement();
	  	this.getInfo();
	  },
	  updated(){
	  	$('.annoucemsg').find('img').css('width','100%');
	  },
	  methods:{
	  	showQRCode:function () {
	  		$('#QRCodeModal').modal('show');
	  	},
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
	  	getAllHelpAnnouncement:function () {
	  		var that = this;
				$.ajax({
		  			type:'get',
		  			url:getService()+"/announcement/getHelpCenterAnnouncement",
		  			dataType: "json",
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	console.log('res=',res)
				    	if(res.error_code == 0){
				    		that.allAnnoucement = res.data;
				    		if(that.allAnnoucement[0]){
				    			that.annoucementLeft.push(that.allAnnoucement[0]);
				    			that.annoucementLeftLen = that.allAnnoucement[0].announcementArray.length+1;
				    		}
				    		if(that.allAnnoucement[1]){
				    			that.annoucementCenter.push(that.allAnnoucement[1]);
				    			that.annoucementCenterLen = that.allAnnoucement[1].announcementArray.length+1;
				    		}
				    		if(that.allAnnoucement[2]){
				    			that.annoucementRight.push(that.allAnnoucement[2]);
				    			that.annoucementRightLen = that.allAnnoucement[2].announcementArray.length+1;
				    		}
				    		if(that.allAnnoucement.length>3){
				    			for( var i=3;i<that.allAnnoucement.length;i++){
				    				if(that.annoucementLeftLen<that.annoucementCenterLen){
				    					if(that.annoucementLeftLen<that.annoucementRightLen){
				    						that.annoucementLeft.push(that.allAnnoucement[i]);
				    						that.annoucementLeftLen += (that.allAnnoucement[i].announcementArray.length+1);
				    					}else{
				    						that.annoucementRight.push(that.allAnnoucement[i]);
				    						that.annoucementRightLen += (that.allAnnoucement[i].announcementArray.length+1);
				    					}
				    				}else{
				    					if(that.annoucementCenterLen<that.annoucementRightLen){
				    						that.annoucementCenter.push(that.allAnnoucement[i]);
				    						that.annoucementCenterLen += (that.allAnnoucement[i].announcementArray.length+1);
				    					}else{
				    						that.annoucementRight.push(that.allAnnoucement[i]);
				    						that.annoucementRightLen += (that.allAnnoucement[i].announcementArray.length+1);
				    					}

				    				}

				    			}

				    		}

				    	}
				    	
				    },
				    error:function(res){
				    }
		  		});
		},
		popAnnoucement(item){
			this.annoucetitle = item.announcementTopic;
			this.annoucemsg = item.content;			
			$('#noticeInfoModal').modal('show');			
		},
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
	    },
	    searchItem:function () {
	  		window.open('https://ai.taobao.com/search/index.htm?pid=mm_229120035_155400308_57411200488&unid=search&key='+this.itemName);
	  		 		
	  	},
	  }
	}
</script>

<style scoped>
	/*@import url("../../assets/css/PCstyle.css");*/
	.noneBorder{
		border-bottom:none !important;
	}
	.box{
		background:#fff;
	}
	.nomargin{margin: 0;}
  	.nopadding{padding: 0;}
  	.annoucemsg img{width: 100%;}
</style>