<template>
	<div class="member" style="background: #f5f5f5;">
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
						<div class="row" style="margin: 15px;background: #fff;height: 735px;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="line-height: 34px;">会员等级：</p>
										<select  class="pull-left form-control" v-model="vipLevel" style="width: 13%;margin-right: 15px;">
											<option value="">--请选择--</option>
											<option value="VIP0">VIP0</option>
											<option value="VIP1">VIP1</option>
											<option value="VIP2">VIP2</option>
											<option value="VIP3">VIP3</option>
											<option value="VIP4">VIP4</option>
											<option value="VIP5">VIP5</option>
											<option value="VIP6">VIP6</option>
											<option value="VIP7">VIP7</option>
											<option value="VIP8">VIP8</option>
											<option value="VIP9">VIP9</option>
											<option value="SVIP">SVIP</option>
										</select>
										<p class="pull-left" style="line-height: 34px;">员工筛选：</p>
										<select  class="pull-left form-control" v-model="employStatus" style="width: 13%;margin-right: 15px;">
											<option value="">--请选择--</option>
											<option value="0">非员工</option>
											<option value="1">员工</option>
										</select>
										<button type="button" class="pull-left btn btn-default"  @click="exportExcelFunc">导出</button>
										<a id="exportA" href="javascript:void(0);" style="display:none;"><span id="spanId"></span></a>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="line-height: 34px;">账号：</p>
										<input type="text"  id="" value="" v-model="account" class="pull-left form-control" style="width: 15%;margin-right: 15px;" placeholder="输入账号"/>
										<p class="pull-left" style="line-height: 34px;">邮箱：</p>
										<input type="text"  id="" value="" v-model="email" class="pull-left form-control" style="width: 15%;margin-right: 15px;" placeholder="输入邮箱"/>
										<button type="button" class="pull-left btn btn-default" v-on:click="search()" style="margin-left: 10px;">搜索</button>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover" id="memberMainTable" style="width: 1300px;">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;"></th>
													<th style="width: 10%;">账号</th>
													<th style="width: 10%;">邮箱</th>
													<th style="width: 10%;">真实姓名</th>													
													<th style="width: 10%;">昵称</th>
													<th style="width: 10%;">账户金额(R币)</th>
													<th style="width: 10%;">会员等级/身份</th>
													<th style="width: 10%;">认证账户</th>
													<th style="width: 10%;">其推荐人</th>
													<th style="width: 10%;">他推荐人</th>
													<th style="border-top-right-radius: 5px;width: 10%;">操作</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item,indexP) in userInfo">
													<td style="line-height: 20px;border-left: 1px solid #666;">
														<a href="javascript:void(0)" v-bind:id="'showMoreArrow_'+indexP" v-on:click="showMoreFun(indexP)">↓</a>
													</td>
													<td style="line-height: 20px;">{{item.tel_number}}</td>
													<td style="line-height: 20px;">{{item.email_address}}</td>
													<td style="line-height: 20px;">{{item.realName||''}}</td>													
													<td style="line-height: 20px;">{{item.nickName}}</td>
													<td style="line-height: 20px;">{{item.Rcoins}} <a href="javascript:void(0)" style="display: none;" v-on:click="checkRB(item.uuid)">详情</a></td>
													<td style="line-height: 20px;">{{item.VIPLevel}}</td>
													<!--<td style="line-height: 20px;">{{item.bankAccounts[0]}} <a href="javascript:void(0)" style="display: none;">查看全部</a></td>-->
													<td style="line-height: 20px;">
														<div class="row">
															<center><p>银行信息</p></center>
														</div>
														<div class="row" v-show="index == 0" v-for="(banks,index) in item.bankAccounts">
															<center><p>{{banks.bankType}}{{banks.bankName}}{{banks.accountName}}&nbsp;&nbsp;{{banks.last6digital}}</p></center>
														</div>
														<div class="row" v-bind:class="'bankRow_'+indexP" style="display: none;" v-for="(banks,index) in item.bankAccounts">
															<center><p>{{banks.bankType}}{{banks.bankName}}{{banks.accountName}}&nbsp;&nbsp;{{banks.last6digital}}</p></center>
														</div>
														<div class="row" v-bind:id="'bankNodata_'+indexP" v-if="item.bankAccounts.length == 0">
															<center><p style="color: #f00;">无数据</p></center>
														</div>
														<div class="row" v-bind:id="'aliTitle_'+indexP" style="display: none;">
															<center><p>支付宝账户</p></center>
														</div>
														<div class="row" v-bind:class="'aliRow_'+indexP" style="display: none;" v-for="(aliPay,index) in item.aliPayAccounts">
															<center><p>{{aliPay.alipayAccount}}&nbsp;&nbsp;{{aliPay.nick_name}}<span v-if="aliPay.is_certified" style="color: #92e3bd;margin-left: 5px;">已认证</span><span v-if="!aliPay.is_certified" style="color: #f00;margin-left: 5px;">未认证</span></p></center>
														</div>
														<div class="row" v-bind:id="'aliNodata_'+indexP" style="display: none;" v-if="item.aliPayAccounts.length == 0">
															<center><p style="color: #f00;">无数据</p></center>
														</div>
														<div class="row" v-bind:id="'wechatTitle_'+indexP" style="display: none;">
															<center><p>微信账户</p></center>
														</div>
														<div class="row"  v-bind:class="'wechaRow_'+indexP" style="display: none;" v-for="(wechat,index) in item.wechatAccounts">
															<center><p style="margin-bottom: 0;">{{wechat.wechat_user_info.nickname}}</p></center>
															<center><p>{{wechat.wechat_user_info.openid}}</p></center>
														</div>
														<div class="row" v-bind:id="'wechatNodata_'+indexP" style="display: none;" v-if="item.wechatAccounts.length == 0">
															<center><p style="color: #f00;">无数据</p></center>
														</div>
													</td>
													<td style="line-height: 20px;">{{item.referrer?item.referrer.referrer_email:''}}</td>
													<!--<td style="line-height: 20px;" v-if="item.referrer.referrer_email == null"></td>-->
													<td style="line-height: 20px;">{{item.referrer?(item.referrer.referrals?item.referrer.referrals[0].referrals_tel_number:null):null}} <a href="javascript:void(0)" style="display: none;" v-if="(item.referrer?(item.referrer.referrals?item.referrer.referrals[0].referrals_tel_number:null):null) != null">详情</a></td>
													<!--<td style="line-height: 20px;" v-if="item.referrer.referrals[0].referrer_email == null"></td>-->
													<td style="border-right: 1px solid #666;line-height: 20px;">
														<a href="javascript:void(0)" v-if="!item.userStatus.isEmployee" v-on:click="authorization(item.uuid,true)">标记为员工</a>
														<a href="javascript:void(0)" v-if="item.userStatus.isEmployee" v-on:click="authorization(item.uuid,false)">取消员工标记</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="row nomargin">
									<div class="col-lg-12 col-md-12 paginate">
										<paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'" :container-class="'pull-right'"></paginate>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- R币流水模态框（Modal） -->
		<div class="modal fade" id="RBModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog" style="width: 60%;">
		        <div class="modal-content">
		            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>R币流水</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
		            			<div class="row">
		            				<div class="col-lg-12 col-md-12">
		            					<h4 class="pull-left">R币流水</h4>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-12 col-md-12">
		            					<label class="pull-left" style="line-height: 34px;">业务类型：</label>
		            					<select  class="pull-left form-control" v-model="tradeType" style="width: 30%;">
		            						<option value="">--请选择--</option>
		            						<option value="支出">支出</option>
		            						<option value="充值">充值</option>
		            					</select>
		            					<button type="button" class="pull-right btn btn-default">查询</button>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-12 col-md-12">
		            					<table class="table table-hover">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;">流水类型</th>
													<th>交易金额</th>
													<th>剩余金额</th>
													<th style="border-top-right-radius: 5px;">交易时间</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in RBInfo" v-if="RBInfo.length>0">
													<td style="line-height: 20px;border-left: 1px solid #666;" v-if="item.type == 'payment'">支出</td>
													<td style="line-height: 20px;border-left: 1px solid #666;" v-if="item.type == 'recharge'">充值</td>
													<td style="line-height: 20px;">{{item.credit}}</td>
													<td style="line-height: 20px;">{{item.amount}}</td>
													<td style="border-right: 1px solid #666;line-height: 20px;">{{item.dealTime}}</td>
												</tr>
												<tr v-if="RBInfo.length==0">
													<td colspan="5">无数据</td>
												</tr>
											</tbody>
										</table>
		            				</div>
		            			</div>
		            			<div class="row nomargin" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12 paginate">
										<paginate :page-count="RBtotalPage" :click-handler="RBcurrentPageInfo" :prev-text="'<'" :next-text="'>'" :container-class="'pull-right'"></paginate>
									</div>
								</div>
		            		</div>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import leftmenu from './menu.vue'
	import rightheader from './rightheader.vue'
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'notice',
		data(){
			return {
				currentPage:1,
			    totalPage:1,
			    pageCount:10,
			    userInfo:[],
			    RBInfo:[],
			    RBcurrentPage:1,
			    RBtotalPage:1,
			    RBpageCount:10,
			    tradeType:'',
			    userUUid:'',
			    vipLevel:'',
			    employStatus:'',
			    account:'',
			    email:'',
			    showMore:[]
			}
		},
		components:{
			leftmenu,
			rightheader
		},
		mounted:function () {
			this.getUsers(this.currentPage);
		},
		methods:{
			search:function () {
				// var isEmployee = false;
				// if (this.userStatus == 0) {
				// 	isEmployee = false;
				// } else{
				// 	isEmployee = true;
				// }
				var param= {
					unit:this.pageCount,
					page:1,
					VIPLevel:this.vipLevel,
					isEmployee:this.employStatus,
					tel_number:this.account,
					email_address:this.email
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/findUser",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 200) {
				    		this.userInfo = res.error_msg;
				    		var totalNum = parseInt(res.nofdata);
				    		var pageMore = totalNum % this.pageCount;
				    		if (pageMore == 0) {
				    			this.totalPage = parseInt(totalNum / this.pageCount);
				    		} else{
				    			this.totalPage = parseInt(totalNum / this.pageCount) + 1;
				    		}
				    	}
				    }.bind(this)
		  		});
			},
			currentPageInfo:function (pageNum) {
		  		this.currentPage = pageNum;
		  		this.getUsers(this.currentPage);
		  	},
		  	RBcurrentPageInfo:function (RBpageNum) {
		  		this.RBcurrentPage = RBpageNum;
		  		this.getRB(this.RBcurrentPage);
		  	},
			getUsers:function (num) {
				var param= {
					unit:this.pageCount,
					page:parseInt(num)
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/findUser",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 200) {
				    		this.userInfo = res.error_msg;
				    		for (var i=0;i<this.userInfo.length;i++) {
				    			this.showMore[i] = false;
				    		}
				    		console.log(this.showMore);
				    		console.log('this.userInfo=',this.userInfo);
				    		var totalNum = parseInt(res.nofdata);
				    		var pageMore = totalNum % this.pageCount;
				    		if (pageMore == 0) {
				    			this.totalPage = parseInt(totalNum / this.pageCount);
				    		} else{
				    			this.totalPage = parseInt(totalNum / this.pageCount) + 1;
				    		}
				    	}
				    }.bind(this)
		  		});
			},
			showMoreFun:function (num) {				
				if(!this.showMore){
//					$('#bankNodata_'+num).show();
					$('#aliNodata_'+num).show();
					$('#wechatNodata_'+num).show();
					$('#aliTitle_'+num).show();
					$('#wechatTitle_'+num).show();
					$('.bankRow_'+num).show();
					$('.aliRow_'+num).show();
					$('.wechaRow_'+num).show();
					$('#showMoreArrow_'+num).html('↑');
					this.showMore = true;
				}else{
//					$('#bankNodata_'+num).hide();
					$('#aliNodata_'+num).hide();
					$('#wechatNodata_'+num).hide();
					$('#aliTitle_'+num).hide();
					$('#wechatTitle_'+num).hide();
					$('.bankRow_'+num).hide();
					$('.aliRow_'+num).hide();
					$('.wechaRow_'+num).hide();
					$('#showMoreArrow_'+num).html('↓');
					this.showMore = false;
				}
				
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
			checkRB:function (userID) {
				this.userUUid = userID;
				this.getRB(this.RBcurrentPage);
				$('#RBModal').modal('show');
			},
			getRB:function (num) {
				var param = {
					tradeType:this.tradeType,
					userUUid:this.userUUid,
					unit:this.RBpageCount,
					page:parseInt(num)
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/findThisUserRcoinRecord",
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
				    		this.RBInfo = res.data;
				    		for (var i=0;i<this.RBInfo.length;i++) {
				    			this.RBInfo[i].dealTime = this.transformDate(this.RBInfo[i].dealTime);
				    		}
				    		var totalNum = parseInt(res.nofdata);
				    		var pageMore = totalNum % this.RBpageCount;
				    		if (pageMore == 0) {
				    			this.RBtotalPage = parseInt(totalNum / this.RBpageCount);
				    			if (this.RBtotalPage == 0) {
				    				this.RBtotalPage = 1;
				    			}
				    		} else{
				    			this.RBtotalPage = parseInt(totalNum / this.RBpageCount) + 1;
				    		}
				    	}
				    }.bind(this)
		  		});
			},
			authorization:function (userID,isE) {
				var param = {
					uuid:userID,
					isEmployee:isE
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/user/setEmployee",
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
				    		window.location.reload();
				    	}
				    	else{
				    		alert('标记失败')
				    	}
				    }.bind(this)
		  		});
			},
			exportExcelFunc(){
				 var html = "<html><head><meta charset='utf-8' /></head><body>" + $('#memberMainTable').prop("outerHTML") + "</body></html>";
				 var blob = new Blob([html], { type: "application/vnd.ms-excel" });
				 var newA = $('#exportA');
				 $('#exportA').attr('href',URL.createObjectURL(blob));
				 $('#exportA').attr('download','会员资料.xls');
				 $("#spanId").click();

			}
		}
	}
</script>

<style scoped>
	table th,td{text-align: center;}
	table th{background: #33b8ff;color: #fff;}
	table td{border-bottom: 1px solid #666;font-size: 12px;}
	
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
</style>