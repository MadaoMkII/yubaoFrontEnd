<template>
	<div class="rate" style="background: #f5f5f5;">
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
								<!--<div class="row">
									<div class="col-lg-12 col-md-12">
										<label class="pull-left" style="font-size: 18px;margin-right: 15px;">当前汇率（现钞）</label>
										<p class="pull-left" style="font-size: 12px;line-height: 30px;margin-right: 30px;">1RMB=4.76NT(截止时间 2018-08-09 10:30)</p>
										<a href="javascript:void(0)" class="pull-left" v-on:click="changeRate('fixed')">
											<p class="colorTxt" id="fixedBtn" style="padding: 0 30px;border-right: none;border-top-left-radius: 5px;border-bottom-left-radius: 5px;">固定配置</p>
										</a>
										<a href="javascript:void(0)" class="pull-left" v-on:click="changeRate('float')">
											<p class="normalTxt" id="floatBtn" style="padding: 0 30px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;">浮动配置</p>
										</a>
									</div>
								</div>-->
								<!--固定设置-->
								<div id="fixed">
									<div class="row" style="margin-top: 15px;">
										<div class="col-lg-12 col-md-12">
											<label class="pull-left" style="font-size: 18px;">充值R币汇率设置</label>
										</div>
									</div>
									<div class="row" style="margin-top: 10px;">
										<div class="col-lg-12 col-md-12">
											<ul class="pull-left nave" id="RcoinTabList" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP0',$event)"><li class="pull-left active">普通会员</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP1',$event)"><li class="pull-left">VIP1</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP2',$event)"><li class="pull-left">VIP2</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP3',$event)"><li class="pull-left">VIP3</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP4',$event)"><li class="pull-left">VIP4</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP5',$event)"><li class="pull-left">VIP5</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP6',$event)"><li class="pull-left">VIP6</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP7',$event)"><li class="pull-left">VIP7</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP8',$event)"><li class="pull-left">VIP8</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('VIP9',$event)"><li class="pull-left">VIP9</li></a>
												<a href="javascript:void(0)" v-on:click="changeRcoinVIP('SVIP',$event)"><li class="pull-left">SVIP</li></a>
											</ul>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-md-12" id="RcoinRow" style="background: #f5f5f5;border: 1px solid #dbdbdb;border-radius: 5px;padding: 30px 15px;">
											<div class="row" v-bind:id="'Rcoin_'+index" v-for="(item,index) in RcoinRate">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;">兑换</p>
													<input type="number" value="" v-model="item.beginAmount" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">对应汇率 1RMB=</p>
													<input type="number"  value="" v-model="item.detailRate" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">NT</p>
													<button type="button" v-if="index == 0" v-on:click="addRcoinRow()" class="pull-left btn btn-default">添加</button>
													<button type="button" v-if="index > 0" v-on:click="subRcoinRow(index)" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
										</div>
									</div>
									<div class="row" style="margin-top: 30px;">
										<div class="col-lg-12 col-md-12">
											<label class="pull-left" style="font-size: 18px;">充值支付宝微信汇率设置</label>
										</div>
									</div>
									<div class="row" style="margin-top: 10px;">
										<div class="col-lg-12 col-md-12">
											<ul class="pull-left nave" id="paymentTabList" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP0',$event)"><li class="pull-left active">普通会员</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP1',$event)"><li class="pull-left">VIP1</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP2',$event)"><li class="pull-left">VIP2</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP3',$event)"><li class="pull-left">VIP3</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP4',$event)"><li class="pull-left">VIP4</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP5',$event)"><li class="pull-left">VIP5</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP6',$event)"><li class="pull-left">VIP6</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP7',$event)"><li class="pull-left">VIP7</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP8',$event)"><li class="pull-left">VIP8</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('VIP9',$event)"><li class="pull-left">VIP9</li></a>
												<a href="javascript:void(0)" v-on:click="changePaymentVIP('SVIP',$event)"><li class="pull-left">SVIP</li></a>
											</ul>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-md-12" id="paymentRow" style="background: #f5f5f5;border: 1px solid #dbdbdb;border-radius: 5px;padding: 30px 15px;">
											<div class="row" v-for="(item,index) in PaymentPlatformRate">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;">兑换</p>
													<input type="number"  value="" v-model="item.beginAmount" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">对应汇率 1RMB=</p>
													<input type="number"  value="" v-model="item.detailRate" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">NT</p>
													<button type="button" v-if="index == 0" v-on:click="addPaymentRow()" class="pull-left btn btn-default">添加</button>
													<button type="button" v-if="index > 0" v-on:click="subPaymentRow(index)" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row" style="margin-top: 30px;">
									<div class="col-lg-12 col-md-12">
										<center><button type="button" class="btn btn-default" v-on:click="update()">保存</button></center>
									</div>
								</div>
								<!--浮动设置-->
								<!--<div id="float" style="display: none;">
									<div class="row" style="margin-top: 15px;">
										<div class="col-lg-12 col-md-12">
											<label class="pull-left" style="font-size: 18px;">充值R币汇率设置</label>
										</div>
									</div>
									<div class="row" style="margin-top: 10px;">
										<div class="col-lg-12 col-md-12">
											<ul class="pull-left" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
												<a href="javascript:void(0)"><li class="pull-left active">普通会员</li></a>
												<a href="javascript:void(0)"><li class="pull-left">VIP1</li></a>
												<a href="javascript:void(0)"><li class="pull-left">VIP2</li></a>
											</ul>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-md-12" style="background: #f5f5f5;border: 1px solid #dbdbdb;border-radius: 5px;padding: 30px 15px;">
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;">对应汇率 1RMB=</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">NT</p>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">添加</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
										</div>
									</div>
									<div class="row" style="margin-top: 30px;">
										<div class="col-lg-12 col-md-12">
											<label class="pull-left" style="font-size: 18px;">充值支付宝微信汇率设置</label>
										</div>
									</div>
									<div class="row" style="margin-top: 10px;">
										<div class="col-lg-12 col-md-12">
											<ul class="pull-left" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
												<a href="javascript:void(0)"><li class="pull-left active">普通会员</li></a>
												<a href="javascript:void(0)"><li class="pull-left">VIP1</li></a>
												<a href="javascript:void(0)"><li class="pull-left">VIP2</li></a>
											</ul>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-md-12" style="background: #f5f5f5;border: 1px solid #dbdbdb;border-radius: 5px;padding: 30px 15px;">
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;">对应汇率 1RMB=</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 15%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">NT</p>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">添加</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12 col-md-12">
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;font-size: 12px;">兑换</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">-</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="输入金额"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">RMB</p>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;font-size: 12px;">对应汇率 汇率上浮</p>
													<input type="number" name="" id="" value="" class="pull-left form-control" style="width: 13%;" placeholder="单行输入"/>
													<p class="pull-left" style="line-height: 34px;margin-right: 10px;margin: 0 10px;">%<span style="color: #999;margin-left: 5px;font-size: 12px;">相当于1RMB=4.74NT</span></p>
													<button type="button" class="pull-left btn btn-default">删除</button>
												</div>
											</div>
										</div>
									</div>
								</div>-->
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
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'rate',
		data(){
			return {
				totalInfo:'',
				PaymentPlatformRate:[],
				RcoinRate:[],
				RcoinVip:'VIP0',
				PaymentVip:'VIP0',
				RcoinCount:1
			}
		},
		components:{
			leftmenu,
			rightheader
		},
		mounted:function () {
			this.getFixedInfo();
		},
		methods:{
			changeRate:function (str) {
				switch (str){
					case 'fixed':
						$('#fixedBtn').attr('class','colorTxt');
						$('#floatBtn').attr('class','normalTxt');
						$('#float').css('display','none');
						$('#fixed').fadeIn();
						break;
					case 'float':
						$('#fixedBtn').attr('class','normalTxt');
						$('#floatBtn').attr('class','colorTxt');
						$('#fixed').css('display','none');
						$('#float').fadeIn();
						break;
					default:
						break;
				}
			},
			getFixedInfo:function () {
				var param = {
					conditions:["AlipayAndWechatRate","RcoinRate"]
				}
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
				    	if (res.error_code == 0) {
				    		this.totalInfo = res.data;
				    		for (var i=0;i<res.data.RcoinRate.length;i++) {
				    			if (res.data.RcoinRate[i].vipLevel == this.RcoinVip) {
				    				this.RcoinRate = res.data.RcoinRate[i].rateInfo;
				    			}
					    	}
					    	for (var i=0;i<res.data.AlipayAndWechatRate.length;i++) {
					    		if (res.data.AlipayAndWechatRate[i].vipLevel == this.PaymentVip) {
					    			this.PaymentPlatformRate = res.data.AlipayAndWechatRate[i].rateInfo;
					    		}
					    	}
				    	}
				    }.bind(this)
		  		});
			},
			changeRcoinVIP:function (str,$event) {
				console.log('event=',$event);
				
				$('#RcoinTabList').find('li').attr('class','pull-left');

				$event.target.setAttribute('class','pull-left active');
				this.RcoinVip = str;
				this.getFixedInfo();
			},
			changePaymentVIP:function (str,$event) {
				$('#paymentTabList').find('li').attr('class','pull-left');
				$event.target.setAttribute('class','pull-left active');
				this.PaymentVip = str;
				this.getFixedInfo();
			},
			update:function () {
				var AlipayAndWechatRate = this.totalInfo.AlipayAndWechatRate;
				var RcoinRate = this.totalInfo.RcoinRate;
				for (var i=0;i<AlipayAndWechatRate.length;i++) {
					if (AlipayAndWechatRate[i].vipLevel == this.PaymentVip) {
						AlipayAndWechatRate[i].rateInfo = this.PaymentPlatformRate;
					}
				}
				for (var i=0;i<RcoinRate.length;i++) {
					if (RcoinRate[i].vipLevel == this.RcoinVip) {
						RcoinRate[i].rateInfo = this.RcoinRate;
					}
				}
				this.totalInfo.AlipayAndWechatRate = AlipayAndWechatRate;
				this.totalInfo.RcoinRate = RcoinRate;
				$.ajax({
		  			type:'post',
		  			url:getService()+"/setSetting",
		  			dataType: "json",
		  			data:JSON.stringify(this.totalInfo),
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
				    }.bind(this)
		  		});
			},
			addRcoinRow:function () {
				var str = '{"beginAmount": "","detailRate": ""}';
				this.RcoinRate.push(JSON.parse(str));
			},
			addPaymentRow:function () {
				var str = '{"beginAmount": "","detailRate": ""}';
				this.PaymentPlatformRate.push(JSON.parse(str));
			},
			subRcoinRow:function (num) {
				this.RcoinRate.splice(num,1);
			},
			subPaymentRow:function (num) {
				this.PaymentPlatformRate.splice(num,1);
			}
		}
	}
</script>

<style scoped>
	.colorTxt{color: #00a6ff;border: 1px solid #00a6ff;line-height: 34px;}
	.normalTxt{border: 1px solid #666;line-height: 34px;}
	.nave li{list-style: none;width: 75px;border: 1px solid #666;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #666;font-size: 12px;}
	.nave .active{border: 1px solid #33b8ff;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #33b8ff;}
</style>