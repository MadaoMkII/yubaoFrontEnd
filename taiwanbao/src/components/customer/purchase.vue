<template>
	<div class="purchase">
		<!--pc端-->
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
					<p style="margin-bottom: 0;line-height: 42px;color: #fff;">代購</p>
				</div>
	    		<mobileList></mobileList>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 20px;padding-bottom: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
					<div class="row nomargin">
						<div class="col-lg-12 col-md-12 nopadding" style="height: 40px;background: rgba(0,166,255,0.5);border: 0.5px solid #00a6ff;border-radius: 10px;">
							<div class="row nomargin hidden-sm hidden-xs">
								<div style="width: 90%;margin: 0 auto;">
									<p :class="[nowStep == 1 ? 'action':'unaction','pull-left']">1</p>
									<p class="pull-left actionTxt">創建代購訂單</p>
									<div class="pull-left" style="width: 25%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 2 ? 'action':'unaction','pull-left']">2</p>
									<p class="pull-left actionTxt">付款到網站</p>
									<div class="pull-left" style="width: 25%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class="[nowStep == 3 ? 'action':'unaction','pull-left']">3</p>
									<p class="pull-left actionTxt">為您代购</p>
								</div>
							</div>
							<div class="row nomargin hidden-lg hidden-md">
								<div style="width: 90%;margin: 0 auto;">
									<p  :class="[nowStep == 1 ? 'action':'unaction','pull-left']">1</p>
									<div class="pull-left" style="width: 30%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class=" [nowStep == 2 ? 'action':'unaction','pull-left']">2</p>
									<div class="pull-left" style="width: 30%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
									<p :class=" [nowStep == 3 ? 'action':'unaction','pull-left']">3</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 20px;padding-bottom: 30px;">
						<div class="col-lg-8 col-md-8"  style="padding-left: 0;border: 0.5px solid #ccc;padding: 0 0px; background:#fff; ">
						  <div id="step1" style="display:block;">
							<div class="row nomargin" style="margin-top: 20px;">
								<div class="col-lg-12 col-md-12">
									<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 15px;font-weight: bold;">商品金額</p>
									<p class="pull-left nomargin" style="font-size: 12px;color: #666;margin-top: 5px;">匯率<span style="color: #398439;margin-left: 5px;">{{baseRate}}</span></p>
								</div>
							</div>
							<div class="row nomargin" style="margin-top: 10px;">
								<div class="col-lg-12 col-md-12">
									<div class="input-group pull-left hidden-sm hidden-xs" style="width: 45%; position:relative;">
							            <span class="input-group-addon">商品金額</span>
							            <input type="number" class="form-control" v-model="RMBAmount" @focus="inputfocus" @blur="inputblur">
							            <span class="input-group-addon">人民幣</span>
							            <div style="position:absolute; width:100%; left:0; top:50px;  border:1px solid #dbdbdb; background:#fff; box-shadow:0px 0px 8px #ddd; z-index:999; border-radius:6px; color:#ff0000; font-size: 14px; padding:20px 0px; padding-left:20px;" v-if="isShowRateWin">
								            	<span style="line-height:16px; display:block; text-align:left;">您目前花费{{RMBAmount}}人民幣,享受優惠匯率{{rate}}</span>
								            	<span style="line-height:16px; display:block; text-align:left;">爲您節省{{rate*RMBAmount-RMBAmount*preRate}}元新台幣</span>
								            	<span style="line-height:16px; display:block; text-align:left;" v-if="nextRate!=rate">直接花费{{nextRateAmount}}，享受優惠匯率{{nextRate}}</span>
								            </div>
								            <div style="width:0; height:0; border:6px solid transparent; border-bottom:6px solid #dbdbdb;  position:absolute; left:50%; margin-left:-3px; top:39px; z-index:1000;" v-if="isShowRateWin"></div>
							        </div>
							        <img src="../../assets/images/zhuanhuanicon.png" class="pull-left hidden-sm hidden-xs" style="margin: 0 10px;width: 14px;margin-top: 10px;"/>
									<div class="input-group pull-left hidden-sm hidden-xs" style="width: 45%;">
							            <span class="input-group-addon">我要支付</span>
							            <input type="number" class="form-control" v-bind:value="(RMBAmount*rate).toFixed(2)" readonly="readonly">
							            <span class="input-group-addon">新台幣</span>
							        </div>
								    <input type="text" class="form-control hidden-lg hidden-md" v-model="RMBAmount" placeholder="请输入人民幣金额">
								</div>
							</div>
							<div class="row nomargin" style="margin-top: 20px;">
								<div class="col-lg-12 col-md-12">
									<div class="row nomargin">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 15px;font-weight: bold;text-align: left;">網址或商品地址（eg. http://www.baidu.com）</p>
									</div>
									<div class="row nomargin" style="margin-top: 5px;">
										<input type="text" class="pull-left form-control" v-model="links" />
									</div>
								</div>
							</div>
							<div class="row nomargin" style="margin-top: 20px;">
								<div class="col-lg-12 col-md-12">
									<div class="row nomargin">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 15px;font-weight: bold;text-align: left;">代購詳細要求說明</p>
									</div>
									<div class="row nomargin" style="margin-top: 5px;">
										<textarea name="" v-model="comments" class="pull-left form-control" rows="5" cols=""></textarea>
									</div>
								</div>
							</div>
							<div class="row nomargin" style="margin-top: 20px;">
								<div class="col-lg-12 col-md-12">
									<div class="row nomargin">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;margin-right: 15px;font-weight: bold;text-align: left;">請選擇付款方式</p>
									</div>
									<div class="row nomargin" style="margin-top: 10px;">
										<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2">
											<input type="radio" name="typeStr" id="" value="R幣代付" v-model="typeStr" class="pull-left" style="margin-top: 10px;margin-right: 15px;"/>
											
										</div>
										<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10" style="padding-left: 0;">
											<div class="row nomargin">
												<div class="col-lg-1 col-md-1 col-sm-3 col-xs-3 nopadding">
													<center><img src="../../assets/images/RB.png" class="pull-left" style="width: 80%;"/></center>
												</div>
												<div class="col-lg-11 col-md-11 col-sm-9 col-xs-9 nopadding">
													<p class="pull-left" style="margin: 0;line-height: 34px;">可用R幣 <span style="color: #08BF69;">{{userInfo.Rcoins}}</span> 个</p>
												</div>
											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 10px;">
										<p class="pull-left nomargin" style="font-size: 12px;color: #333;">網路ATM/ATM櫃員機<span style="font-size: 10px;color: #999;">（銀行賬戶詳情在送出訂單后可見）</span></p>
									</div>
									<div class="row nomargin" style="margin-top: 10px;">
										<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2" style="padding-right: 0;">
											<input type="radio" name="typeStr" id="" value="054 京城商銀 收款賬戶 002438" v-model="typeStr" class="pull-left" style="margin-top: 10px;"/>
										</div>
										<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10" style="padding-left: 0;">
											<div class="row nomargin">
												<div class="col-lg-1 col-md-1 col-sm-3 col-xs-3 nopadding">
													<center><img src="../../assets/images/jingcheng.jpg" class="pull-left" style="width: 80%;border-radius: 50%;"/></center>
												</div>
												<div class="col-lg-11 col-md-11 col-sm-9 col-xs-9 nopadding">
													<div class="row nomargin">
														<p class="pull-left" style="margin: 0;font-size: 12px;">054 京城商銀 收款賬戶 002438</p>
													</div>
													<div class="row nomargin">
														<p class="pull-left" style="margin: 0;color: #e00;font-size: 12px;">支援全臺各家銀行轉入</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 20px;">
										<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2" style="padding-right: 0;">
											<input type="radio" name="typeStr" id="" value="806 元大商銀 收款賬戶 186510" v-model="typeStr" class="pull-left" style="margin-top: 10px;"/>
										</div>
										<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10" style="padding-left: 0;">
											<div class="row nomargin">
												<div class="col-lg-1 col-md-1 col-sm-3 col-xs-3 nopadding">
													<center><img src="../../assets/images/yuanda.jpg" class="pull-left" style="width: 80%;border-radius: 50%;"/></center>
												</div>
												<div class="col-lg-11 col-md-11 col-sm-9 col-xs-9 nopadding">
													<div class="row nomargin">
														<p class="pull-left" style="margin: 0;font-size: 12px;">806 元大商銀 收款賬戶 186510</p>
													</div>
													<div class="row nomargin">
														<p class="pull-left" style="margin: 0;color: #e00;font-size: 12px;">支援全臺各家銀行轉入</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!--<div class="row nomargin" style="margin-top: 20px;" v-if="typeStr != 'R幣代购'&&typeStr != ''">
										<div class="col-lg-12 col-md-12">
											<div class="row nomargin" style="margin-top: 30px;">
												<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式 <span style="margin-left: 15px;" v-if="typeStr == 'R幣代付'">{{typeStr}}</span><span style="margin-left: 15px;" v-if="typeStr != 'R幣代付'">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
											</div>
											<div class="row nomargin" style="margin-top: 15px;">
												<div class="col-lg-12 col-md-12">
													<div class="row">
														<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行帳戶</p>
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
																<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行帳戶转入或金额不符将不会为您完成交易！</p>
															</div>
														</div>
													</div>
													<div class="row" style="margin-top: 20px;">
														<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行帳戶</p>
													</div>
													<div class="row">
														<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
															<div class="row" style="background: #ccc;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
																<p class="pull-left" style="margin-bottom: 0;color: #008000;line-height: 30px;width: 100%;text-align: left;">转账金额：<span style="font-size: 16px;">{{(RMBAmount*rate).toFixed(2)}}</span> TWD</p>
																<p class="pull-left" style="margin-bottom: 0;color: #008000;line-height: 30px;width: 100%;text-align: left;">银行：{{typeStr}}</p>
															</div>
															<div class="row" style="padding: 0 15px">
																<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
															</div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 30px;">
														<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
													</div>
												</div>
											</div>
										</div>
									</div>-->
									<div class="row nomargin" style="margin-top: 30px;">
										<div class="col-lg-12 col-md-12">
											<center><input type="checkbox"  id="alreadyRead"  style="margin-right: 5px;position: relative;top: 1px;"/>我已閱讀並同意<a href="javascript:void(0)" v-on:click="showAgreeModal()">「結匯授權同意書」</a></center>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 10px;margin-bottom: 30px;">
										<div class="col-lg-4 col-md-4 col-lg-offset-4 col-md-offset-4">
											<center><button type="button" class="btn btn-primary" v-on:click="submitInfo()" style="width: 100%;">下一步</button></center>
										</div>
									</div>
								</div>
							</div>
						  </div>
						  <div id="step2" style="display: none;">
								<div class="row nomargin" style="padding: 30px 15px;">
									<div class="row nomargin">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;">订单明细：</p>
										<!--<p class="pull-left" style="font-size: 20px;font-weight: bold;">{{billID}}</p>
										<p class="pull-right btn btn-success noHover" v-if="dealState == 1 && typeState == 1">交易完成</p>
										<p class="pull-right btn btn-success noHover" v-if="dealState == 2 && typeState == 1">付款已收到，請等待處理</p>
										<p class="pull-right btn btn-danger noHover" v-if="dealState == 2 && typeState == 2">等待付款</p>
										<p class="pull-right btn btn-default noHover" v-if="dealState == 0">交易關閉</p>-->
									</div>
									<div class="row nomargin table-responsive" style="margin-top: 15px;">
										<table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
											<thead style="background:#f5f5f5; ">
												<tr>
													<th>订单金额</th>
													<th>汇率</th>
													<th>手续费</th>
													<th>应付新台幣</th>
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
												<p style="font-size: 12px;text-align: left;">应付新台幣计算公式：{{RMBAmount}}*{{rate}}%+{{feeAmount}}*{{rate}}={{totalAmount}} TWD</p>
											</div>
										</div>
									</div>-->
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">網址或商品地址：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<a v-bind:href="links" class="pull-left" style="text-align: left;">{{links}}</a>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">代購詳細要求說明：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<textarea class="pull-left form-control" rows="5" cols="" readonly="readonly">{{comments}}</textarea>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="typeStr == 'R幣代付'">{{typeStr}}</span><span style="margin-left: 15px;" v-if="typeStr != 'R幣代付'">ATM银行转账</span></p>
										<button class="btn btn-default pull-left" style="color: #00a6ff;border: 0.5px solid #00a6ff;font-size: 10px;padding: 3px 12px; margin-left:20px; margin-top:2px;" @click="popUpAddBank"><img src="../../assets/images/newusericon.png" style="width: 10px;margin-right: 5px;"/>新增賬戶</button>	
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr == 'R幣代付'">
											<p style="font-size: 12px;text-align: left;">您此次需消费<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R幣,当前帳戶余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{userInfo.Rcoins}}</span>R幣</p>
									</div>
									<div class="row nomargin" style="" v-if="typeStr != 'R幣代付'">
										<div class="col-lg-12 col-md-12">
											<div class="row">
												<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行帳戶</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
													<div class="row" v-for="item in userInfo.bankAccounts" style="background:#f5f5f5;">
														<input type="radio" name="chooseBank"  :value="item.accountName" v-model="chooseBank" class="pull-left" style="margin-top: 6px; margin-right:6px; margin-left:10px; "/>
														<a href="javascript:void(0)" class="pull-left"  style="color: #08bf69;margin-right: 10px;line-height: 22px;  text-align: left;" >{{item.accountName}}({{item.bankName}})</a>
														<a href="javascript:void(0)"  class="pull-left"  style="color: #2a6baf;margin-right: 10px;line-height: 22px; text-align: left;" v-if="chooseBank==item.accountName"><img src="../../assets/images/chooseIcon.png"/>約定賬戶</a>
													</div>
													<div class="row" style="padding: 0 15px; border-top:1px solid #ccc;">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行帳戶转入或金额不符将不会为您完成交易！</p>
													</div>
												</div>
											</div>
											<div class="row" style="margin-top: 20px;">
												<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行帳戶</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
													<div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 30px;width: 100%;text-align: left;">转账金额：<span style="font-size: 16px;">{{totalAmount}}</span> TWD</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 30px;width: 100%;text-align: left;">银行：{{typeStr}}</p>
													</div>
													<div class="row" style="padding: 0 15px; border-top:1px solid #ccc; ">
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
											<button type="button" class="pull-left btn btn-warning" v-on:click="showStep3()">下一步</button>
										</div>
										
									</div>
								</div>
							</div>
							<div id="step3" style="display: none;">
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
									<div class="row nomargin table-responsive" style="margin-top: 15px;">
										<table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
											<thead style="background:#f5f5f5; ">
												<tr>
													<th>订单金额</th>
													<th>汇率</th>
													<th>手续费</th>
													<th>应付新台幣</th>
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
												<p style="font-size: 12px;text-align: left;">应付新台幣计算公式：{{RMBAmount}}*{{rate}}+{{(feeRate/100*RMBAmount).toFixed(2)}}*{{rate}}={{totalAmount}} TWD</p>

											</div>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">网址或商品地址：</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<a v-bind:href="links" class="pull-left" style="text-align: left;">{{links}}</a>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">代购详细要求说明</p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<textarea class="pull-left form-control" rows="5" cols="" readonly="readonly">{{comments}}</textarea>
									</div>
									<div class="row nomargin" style="margin-top: 30px;">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="typeStr == 'R幣代付'">{{typeStr}}</span><span style="margin-left: 15px;" v-if="typeStr != 'R幣代付'">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
									</div>
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr != 'R幣代付'">
										<div class="col-lg-12 col-md-12">
											<div class="row">
												<p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行帳戶</p>
											</div>
											<div class="row" style="padding-top:5px;">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-bottom-left-radius:0; border-bottom-right-radius:0; background:#f5f5f5; border-bottom:none;">
													<div class="row" style="padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
														<a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-top-left-radius:0; border-top-right-radius:0;">
													<div class="row" style="padding: 0 15px">
														<p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行帳戶转入或金额不符将不会为您完成交易！</p>
													</div>
												</div>
											</div>
											<div class="row" style="margin-top: 20px;">
												<p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行帳戶</p>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;">
													<div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
														<p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
													</div>
													<div class="row" style="padding: 0 15px;border-top:1px solid #ccc;">
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
									<div class="row nomargin" style="margin-top: 15px;" v-if="typeStr == 'R幣代付'">
										<div class="row nomargin" style="margin-top: 15px;">
											<p style="font-size: 12px;text-align: left;">您此次消费了<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R幣，帳戶余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{userInfo.Rcoins}}</span>R幣</p>
										</div>
									</div>
								</div>
							</div>
					    </div>
						<!--<div class="col-lg-8 col-md-8" v-if="finishFlag" style="padding-left: 0;border: 0.5px solid #ccc;padding: 0 0px; background:#fff;">
							<div class="row nomargin" style="padding: 30px 15px;">
								<div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
									<div class="col-lg-12 col-md-12">
										<img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 10px;"/>
										<span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
										<a href="javascript:void(0)" class="pull-left" style="color: #6393c5;margin-left: 20px;line-height: 50px;" @click="goBack">返回</a>
										<a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
										<a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
										

									</div>
								</div>
								<div class="row nomargin" style="margin-top: 20px;">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="font-size: 20px;font-weight: bold;">订单明细：{{billID}}</p>
										
										<p  class="pull-right"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 15px;">
									<table class="table table-striped">
										<thead>
											<tr>
												<th>订单金额</th>
												<th>汇率</th>
												<th>手续费</th>
												<th>应付新台幣</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
												<td>{{rate}}%</td>
												<td>${{feeAmount}}</td>
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
											<p style="font-size: 12px;text-align: left;">应付新台幣计算公式：{{RMBAmount}}*{{rate}}%+{{feeAmount}}*{{rate}}={{totalAmount}} TWD</p>
										</div>
									</div>
								</div>
								<div class="row nomargin" style="margin-top: 30px;">
									<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您的代付链接</p>
								</div>
								<div class="row nomargin" style="margin-top: 15px;">
									<a v-bind:href="links" class="pull-left" style="text-align: left;">{{links}}</a>
								</div>
								<div class="row nomargin" style="margin-top: 30px;">
									<p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单留言</p>
								</div>
								<div class="row nomargin" style="margin-top: 15px;">
									<p class="pull-left" style="text-align: left;">{{comments}}</p>
								</div>
							</div>
						</div>-->
						<div class="col-lg-4 col-md-4 hidden-sm hidden-xs" style="padding-right: 0;padding: 0 15px;">
							<div class="row nomargin" style="border: 0.5px solid #ccc; background:#fff; ">
								<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
									<div class="row nomargin" style="margin-top: 20px;">
										<div class="col-lg-6 col-md-6 nopadding">
											<p class="pull-left nomargin" style="font-size: 12px;color: #333;">需支付人民幣：</p>
										</div>
										<div class="col-lg-6 col-md-6 nopadding">
											<span class="pull-left" style="font-size: 16px;color: #333;margin-right: 5px;display: inline-block;">{{RMBAmount}}</span><p class="pull-left nomargin" style="font-size: 12px;color: #666;margin-top: 2px;">RMB</p>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<div class="col-lg-6 col-md-6 nopadding">
											<p class="pull-left nomargin" style="font-size: 12px;color: #333;">我的匯率：</p>
										</div>
										<div class="col-lg-6 col-md-6 nopadding">
											<p class="pull-left nomargin" style="font-size: 16px;margin-top: 2px; color: #333;">{{rate}}</p>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<div class="col-lg-6 col-md-6 nopadding">
											<p class="pull-left nomargin" style="font-size: 12px;color: #333;">我的手續費：</p>
										</div>
										<div class="col-lg-6 col-md-6 nopadding">
											<span class="pull-left" style="font-size: 16px;color: #333;margin-right: 5px;display: inline-block;">{{(feeRate/100*RMBAmount).toFixed(2)}}</span><p class="pull-left nomargin" style="font-size: 12px;color: #666;margin-top: 2px;">RMB</p>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 15px;">
										<div class="col-lg-6 col-md-6 nopadding">
											<p class="pull-left nomargin" style="font-size: 12px;color: #333;">需支付台幣：</p>
										</div>
										<div class="col-lg-6 col-md-6 nopadding">
											<span class="pull-left" style="font-size: 16px;color: #333;margin-right: 5px;display: inline-block;">{{totalAmount}}</span><p class="pull-left nomargin" style="font-size: 12px;color: #666;margin-top: 2px;">TWD</p>
										</div>
									</div>
									<div class="row nomargin" style="margin-top: 15px;margin-bottom: 20px;">
										<div class="col-lg-12 col-md-12">
											<p class="pull-left nomargin" style="color: #e00000;font-size: 12px;">統一發票，本訂單無手續費，故不開立發票！</p>
										</div>
									</div>
								</div>
							</div>
							<div class="row nomargin" style="border: 0.5px solid #ccc;margin-top: 20px;padding: 20px 0; background:#fff; ">
								<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
									<div class="row nomargin">
										<p class="pull-left nomargin" style="font-size: 16px;color: #333;font-weight: bold;">訂單處理時間</p>
									</div>
									<div class="row nomargin" style="margin-top: 10px;">
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">1.24小時每分鐘查款一次，因此付款後不必通知。郵局每日0:00-1:30例行維護，無法查款。</p>
										<p class="pull-left nomargin" style="font-size: 12px;color: #666;text-indent: 2em;line-height: 20px;text-align: left;">2.全年周末及假日無休，24小時服務。一般在收到款項後的5分鐘內完成交易。每日23:50-00:05為結帳時間不做交易，此15分鐘內收到的款項順延到00:06作業。</p>
									</div>
								</div>
							</div>
							<div class="row nomargin" style="border: 0.5px solid #ccc;margin-top: 20px;padding: 20px 0; background:#fff; ">
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
			<!--<div class="row nomargin" style="margin: 0;margin-bottom: 30px;">
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
		<!--手機端-->
		<!--<div class="hidden-lg hidden-md">
			<div class="row nomargin" style="margin: 0;background: #ff8500;">
				<div class="col-sm-6 col-xs-6 col-sm-offset-3 col-xs-offset-3">
					<p style="margin-bottom: 0;line-height: 42px;color: #fff;">代購</p>
				</div>
	    		<mobileList></mobileList>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left action">1</p>
					<div class="pull-left" style="width: 33%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
					<p class="pull-left unaction">2</p>
					<div class="pull-left" style="width: 33%;height: 19px;border-bottom: 1px solid #999;margin: 0 5px;"></div>
					<p class="pull-left unaction">3</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left nomargin" style="font-size: 1.1em;color: #333;margin-right: 1em;font-weight: bold;">商品金額</p>
					<p class="pull-left nomargin" style="font-size: 1em;color: #666;margin-top: 0.1em;">匯率<span style="color: #398439;margin-left: 0.5em;">4.819</span></p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0.5em 0;">
				<div class="col-sm-12 col-xs-12 nopadding">
					<input type="number" name="" id="" value="" class="form-control" style="box-shadow: none;-webkit-box-shadow: none;border-left: none;border-right: none;border-radius: 0;" placeholder="請輸入商品的人民幣金額"/>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left nomargin" style="font-size: 1.1em;color: #333;font-weight: bold;">網址或商品地址（eg. http://www.baidu.com）</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0.5em 0;">
				<div class="col-sm-12 col-xs-12 nopadding">
					<input type="text" name="" id="" value="" class="form-control" style="box-shadow: none;-webkit-box-shadow: none;border-left: none;border-right: none;border-radius: 0;" placeholder="單行輸入"/>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left nomargin" style="font-size: 1.1em;color: #333;font-weight: bold;">代購詳細要求說明</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0.5em 0;">
				<div class="col-sm-12 col-xs-12 nopadding">
					<textarea name="" class="form-control" style="box-shadow: none;-webkit-box-shadow: none;border-left: none;border-right: none;border-radius: 0;" rows="" cols="" placeholder="請輸入詳細要求說明"></textarea>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left nomargin" style="font-size: 1.1em;color: #333;font-weight: bold;">請選擇付款方式</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 0.5em;">
				<div class="col-sm-12 col-xs-12">
					<p class="pull-left nomargin" style="font-size: 1em;color: #333;">網路ATM/ATM櫃員機<span style="font-size: 0.8em;color: #999;">（銀行賬戶詳情在送出訂單后可見）</span></p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;">
				<div class="col-sm-12 col-xs-12 nopadding" style="border: 0.05em solid #ccc;border-left: none;border-right: none;">
					<input type="radio" class="pull-left" name="" id="" value="" style="margin: 1em;"/>
					<img src="../../assets/images/mobile/guai.png" style="width: 2em;margin-top: 0.5em;margin-right: 1em;" class="pull-left"/>
					<p class="pull-left" style="font-size: 1em;margin-top: 0.8em;">700 郵局 收款賬戶 47936</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;">
				<div class="col-sm-12 col-xs-12 nopadding" style="border: 0.05em solid #ccc;border-left: none;border-right: none;">
					<input type="radio" class="pull-left" name="" id="" value="" style="margin: 1em;"/>
					<img src="../../assets/images/mobile/Bitmap.png" style="width: 2em;margin-top: 0.5em;margin-right: 1em;" class="pull-left"/>
					<p class="pull-left" style="font-size: 1em;margin-top: 0.8em;">808 玉山商銀 收款賬戶 175242</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;">
				<div class="col-sm-12 col-xs-12 nopadding" style="border: 0.05em solid #ccc;border-left: none;border-right: none;">
					<div style="background: rgba(0,0,0,0.5);height: 3em;position: absolute;width: 100%;z-index: 99;" v-if="!userInfo.isCStoreOpened">
						<center><p style="color: #fff;line-height: 3em;">收取2%的手續費，不足30台幣按30台幣收取</p></center>		
					</div>
					<input type="radio" class="pull-left" name="" id="" value="" style="margin: 1em;"/>
					<img src="../../assets/images/mobile/chaoshangfukuan.png" style="width: 2em;margin-top: 0.5em;margin-right: 1em;" class="pull-left"/>
					<p class="pull-left" style="font-size: 1em;margin-top: 0.8em;">711/全家/OK超商</p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<center><input type="checkbox" name="" id="" value="" style="margin-right: 0.5em;margin-top: 0.2em;"/>我已閱讀並同意<a href="javascript:void(0)">「結匯授權同意書」</a></center>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;margin-bottom: 6em;">
				<div class="col-sm-12 col-xs-12 nopadding" style="border: 0.05em solid #ccc;border-left: none;border-right: none;">
					<p class="pull-left nomargin" style="margin-left: 2em;line-height: 4em;">需付款：99999台幣</p>
					<button type="button" class="btn btn-warning pull-right" style="margin-right: 2em;margin-top: 1em;background: #ff8500;">下一步</button>
				</div>
			</div>
			<mobileFooter></mobileFooter>
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
	  name: 'purchase',
	  data (){
	  	return{
	  		userInfo:'',
	  		rate:0,
	  		RMBAmount:0,
	  		feeAmount:'',
	  		feeRate:'',
	  		totalAmount:'',
	  		created_at:'',
	  		updated_at:'',
	  		links:'',
	  		comments:'',
	  		typeStr:'',
	  		billID:'',
	  		dealState:'',
	  		typeState:'',
	  		userLastSix:'', //用户银行后六位
	  		userBankName:'', //用户银行名称

	  		finishFlag:false,
	  		centerNoticeTitle:'使用遇到問題?',
	  		getCenterNotice:{
	  			showFlag:false,
	  			noticeArray:[]
	  		},

	  		baseRate:'',
	  		conditions:[],
	  		nextRateAmount:0,
	  		nextRate:0,
	  		preRateAmount:0,
	  		preRate:0,
	  		isShowRateWin:0, //顯示彈窗否
	  		chooseBank:'',
	  		bankDetail:'',
	  		finalbankDetailInfo:{
	  			account:'',
	  			company:''
	  		},
	  		conditions:[],
	  		billState:'',
	  		payState:'',
	  		nowStep:1,

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
	  watch:{

	  	RMBAmount:function(val,oldVal){
	  		this.getRate(val);
	  		var rateArray=[];
	  		for(var i=0;i<this.conditions.length;i++){
	  			if(this.conditions[i].vipLevel == this.userInfo.VIPLevel){
	  				rateArray=this.conditions[i].rateInfo;
	  			}
	  		}
	  		var nextindex=this.findNextIndex(val,rateArray);
	  		this.nextRateAmount = rateArray[nextindex].beginAmount;
	  		this.nextRate = rateArray[nextindex].detailRate;

	  		var nowIndex = this.findNowIndex(val,rateArray);
	  		if(nowIndex <=0){
	  			this.preRateAmount = rateArray[nowIndex].beginAmount;
	  			this.preRate = rateArray[nowIndex].detailRate;
	  		}else{
	  			this.preRateAmount = rateArray[nowIndex-1].beginAmount;
	  			this.preRate = rateArray[nowIndex-1].detailRate;
	  		}
	  	},
	  	chooseBank:function(val,oldVal){
	  		for(var i=0;i<this.userInfo.bankAccounts.length;i++){
	  			if(val==this.userInfo.bankAccounts[i].accountName){
	  				this.setUserBankInfo(this.userInfo.bankAccounts[i].last6digital,this.userInfo.bankAccounts[i].bankName);
	  			}
	  		}
	  	}

	  },
	  mounted:function (){
	  	this.getInfo();
	  	this.getBaseRate();
	  	this.getPurchaseNoticeInfoFunc();
	  	this.getConditions();
	  	this.getBankDetailFunc();
	  	this.getTypes();
	  },
	  components:{
			notice,
			pageFooter,
			agree,
			mobileFooter,
			mobileList
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
	  	goBack(){
	  		$('#step1').show();
			$('#step2').hide();
			$('#step3').hide();
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
	  	inputfocus(){
	  		this.isShowRateWin = 1;
	  	},
	  	inputblur(){
	  		this.isShowRateWin = 0;
	  	},
	  	findNextIndex(val,rateArray){
	  		for(var j=0;j<rateArray.length;j++){
	  			if(val<rateArray[j].beginAmount){
	  				return j;
	  			}
	  		}
	  		return rateArray.length-1;
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
	  	findNowIndex(val,rateArray){
	  		if(val>=rateArray[rateArray.length-1].beginAmount){
	  			return rateArray.length-1;
	  		}
	  		for(var j=0;j<rateArray.length;j++){
	  			if(val>=rateArray[j].beginAmount && val<rateArray[j+1].beginAmount){
	  				return j;
	  			}
	  		}
	  		return 0;
	  	},
	  	getPurchaseNoticeInfoFunc(){
	  		var that=this;
	  		var param = {
		  		"location":'代购'
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
			    	if (res.error_code == 0||res.error_code == 200) {
			    		this.userInfo = res.data;
			    		this.secretPhone = res.data.tel_number;
			    	}
			    }.bind(this)
	  		});
	  	},
	  	getRate:function (num) {
	  		var that=this;
	  		var param={
	  			"RMBAmount":num,
   				"rateType":"RcoinRate"
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
			    	if (res.error_code == 200 || res.error_code == 0) {
			    		that.rate = res.data.rate;
			    		that.feeAmount = res.data.feeAmount;
			    		that.feeRate = res.data.feeRate;
			    		that.totalAmount = res.data.totalAmount;
			    	}
			    }
	  		});
	  	},
	  	getBaseRate:function () {
	  		var that=this;
	  		var param={
   				"rateType":"RcoinRate"
	  		};
	  		$.ajax({
	  			type:'post',
	  			url:getService()+"/bill/getBaseRate",
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
			    		that.baseRate = res.data.rate;
			    	}
			    }
	  		});
	  	},
	  	setUserBankInfo:function (userLastSix,userBankName) {
	  		this.userLastSix = userLastSix;
	  		this.userBankName = userBankName;
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

	  	},
	  	submitInfo:function () {
	  		if(parseFloat(this.RMBAmount).toString() == "NaN") {
			　　layer.msg('请输入正确的商品金额',{icon:5});
	  			return;
		　　} 


			var val=$('input:radio[name="typeStr"]:checked').val();
	  		if(val==null){
	  			layer.msg('請選擇付款方式',{icon:5});
	  			return;
	  		}

	  		if($("#alreadyRead").is(":checked")==false){
	  			layer.msg('未勾選同意授權',{icon:5});
	  			return;
	  		}

	  		$('#step1').fadeOut(1);
	  		$('#step2').fadeIn();
	  		this.nowStep=2;


	  		/*var param={};
	  		var url='';

	  		if(this.typeStr == 'R幣代购'){
	  			param = {
		  			"typeStr":"其他網站代購",
					"itemInfo":{"itemLink":this.links},
					"RMBAmount":(this.totalAmount/this.rate).toFixed(2),
					"comment":this.comments
		  		};
		  		url=getService()+"/item/addBillByRcoins"

	  		}else{
	  			param = {
		  			"typeStr":"其他網站代購",
					"itemInfo":{"itemLink":this.links},
					"RMBAmount":(this.totalAmount/this.rate).toFixed(2),
					"comment":this.comments,
					"chargeInfo":{"chargeMethod":this.userBankName, "chargeAccount": this.userLastSix,"toOurAccount":this.typeStr.split(' ')[0]}
		  		};
		  		url=getService()+"/item/addBillByBank";
	  		}
	  		*/
	  	},
	  	showStep3:function () {

	  		

	  		var param={};
	  		var url='';

	  		if(this.typeStr == 'R幣代付'){
	  			param = {
		  			"typeStr":"其他網站代購",
					"itemInfo":{"itemLink":this.links},
					"RMBAmount":(this.totalAmount/this.rate).toFixed(2),
					"comment":this.comments
		  		};
		  		url=getService()+"/item/addBillByRcoins"

	  		}else{
	  			if(this.chooseBank=='' || this.chooseBank==null){
		  			layer.msg('請選擇付款銀行！',{icon:5});
		  			return;
		  		}
	  			param = {
		  			"typeStr":"其他網站代購",
					"itemInfo":{"itemLink":this.links},
					"RMBAmount":(this.totalAmount/this.rate).toFixed(2),
					"comment":this.comments,
					"chargeInfo":{"chargeMethod":this.userBankName, "chargeFromAccount": this.userLastSix,"toOurAccount":this.typeStr.split(' ')[0]}
		  		};
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
				    	if (res.error_code == 0 || res.error_code==200) {
				    		$('#step2').fadeOut(1);
					  		$('#step3').fadeIn();
					  		this.nowStep=3;

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
				    	}else{
				    		layer.msg('操作失败，请重试！',{icon:5});
				    	}
				    }.bind(this),
				    error:function(res){
				    	layer.msg('操作失败，请重试！',{icon:5});
				    }
		  		});
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
	  	setBankTimer:function () {
	        $('#pcSendCodeBtn1').html(this.bank_timer+'秒');
	        $('#pcSendCodeBtn2').html(this.bank_timer+'秒');

	        this.bank_timer = parseInt(this.bank_timer) - 1;
	        if (this.bank_timer == -1) {
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
        this.bank_timeInterval = setInterval(this.setBankTimer,1000);
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
	          layer.msg(' 賬戶姓名不能為空！',{icon:5});
	        }else if(!this.sixCode){
	          layer.msg(' 賬號末六位不能為空！',{icon:5});
	        }else if(!this.bankCode){
	          layer.msg(' 驗證碼不能為空！',{icon:5});
	        } 

	        if(this.sixCode.length!=6){
	          layer.msg(' 請輸入正確的賬號末六位！',{icon:5});
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
	              layer.msg(' 提交成功！',{icon:1});
	              this.getInfo();
	              $('#bankModal').modal('hide');
	            }else{
	            	layer.msg(' 提交失敗！',{icon:5});
	            }
	          }.bind(this),
	          error:function(res){
	          	layer.msg(' 提交失敗！',{icon:5});
	          }
	        });
	      },
	  }
	}
</script>

<style scoped>
	/*@import url("../../assets/css/PCstyle.css");*/
	input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }

    .tableForBills tr td, .tableForBills tr th{
		text-align:center;
	}

	.tableForBills tr td{
		vertical-align: bottom !important;
	}
	.nomargin{margin: 0;}
  .nopadding{padding: 0;}
</style>