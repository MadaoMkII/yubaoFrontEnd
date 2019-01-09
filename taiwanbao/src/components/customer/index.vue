<template>
	<div class="index">
		<!--PC端-->
		<div class="hidden-sm hidden-xs">
			<div class="row nomargin" style="margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding bar" style="padding: 0;">
					<div class="row nomargin" style="background:#f1f1f1;">
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" >
							<p class="pull-left font12 nomargin" style="color: #999;line-height: 30px;margin-right: 30px;">左逛右逛遇到寳！</p>
							<router-link to="/help" class="pull-left font12" style="color: #666;line-height: 30px;">幫助中心</router-link>
							
							<router-link v-if="!loginFlag" to="/login" class="pull-right font12" style="color: #00a6ff;line-height: 20px;display: inline-block;border: 0.5px solid #00a6ff;margin-top: 5px;background: #fff;padding: 0 10px;border-radius: 3px;">會員登錄</router-link>
							
							<router-link v-if="!loginFlag" to="/login" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">免費註冊</router-link>
							<a v-if="loginFlag"  class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px; cursor:pointer; " @click="loginOut">會員登出</a>
							<router-link v-if="loginFlag" to="/center" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">會員中心</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;padding-top: 20px; padding-bottom:20px; background:#fff;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 0;">
					<div class="row nomargin">
						<div class="col-lg-2 col-md-2 nopadding">
							<router-link to="/index"><img src="../../assets/images/yubaologo.png" class="pull-left" style="width: 100px;"/></router-link>
						</div>
						<div class="col-lg-10 col-md-10 nopadding">
							<img src="../../../static/images/lineQRCode.png" class="pull-right QRCode" v-on:click="showQRCode()" style="margin-left: 15px;"/>
							<button type="button" class="pull-right btn" v-on:click="searchItem()" style="background: #00a6ff;color: #fff;border-radius: 0;height: 34px;margin-top: 20px;">購物返R幣</button>
							<input type="text" name="" id="" value="" v-model="itemName" placeholder="粘貼淘寶/天貓寶貝標題，購物拿返利" class="pull-right" style="border: 0.5px solid #00a6ff;width: 400px;height: 34px;padding-left: 15px;font-size: 12px;margin-top: 20px;"/>
							<p style="display: inline-block;text-align: center;width: 128px;background: #00a6ff;color: #fff;font-size: 10px;position: absolute;right: 481px;">尋找淘寶/天貓上的寶貝</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;min-height: 400px;">
				<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
					<img v-bind:src="imgUrl" style="width: 100%;z-index: -1;"/>
					<div class="row nomargin" v-if="loginFlag" style="position: relative;top: -80px;">
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="background: #fff;box-shadow: 0px 0px 10px #333;border-radius: 5px;padding: 30px 0;">
							<div class="row nomargin">
								<div class="col-lg-12 col-md-12 nopadding">
									<center><img src="../../assets/images/title.png"/></center>
								</div>
							</div>
							<div class="row nomargin" style="margin-top: 20px;">
								<div class="col-lg-2 col-md-2 col-lg-offset-1 col-md-offset-1 nopadding">
									<router-link to="/supersede">
										<center><img src="../../assets/images/taobao.png"/></center>
										<center><p class="nomargin" style="color: #666;">淘寶天貓代付</p></center>
									</router-link>
								</div>
								<!--<div class="col-lg-2 col-md-2 nopadding">
									<center><img src="../../assets/images/RB.png"/></center>
									<center><p class="nomargin" style="color: #666;">免费R幣</p></center>
								</div>-->
								<div class="col-lg-2 col-md-2  nopadding">
									<router-link to="/supersede">
										<center><img src="../../assets/images/ali.png"/></center>
										<center><p class="nomargin" style="color: #666;">阿里巴巴代付</p></center>
									</router-link>
								</div><!--col-lg-offset-2 col-md-offset-2-->
								<div class="col-lg-2 col-md-2 nopadding">
									<router-link to="/aliRecharge">
									<center><img src="../../assets/images/pay.png"/></center>
									<center><p class="nomargin" style="color: #666;">支付寶儲值</p></center>
									</router-link>
								</div>
								<div class="col-lg-2 col-md-2 nopadding">
									<router-link to="/wechatRecharge">
										<center><img src="../../assets/images/wechat.png"/></center>
										<center><p class="nomargin" style="color: #666;">微信錢包</p></center>
									</router-link>
								</div>
								<div class="col-lg-2 col-md-2  nopadding">
									<router-link to="/purchase">
										<center><img src="../../assets/images/daigou.png"/></center>
										<center><p class="nomargin" style="color: #666;">網站代購</p></center>
									</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="row nomargin" id="keyWords_pc" style="position: relative;margin: 0;top:-65px">
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 0;">
							<p style="background: #fee2b7;line-height: 30px;border-radius: 5px;">Yubaopay 玉寶 - 淘寶代付、支付寶代儲、微信紅包，最專業的跨海支付幫手！<span style="display: inline-block;position: absolute;right: -10px;top: -0.5em;background: #fff;width: 1.5em;height: 1.5em;text-align: center;font-size: 1.2em;border-radius: 50%;border: 1px solid #000;line-height: 1.2em;cursor: pointer;" v-on:click="closeKeyPC()">×</span></p>
						</div>
					</div>
					<div class="row nomargin" style="position: relative;margin: 0;top:-60px">
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="background: #fff;box-shadow: 0px 0px 10px #333;border-radius: 5px;padding: 30px 0;">
							<div class="row nomargin" style="margin-bottom: 15px;">
								<div class="col-lg-12 col-md-12 nopadding">
									<center><img src="../../assets/images/title2.png"/></center>
								</div>
							</div>
							<div class="row nomargin" style="margin: 0;">
								<a v-bind:href="item.advertisingLink" v-for="item in itemInfo">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img v-bind:src="item.imageLink+'?x-oss-process=style/item_style'" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;height: 28px;line-height: 14px;">{{item.item_name}}</p>
										<p class="pull-left" style="color: #e00000;">￥{{item.price}}</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">{{item.referer}}分享</p>
									</div>
								</a>
								<!--<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>
								<a href="">
									<div class="col-lg-2 col-md-2 nopadding" style="width: 20%;border: 0.5px solid #ccc;padding: 2%;">
										<center><img src="../../assets/images/pic.jpg" style="width: 100%;"/></center>
										<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
										<p class="pull-left" style="color: #e00000;">￥19.9</p>
										<p class="pull-right" style="color: #ccc;font-size: 10px;">Tony分享</p>
									</div>
								</a>-->
							</div>
							<div class="row paginate" style="margin: 0;" v-show="totalPage!=1">
								<paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'" :container-class="'pull-right'"></paginate>
							</div>
						</div>
					</div>
				</div>
			</div>
			<QRCode></QRCode>
			<pageFooter></pageFooter>
			<!--<div class="row nomargin" style="margin: 0;padding-bottom: 30px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 0;">
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
		<div class="hidden-lg hidden-md">
			<div class="row nomargin" style="margin: 0;background: #ff8500;padding: 0.5em 0;">
				<div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
					<router-link to="/index"><img src="../../assets/images/mobile/logo.png" style="width: 100%;"/></router-link>
				</div>				
				<mobileList></mobileList>
			</div>
			<div class="row nomargin" id="keyWords" style="margin: 0;margin-top: 1em;">
				<div class="col-sm-12 col-xs-12">
					<p style="text-align: left;font-size: 0.8em;margin-bottom: 0;background: #fee2b7;padding: 10px 15px;border-radius: 10px;">Yubaopay 玉寶 - 淘寶代付、支付寶代儲、微信紅包，最專業的跨海支付幫手！<span style="display: inline-block;position: absolute;right: 10px;top: -0.5em;background: #fff;width: 1.5em;height: 1.5em;text-align: center;font-size: 1.2em;border-radius: 50%;border: 1px solid #000;line-height: 1.2em;" v-on:click="closeKey()">×</span></p>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;padding-bottom: 1em;">
				<div class="col-sm-12 col-xs-12">
					<input type="text" placeholder="粘貼淘寶/天貓寶貝標題，購物拿返利" v-model="itemName" style="border: 0.1em solid #00a6ff;font-size: 0.8em;width: 65%;line-height: 2em;padding-left: 1em;" class="pull-left" name="" id="" value="" />
					<button type="button" v-on:click="searchItem()" class="pull-right" style="width: 30%;background: #00a6ff;border: none;line-height: 1.8em;font-size: 1em;color: #fff;">購物返R幣</button>
				</div>
			</div>
			<div class="row nomargin" v-if="loginFlag" style="margin: 0;margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;">
				<div class="col-sm-12 col-xs-12">
					<div class="row nomargin">
						<div class="col-sm-12 col-xs-12 nopadding">
							<p class="pull-left nomargin" style="border-left: 0.3em solid #00a6ff;padding-left: 0.5em;">核心業務</p>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 1em;">
						<div class="col-sm-3 col-xs-3">
							<router-link to="/supersede">
								<center><img src="../../assets/images/mobile/taobao.png" style="width: 50%;"/></center>
								<center><p style="font-size: 0.6em;margin-top: 0.5em;">淘寶天貓代付</p></center>
							</router-link>
						</div>
						<!--<div class="col-sm-3 col-xs-3">
							<center><img src="../../assets/images/mobile/RB.png" style="width: 50%;"/></center>
							<center><p style="font-size: 0.6em;margin-top: 0.5em;">免費R幣</p></center>
						</div>-->
						<div class="col-sm-3 col-xs-3">
							<router-link to="/supersede">
								<center><img src="../../assets/images/mobile/ali.png" style="width: 50%;"/></center>
								<center><p style="font-size: 0.6em;margin-top: 0.5em;">阿里巴巴代付</p></center>
							</router-link>
						</div>
						<div class="col-sm-3 col-xs-3">
							<router-link to="/purchase">
								<center><img src="../../assets/images/mobile/daigou.png" style="width: 50%;"/></center>
								<center><p style="font-size: 0.6em;margin-top: 0.5em;">網站代購</p></center>
							</router-link>
						</div>
						<div class="col-sm-3 col-xs-3">
							<router-link to="/aliRecharge">
								<center><img src="../../assets/images/mobile/pay.png" style="width: 50%;"/></center>
								<center><p style="font-size: 0.6em;margin-top: 0.5em;">支付寶儲值</p></center>
							</router-link>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 1em;">
						<div class="col-sm-3 col-xs-3">
							<router-link to="/wechatRecharge">
								<center><img src="../../assets/images/mobile/wechat.png" style="width: 50%;"/></center>
								<center><p style="font-size: 0.6em;margin-top: 0.5em;">微信錢包</p></center>
							</router-link>
						</div>
						<!--<div class="col-sm-3 col-xs-3">
							<center><img src="../../assets/images/mobile/daigou.png" style="width: 50%;"/></center>
							<center><p style="font-size: 0.6em;margin-top: 0.5em;">網站代購</p></center>
						</div>-->
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;margin-top: 1em;margin-bottom: 6em;">
				<div class="col-sm-12 col-xs-12">
					<div class="row nomargin">
						<div class="col-sm-12 col-xs-12 nopadding">
							<p class="pull-left nomargin" style="border-left: 0.3em solid #00a6ff;padding-left: 0.5em;">精選推薦</p>
						</div>
					</div>
					<div class="row nomargin" style="margin-top: 1em;">
						<a v-bind:href="item.advertisingLink" v-for="item in itemInfo">
							<div class="col-sm-6 col-xs-6 nopadding" style="width: 50%;border: 0.5px solid #ccc;padding: 2%;">
								<center><img v-bind:src="item.imageLink+'?x-oss-process=style/item_style'" style="width: 100%;"/></center>
								<p class="pull-left" style="font-size: 10px;text-align: left;margin-top: 10px;width: 100%;margin-bottom: 10px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;height: 28px;line-height: 14px;">{{item.item_name}}</p>
								<p class="pull-left" style="color: #e00000;">￥{{item.price}}</p>
								<p class="pull-right" style="color: #ccc;font-size: 10px;">{{item.referer}}分享</p>
							</div>
						</a>
						<!--<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>-->
						<!--<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>
						<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>
						<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>
						<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>
						<a href="">
							<div class="col-sm-6 col-xs-6 nopadding" style="border: 0.05em solid #ccc;padding: 1em 0;">
								<center><img src="../../assets/images/mobile/pic.jpg" style="width: 80%;"/></center>
								<p class="pull-left" style="font-size: 0.8em;text-align: left;margin: 1em;color: #333;">韓版超1000ml大容量玻璃杯水瓶便攜水瓶</p>
								<p class="pull-left" style="text-align: left;color: #e00000;margin-left: 1em;">￥19.9</p>
								<p class="pull-right" style="color: #ccc;font-size: 0.6em;margin: 0.5em 1.5em 0 0;">Tony分享</p>
							</div>
						</a>-->
					</div>
					<div class="row paginate" style="margin: 0;" v-show="totalPage!=1">
						<paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'" :container-class="'pull-right'"></paginate>
					</div>
				</div>
			</div>
			<mobileFooter></mobileFooter>
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
  name: 'index',
  data(){
  	return{
  		imgUrl:'',
  		itemInfo:'',
  		itemName:'',
  		loginFlag:false,
  		currentPage:1,
	    totalPage:1,
	    pageCount:40
  	}
  },
  mounted:function () {
  	this.getImg();
  	this.getItemInfo(this.currentPage);
  	this.getInfo();
  },
  components:{
  	pageFooter,
  	mobileFooter,
  	mobileList,
  	QRCode
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
  	getItemInfo:function () {
  		var param = {
  			page:this.currentPage,
  			unit:this.pageCount
  		}
  		$.ajax({
  			type:'post',
  			url:getService()+"/adv/getHomepageItems",
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
		    		this.itemInfo = res.data;
		    		var totalNum = parseInt(res.nofdata);
		    		var pageMore = totalNum % this.pageCount;
		    		if (pageMore == 0) {
		    			this.totalPage = parseInt(totalNum / this.pageCount);
		    		} else{
		    			this.totalPage = parseInt(totalNum / this.pageCount) + 1;
		    		}
		    		if (this.totalPage == 0) {
		    			this.totalPage = 1;
		    		}
		    	}
		    }.bind(this)
  		});
  	},
  	currentPageInfo:function (pageNum) {
  		this.currentPage = pageNum;
  		this.getItemInfo(this.currentPage);
  	},
  	getImg:function () {
  		$.ajax({
  			type:'get',
  			url:getService()+"/adv/getHomepage",
  			dataType: "json",
  			async:true,
			headers: {'Content-Type': 'application/json'},
  			xhrFields: {
		        withCredentials: true
		    },
		    crossDomain: true,
		    success:function (res) {
		    	if (res.error_code == 0) {
					this.imgUrl = res.data.imageLink;
		    	}
		    }.bind(this)
  		});
  	},
  	searchItem:function () {
  		window.open('https://ai.taobao.com/search/index.htm?pid=mm_229120035_155400308_57411200488&unid=search&key='+this.itemName);
  		 		
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
  					window.location.reload();
  				}else{

  				}
  			}.bind(this)
  		});
  	},
  	closeKey:function () {
  		$('#keyWords').hide();
  	},
  	closeKeyPC:function () {
  		$('#keyWords_pc').hide();
  	}
  }
}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
	ul li{list-style: none;padding: 3px 6px;}
	ul li a:hover{color: #ff8500;}
	ul .active a{color: #ff8500;}
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
</style>