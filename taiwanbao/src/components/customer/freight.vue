<template>
	<div class="freight">
		<div class="row nomargin bar hidden-sm hidden-xs" style="margin: 0;background: #ff8500;height: 34px;">
			<div class="col-lg-12 col-md-12 nopadding">
				<div class="row nomargin">
					<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
						<a href="" class="pull-left" style="margin-right: 30px;">會員中心</a>
						<!-- <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/messageicon.png" class="pull-left"/>消息</a> -->
						<a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/shensuicon.png" class="pull-left"/>申訴&提問</a>
						<router-link to="appealList" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/listicon.png" class="pull-left"/>工單</router-link>
						<a href="" class="pull-right">登出</a>
						<router-link to="/index" style="margin-right: 30px;"><img src="../../assets/images/homeicon.png" class="pull-left"/>首頁</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="row nomargin hidden-lg hidden-md" style="background: #ff8500;margin: 0;">
			<div class="col-sm-6 col-xs-6 col-sm-offset-3 col-xs-offset-3">
				<p style="margin-bottom: 0;line-height: 42px;color: #fff;">補繳運費</p>
			</div>
    		<mobileList></mobileList>
		</div>
		<div class="row nomargin" style="margin: 0;margin-top: 20px;margin-bottom: 30px;">
			<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
				<div class="row nomargin hidden-sm hidden-xs">
					<div class="col-lg-12 col-md-12 nopadding" style="height: 40px;background: rgba(0,166,255,0.5);border: 0.5px solid #00a6ff;border-radius: 10px;">
						<div class="row nomargin">
							<div style="width: 80%;margin: 0 auto;">
								<p class="pull-left action">1</p>
								<p class="pull-left actionTxt">补缴运费</p>
								<div class="pull-left" style="width: 25%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
								<p class="pull-left unaction">2</p>
								<p class="pull-left actionTxt">缴费成功</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row nomargin hidden-lg hidden-md" style="margin-top: 1em;padding: 0 15px;">
					<div class="col-sm-12 col-xs-12">
						<p class="pull-left action">1</p>
						<div class="pull-left" style="width: 70%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
						<p class="pull-left unaction">2</p>
					</div>
				</div>
				<div class="row nomargin" style="padding: 30px 15px;">
					<div class="col-lg-8 col-md-8" style="padding-left: 0;border: 0.5px solid #ccc;padding: 0 15px;">
						<div id="step1" style="display:block;">
						<div class="row nomargin" style="margin-top: 30px;">
							<div class="col-lg-12 col-md-12">
								<p class="pull-left" style="text-align: left;font-size: 12px;">需补缴运费</p>
							</div>
						</div>
						<div class="row nomargin">
							<div class="col-lg-12 col-md-12">
								<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold;">订单明细：</p>
								<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold;">{{billID}}</p>
								<p class="pull-left hidden-lg hidden-md" style="font-size: 14px;font-weight: bold;line-height: 34px;">订单明细：</p>
								<p class="pull-left hidden-lg hidden-md" style="font-size: 14px;font-weight: bold;line-height: 34px;">{{billID}}</p>
							</div>
						</div>
						<div class="row nomargin" style="margin-top: 15px;">
							<div class="col-lg-12 col-md-12">
								<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold; margin-right:10px;">应付新台币:</p>
								<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold; margin-right:10px; ">$<span style="color:blue; margin:0 5px; font-weight:normal;">{{postageAmount}}</span>TWD</p>
							
							</div>
						</div>
						<div class="row nomargin" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12">
										<div class="row nomargin">
											<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">請選擇付款方式 </p>
										</div>
										<div class="row nomargin" style="margin-top: 10px;">
											<p class="pull-left nomargin" style="font-size: 12px;color: #333;">網路ATM/ATM櫃員機<span style="font-size: 10px;color: #999;">（銀行賬戶詳情在送出訂單后可見）</span></p>
										</div>
										<div class="row nomargin" style="margin-top: 10px;">
											<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="padding: 0;">
												<input type="radio" name="typeStr"  value="012 台北富邦銀行 收款賬戶 328400" v-model="typeStr" class="pull-left" style="margin-top: 10px;"/>
											</div>
											<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11" style="padding-left: 0;">
												<div class="row nomargin">
													<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 nopadding">
														<center><img src="../../assets/images/taibei.jpg" class="pull-left" style="width: 80%;border-radius: 50%;"/></center>
													</div>
													<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10 nopadding">
														<div class="row nomargin">
															<p class="pull-left" style="margin: 0;font-size: 12px;">012 台北富邦銀行 收款賬戶 328400</p>
														</div>
														<div class="row nomargin">
															<p class="pull-left" style="margin: 0;color: #e00;font-size: 12px;">支援全臺各家銀行轉入</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="row nomargin" style="margin-top: 20px;">
											<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="padding: 0;">
												<input type="radio" name="typeStr"  value="812 台新商銀 收款賬戶 601810" v-model="typeStr" class="pull-left" style="margin-top: 10px;"/>
											</div>
											<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11" style="padding-left: 0;">
												<div class="row nomargin">
													<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 nopadding">
														<center><img src="../../assets/images/taixin.jpg" class="pull-left" style="width: 80%;border-radius: 50%;"/></center>
													</div>
													<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10 nopadding">
														<div class="row nomargin">
															<p class="pull-left" style="margin: 0;font-size: 12px;">812 台新商銀 收款賬戶 601810</p>
														</div>
														<div class="row nomargin">
															<p class="pull-left" style="margin: 0;color: #e00;font-size: 12px;">支援全臺各家銀行轉入</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
						<div class="row nomargin" style="margin-top: 15px;">
							<div class="col-lg-12 col-md-12">
								<div class="row nomargin">
									<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式 <span style="margin-left: 15px;">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
								</div>
								<div class="row nomargin" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<div class="row">
											<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
										</div>
										<div class="row">
											<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
												<div class="row" style="background: #ccc;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
													<div class="row" v-for="item in userInfo.bankAccounts">
														<input type="radio" name="chooseBank"  :value="item.accountName" v-model="chooseBank" class="pull-left" style="margin-top: 6px; margin-right:6px; margin-left:10px;"/>
														<a href="javascript:void(0)" class="pull-left"  style="color: #008000;margin-right: 10px;line-height: 22px;  text-align: left;" >{{item.accountName}}({{item.bankName}})</a>
														<a href="javascript:void(0)"  class="pull-left"  style="color: #2a6baf;margin-right: 10px;line-height: 22px; text-align: left;" v-if="chooseBank==item.accountName"><img src="../../assets/images/chooseIcon.png"/>約定賬戶</a>
													</div>
												</div>
												<div class="row" style="padding: 0 15px">
													<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;text-align: left;">请按订单金额使用您已经登记的银行账号付款，非上列银行账户转入或金额不符将不会为您完成交易！</p>
												</div>
											</div>
										</div>
										<div class="row nomargin" style="margin-top: 30px;">
											<div class="col-lg-12 col-md-12">
												<center><input type="checkbox"  id="alreadyRead"  style="margin-right: 5px;position: relative;top: 1px;"/>我已閱讀并同意<a href="javascript:void(0)">「結匯授權同意書」</a></center>
											</div>
										</div>
										<div class="row nomargin" style="margin-top: 10px;margin-bottom: 40px;">
											<div class="col-lg-4 col-md-4 col-lg-offset-4 col-md-offset-4">
												<button type="button" class="btn btn-warning" style="background: #ff8500;width: 100%;" @click="nextStep">下一步</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="step2" style="display: none;">
								<div class="row" style=" border-bottom:1px solid #dbdbdb; ">
									<div class="col-lg-12 col-md-12">
										<img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 10px;"/>
										<span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>

									</div>
								</div>
								<div class="row" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;">订单明细：{{billID}}</p>
										
										<p  class="pull-right"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{billState}}</p>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold; margin-right:10px;">应付新台币:</p>
										<p class="pull-left hidden-sm hidden-xs" style="font-size: 20px;font-weight: bold; margin-right:10px; ">$<span style="color:blue; margin:0 5px; font-weight:normal;">{{postageAmount}}</span>TWD</p>
									</div>
								</div>
								<div class="row" style="margin-top: 20px; margin-left:10px;">
									<div class="col-lg-12 col-md-12">
										<div class="row nomargin">
											<p style="font-size: 12px;text-align: left;">最后处理时间：{{updated_at}}</p>
										</div>
										<div class="row nomargin" style="margin-top: 10px;">
											<p style="font-size: 12px;text-align: left;">交易创建时间：{{created_at}}</p>
										</div>
									</div>
								</div>
								<div class="row" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;">ATM银行转账</span></p>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<div class="row">
											<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
										</div>
										<div class="row">
											<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
												<div class="row" style="background: #ccc;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
													<a href="javascript:void(0)" class="pull-left" style="color: #008000;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
												</div>
											</div>
										</div>
										<div class="row" style="margin-top: 20px;">
											<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
										</div>
										<div class="row">
											<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
												<div class="row" style="background: #ccc;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
													<p class="pull-left" style="margin-bottom: 0;color: #008000;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{postageAmount}}</span> TWD</p>
													<p class="pull-left" style="margin-bottom: 0;color: #008000;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
													<p class="pull-left" style="margin-bottom: 0;color: #008000;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
												</div>
												<div class="row" style="padding: 0 15px">
													<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 20px;">
									<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
								</div>
								<div class="row nomargin" style="margin-bottom: 30px;">
									<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
								</div>
							</div>
					</div>
					<div class="col-lg-4 col-md-4 hidden-sm hidden-xs" style="padding-right: 0;padding: 0 15px;">
						<div class="row nomargin" style="border: 0.5px solid #ccc;padding: 20px 0;">
							<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
								<div class="row nomargin">
									<p class="pull-left nomargin" style="font-size: 16px;color: #333;font-weight: bold;">訂單處理時間</p>
								</div>
								<div class="row nomargin" style="margin-top: 10px;">
									<div class="row nomargin" style="margin-top: 10px;">
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">1.24小時每分鐘查款一次，因此付款後不必通知。郵局每日0:00-1:30例行維護，無法查款。</p>
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">2.全年周末及假日無休，24小時服務。一般在收到款項後的5分鐘內完成交易。每日23:50-00:05為結帳時間不做交易，此15分鐘內收到的款項順延到00:06作業。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<pageFooter class="hidden-sm hidden-xs"></pageFooter>
     	<mobileFooter class="hidden-lg hidden-md"></mobileFooter>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import notice from './notice.vue'
	import pageFooter from './pagefooter.vue'
	import mobileFooter from './mobileFooter.vue'
	import mobileList from './mobileList.vue'
	import '../../../static/css/PCstyle.css'
	export default {
		name: 'userfreight',
		data (){
		  return{
		  	status:this.$route.params.state,
		  	billID:this.$route.params.billId,
		  	userLastSix:'',
		  	userBankName:'',
		  	replacePostage:'',
		  	postageAmount:0,
		  	userInfo:'',
		  	typeStr:'',
		  	billState:'',//订单状态
		  	finalbankDetailInfo:{
	  			account:'',
	  			company:''
	  		},
	  		bankDetail:'',
	  		created_at:'',
	  		updated_at:'',
	  		nowStep:1,
	  		chooseBank:'',

		  }
		},
		components:{
			notice,
			pageFooter,
		  	mobileFooter,
		  	mobileList
		},
		watch:{
			chooseBank:function(val,oldVal){
		  		for(var i=0;i<this.userInfo.bankAccounts.length;i++){
		  			if(val==this.userInfo.bankAccounts[i].accountName){
		  				this.setUserBankInfo(this.userInfo.bankAccounts[i].last6digital,this.userInfo.bankAccounts[i].bankName);
		  			}
		  		}
		  	},
		},
		mounted(){
			this.getInfo();
			this.getBillDetail();
			this.getBankDetailFunc();


		},
		methods:{
			getBankDetailFunc(){
	  		$.ajax({
	  			type:'get',
	  			url:getService()+"/getBankAccounts",
	  			dataType: "json",
	  			xhrFields: {
			        withCredentials: true
			    },
			    crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 0 || res.error_code==200) {
			    		this.bankDetail = res.data;
			    	}
			    }.bind(this)
	  		});

	  	},
			setUserBankInfo:function (userLastSix,userBankName) {
		  		this.userLastSix = userLastSix;
		  		this.userBankName = userBankName;
		  	},
			getBillDetail(){
				var param={
			        "billID":this.billID
			      };
			      $.ajax({
			          type:'post',
			          url:getService()+"/bills/getBillDetail",
			          dataType: "json",
			          data:JSON.stringify(param),
			          async:true,
			          headers: {'Content-Type': 'application/json'},
			          xhrFields: {
			              withCredentials: true
			          },
			          crossDomain: true,
			          success:function (res) {
			            if (res.error_code == 0 || res.error_code == 200) {
			            	this.replacePostage = res.data.replacePostage;
			            	if(res.data.replacePostage){
			            		this.postageAmount=res.data.replacePostage.postageAmount;

			            		if(!this.status){
									$('#step1').hide();
									$('#step2').show();
									if(this.replacePostage){
										this.created_at=this.replacePostage.created_at.replace('T',' ');
										this.created_at=this.created_at.substring(0,this.created_at.indexOf('.'));
										this.updated_at=this.replacePostage.updated_at.replace('T',' ');
										this.updated_at=this.updated_at.substring(0,this.updated_at.indexOf('.'));

										this.userBankName = this.replacePostage.replacePostagePayment.chargeInfo.chargeFromAccount.accountName;
										this.userLastSix = this.replacePostage.replacePostagePayment.chargeInfo.chargeFromAccount.last6digital;
										this.finalbankDetailInfo.account = this.replacePostage.replacePostagePayment.chargeInfo.toOurAccount.bankCode+' '+this.replacePostage.replacePostagePayment.chargeInfo.toOurAccount.bankName+' '+'收款賬號'+this.replacePostage.replacePostagePayment.chargeInfo.toOurAccount.accountCode;
										this.finalbankDetailInfo.company = this.replacePostage.replacePostagePayment.chargeInfo.toOurAccount.accountName;
										switch(this.replacePostage.status){
								    		case 0:
								    			this.billState = '未補繳';
								    			break;
								    		case 1:
								    			this.billState = '已補繳';
								    			break;
								    		case 2:
								    			this.billState = '用戶已繳費待確認';
								    			break;
								    	}
									}
									
								}
			            	}
			            	
						}
					  }.bind(this)
				});
		    },
		    getInfo:function () {
		  		$.ajax({
		  			type:'get',
		  			url:getService()+"/user/getInfo",
		  			dataType: "json",
		  			data:{
		  			},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0 || res.error_code==200) {
				    		this.userInfo = res.data;
				    	}
				    }.bind(this)
		  		});
	  		},
	  		nextStep(){
	  			var val=$('input:radio[name="typeStr"]:checked').val();
		  		if(val==null){
		  			layer.msg('請選擇付款方式',{icon:5});
		  			return;
		  		}
		  		if($("#alreadyRead").is(":checked")==false){
		  			layer.msg('未勾選同意授權',{icon:5});
		  			return;
		  		}
		  		if(this.chooseBank=='' || this.chooseBank==null){
		  			layer.msg('請選擇付款銀行！',{icon:5});
		  			return;
		  		}

		  		var param={
		  			"billID":this.billID,
		  			"chargeInfo":{ "chargeFromAccount": this.userLastSix,"toOurAccount":this.typeStr.split(' ')[0]}
		  		};

		  		$.ajax({
		  			type:'post',
		  			url:getService()+"/item/payReplacePostage",
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
				    		this.created_at = this.transformDate(res.data.created_at);
				    		this.updated_at = this.transformDate(res.data.updated_at);


				    		for(var i=0;i<this.bankDetail.length;i++){
					    		if(this.bankDetail[i].bankCode == this.typeStr.split(' ')[0]){
					    			this.finalbankDetailInfo.account=this.bankDetail[i].bankCode+' '+
					    				this.bankDetail[i].bankName+' '+'收款賬號'+this.bankDetail[i].accountCode;
					    			this.finalbankDetailInfo.company = this.bankDetail[i].accountName
					    		}

					    	}

					    	switch(res.data.status){
					    		case 0:
					    			this.billState = '未補繳';
					    			break;
					    		case 1:
					    			this.billState = '已補繳';
					    			break;
					    		case 2:
					    			this.billState = '用戶已繳費待確認';
					    			break;
					    	}



					    	$('#step1').hide();
				    		$('#step2').show();
				    	}else{
				    		layer.msg('訂單提交失敗,請重新再試！',{icon:5});
				    	}
				    }.bind(this),
				    error:function(){
				    	layer.msg('訂單提交失敗,請重新再試！',{icon:5});
				    }
				});


	  		},
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

		  	},

		}
	}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
	.tableForBills tr td, .tableForBills tr th{
		text-align:center;
	}

	.tableForBills tr td{
		vertical-align: bottom !important;
	}
	.nomargin{margin: 0;}
  .nopadding{padding: 0;}

</style>