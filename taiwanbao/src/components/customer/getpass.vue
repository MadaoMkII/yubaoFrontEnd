<template>
	<div class="login">
		<!--PC端-->
		<div class="hidden-sm hidden-xs">
			<div class="row nomargin" style="margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding bar">
					<div class="row nomargin" >
						<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
							<p class="pull-left font12 nomargin" style="color: #999;line-height: 3rem;margin-right: 1rem;">左逛右逛遇到寳！</p>
							<!--<a href="" class="pull-left font12 hidden-sm hidden-xs" style="color: #666;line-height: 3rem;">返利教學&nbsp;&nbsp;|&nbsp;&nbsp;</a>
							<a href="" class="pull-left font12 hidden-sm hidden-xs" style="color: #666;line-height: 3rem;">代購教學&nbsp;&nbsp;|&nbsp;&nbsp;</a>-->
							<router-link to="/help" class="pull-left font12" style="color: #666;line-height: 3rem;">幫助中心</router-link>
							<router-link to="/login" class="pull-right font12" style="color: #00a6ff;line-height: 20px;display: inline-block;border: 0.5px solid #00a6ff;margin-top: 5px;background: #fff;padding: 0 10px;border-radius: 3px;">會員登錄</router-link>
							<router-link to="/login" class="pull-right font12" style="color: #666;line-height: 30px;margin-right: 15px;">免費註冊</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;padding-top: 2rem; background:#fff; padding-bottom: 20px;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
					<div class="row nomargin">
						<div class="col-lg-2 col-md-2 nopadding">
							<router-link to="/index"><img src="../../assets/images/yubaologo.png" class="pull-left" style="width: 100px;"/></router-link>
						</div>
						<div class="col-lg-10 col-md-10 nopadding">
							<img src="../../../static/images/lineQRCode.png" class="pull-right QRCode" v-on:click="showQRCode()" style="margin-left: 15px;"/>
							<button type="button" class="pull-right btn" v-on:click="searchItem()" style="background: #00a6ff;color: #fff;border-radius: 0;height: 34px;margin-top: 20px;">購物返R幣</button>
							<input type="text" v-model="itemName" placeholder="粘貼淘寶/天貓寶貝標題，購物拿返利" class="pull-right" style="border: 0.5px solid #00a6ff;width: 400px;height: 34px;padding-left: 15px;font-size: 12px;margin-top: 20px;"/>
							<p style="display: inline-block;text-align: center;width: 128px;background: #00a6ff;color: #fff;font-size: 10px;position: absolute;right: 467px;">尋找淘寶/天貓上的寶貝</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin" style="margin: 0;">
				<div class="col-lg-12 col-md-12 nopadding">
					<div class="loginBox" style="padding: 100px 0px;background: url(../../../static/images/background.png) no-repeat;background-size: 100%;">
						<div class="row nomargin">
							<div class="col-lg-6 col-md-6 col-lg-offset-4 col-md-offset-4 nopadding card" style="max-width: 620px;">
								<div class="row nomargin">
									<div class="col-lg-8 col-md-8" style="background: #fff;height: 300px;position: absolute;left: 15px;top: -50px;border-radius: 10px;border: 0.5px solid #ccc;">
										<div class="row nomargin" style="padding: 15px 0px;">
											<!--<div class="col-lg-6 col-md-6 nopadding" style="border-right: 0.5px solid #ccc;">
												<a href="javascript:void(0);" id="pcLoginBtn" style="display: inline-block;width: 100%;color: #00a6ff;" v-on:click="showCon('login')">登錄</a>
											</div>
											<div class="col-lg-6 col-md-6 nopadding">
												<a href="javascript:void(0);" id="pcRegisterBtn" style="display: inline-block;width: 100%;color: #333;" v-on:click="showCon('register')">註冊</a>
											</div>-->
											<div  class="col-lg-12 col-md-12 nopadding">
												<center><p style="margin-bottom: 0;">找回密码</p></center>
											</div>
										</div>
										<div class="row nomargin" style="border-top: 0.5px solid #ccc;">
											<div class="col-lg-12 col-md-12">
												<!--登錄模塊-->
												<div id="loginCon" style="display: none;">
													<div class="row nomargin" style="margin-top: 20px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
													            <input type="text" class="form-control" v-model="phone" placeholder="請輸入行動電話">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/mimaicon.png"/></span>
													            <input type="text" class="form-control" v-model="password" placeholder="密碼">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<a href="" class="pull-right forgetPass">忘記密碼</a>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 30px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;" v-on:click="login()">登錄</button>
														</div>
													</div>
												</div>
												<!--登錄模塊結束-->
												<!--註冊模塊-->
												<div id="registerCon">
													<div class="row nomargin" style="margin-top: 20px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
													            <input type="text" v-model="registPhone" class="form-control" placeholder="請輸入行動電話">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-8 col-md-8 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/codeicon.png"/></span>
													            <input type="text" class="form-control" placeholder="請填寫驗證碼" v-model="code" style="border-right: none;border-bottom-right-radius: 0;border-top-right-radius: 0;">
													        </div>
														</div>
														<div class="col-lg-4 col-md-4 nopadding" style="padding: 0;">
															<button type="button" id="pcSendCodeBtn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;height: 34px;line-height: 34px;border: none;" v-on:click="sendCode()">發送驗證碼</button>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 30px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;" v-on:click="nextStep()">下一步</button>
														</div>
													</div>
												</div>
												<div id="getPassStep2" style="display: none;">
													<div class="row nomargin" style="margin-top: 20px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
													            <input type="password" v-model="newPass" class="form-control" placeholder="新密码">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
													            <input type="password" v-model="newPassCheck" class="form-control" placeholder="請重複輸入新密碼">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;" v-on:click="submitNewPass()">提交</button>
														</div>
													</div>
												</div>
												<!--註冊模塊結束-->
												<!--Email模塊-->
												<div id="emailCon" style="display: none;">
													<div class="row nomargin" style="margin-top: 20px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/mimaicon.png"/></span>
													            <input type="password" class="form-control" v-model="registerPassword" placeholder="密碼">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 15px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<div class="input-group">
													            <span class="input-group-addon"><img src="../../assets/images/emailicon.png"/></span>
													            <input type="text" class="form-control" v-model="email" placeholder="E-mail">
													        </div>
														</div>
													</div>
													<div class="row nomargin" style="margin-top: 30px;">
														<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
															<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;" v-on:click="register()">註冊</button>
														</div>
													</div>
												</div>
												<!--Email模塊結束-->
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4" style="padding-right: 0;height: 200px;position: relative;left: 66.66%;">
										<img src="../../assets/images/Group_2.png" style="position: absolute;right: 0;"/>
										<center style="margin-top: 50px;"><img src="../../assets/images/Page 1.png"/></center>
										<center><p style="color: #fff;font-size: 16px;margin-top: 10px;font-weight: bold;opacity: 0.5;">左逛 右逛 遇見寶</p></center>
										<img src="../../assets/images/Group_3.png" style="position: absolute;left: 0;bottom: 0;"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<QRCode></QRCode>
			<pageFooter style="position:absolute; bottom:20px; left:0; width:100%; "></pageFooter>
			<!--<div class="row nomargin" style="margin: 0;margin-bottom: 30px;margin-top: 50px;">
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
		<div class="hidden-lg hidden-md">
			<!--<div class="row nomargin" style="margin-top: 2rem;">
				<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
					<div class="row nomargin">
						<div class="col-sm-2 col-xs-2 nopadding">
							<img src="../../assets/images/yubaologo.png" class="pull-left" style="width: 100%;"/>
						</div>
						<div class="col-sm-7 col-xs-7" style="padding-right: 0;">
							<input type="text" name="" id="" value="" placeholder="粘貼淘寶/天貓寶貝標題，購物拿返利" class="pull-right" style="border: 0.5px solid #00a6ff;width: 100%;height: 34px;padding-left: 15px;font-size: 1rem;margin-top: 2rem;"/>
							<a href="" style="display: inline-block;text-align: center;width: 120px;background: #00a6ff;color: #fff;font-size: 0.8rem;position: absolute;">尋找淘寶/天貓上的寶貝</a>
						</div>
						<div class="col-sm-3 col-xs-3 nopadding">
							<button type="button" class="pull-right btn" style="background: #00a6ff;color: #fff;border-radius: 0;height: 34px;margin-top: 2rem;width: 100%;font-size: 1rem;">購物返R幣</button>
						</div>
					</div>
				</div>
			</div>-->
			<div class="mobileLoginBox">
				<img src="../../assets/images/background_mobile.png" style="width: 100%;left: 0;overflow-y: hidden;height: 100%;position: absolute;top: 0;"/>
				<div class="row nomargin" style="margin: 0;margin-top: 1em;">
					<div class="col-sm-12 col-xs-12" style="padding: 0 15px;">
						<center><p style="color: #fff;line-height: 2em;"><router-link to="/index" class="pull-left" style="color: #fff;font-weight: bold;font-size: 2em;"><</router-link>找回密碼</p></center>
					</div>
				</div>
				<div class="row nomargin" style="margin: 0;margin-top: 2em;">
					<div class="col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2" style="padding: 0 15px;">
						<center><router-link to="/index"><img src="../../assets/images/mobile/logo.png" style="width: 100%;"/></router-link></center>
					</div>
				</div>
				<div class="row nomargin" style="margin: 0;">
					<div class="col-sm-12 col-xs-12" style="padding: 1rem 0px 3rem;margin: 2rem 0;">
						<div class="row nomargin">
							<div class="col-sm-12 col-xs-12">
								<!--<div class="row nomargin" style="padding: 1rem 0px;border-bottom: 0.5px solid #ccc;">
									<div class="col-sm-6 col-xs-6 nopadding" style="border-right: 0.5px solid #ccc;">
										<a href="javascript:void(0);" style="display: inline-block;width: 100%;color: #00a6ff;" v-on:click="mobileShowCon('login')">登錄</a>
									</div>
									<div class="col-sm-6 col-xs-6 nopadding">
										<a href="javascript:void(0);" style="display: inline-block;width: 100%;color: #333;" v-on:click="mobileShowCon('register')">註冊</a>
									</div>
								</div>-->
								<div class="row nomargin">
									<div class="col-sm-12 col-xs-12 nopadding" style="padding: 0;">
										<!--登錄模塊-->
										<div id="mobileLoginCon" style="display: none;">
											<div class="row nomargin" style="margin-top: 20px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon" style="background: rgba(255,255,255,0.8);"><img src="../../assets/images/phoneicon.png"/></span>
											            <input type="text" class="form-control" placeholder="請輸入行動電話" v-model="phone" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 2em;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon" style="background: rgba(255,255,255,0.8);"><img src="../../assets/images/mimaicon.png"/></span>
											            <input type="text" class="form-control" v-model="password" placeholder="請輸入您的密碼" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<!--<div class="row nomargin" style="margin-top: 15px;">
												<div class="col-lg-12 col-md-12 nopadding">
													<a href="" class="pull-right forgetPass">忘記密碼</a>
												</div>
											</div>-->
											<div class="row nomargin" style="margin-top: 30px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<button type="button" class="btn" v-on:click="login()" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;font-size: 1.3em;height: 3em;">登錄</button>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 2em;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<a href="javascript:void(0)" class="pull-left" style="color: #fff;">賬號找回</a>
													<a href="javascript:void(0)" class="pull-right" style="color: #fff;" v-on:click="mobileShowCon('register')">立即註冊</a>
												</div>
											</div>
										</div>
										<!--登錄模塊結束-->
										<!--註冊模塊-->
										<div id="mobileRegisterCon">
											<div class="row nomargin" style="margin-top: 20px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon" style="background: rgba(255,255,255,0.8);"><img src="../../assets/images/phoneicon.png"/></span>
											            <input type="text" class="form-control" v-on:click="setView($event)" v-model="registPhone" placeholder="請輸入行動電話" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 2em;">
												<div class="col-sm-7 col-xs-7 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon" style="background: rgba(255,255,255,0.8);"><img src="../../assets/images/codeicon.png"/></span>
											            <input type="text" class="form-control" v-on:click="setView($event)" placeholder="請填寫驗證碼" v-model="code" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;border-bottom-right-radius: 0;border-top-right-radius: 0;">
											        </div>
												</div>
												<div class="col-sm-5 col-xs-5" style="padding: 0;">
													<button type="button" id="mobileSendCodeBtn" style="width: 100%;background: #00a6ff;color: #fff;height: 2.5em;border: none;font-size: 1.2em;" v-on:click="sendCode()">發送驗證碼</button>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 30px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;font-size: 1.3em;height: 3em;" v-on:click="mobileNextStep()">下一步</button>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 2em;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<router-link to="/login" class="pull-left" style="color: #fff;">返回登錄</router-link>
												</div>
											</div>
										</div>
										<div id="mobileGetPassStep2" style="display: none;">
											<div class="row nomargin" style="margin-top: 20px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
											            <input type="password" v-model="newPass" v-on:click="setView($event)" class="form-control" placeholder="新密码" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 15px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon"><img src="../../assets/images/phoneicon.png"/></span>
											            <input type="password" v-model="newPassCheck" v-on:click="setView($event)" class="form-control" placeholder="請重複輸入新密碼" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 15px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<button type="button" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;" v-on:click="submitNewPass()">提交</button>
												</div>
											</div>
										</div>
										<!--註冊模塊結束-->
										<!--Email模塊-->
										<div id="mobileEmailCon" style="display: none;">
											<div class="row nomargin" style="margin-top: 20px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon"><img src="../../assets/images/mimaicon.png"/></span>
											            <input type="password" class="form-control" v-model="registerPassword" placeholder="密碼" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 15px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<div class="input-group">
											            <span class="input-group-addon"><img src="../../assets/images/emailicon.png"/></span>
											            <input type="text" class="form-control" v-model="email" placeholder="E-mail" style="background: rgba(255,255,255,0.5);color: #fff;font-size: 1.2em;height: 2.5em;line-height: 2em;">
											        </div>
												</div>
											</div>
											<div class="row nomargin" style="margin-top: 30px;">
												<div class="col-lg-12 col-md-12 nopadding" style="padding: 0;">
													<button type="button" v-on:click="register()" class="btn" style="width: 100%;background: #00a6ff;color: #fff;font-weight: bold;">註冊</button>
												</div>
											</div>
										</div>
										<!--Email模塊結束-->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--<div class="row nomargin" style="margin: 0;margin-top: 5em;">
					<div class="col-lg-12 col-md-12 nopadding">
						<center><p style="color: #fff;"><img src="../../assets/images/mobile/facebook.png" style="background: #fff;"/>Facebook登入</p></center>
					</div>
				</div>-->
			</div>
		</div>
		<!-- 模态框（Modal） -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
		            	<p id="message">{{error_msg}}</p>
		            </div>
		            <!-- <div class="modal-footer">
		                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		            </div> -->
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import pageFooter from './pagefooter.vue'
	import QRCode from './QRCode.vue'
	import '../../../static/css/PCstyle.css'
	export default {
	  name: 'getpass',
	  data(){
	  	return {
	  		phone:'',
	  		password:'',
	  		registPhone:'',
	  		timer:60,
	  		timeInterval:'',
	  		code:'',
	  		registerPassword:'',
	  		email:'',
	  		itemName:'',
	  		registPhoneConfig:/^(09)[0-9]{8}$/,
	  		newPass:'',
	  		newPassCheck:'',
	  		error_msg:''
	  	}
	  },
	  components:{
	  	pageFooter,
	  	QRCode
	  },
//	  mounted(){
//	        timeInterval=setInterval(this.setTimer,1000);       
//	    },
	  methods:{
	  	showQRCode:function () {
	  		$('#QRCodeModal').modal('show');
	  	},
	  	showCon:function (str) {
	  		if(str == 'login'){
	  			$('#emailCon').css('display','none');
	  			$('#registerCon').fadeOut(1);
	  			$('#loginCon').fadeIn();
	  			$('#pcLoginBtn').css('color','#00a6ff');
	  			$('#pcRegisterBtn').css('color','#333');
	  		}
	  		else{
	  			$('#emailCon').css('display','none');
	  			$('#loginCon').fadeOut(1);
	  			$('#registerCon').fadeIn();
	  			$('#pcLoginBtn').css('color','#333');
	  			$('#pcRegisterBtn').css('color','#00a6ff');
	  		}
	  	},
	  	nextStep:function () {
	  		if(this.code == ''){
	  			$('#message').html('驗證碼不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else if(this.registPhone == ''){
	  			$('#message').html('手機號碼不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else{
	  			$('#registerCon').hide();
	  			$('#getPassStep2').show();
	  		}
	  		
	  	},
	  	submitNewPass:function () {
	  		var _this = this;
	  		if(this.newPass != this.newPassCheck){
	  			$('#message').html('两次密码输入不一致');
	  			$('#myModal').modal('show');
	  		}else{
	  			$.ajax({
		  			type:'post',
		  			url:getService()+"/user/getBackUpdate",
		  			dataType: "json",
		  			data:{
		  				tel_number:this.registPhone,
		  				newPassword:this.newPass,
		  				code:this.code
		  			},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 200) {
				    		layer.msg('修改成功',{icon:1});
				    		_this.$router.push({path:'/login'});
				    	}
				    }
		  		});
	  		}
	  		
	  	},
	  	register:function () {
	  		if(this.registerPassword == ''){
	  			$('#message').html('密碼不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else if (this.email == '') {
	  			$('#message').html('郵箱不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else{
	  			$.ajax({
		  			type:'post',
		  			url:getService()+"/signup",
		  			dataType: "json",
		  			data:{
		  				username:this.email,
		  				password:this.registerPassword,
		  				tel_number:this.registPhone
		  			},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		window.location.href = '/center';
				    	}
				    }
		  		});
	  		}
	  	},
	  	mobileShowCon:function (str) {
	  		if(str == 'login'){
	  			$('#mobileEmailCon').css('display','none');
	  			$('#mobileRegisterCon').fadeOut(1);
	  			$('#mobileLoginCon').fadeIn();
	  		}
	  		else{
	  			$('#mobileEmailCon').css('display','none');
	  			$('#mobileLoginCon').fadeOut(1);
	  			$('#mobileRegisterCon').fadeIn();
	  		}
	  	},
	  	mobileNextStep:function () {
	  		if(this.code == ''){
	  			$('#message').html('驗證碼不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else if(this.registPhone == ''){
	  			$('#message').html('手機號碼不能為空');
	  			$('#myModal').modal('show');
	  		}
	  		else{
	  			$('#mobileRegisterCon').hide();
	  			$('#mobileGetPassStep2').show();
	  		}
	  	},
	  	login:function () {
	  		var _this = this;
	  		$.ajax({
	  			type:'post',
	  			url:getService()+"/user/login",
	  			dataType: "json",
	  			data:{
	  				username:this.phone,
	  				password:this.password
	  			},
	  			xhrFields: {
			        withCredentials: true
			    },
			    crossDomain: true,
			    success:function (res) {
			    	if (res.error_code == 0) {
			    		localStorage.setItem("userLoginName", _this.phone);
                    	localStorage.setItem("userLoginPwd", _this.password);
			    		_this.$router.push({path:'/center'});
//			    		window.location.href = '/center';
						layer.msg(' 電郵、手機號碼或密碼錯誤，請重新輸入！',{icon:5});
			    	}else{
			    		localStorage.setItem("userLoginName", "");
                    	localStorage.setItem("userLoginPwd", "");
                    	layer.msg(' 電郵、手機號碼或密碼錯誤，請重新輸入！',{icon:5});
			    	}
			    },
			    error:function(res){
			    	localStorage.setItem("userLoginName", "");
                    localStorage.setItem("userLoginPwd", "");
                    layer.msg(' 電郵、手機號碼或密碼錯誤，請重新輸入！',{icon:5});
			    }
	  		});
	  	},
	  	sendCode:function () {
	  		if (this.registPhone == '') {
	  			this.error_msg = '手機號碼不能爲空！';
				$('#myModal').modal('show');
				return;
	  		}

	  			$('#pcSendCodeBtn').attr('disabled','disabled');
	  			$('#pcSendCodeBtn').css('background','#ccc');
	  			$('#mobileSendCodeBtn').attr('disabled','disabled');
	  			$('#mobileSendCodeBtn').css('background','#ccc');
	  			this.timeInterval = setInterval(this.setTimer,1000);
	  			$.ajax({
		  			type:'post',
		  			url:getService()+"/msg/getBackSendMassage",
		  			dataType: "json",
		  			data:{
		  				tel_number:this.registPhone
		  			},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	//console.log(res);
				    	
				    	
				    }.bind(this),
				    error:function(res){
				    	//console.log('parseInt(res.responseText?res.responseText.error_code:500)=',res.responseText);
				    	var data=JSON.parse(res.responseText);
				    	switch(parseInt(data.error_code)){
				    		case 400:
				    			this.error_msg = '手機號碼不能爲空！';
				    			$('#myModal').modal('show');
				    			break;
				    		// case 403:
				    		// 	this.error_msg='';
				    		// 	break;
				    		case 404:
				    			this.error_msg = '手機號碼不存在，請檢查后重新輸入！';
				    			$('#myModal').modal('show');
				    			break;
				    		case 406:
				    			this.error_msg = '請輸入正確的手機號碼！';
				    			$('#myModal').modal('show');
				    			break;
				    		case 503:
				    			this.error_msg = '系統繁忙，請稍後嘗試！';
				    			$('#myModal').modal('show');
				    			break;
				    		default:
				    			this.error_msg = '請求出錯，請稍後再試！';
				    			$('#myModal').modal('show');
				    			break;
				    	}
				    }.bind(this)
		  		});
	  		
	  	},
	  	setTimer:function () {
	  		$('#pcSendCodeBtn').html(this.timer+'秒');
	  		$('#mobileSendCodeBtn').html(this.timer+'秒');
	  		this.timer = parseInt(this.timer) - 1;
	  		if (this.timer == -1) {
	  			clearInterval(this.timeInterval);
	  			this.timer = 60;
	  			$('#pcSendCodeBtn').removeAttr('disabled');
	  			$('#pcSendCodeBtn').css('background','#00a6ff');
	  			$('#pcSendCodeBtn').html('發送驗證碼');
	  			$('#mobileSendCodeBtn').removeAttr('disabled');
	  			$('#mobileSendCodeBtn').css('background','#00a6ff');
	  			$('#mobileSendCodeBtn').html('發送驗證碼');
	  		}
	  	},
	  	loginByEnterKey(val){
	  		if(val.keyCode == 13){
	  			this.login();
	  		}
	  	},
	  	searchItem:function () {
	  		if(this.itemName == ''){
	  			alert('請輸入物品名稱');
	  		}else{
	  			window.open('https://ai.taobao.com/search/index.htm?pid=mm_229120035_155400308_57411200488&unid=search&key='+this.itemName);
	  		}  		
	  	}
	  }
	}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
	.nomargin{margin: 0;}
	.nopadding{padding: 0;}
</style>