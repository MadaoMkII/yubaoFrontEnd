<template>
	<div class="manage" style="background: #f5f5f5;">
		<div class="row">
			<div class="col-lg-2 col-md-2" style="padding: 0px;">
				<leftmenu></leftmenu>
			</div>
			<div class="col-lg-10 col-md-10">
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<rightheader></rightheader>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<div class="row" id="manage" style="margin: 15px;background: #fff;height: 735px;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<!--<datetime :readonly='true' format='YYYY-MM-DD' :class="form-control" id="startTime"></datetime>
								<button type="button" v-on:click="test()">保存</button>-->
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<label class="pull-left" style="font-size: 18px;margin-right: 15px;">当日数据看板</label>
										<a href="javascript:void(0)" v-on:click="setSearchType('year')">
											<p class="normalTxt pull-left" id="year" style="padding: 0 30px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;">年</p>
										</a>
										<a href="javascript:void(0)" v-on:click="setSearchType('month')">
											<p class="normalTxt pull-left" id="month" style="padding: 0 30px;border-left: none;">月</p>
										</a>
										<a href="javascript:void(0)" v-on:click="setSearchType('day')">
											<p class="colorTxt pull-left" id="day" style="padding: 0 30px;border-left: none;border-top-right-radius: 5px;border-bottom-right-radius: 5px;">日</p>
										</a>
										<label class="pull-left" style="margin-left: 30px;line-height: 34px;margin-right: 15px;">交易时间：</label>
										<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="startTime" style="width: 15%;margin-top: 2px;"></datetime>
										<p class="pull-left" style="line-height: 34px;margin: 0 5px;">-</p>
										<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="endTime" style="width: 15%;margin-top: 2px;"></datetime>
										<button type="button" class="btn btn-default" v-on:click="searchData()">查询</button>
									</div>
								</div>
								<!--<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<a href="javascript:void(0)"><p class="pull-right normalTxt" style="border-top-right-radius: 5px;border-bottom-right-radius: 5px;padding: 0 30px;">RMB</p></a>
										<a href="javascript:void(0)"><p class="pull-right colorTxt" style="border-top-left-radius: 5px;border-bottom-left-radius: 5px;padding: 0 30px;border-right: none;">NT</p></a>
									</div>
								</div>-->
								<!--金額柱狀圖-->
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12" style="height: 350px;">
										<div class="row" style="margin-top: 15px;">
											<div class="col-lg-2 col-md-2">
												<div class="row" style="height: 30px;">
													<p>金額</p>
												</div>
												<div class="row" style="height: 150px;">
													<p>{{totalAmount}} NT</p>
												</div>
												<div class="row">
													<p>{{halfTotalAmount}} NT</p>
												</div>
											</div>
											<div class="col-lg-10 col-md-10">
												<div class="row" style="border-left: 1px solid #999;border-bottom: 1px solid #999;height: 330px;">
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="taobaoAmountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{taobaoAmount}} NT</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="aliAmountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{aliAmount}} NT</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="zhifubaoAmountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{zhifubaoAmount}} NT</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="wechatAmountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{wechatAmount}} NT</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="daigouAmountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{daigouAmount}} NT</p></center>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-2 col-md-2">
														<p>天貓淘寶代付</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>R幣儲值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>支付寶充值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>微信充值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>代購</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>業務類型</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!--單數柱狀圖-->
								<div class="row" style="margin-top: 50px;">
									<div class="col-lg-12 col-md-12" style="height: 350px;">
										<div class="row" style="margin-top: 15px;">
											<div class="col-lg-2 col-md-2">
												<div class="row" style="height: 30px;">
													<p>訂單量</p>
												</div>
												<div class="row" style="height: 150px;">
													<p>{{totalCount}} 單</p>
												</div>
												<div class="row">
													<p>{{halfTotalCount}} 單</p>
												</div>
											</div>
											<div class="col-lg-10 col-md-10">
												<div class="row" style="border-left: 1px solid #999;border-bottom: 1px solid #999;height: 330px;">
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="taobaoCountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{taobaoCount}} 单</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="aliCountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{aliCount}} 单</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="zhifubaoCountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{zhifubaoCount}} 单</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="wechatCountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{wechatCount}} 单</p></center>
														</div>
													</div>
													<div class="col-lg-2 col-md-2" style="padding: 0 15px;height: 100%;">
														<div id="daigouCountBar" style="width: 100%;height: 0%;background: #8bc34a;position: relative;bottom: -100%;">
															<center><p style="position: relative;top: -20px;">{{daigouCount}} 单</p></center>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-2 col-md-2">
														<p>天貓淘寶代付</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>R幣儲值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>支付寶充值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>微信充值</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>代購</p>
													</div>
													<div class="col-lg-2 col-md-2">
														<p>業務類型</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row" style="margin-top: 50px;">
									<div class="col-lg-12 col-md-12" style="background: #f5f5f5;border: 1px solid #dbdbdb;border-radius: 5px;padding: 30px 15px;">
										<div class="row">
											<div class="col-lg-12 col-md-12">
												<label class="pull-left" style="font-size: 18px;">起充点设置</label>
											</div>
										</div>
										<div class="row" style="margin-top: 10px;">
											<div class="col-lg-12 col-md-12">
												<label class="pull-left" style="line-height: 34px;margin-right: 15px;font-size: 12px;">平台起充金额</label>
												<input type="number"  value="" class="pull-left form-control" placeholder="输入金额" v-model="threshold.platform" style="width: 15%;"/>
												<p class="pull-left" style="margin-left: 10px;line-height: 34px;font-size: 12px;">R币</p>
												<label class="pull-left" style="line-height: 34px;margin-right: 15px;margin-left: 20px;font-size: 12px;">微信起充金额</label>
												<input type="number"  value="" class="pull-left form-control" placeholder="输入金额" v-model="threshold.wechat" style="width: 15%;"/>
												<p class="pull-left" style="margin-left: 10px;line-height: 34px;font-size: 12px;">R币</p>
												<label class="pull-left" style="line-height: 34px;margin-right: 15px;margin-left: 20px;font-size: 12px;">支付宝起充金额</label>
												<input type="number" value="" class="pull-left form-control" placeholder="输入金额" v-model="threshold.alipay" style="width: 15%;"/>
												<p class="pull-left" style="margin-left: 10px;line-height: 34px;font-size: 12px;">R币</p>
											</div>
										</div>
										<div class="row" style="margin-top: 15px;">
											<div class="col-lg-12 col-md-12">
												<label class="pull-left" style="font-size: 18px;">手续费设置</label>
											</div>
										</div>
										<div class="row" style="margin-top: 10px;">
											<div class="col-lg-12 col-md-12">
												<label class="pull-left" style="line-height: 34px;margin-right: 15px;font-size: 12px;">订单金额</label>
												<input type="number"  value="" v-model="feeRate" class="pull-left form-control" placeholder="输入金额" style="width: 15%;"/>
												<p class="pull-left" style="margin-left: 10px;line-height: 34px;font-size: 12px;">% <span style="color: #999;">(不含转运运费，NT结算)</span></p>
											</div>
										</div>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<button type="button" class="btn btn-default" @click="setThreshold">保存</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import leftmenu from './menu.vue'
	import rightheader from './rightheader.vue'
	import datetime from 'vue-datetimepicker'
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'notice',
		data(){
			return {
				threshold:{
		        	wechat:'',
		        	alipay:'',
		        	platform:''
		      	},
				feeRate:'',
				searchType:'day',
				beforeDate:'',
				afterDate:'',
				taobaoAmount:'',
				taobaoCount:'',
				aliAmount:'',
				aliCount:'',
				zhifubaoAmount:'',
				zhifubaoCount:'',
				wechatAmount:'',
				wechatCount:'',
				daigouAmount:'',
				daigouCount:'',
				totalAmount:'',
				totalCount:'',
				halfTotalAmount:'',
				halfTotalCount:''
			}
		},
		components:{
			leftmenu,
			rightheader,
			datetime
		},
		mounted:function () {
			this.getSetting();
			this.searchData();
			this.setHeight();
		},
		methods:{
			setHeight:function () {
				$('#manage').css('height',(window.screen.height-65)+'px');
			},
			getSetting:function () {
				$.ajax({
		  			type:'get',
		  			url:getService()+"/getSetting",
		  			dataType: "json",
//		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		this.threshold = res.data.threshold;
				    		this.feeRate = res.data.feeRate;
				    	}
				    }.bind(this)
		  		});
			},
			setSearchType:function (str) {
				this.searchType = str;
				document.getElementById('startTime').getElementsByTagName('input')[0].value = '';
				document.getElementById('endTime').getElementsByTagName('input')[0].value = '';
				switch (str){
					case 'year':
						$('#year').attr('class','colorTxt pull-left');
						$('#month').attr('class','normalTxt pull-left');
						$('#day').attr('class','normalTxt pull-left');
						break;
					case 'month':
						$('#month').attr('class','colorTxt pull-left');
						$('#year').attr('class','normalTxt pull-left');
						$('#day').attr('class','normalTxt pull-left');
						break;
					case 'day':
						$('#day').attr('class','colorTxt pull-left');
						$('#year').attr('class','normalTxt pull-left');
						$('#month').attr('class','normalTxt pull-left');
						break;
					default:
						break;
				}
			},
			setThreshold(){
				var that=this;
				var param={
					"threshold":that.threshold,
				    "feeRate":that.feeRate
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/setSetting",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if(res.error_code == 200||res.error_code == 0){
				    		layer.msg('操作成功', {icon: 1});
				    	}else{
				    		layer.msg('操作失败', {icon: 5});
				    	}
				    },
				    error:function(res){
				    	layer.msg('操作失败', {icon: 5});
				    }
		  		});


			},
			searchData:function () {
				this.totalAmount='';
				this.totalCount='';
				this.beforeDate = document.getElementById('startTime').getElementsByTagName('input')[0].value;
				this.afterDate = document.getElementById('endTime').getElementsByTagName('input')[0].value;
				var myDate = new Date();
				var year = myDate.getFullYear();
				var month = myDate.getMonth();
				var day = myDate.getDate();
				if (day < 10) {
					day = '0'+day;
				}
				var realMonth = month+1;
				if (realMonth < 10) {
					realMonth = '0'+realMonth;
				}
				var m_days = new Array(31,28+this.is_leap(year),31,30,31,31,30,31,30,31,30,31);
				var lastDay = m_days[month];
				var param = ''
				if (this.beforeDate != '') {
					param = {
						afterDate:this.beforeDate,
						beforeDate:this.afterDate,
						range:'special'
					}
				} else {
					if (this.searchType == 'year') {
						param = {
// 							afterDate:year+'-01-01',
// 							beforeDate:year+'-12-31'
							range:'year'
						}
					}
					if (this.searchType == 'month') {
						param = {
// 							afterDate:year+'-'+realMonth+'-01',
// 							beforeDate:year+'-'+realMonth+'-'+lastDay
							range:'month'
						}
					}
					if (this.searchType == 'day') {
						param = {
// 							afterDate:year+'-'+realMonth+'-'+day,
// 							beforeDate:year+'-'+realMonth+'-'+day
							range:'day'
						}
					}
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/getDataAnalyst",
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
				    		for (var i=0;i<res.data.length;i++) {
				    			switch (res.data[i].itemWebType){
				    				case '淘寶/天貓/阿里巴巴代付':
				    					this.taobaoAmount = res.data[i].totalAmount;
				    					this.taobaoCount = res.data[i].count;
				    					if (this.taobaoAmount>this.totalAmount) {
				    						this.totalAmount = this.taobaoAmount;
				    					}
				    					if (this.taobaoCount>this.totalCount) {
				    						this.totalCount = this.taobaoCount;
				    					}
				    					break;
				    				case 'R幣儲值':   //阿里巴巴代付
				    					this.aliAmount = res.data[i].totalAmount;
				    					this.aliCount = res.data[i].count;
				    					if (this.aliAmount>this.totalAmount) {
				    						this.totalAmount = this.aliAmount;
				    					}
				    					if (this.aliCount>this.totalCount) {
				    						this.totalCount = this.aliCount;
				    					}
				    					break;
				    				case '支付寶儲值':
				    					this.zhifubaoAmount = res.data[i].totalAmount;
				    					this.zhifubaoCount = res.data[i].count;
				    					if (this.zhifubaoAmount>this.totalAmount) {
				    						this.totalAmount = this.zhifubaoAmount;
				    					}
				    					if (this.zhifubaoCount>this.totalCount) {
				    						this.totalCount = this.zhifubaoCount;
				    					}
				    					break;
				    				case '微信錢包儲值':
				    					this.wechatAmount = res.data[i].totalAmount;
				    					this.wechatCount = res.data[i].count;
				    					if (this.wechatAmount>this.totalAmount) {
				    						this.totalAmount = this.wechatAmount;
				    					}
				    					if (this.wechatCount>this.totalCount) {
				    						this.totalCount = this.wechatCount;
				    					}
				    					break;
				    				case '其他網站代購':
				    					this.daigouAmount = res.data[i].totalAmount;
				    					this.daigouCount = res.data[i].count;
				    					if (this.daigouAmount>this.totalAmount) {
				    						this.totalAmount = this.daigouAmount;
				    					}
				    					if (this.daigouCount>this.totalCount) {
				    						this.totalCount = this.daigouCount;
				    					}
				    					break;
				    				default:
				    					break;
				    			}
				    		}
				    		this.totalAmount = parseInt(this.totalAmount*1.2);
				    		this.totalCount = parseInt(this.totalCount*1.2);
				    		this.halfTotalAmount = parseInt(this.totalAmount/2);
				    		this.halfTotalCount = parseInt(this.totalCount/2);
				    		var taobaoAmountPart = parseInt(this.taobaoAmount/this.totalAmount*100);
				    		if (isNaN(taobaoAmountPart)) {
				    			taobaoAmountPart = 0;
				    		}
				    		var aliAmountPart = parseInt(this.aliAmount/this.totalAmount*100);
				    		if (isNaN(aliAmountPart)) {
				    			aliAmountPart = 0;
				    		}
				    		var zhifubaoAmountPart = parseInt(this.zhifubaoAmount/this.totalAmount*100);
				    		if (isNaN(zhifubaoAmountPart)) {
				    			zhifubaoAmountPart = 0;
				    		}
				    		var wechatAmountPart = parseInt(this.wechatAmount/this.totalAmount*100);
				    		if (isNaN(wechatAmountPart)) {
				    			wechatAmountPart = 0;
				    		}
				    		var daigouAmountPart = parseInt(this.daigouAmount/this.totalAmount*100);
				    		if (isNaN(daigouAmountPart)) {
				    			daigouAmountPart = 0;
				    		}
				    		document.getElementById('aliAmountBar').style.cssText = 'width: 100%;height: '+aliAmountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-aliAmountPart)+'%;';
				    		document.getElementById('taobaoAmountBar').style.cssText = 'width: 100%;height: '+taobaoAmountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-taobaoAmountPart)+'%;';
				    		document.getElementById('zhifubaoAmountBar').style.cssText = 'width: 100%;height: '+zhifubaoAmountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-zhifubaoAmountPart)+'%;';
				    		document.getElementById('wechatAmountBar').style.cssText = 'width: 100%;height: '+wechatAmountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-wechatAmountPart)+'%;';
				    		document.getElementById('daigouAmountBar').style.cssText = 'width: 100%;height: '+daigouAmountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-daigouAmountPart)+'%;';
				    		var taobaoCountPart = parseInt(this.taobaoCount/this.totalCount*100);
				    		if (isNaN(taobaoCountPart)) {
				    			taobaoCountPart = 0;
				    		}
				    		var aliCountPart = parseInt(this.aliCount/this.totalCount*100);
				    		if (isNaN(aliCountPart)) {
				    			aliCountPart = 0;
				    		}
				    		var zhifubaoCountPart = parseInt(this.zhifubaoCount/this.totalCount*100);
				    		if (isNaN(zhifubaoCountPart)) {
				    			zhifubaoCountPart = 0;
				    		}
				    		var wechatCountPart = parseInt(this.wechatCount/this.totalCount*100);
				    		if (isNaN(wechatCountPart)) {
				    			wechatCountPart = 0;
				    		}
				    		var daigouCountPart = parseInt(this.daigouCount/this.totalCount*100);
				    		if (isNaN(daigouCountPart)) {
				    			daigouCountPart = 0;
				    		}
				    		document.getElementById('aliCountBar').style.cssText = 'width: 100%;height: '+aliCountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-aliCountPart)+'%;';
				    		document.getElementById('taobaoCountBar').style.cssText = 'width: 100%;height: '+taobaoCountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-taobaoCountPart)+'%;';
				    		document.getElementById('zhifubaoCountBar').style.cssText = 'width: 100%;height: '+zhifubaoCountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-zhifubaoCountPart)+'%;';
				    		document.getElementById('wechatCountBar').style.cssText = 'width: 100%;height: '+wechatCountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-wechatCountPart)+'%;';
				    		document.getElementById('daigouCountBar').style.cssText = 'width: 100%;height: '+daigouCountPart+'%;background: #8bc34a;position: relative;bottom: -'+(100-daigouCountPart)+'%;';
				    	}
				    }.bind(this)
		  		});
			},
			is_leap:function (year) {
				if (((year % 4)==0) && ((year % 100)!=0) || ((year % 400)==0)) {
					return 1;
				} else { return 0; }
			}
		}
	}
</script>

<style scoped>
	.colorTxt{color: #00a6ff;border: 1px solid #00a6ff;line-height: 34px;}
	.normalTxt{border: 1px solid #666;line-height: 34px;}
</style>