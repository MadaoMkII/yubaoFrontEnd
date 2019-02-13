<template>
	<div class="supersede">
		<div>
			<div class="row nomargin bar hidden-sm hidden-xs" style="background: #ff8500;height: 34px;margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding">
					<div class="row nomargin">
						<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
							<a href="" class="pull-left" style="margin-right: 30px;">會員中心</a>
							<!-- <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/messageicon.png" class="pull-left"/>消息</a> -->
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
					<p style="margin-bottom: 0;line-height: 42px;color: #fff;">代付</p>
				</div>
	    		<mobileList></mobileList>
			</div>			
			<div class="row nomargin" style="margin: 0;margin-top: 20px;margin-bottom: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 0px;">
					<div class="row nomargin">
						<div class="col-lg-12 col-md-12 nopadding" style="height: 40px;background: rgba(0,166,255,0.5);border: 0.5px solid #00a6ff;border-radius: 10px;">
							<div class="row nomargin hidden-sm hidden-xs">
								<div style="width: 80%;margin: 0 auto;">
									<p :class="[nowStep == 1 ? 'action':'unaction','pull-left']">1</p>
									<p class="pull-left actionTxt">填寫支付寶代付鏈接</p>
									<div class="pull-left" style="width: 10%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 2 ? 'action':'unaction','pull-left']">2</p>
									<p class="pull-left actionTxt">確認購買物品和金額</p>
									<div class="pull-left" style="width: 10%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 3 ? 'action':'unaction','pull-left']">3</p>
									<p class="pull-left actionTxt">付款到網站</p>
									<div class="pull-left" style="width: 10%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 4 ? 'action':'unaction','pull-left']">4</p>
									<p class="pull-left actionTxt">為您代付</p>
								</div>
							</div>
							<div class="row nomargin hidden-lg hidden-md">
								<div style="width: 90%;margin: 0 auto;">
									<p :class="[nowStep == 1 ? 'action':'unaction','pull-left']">1</p>
									<div class="pull-left" style="width: 13%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 2 ? 'action':'unaction','pull-left']">2</p>
									<div class="pull-left" style="width: 13%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 3 ? 'action':'unaction','pull-left']">3</p>
									<div class="pull-left" style="width: 13%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 4 ? 'action':'unaction','pull-left']">4</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 20px;">
						<div class="col-lg-8 col-md-8" style="padding-left: 0;padding-right:0;border: 0.5px solid #ccc;padding-bottom: 30px; background:#fff;">
							<div id="step1" style="display:block;">
								<div class="row nomargin" style="margin-top: 20px;padding: 0 15px;">
									<div style="width: 100%;height: 40px;background: #ebf8ff;border-radius: 10px;margin: 0 auto;padding: 0 15px;">
										<p class="pull-left nomargin" style="color: #666;line-height: 40px;font-size: 12px;">您目前的R幣數量：<span style="font-size: 14px;color: #333;margin: 0 15px;">{{userInfo.Rcoins}}</span><router-link  to="/RBrecharge" style="color: #5d91c5;">儲值R幣</router-link></p>
										<p class="pull-right nomargin hidden-sm hidden-xs" style="line-height: 40px;font-size: 10px;color: #999;">R幣用於代付，無法用於任何儲值業務，1R幣 = 1人民幣</p>
										<p class="pull-left nomargin hidden-lg hidden-md" style="line-height: 40px;font-size: 10px;color: #999;">R幣用於代付，無法用於任何儲值業務，1R幣 = 1人民幣</p>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 10px;">
									<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
										<div class="input-group pull-left hidden-sm hidden-xs" style="width: 80%;">
								            <span class="input-group-addon"><p style="margin-bottom: 0;font-size: 12px;">代付人民幣<span style="font-size: 10px;color: #999;">（多件商品請填寫合計金額）</span></p></span>
								            <input type="text" class="form-control" v-model="RMBAmount">
								        </div>
								        <p class="pull-left hidden-lg hidden-md" style="font-size: 14px;font-weight: bold;">代付人民币<span style="color: #888;">多件商品请填写合计金额</span></p>
								        <input type="text" class="form-control hidden-lg hidden-md" v-model="RMBAmount" placeholder="请输入人民币金额">
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
										<div class="row nomargin">
											<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 40px;font-weight: bold; line-height:22px; ">請在下方填寫商品的代付鏈接：</p>
											
										</div>
										<div class="row nomargin " style="margin-top:15px;">
											<p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px; ">朋友帳號：</p>
											<p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px;">{{friendAccount}}</p>
										</div>
										<div class="row nomargin" style="margin-top: 10px;" >
											<div class="input-group pull-left" style="width: 100%;">
									            <span class="input-group-addon"><p style="margin-bottom: 0;font-size: 12px;">商品鏈接</p></span>
									            <input type="text" class="form-control" v-model="links">
									        </div>
										</div>
										<!--<div class="row nomargin">
											<input type="radio" class="pull-left" name="itemType" id="objectItem" value="objectItem" v-model="itemType" style="margin-right: 10px;"/>
											<label class="pull-left" for="objectItem">實物商品</label>
										</div>
										<div class="row nomargin" style="margin-top: 10px;display: none;" v-show="itemType == 'objectItem'">
											<div class="input-group pull-left" style="width: 100%;">
									            <span class="input-group-addon"><p style="margin-bottom: 0;font-size: 12px;">代付链接</p></span>
									            <input type="text" class="form-control" v-model="links">
									        </div>
										</div>
										<div class="row nomargin" style="margin-top: 10px;">
											<input type="radio" class="pull-left" name="itemType" id="fictitiousItem" value="fictitiousItem" v-model="itemType" style="margin-right: 10px;"/>
											<label class="pull-left" for="fictitiousItem">虛擬商品</label>
										</div>
										<div class="row nomargin" style="margin-top: 10px;display: none;" v-show="itemType == 'fictitiousItem'">
											<div class="input-group pull-left" style="width: 100%;">
									            <span class="input-group-addon"><p style="margin-bottom: 0;font-size: 12px;">代付链接</p></span>
									            <input type="text" class="form-control" v-model="links">
									        </div>
										</div>-->
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
										<img v-bind:src="picSrc" style="width: 100%;"/>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 30px;margin-bottom: 30px;">
									<div class="col-lg-4 col-md-4 col-lg-offset-4 col-md-offset-4">
										<center><button type="button" class="btn btn-warning" v-on:click="showStep2()" style="background: #ff8500;width: 100%;">下一步</button></center>
									</div>
								</div>
							</div>
							<div id="step2" style="display: none;">
								<div class="row nomargin" style="margin-top: 30px;">
									<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;font-weight: bold;">您总共送出<span style="color: #08BF69;">1笔</span>支付宝代付链接</p>
									</div>
								</div>
								<div class="row nomargin">
									<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
										<div class="row nomargin" style="margin-top: 15px;background: #eee;padding: 0 15px; border:1px solid #ccc; border-bottom:none;">
											<p class="pull-left" style="width: 80%;line-height: 50px;margin: 0;text-align: left;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;color: #0069D9;text-align: left; ">{{links}}</p>
											<!--<div class="pull-right" style="width: 20%;">
												<center><button type="button" class="btn btn-default" style="margin-top: 8px;">取消本次代付</button></center>
											</div>-->
										</div>
										<div class="row nomargin" style="border: 1px solid #ccc;padding: 15px;">
											<div class="row nomargin" style="border: 1px solid #ccc;border-radius: 5px;padding: 0 15px;">
												<p class="pull-left" style="margin-right: 15px;margin-bottom: 0;line-height: 40px;margin-bottom: 0;"></p>
												<p class="pull-left" style="font-weight: bold;line-height: 40px;margin-bottom: 0;">购买的商品</p>
												<p class="pull-right" style="margin-bottom: 0;line-height: 40px;font-weight: bold;">金额</p>
											</div>
											<div class="row nomargin" style="padding: 0 15px;margin-top: 15px;">
												<p class="pull-left hidden-sm hidden-xs" style="margin-right: 15px;margin-bottom: 0;line-height: 40px;margin-bottom: 0;">暂未获得代付商品详情（不影响代付）</p>
												<p class="pull-right" style="margin-bottom: 0;line-height: 40px;font-weight: bold;font-size: 20px;">{{RMBAmount}}RMB</p>
											</div>
										</div>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 15px;padding: 0 15px;">
									<p class="pull-left" style="font-size: 18px;font-weight: bold;">请选择付款方式</p>
								</div>
								<div class="row nomargin hidden-sm hidden-xs" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 15%;">
										<img src="../../assets/images/RB.png" class="pull-right" style="width: 34px;margin-left: 15px; margin-right:15px; "/>
										<input type="radio" name="typeStr" value="R币代付" v-model="typeStr" class="pull-right" style="margin-top: 10px; "/>
									</div>
									<div class="pull-left" style="width: 85%;">
										<p class="pull-left" style="margin: 0;line-height: 34px;">可用R币 <span style="color: #08BF69;">{{userInfo.Rcoins}}</span> 个</p>
									</div>
								</div>
								<div class="row nomargin hidden-lg hidden-md" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 30%;">
										<img src="../../assets/images/RB.png" class="pull-right" style="width: 34px;margin-left: 15px; margin-right:15px; "/>
										<input type="radio" name="typeStr" value="R币代付" v-model="typeStr" class="pull-right" style="margin-top: 10px; "/>
									</div>
									<div class="pull-left" style="width: 70%;">
										<p class="pull-left" style="margin: 0;line-height: 34px;">可用R币 <span style="color: #08BF69;">{{userInfo.Rcoins}}</span> 个</p>
									</div>
								</div>
								<div class="row nomargin hidden-sm hidden-xs" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 15%;">
										<img src="../../assets/images/taixin.jpg" class="pull-right" style="width: 34px;margin-right: 15px;border-radius: 50%; margin-left: 15px;"/>
										<input type="radio" name="typeStr"  value="812 台新商銀 收款賬戶 002857" v-model="typeStr" class="pull-right" style="margin-top: 10px;"/>
										
									</div>
									<div class="pull-left" style="width: 85%;">
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;font-size: 10px;">812 台新商銀 收款賬戶 002857</p>
										</div>
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">支援全臺各家銀行轉入</p>
										</div>
										<!--<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">僅限郵局轉入，也不什麼玩意兒不能及時到賬</p>
										</div>-->
									</div>
								</div>
								<div class="row nomargin hidden-lg hidden-md" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 30%;">
										<img src="../../assets/images/taixin.jpg" class="pull-right" style="width: 34px;margin-right: 15px;border-radius: 50%; margin-left: 15px;"/>
										<input type="radio" name="typeStr"  value="812 台新商銀 收款賬戶 002857" v-model="typeStr" class="pull-right" style="margin-top: 10px;"/>
										
									</div>
									<div class="pull-left" style="width: 70%;">
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;font-size: 10px;">812 台新商銀 收款賬戶 002857</p>
										</div>
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">支援全臺各家銀行轉入</p>
										</div>
										<!--<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">僅限郵局轉入，也不什麼玩意兒不能及時到賬</p>
										</div>-->
									</div>
								</div>
								<div class="row nomargin hidden-sm hidden-xs" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 15%;">
										<img src="../../assets/images/xintuo.jpg" class="pull-right" style="width: 34px;margin-right: 15px;border-radius: 50%; margin-left:15px; "/>
										<input type="radio" name="typeStr" value="822 中國信託 收款賬戶 628612" v-model="typeStr" class="pull-right" style="margin-top: 10px;"/>
										
									</div>
									<div class="pull-left" style="width: 85%;">
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;font-size: 10px;">822 中國信託 收款賬戶 628612</p>
										</div>
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">支援全臺各家銀行轉入</p>
										</div>
									</div>
								</div>
								<div class="row nomargin hidden-lg hidden-md" style="margin-top: 15px;padding: 0 15px;">
									<div class="pull-left" style="width: 30%;">
										<img src="../../assets/images/xintuo.jpg" class="pull-right" style="width: 34px;margin-right: 15px;border-radius: 50%; margin-left:15px; "/>
										<input type="radio" name="typeStr" value="822 中國信託 收款賬戶 628612" v-model="typeStr" class="pull-right" style="margin-top: 10px;"/>
										
									</div>
									<div class="pull-left" style="width: 70%;">
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;font-size: 10px;">822 中國信託 收款賬戶 628612</p>
										</div>
										<div class="row nomargin">
											<p class="pull-left" style="margin: 0;color: #e00;font-size: 10px;">支援全臺各家銀行轉入</p>
										</div>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 30px;">
									<div class="col-lg-12 col-md-12">
										<center><input type="checkbox" id="alreadyRead" style="margin-right: 5px;position: relative;top: 1px;" />我已閱讀并同意<a href="javascript:void(0)" v-on:click="showAgreeModal()">「結匯授權同意書」</a></center>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 30px;margin-bottom: 30px;">
									<div class="col-lg-4 col-md-4 col-lg-offset-4 col-md-offset-4">
										<center><button type="button" class="btn btn-warning" v-on:click="showStep3()" style="background: #ff8500;width: 100%;">下一步</button></center>
									</div>
								</div>
							</div>
							<div id="step3" style="display: none;">
								<div class="row nomargin" style="padding: 30px 15px;">
									<div class="row nomargin">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;">订单明细：</p>
										<!--<p class="pull-left" style="font-size: 20px;font-weight: bold;">{{billID}}</p>
										<p class="pull-right btn btn-success noHover" v-if="dealState == 1 && typeState == 1">交易完成</p>
										<p class="pull-right btn btn-success noHover" v-if="dealState == 2 && typeState == 1">付款已收到，請等待處理</p>
										<p class="pull-right btn btn-danger noHover" v-if="dealState == 2 && typeState == 2">等待付款</p>
										<p class="pull-right btn btn-default noHover" v-if="dealState == 0">交易關閉</p>-->
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
											<thead style="background:#f5f5f5; ">
												<tr>
													<th>订单金额</th>
													<th>汇率</th>
													<th>手续费</th>
													<th>应付新台币</th>
												</tr>
											</thead>
											<tbody>
												<tr style="background:#ffffff; padding:0 15px;">
													<td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
													<td>{{rate}}</td>
													<td>¥{{(feeRate/100*RMBAmount).toFixed(2)}}RMB</td>
													<td>$<span style="font-size: 20px;">{{totalAmount}}</span>TWD</td>
												</tr>
											</tbody>
										</table>
									</div>
									<!--<div class="row nomargin" style="margin-top: 30px;display: none;" v-show="created_at != ''">
										<div class="col-lg-12 col-md-12">
											<div class="row nomargin">
												<p style="font-size: 12px;text-align: left;">最后处理时间：{{updated_at}}</p>
											</div>
											<div class="row nomargin" style="margin-top: 10px;">
												<p style="font-size: 12px;text-align: left;">交易创建时间：{{created_at}}</p>
											</div>
											<div class="row nomargin" style="margin-top: 10px;">
												<p style="font-size: 12px;text-align: left;">应付新台币计算公式：{{RMBAmount}}*{{rate}}%+{{feeAmount}}*{{rate}}={{totalAmount}} TWD</p>
											</div>
										</div>
									</div>-->
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您的代付链接：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<a v-bind:href="links" class="pull-left" style="text-align: left;">{{links}}</a>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单留言：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-show="created_at == ''">
										<input type="text" class="pull-left form-control" name="" id="" value="" v-model="comments" placeholder="请输入您的留言"/>
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-show="created_at != ''">
										<p class="pull-left" style="text-align: left;">{{comments}}</p>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="typeStr == 'R币代付'">{{typeStr}}</span><span style="margin-left: 15px;" v-if="typeStr != 'R币代付'">ATM银行转账</span></p>
										<button class="btn btn-default pull-left" style="color: #00a6ff;border: 0.5px solid #00a6ff;font-size: 10px;padding: 3px 12px; margin-left:20px; margin-top:2px;" @click="popUpAddBank"><img src="../../assets/images/newusericon.png" style="width: 10px;margin-right: 5px;"/>新增賬戶</button>	

									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr == 'R币代付'">
											<p style="font-size: 12px;text-align: left;">您此次需消费<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R币,当前账户余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{userInfo.Rcoins}}</span>R币</p>
									</div>
									<div class="row nomargin" style="" v-if="typeStr != 'R币代付'">
										<div class="col-lg-12 col-md-12">
											<div class="row">
												<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; padding-top:5px;">
													<!--<div class="row" style="background: #ccc;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
														<a href="javascript:void(0)" class="pull-left" style="color: #008000;margin-right: 10px;line-height: 30px;" v-on:click="setUserBankInfo(item.last6digital,item.bankName)" v-for="item in userInfo.bankAccounts">{{item.accountName}}({{item.bankName}})</a>
													</div>-->
													<div class="row" v-for="item in userInfo.bankAccounts">
														<input type="radio" name="chooseBank"  :value="item.accountName" v-model="chooseBank" class="pull-left" style="margin-top: 6px; margin-right:6px; margin-left:10px;"/>
														<a href="javascript:void(0)" class="pull-left"  style="color: #08bf69;margin-right: 10px;line-height: 22px;  text-align: left;" >{{item.accountName}}({{item.bankName}})</a>
														<a href="javascript:void(0)"  class="pull-left"  style="color: #2a6baf;margin-right: 10px;line-height: 22px; text-align: left;" v-if="chooseBank==item.accountName"><img src="../../assets/images/chooseIcon.png"/>約定賬戶</a>
													</div>
													<div class="row" style="padding: 0 15px">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px; border-top:1px solid #ccc; ">请按订单金额使用您已经登记的银行账号付款，非上列银行账户转入或金额不符将不会为您完成交易！</p>
													</div>
												</div>
											</div>
											<div class="row" style="margin-top: 20px;">
												<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
													<div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 30px;width: 100%;text-align: left;">转账金额：<span style="font-size: 16px;">{{totalAmount}}</span> TWD</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 30px;width: 100%;text-align: left;">银行：{{typeStr}}</p>
													</div>
													<div class="row" style="padding: 0 15px">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
													</div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 30px;">
												<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
											</div>
											<div class="row nomargin" >
												<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 30px;" >
										<div class="col-lg-6 col-md-6" style="padding: 0 15px;">
											<button type="button" class="pull-right btn btn-default" @click="goBack">取消本次代购</button>
										</div>
										<div class="col-lg-6 col-md-6" style="padding: 0 15px;">
											<button type="button" class="pull-left btn btn-warning" v-on:click="finalStep()">下一步</button>
										</div>
										
									</div>
								</div>
							</div>
							<div id="step4" style="display: none;">
								<div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
									<img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 3px; margin-left:15px;"/>
									<span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
									<a href="javascript:void(0)" class="pull-left" style="color: #6393c5;margin-left: 20px;line-height: 50px;" @click="goBack">返回</a>
									<a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{payState}}</a>
									<a class="pull-right hidden-sm hidden-xs" style="color: #999;margin-right: 15px; line-height: 50px;text-align: left;">我們正在拼命為您代付，請稍等！</a>
									<a class="pull-left hidden-lg hidden-md" style="color: #999;margin-left: 15px; line-height: 50px;text-align: left;">我們正在拼命為您代付，請稍等！</a>
								</div>
								<div class="row nomargin" style="padding: 30px 15px;">
									<div class="row">
										<div class="col-lg-12 col-md-12">
											<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
											
											<p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{billState}}</p>
											<p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{billState}}</p>
										</div>
									</div>
									<div class="row nomargin" >
											<p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px; ">朋友帳號：</p>
											<p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px;">{{friendAccount}}</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
											<thead style="background:#f5f5f5; ">
												<tr>
													<th>订单金额</th>
													<th>汇率</th>
													<th>手续费</th>
													<th>应付新台币</th>
												</tr>
											</thead>
											<tbody>
												<tr style="background:#ffffff; padding:0 15px;">
													<td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
													<td>{{rate}}</td>
													<td>¥{{(feeRate/100*RMBAmount).toFixed(2)}}RMB</td>
													<td>$<span style="font-size: 20px;">{{totalAmount}}</span>TWD</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="row nomargin" style="margin-top: 30px;display: none;" v-show="created_at != ''">
										<div class="col-lg-12 col-md-12">
											<div class="row nomargin">
												<p style="font-size: 12px;text-align: left;">最后处理时间：{{updated_at}}</p>
											</div>
											<div class="row nomargin" style="margin-top: 10px;">
												<p style="font-size: 12px;text-align: left;">交易创建时间：{{created_at}}</p>
											</div>
											<div class="row nomargin" style="margin-top: 10px;">
												<p style="font-size: 12px;text-align: left;">应付新台币计算公式：{{RMBAmount}}*{{rate}}+{{(feeRate/100*RMBAmount).toFixed(2)}}*{{rate}}={{totalAmount}} TWD</p>

											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您的代付链接：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<a v-bind:href="links" class="pull-left" style="text-align: left;">{{links}}</a>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单留言：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<p style="font-size: 12px;text-align: left;">{{comments}}</p>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="typeStr == 'R币代付'">{{typeStr}}</span><span style="margin-left: 15px;" v-if="typeStr != 'R币代付'">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr != 'R币代付'">
										<div class="col-lg-12 col-md-12">
											<div class="row">
												<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
											</div>
											<div class="row" style="padding-top:5px;">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-bottom-left-radius:0; border-bottom-right-radius:0; background:#ccc;border-bottom:none;">
													<div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
														<a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-top-left-radius:0; border-top-right-radius:0;">
													<div class="row" style="padding: 0 15px">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行账户转入或金额不符将不会为您完成交易！</p>
													</div>
												</div>
											</div>
											<div class="row" style="margin-top: 20px;">
												<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
													<div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom:1px solid #ccc;">
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
													</div>
													<div class="row" style="padding: 0 15px">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
													</div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 30px;">
												<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
											</div>
											<div class="row nomargin" >
												<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr == 'R币代付'">
										<div class="row nomargin" style="margin-top: 15px;">
											<p style="font-size: 12px;text-align: left;">您此次消费了<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R币，账户余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{userInfo.Rcoins}}</span>R币</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 hidden-sm hidden-xs" style="padding-right: 0;padding-left: 15px;">
							<div class="row nomargin" style="border: 0.5px solid #ccc;padding: 20px 15px; background:#fff;">
								<div class="col-lg-12 col-md-12">
									<div class="row nomargin">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;font-weight: bold;">訂單處理時間</p>
									</div>
									<div class="row nomargin" style="margin-top: 10px;">
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">1.24小時每分鐘查款一次，因此付款後不必通知。郵局每日0:00-1:30例行維護，無法查款。</p>
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">2.全年周末及假日無休，24小時服務。一般在收到款項後的5分鐘內完成交易。每日23:50-00:05為結帳時間不做交易，此15分鐘內收到的款項順延到00:06作業。</p>
									</div>
								</div>
							</div>
							<div class="row nomargin" style="border: 0.5px solid #ccc;margin-top: 20px;padding: 20px 0; background:#fff;">
								<div class="col-lg-12 col-md-12">
									<div class="box">
										<!--<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;margin: 0 15px;">
											<p class="pull-left nomargin" style="font-size: 16px;color: #333;font-weight: bold;"><img src="../../assets/images/taobaoicon.png" class="pull-left"/>使用遇到問題</p>
										</div>-->
										<notice :optionsFromFather="getCenterNotice"  :titleFromFather="centerNoticeTitle" ></notice>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<agree></agree>
			<pageFooter class="hidden-sm hidden-xs"></pageFooter>
     		<mobileFooter class="hidden-lg hidden-md"></mobileFooter>
			<!--<div class="row nomargin hidden-sm hidden-xs" style="margin: 0;margin-bottom: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<center>
						<p style="margin-bottom: 0;font-size: 10px;">
							<a href="" style="color: #666;">公司簡介</a>&nbsp;|&nbsp;<a href="" style="color: #666;">個人資料安全保障策略</a>&nbsp;|&nbsp;<a href="" style="color: #666;">會員條款</a>&nbsp;|&nbsp;<a href="" style="color: #666;">合作提案</a>&nbsp;|&nbsp;<a href="" style="color: #666;">聯繫方式</a>&nbsp;|&nbsp;<a href="/help" style="color: #666;">幫助</a>
						</p>
					</center>
					<center style="margin-top: 10px;"><p style="margin-bottom: 0;font-size: 10px;color: #999;">玉寶國際有限公司 © 版權所有 2018-2020</p></center>
				</div>
			</div>-->			
		</div>
		<!--手机端-->
		<!--<div class="hidden-lg hidden-md" style="background: #f5f5f5;">
			<div class="row nomargin" style="background: #ff8500;">
				<div class="col-sm-12 col-xs-12">
					<div class="dropdown">
						<p class="pull-left" style="font-size: 1em;color: #fff;margin-left: 50%;position: relative;left: -2em;margin-top: 1em;">代购</p>
					    <button type="button" class="btn dropdown-toggle pull-right" id="dropdownMenu1" data-toggle="dropdown" style="background: none;color: #fff;font-size: 2em;padding: 0;position: relative;top: -0.5rem;right: 0.5rem;">...</button>
					    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1" style="margin-top: 3em;">
					        <img src="../../assets/images/mobile/arrow.png" style="position: absolute;right: 0;top: -1em;"/>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/askicon.png" style="width: 1em;margin-right: 0.5em;"/>申訴</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/dealicon.png" style="width: 1em;margin-right: 0.5em;"/>交易記錄</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/RBdealicon.png" style="width: 1em;margin-right: 0.5em;"/>R幣交易明細</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/helpicon.png" style="width: 1em;margin-right: 0.5em;"/>幫助中心</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/messageicon.png" style="width: 1em;margin-right: 0.5em;"/>消息</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/logouticon.png" style="width: 1em;margin-right: 0.5em;"/>登出</a>
					        </li>
					    </ul>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin-top: 1em;padding: 0 15px;">
				<div class="col-sm-12 col-xs-12" style="padding: 0 15px;background: #e1eef5;border: 1px solid #00a6ff;">
					<p class="pull-left action" style="margin-bottom: 5px;">1</p>
					<div class="pull-left" style="width: 19%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
					<p class="pull-left unaction" style="margin-bottom: 5px;">2</p>
					<div class="pull-left" style="width: 19%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
					<p class="pull-left unaction" style="margin-bottom: 5px;">3</p>
					<div class="pull-left" style="width: 19%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
					<p class="pull-left unaction" style="margin-bottom: 5px;">4</p>
				</div>
			</div>
			<div id="mobileStep1">
				<div class="row" style="margin-top: 1em;">
					<div class="col-sm-12 col-xs-12" style="padding: 0 15px;">
						<div class="row" style="background: #e1eef5;padding: 15px;">
							<div class="col-sm-12 col-xs-12">
								<div class="row">
									<p class="pull-left" style="font-size: 1.3em;font-weight: bold;">累计购物返利： {{userInfo.Rcoins}} R币</p>
									<router-link class="pull-right" style="margin-top: 0.5em;" to="/RBrecharge">儲值R幣</router-link>
								</div>
								<div class="row">
									<p class="pull-left" style="color: #999;">R币用于代付，无法用于任何储值业务，1R币 = 1人民币</p>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 1em;">
							<p class="pull-left" style="font-size: 1.3em;font-weight: bold;">代付人民币 <span style="color: #999;font-size: 0.8em;margin-left: 1em;">多件商品请填写合计金额</span></p>
						</div>
						<div class="row" style="margin-top: 0.5em;">
							<input type="number" name="" id="" value="" class="form-control" placeholder="请输入人民币金额" v-model="RMBAmount"/>
						</div>
						<div class="row nomargin">
							<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 15px;font-weight: bold;">請在下方填寫商品的代付鏈接：</p>
						</div>
						<div class="row nomargin" style="margin-top: 10px;">
							<div class="input-group pull-left" style="width: 100%;">
					            <span class="input-group-addon"><p style="margin-bottom: 0;font-size: 12px;">商品鏈接</p></span>
					            <input type="text" class="form-control" v-model="links">
					        </div>
						</div>
						<div class="row" style="margin-top: 1em;">
							<img v-bind:src="picSrc" style="width: 100%;"/>
						</div>
					</div>
				</div>
			</div>
			
		</div>-->
		<!--綁定銀行卡彈窗-->
      <div class="modal fade" id="bankModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div class="modal-dialog" style="width: 90%;max-width: 800px;margin:0 auto;">
          <div class="modal-content" style="border-radius: 5px;">
            <div class="modal-header"
                 style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                      style="color: #fff;font-size: 14px;opacity: 1;">&times;
              </button>
              <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
                src="../../assets/images/shenfenicon2.png" class="pull-left"
                style="width: 15px;margin-top: 3px;margin-right: 5px;"/>新增付款銀行賬戶</h4>
            </div>
            <div class="modal-body">
              <div class="row nomargin">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding: 0;">
                  <div class="row nomargin">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background: #ccedff;border-radius: 10px;padding: 10px 15px;">
                      <p class="pull-left" style="margin: 0;text-align: left;">省錢小技巧：轉賬時選擇同行轉賬，可以避免銀行跨行轉賬手續費喲。</p>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background: #ffe7cc;border-radius: 10px;padding: 15px;">
                      <p class="pull-left" style="margin: 0;text-align: left;">付款銀行賬戶新增后不可刪除，銀行賬號為【存簿】賬號，切勿填成信用卡卡號。</p>
                      <p class="pull-left" style="margin: 0;text-align: left;">請勿綁定他人賬號，若產生爭議請私下處理，玉寶概不介入！</p>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px; margin-left:30px; ">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="padding: 0 15px; ">
                      <input type="radio" name="payType" id="bank" value="bank" v-model="type" class="pull-left"
                             style="margin-right: 5px;"/>
                      <label for="bank" class="pull-left" style="margin-right: 20px;">銀行</label>
                      <input type="radio" name="payType" id="postOffice" value="postOffice" v-model="type"
                             class="pull-left" style="margin-right: 5px;"/>
                      <label for="postOffice" class="pull-left" style="margin-right: 20px;">郵局</label>
                      <input type="radio" name="payType" id="cooperative" value="cooperative" v-model="type"
                             class="pull-left" style="margin-right: 5px;"/>
                      <label for="cooperative" class="pull-left" style="margin-right: 20px;">信用合作社</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="padding: 0 15px;">
                    	<input type="radio" name="payType" id="association" value="association" v-model="type"
                             class="pull-left" style="margin-right: 5px;"/>
                      <label for="association" class="pull-left" style="margin-right: 20px;">農會</label>
                      <input type="radio" name="payType" id="fishing" value="fishing" v-model="type" class="pull-left"
                             style="margin-right: 5px;"/>
                      <label for="fishing" class="pull-left" style="margin-right: 20px;">漁會</label>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">付款渠道：</label>
                      <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">付款渠道：</label>
                    </div>
                    <div class="col-lg-10 col-md-10" style="padding: 0 15px;">
                      <select name="" v-model="bankName" class="pull-left form-control">
                        <option value="">--請選擇--</option>
                        <option v-bind:value="item.label" v-if="type == 'bank'" v-for="item in typeList.bank">
                          {{item.label}}
                        </option>
                        <option v-bind:value="item.label" v-if="type == 'postOffice'"
                                v-for="item in typeList.postOffice">{{item.label}}
                        </option>
                        <option v-bind:value="item.label" v-if="type == 'cooperative'"
                                v-for="item in typeList.cooperative">{{item.label}}
                        </option>
                        <option v-bind:value="item.label" v-if="type == 'association'"
                                v-for="item in typeList.association">{{item.label}}
                        </option>
                        <option v-bind:value="item.label" v-if="type == 'fishing'" v-for="item in typeList.fishing">
                          {{item.label}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">賬戶姓名：</label>
                      <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">賬戶姓名：</label>
                    </div>
                    <div class="col-lg-10 col-md-10" style="padding: 0 15px;">
                      <input type="text" value="" v-model="accountName" class="form-control"/>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">賬號末六位碼：</label>
                      <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">賬號末六位碼：</label>
                    </div>
                    <div class="col-lg-10 col-md-10" style="padding: 0 15px;">
                      <input type="text" value="" v-model="sixCode" class="form-control"/>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">手機號碼：</label>
                      <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">手機號碼：</label>
                    </div>
                    <div class="col-lg-10 col-md-10" style="padding: 0 15px;">
                      <p class="pull-left" style="margin-bottom: 0;line-height: 34px;">{{secretPhone}}</p>
                    </div>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;">
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">驗證碼：</label>
                      <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">驗證碼：</label>
                    </div>
                    <div class="col-lg-6 col-md-6" style="padding: 0 15px;">
                      <input type="text" value="" class="form-control" v-model="bankCode"/>
                    </div>
                    <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                      <button type="button" class="btn btn-primary hidden-sm hidden-xs" @click="sendBankCode" id="pcSendCodeBtn1" style="border:none; width: 100%;">發送驗證碼</button>
                      <button type="button" class="btn btn-primary hidden-lg hidden-md pull-right" style="margin-top: 15px; border:none; width: 100%;"  id="pcSendCodeBtn2"  @click="sendBankCode">發送驗證碼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" v-on:click="submitAccount()">提交</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

       <!-- 錯誤提示模态框（Modal） -->
    <div class="modal fade" id="myErrorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header"
                       style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                       <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                       style="color: #fff;font-size: 14px;opacity: 1;">&times;
                   </button>
                   <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
                    src="../../assets/images/shenfenicon2.png" class="pull-left"
                    style="width: 15px;margin-top: 3px;margin-right: 5px;"/>錯誤提示</h4>
              </div>
                <div class="modal-body">
                  <p id="message">{{popup_error_msg}}</p>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                </div> -->
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div><!-- /.modal -->
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import notice from './notice.vue'
	import pageFooter from './pagefooter.vue'
	import agree from './agree.vue'
	import mobileFooter from './mobileFooter.vue'
	import mobileList from './mobileList.vue'
	import '../../../static/css/PCstyle.css'
	export default {
	  name: 'supersede',
	  data(){
	  	return{
	  		userInfo:'',
	  		itemType:'',
	  		links:'',
	  		typeStr:'',
	  		picSrc:'',  //广告图片路径
	  		RMBAmount:'',//需代付人民币金额，即商品总价
	  		rate:'',//汇率
	  		feeAmount:'',//手续费
	  		feeRate:'',
	  		totalAmount:'',
	  		comments:'',
	  		created_at:'',
	  		updated_at:'',
	  		billID:'',
	  		dealState:'',
	  		typeState:'',
	  		userLastSix:'', //用户银行后六位
	  		userBankName:'', //用户银行名称
	  		centerNoticeTitle:'使用遇到問題?',
	  		getCenterNotice:{
	  			showFlag:false,
	  			noticeArray:[]
	  		},
	  		nowStep:1,
	  		conditions:[],
	  		bankDetail:'',
	  		finalbankDetailInfo:{
	  			account:'',
	  			company:''
	  		},
	  		chooseBank:'',
	  		friendAccount:'',
	  		billState:'',
	  		payState:'',
	  		type:'',
	  		bankName:'',
	  		accountName:'',
	  		sixCode:'',
	  		secretPhone:'',
	  		bankCode:'',
	  		popup_error_msg:'',
	  		typeList: [],
	  		bank_timer:60,
        	bank_timeInterval:'',
	  	}
	  },
	  components:{
			notice,
			pageFooter,
			agree,
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
	  mounted:function () {
	  	this.getUserInfo();
	  	this.getPic();
	  	this.getsupersedeNoticeInfoFunc();
	  	this.getBankDetailFunc();
	  	this.getFriendAccount();
	  	this.getTypes();
	  },
	  methods:{
	  	getTypes: function () {
	        $.ajax({
	          type: 'get',
	          url: getService() + "/dujiuxing",
	          dataType: "json",
	          data: {},
	          xhrFields: {
	            withCredentials: true
	          },
	          crossDomain: true,
	          success: function (res) {
	            if (res.error_code == 0) {
	              this.typeList = res.data;
	              this.typeOptions = this.typeList.bank;
	            }
	          }.bind(this)
	        });
	      },
	  	showAgreeModal:function () {
			$('#agreeModal').modal('show');
		},
	  	goBack(){
	  		$('#step1').show();
			$('#step2').hide();
			$('#step3').hide();
			$('#step4').hide();
			this.typeStr='';
	  		this.rate='';
	  		this.comments='';
	  		this.RMBAmount='';
	  		this.chooseBank='';
	  		this.finalbankDetailInfo={
	  			account:'',
	  			company:''
	  		};
	  		this.links='';

	  	},
	  	setUserBankInfo:function (userLastSix,userBankName) {
	  		this.userLastSix = userLastSix;
	  		this.userBankName = userBankName;
	  	},
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
	  	getsupersedeNoticeInfoFunc(){
	  		var that=this;
	  		var param = {
		  		"location":'淘宝天猫代付页'
		  	}
	  		$.ajax({
		  			type:'post',
		  			url:getService()+"/announcement/findCommonAnnouncement",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	console.log('res=',res);
				    	if(res.error_code == 0){
				    		that.getCenterNotice.showFlag=true;
				    		that.getCenterNotice.noticeArray = res.data;
				    	}
				    	
				    },
				    error:function(res){
				    	
				    }
		  		});

	  	},
	  	getUserInfo:function () {
	  		$.ajax({
	  			type:'get',
	  			url:getService()+"/user/getInfo",
	  			dataType: "json",
	  			async:true,
				headers: {'Content-Type': 'application/json'},
	  			xhrFields: {
			        withCredentials: true
			    },
			    crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 0 || res.error_code==200) {
			    		this.userInfo = res.data;
			    		this.secretPhone = res.data.tel_number;
			    	}
			    }.bind(this)
	  		});
	  	},
	  	getFriendAccount:function () {
	  		$.ajax({
	  			type:'get',
	  			url:getService()+"/bills/getFriendAccount",
	  			dataType: "json",
	  			async:true,
				headers: {'Content-Type': 'application/json'},
	  			xhrFields: {
			        withCredentials: true
			    },
			    crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 0 || res.error_code==200) {
			    		this.friendAccount = res.data;
			    	}
			    }.bind(this)
	  		});
	  	},
	  	getPic:function () {
	  		$.ajax({
	  			type:'get',
	  			url:getService()+"/adv/getDFpage",
	  			dataType: "json",
	  			async:true,
				headers: {'Content-Type': 'application/json'},
	  			xhrFields: {
			        withCredentials: true
			    },
			    crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 0) {
			    		this.picSrc = res.data.imageLink;
			    	}
			    }.bind(this)
	  		});
	  	},
	  	getConditions(){
	  		var that=this;
	  		var param={
   				"conditions":["RcoinRate"]
	  		};
	  		$.ajax({
	  			type:'post',
	  			url:getService()+"/getSetting",
	  			dataType: "json",
	  			data:JSON.stringify(param),
	  			async:true,
	  			headers: {'Content-Type': 'application/json'},
	  			xhrFields: {
	  				withCredentials: true
	  			},
	  			crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 200 || res.error_code == 0) {
			    		that.conditions = res.data.RcoinRate;
			    	}
			    }
	  		});
	  	},
	  	showStep2:function () {
	  		if(parseFloat(this.RMBAmount).toString() == "NaN") {
			　　layer.msg('请输入正确的储值金额',{icon:5});
	  			return;
		　　} 
			if(this.links == '') {
			　　layer.msg('请输入正确的商品鏈接',{icon:5});
	  			return;
		　　} 

	  		$('#step1').fadeOut(1);
	  		$('#step2').fadeIn();
	  		this.nowStep=2;
	  	},
	  	showStep3:function () {
	  		var val=$('input:radio[name="typeStr"]:checked').val();
	  		if(val==null){
	  			layer.msg('請選擇付款方式',{icon:5});
	  			return;
	  		}
	  		if($("#alreadyRead").is(":checked")==false){
	  			layer.msg('未勾選同意授權',{icon:5});
	  			return;
	  		}

	  		$('#step2').fadeOut(1);
	  		$('#step3').fadeIn();
	  		this.nowStep=3;
	  		console.log(this.typeStr);
	  			var param = {
	  				RMBAmount:this.RMBAmount,
	  				rateType:'RcoinRate'
	  			};
	  			$.ajax({
		  			type:'post',
		  			url:getService()+"/getThisUserRate",
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
				    		this.rate = res.data.rate;
				    		this.feeAmount = res.data.feeAmount;
				    		this.feeRate = res.data.feeRate;
				    		this.totalAmount = res.data.totalAmount;
				    	}
				    }.bind(this)
		  		});

	  	},
	  	finalStep:function () {
	  		
	  		/*var isVirtualItem = false;
	  		if (this.itemType == 'fictitiousItem') {
	  			isVirtualItem = true;
	  		}*/
	  		
	  		var param={};
	  		var url='';
	  		if (this.typeStr == 'R币代付') {
	  			param={
		  			"typeStr": '淘寶/天貓/阿里巴巴代付',
					  "itemInfo": {
					    "itemLink": this.links
					  },
					  "RMBAmount": (this.totalAmount/this.rate).toFixed(2),
					  "comment": this.comments,
					  "isVirtualItem": false,
					  "paymentInfo": {
					    "friendAlipayAccount": this.friendAccount,
					    /*"paymentDFAccount": "ACV@GMAIL.com"*/
					  }
		  		}
		  		url=getService()+"/item/addBillByRcoins";
		  		
	  		} else{
	  			if(this.chooseBank=='' || this.chooseBank==null){
		  			layer.msg('請選擇付款銀行！',{icon:5});
		  			return;
		  		}
	  			param={
		  			"typeStr": "淘寶/天貓/阿里巴巴代付",
					  "itemInfo": {
					    "itemLink": this.links
					  },
					  "RMBAmount": (this.totalAmount/this.rate).toFixed(2),
					  "comment": this.comments,
					  "chargeInfo":{"chargeMethod":this.userBankName, "chargeFromAccount": this.userLastSix,"toOurAccount":this.typeStr.split(' ')[0]},
					  "paymentInfo": {
					    "friendAlipayAccount": this.friendAccount,
					    /*"paymentDFAccount": "ACV@GMAIL.com"*/
					  }
		  		}
		  		url=getService()+"/item/addBillByBank";
	  		}
	  		$.ajax({
		  			type:'post',
		  			url:url,
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
				    		this.billID = res.data.billID;
				    		if(res.data.userInfo){
				    			this.userInfo.Rcoins=res.data.userInfo.Rcoins;
				    		}
				    		this.judgeState(res.data.typeState,res.data.dealState);
				    		for(var i=0;i<this.bankDetail.length;i++){
					    		if(this.bankDetail[i].bankCode == this.typeStr.split(' ')[0]){
					    			this.finalbankDetailInfo.account=this.bankDetail[i].bankCode+' '+
					    				this.bankDetail[i].bankName+' '+'收款賬號'+this.bankDetail[i].accountCode;
					    			this.finalbankDetailInfo.company = this.bankDetail[i].accountName
					    		}
					    	}
					    	$('#step3').fadeOut(1);
	  						$('#step4').fadeIn();
	  						this.nowStep = 4;
				    	}else{
				    		layer.msg('请求出错，请重试！',{icon:5});
				    	}
				    }.bind(this),
				    error:function(res){
				    	layer.msg('请求出错，请重试！',{icon:5});
				    }
		  		});
	  		
	  	},
	  	judgeState(typeState,dealState){
	  		if(dealState==0){
	  			this.billState = '交易关闭';
	  			this.payState = '';
	  		}else if(dealState==1){
	  			if(typeState == 1){
	  				this.billState = '交易完成';
	  				this.payState = '付款成功';
	  			}
	  		}else if(dealState==2){
	  			if(typeState == 1){
	  				this.billState = '交易进行中';
	  				this.payState = '付款成功';
	  			}else if(typeState == 2){
	  				this.billState = '交易进行中';
	  				this.payState = '等待付款';
	  			}
	  		}else if(dealState==3){
	  			this.billState = '原路退回';
	  			this.payState = '';
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
	  	setUserBankInfo:function (userLastSix,userBankName) {
	  		this.userLastSix = userLastSix;
	  		this.userBankName = userBankName;
	  	},
	  	popUpAddBank(){
	  		$('#bankModal').modal('show');
	  		clearInterval(this.bank_timeInterval);
	  		this.bank_timer = 60;
	  		$('#pcSendCodeBtn1').removeAttr('disabled');
	  		$('#pcSendCodeBtn1').css('background','#00a6ff');
	  		$('#pcSendCodeBtn1').html('發送驗證碼');
	  		$('#pcSendCodeBtn2').removeAttr('disabled');
	  		$('#pcSendCodeBtn2').css('background','#00a6ff');
	  		$('#pcSendCodeBtn2').html('發送驗證碼');
	  	},
	  	setBankTimerFunc:function () {
	        $('#pcSendCodeBtn1').html(this.bank_timer+'秒');
	        $('#pcSendCodeBtn2').html(this.bank_timer+'秒');

	        this.bank_timer = parseInt(this.bank_timer) - 1;
	        if (this.bank_timer <= -1) {
	          clearInterval(this.bank_timeInterval);
	          this.bank_timer = 60;
	          $('#pcSendCodeBtn1').removeAttr('disabled');
	          $('#pcSendCodeBtn1').css('background','#00a6ff');
	          $('#pcSendCodeBtn1').html('發送驗證碼');
	          $('#pcSendCodeBtn2').removeAttr('disabled');
	          $('#pcSendCodeBtn2').css('background','#00a6ff');
	          $('#pcSendCodeBtn2').html('發送驗證碼');
	        }
	      },
	  	sendBankCode(){
        $('#pcSendCodeBtn1').attr('disabled','disabled');
        $('#pcSendCodeBtn1').css('background','#ccc');
        $('#pcSendCodeBtn2').attr('disabled','disabled');
        $('#pcSendCodeBtn2').css('background','#ccc');

        clearInterval(this.bank_timeInterval);
        this.bank_timeInterval = setInterval(this.setBankTimerFunc,1000);
        $.ajax({
          type: 'get',
          url: getService() + "/user/addUserBankSendMassage",
          dataType: "json",
          data: {},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0 || res.error_code == 200) {
              
            }else{
                this.popup_error_msg ='发送验证码失败！';
                $('#myErrorModal').modal('show');
            }
          }.bind(this),
          error:function(){
              this.popup_error_msg ='发送验证码失败！';
              $('#myErrorModal').modal('show');
          }.bind(this)
        });
      },
      submitAccount: function () {
	        var typeStr = '';
	        switch (this.type) {
	          case 'bank':
	            typeStr = '銀行';
	            break;
	          case 'postOffice':
	            typeStr = '郵局';
	            break;
	          case 'cooperative':
	            typeStr = '信用合作社';
	            break;
	          case 'association':
	            typeStr = '農會';
	            break;
	          case 'fishing':
	            typeStr = '漁會';
	            break;
	          default:
	            break;
	        }

	        if(!this.bankName){
	          layer.msg('請選擇付款渠道',{icon:5});
	        }else if(!this.accountName){
	          layer.msg(' 賬戶姓名不能為空！',{icon:5});
	        }else if(!this.sixCode){
	          layer.msg(' 賬號末六位不能為空！',{icon:5});
	        }else if(!this.bankCode){
	          layer.msg(' 驗證碼不能為空！',{icon:5});
	        } 

	        if(this.sixCode.length!=6){
	          layer.msg(' 請輸入正確的賬號末六位！',{icon:5});
	        }


	        var param = {
	          code:this.bankCode,
	          bankType: typeStr,
	          bankName: this.bankName,
	          accountName: this.accountName,
	          last6digital: this.sixCode,
	          accountTelNumber: this.userInfo.tel_number
	        }
	        $.ajax({
	          type: 'post',
	          url: getService() + "/user/addBank",
	          dataType: "json",
	          data: JSON.stringify(param),
	          async: true,
	          headers: {'Content-Type': 'application/json'},
	          xhrFields: {
	            withCredentials: true
	          },
	          crossDomain: true,
	          success: function (res) {
	            if(res.error_code == 0 || res.error_code==200){
	              layer.msg(' 提交成功！',{icon:1});
	              this.getUserInfo();
	              $('#bankModal').modal('hide');
	            }
	          }.bind(this)
	        });
	      },
	  }
	}
</script>

<style scoped>
	/*@import url("../../assets/css/PCstyle.css");*/
	.table th,td{text-align: center;}
	.noHover:hover{cursor: default;}

	.tableForBills tr td, .tableForBills tr th{
		text-align:center;
	}

	.tableForBills tr td{
		vertical-align: bottom !important;
	}

	.nomargin{margin: 0;}
  .nopadding{padding: 0;}
</style>