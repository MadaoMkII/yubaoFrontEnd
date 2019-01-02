<template>
	<div class="mobilePerson">
		<div class="row" style="margin: 0;background: #ff8500;">
			<div class="col-sm-3 col-xs-3">
				<router-link to="/center" class="pull-left" style="color: #fff;line-height: 42px;"><</router-link>
			</div>
			<div class="col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1">
				<p style="margin-bottom: 0;line-height: 42px;color: #fff;">編輯個人資料</p>
			</div>
    		<mobileList></mobileList>
		</div>
		<div class="row" id="personList" style="margin: 0;margin-top: 15px;background: #fff;">
			<div class="col-sm-12 col-xs-12">
				<div class="row">
					<p class="pull-left" v-on:click="showPersonDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;border-bottom: 1px solid #eee;">個人資料<span class="pull-right">></span></p>
				</div>
				<div class="row">
					<p class="pull-left" v-on:click="showNickNameDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;border-bottom: 1px solid #eee;">修改暱稱<span class="pull-right">></span></p>
				</div>
				<div class="row">
					<p class="pull-left" v-on:click="showRefereeDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;border-bottom: 1px solid #eee;">新增推薦人<span class="pull-right">></span></p>
				</div>
				<div class="row">
					<p class="pull-left" v-on:click="showPasswordDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;border-bottom: 1px solid #eee;">修改密碼<span class="pull-right">></span></p>
				</div>
				<div class="row">
					<p class="pull-left" v-on:click="showEmailDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;border-bottom: 1px solid #eee;">修改E-Mail<span class="pull-right">></span></p>
				</div>
				<div class="row">
					<p class="pull-left" v-on:click="showPhoneDetail()" style="width: 100%;margin-bottom: 0;line-height: 42px;text-align: left;">修改手機<span class="pull-right">></span></p>
				</div>
			</div>
		</div>
		<div class="row" id="personDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left">手機號/郵箱：</p>
                <p class="pull-left" style="font-weight: bold;">
                  {{userInfo.tel_number}}/{{userInfo.email_address}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 10px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left">真實姓名：</p>
                <p class="pull-left" style="font-weight: bold;">{{userInfo.realName}}</p>
              </div>
            </div>
		</div>
		<div class="row" id="nickNameDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
	                <div class="row" style="margin-top: 15px;">
	                  <div class="col-sm-4 col-xs-4" style="padding: 0;">
	                    <label class="pull-right" style="line-height: 34px;">暱稱：</label>
	                  </div>
	                  <div class="col-sm-8 col-xs-8" style="padding: 0;">
	                    <input type="text" value="" class="form-control" v-model="nickName"/>
	                  </div>
	                </div>
	                <div class="row" style="margin-top: 30px;">
	                	<button type="button" class="pull-right btn btn-warning" v-on:click="submitNickName()">送出并確認</button>
	                </div>
	            </div>
			</div>
		</div>
		<div class="row" id="refereeDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
					<div class="row" style="margin-top: 15px;">
						<div class="col-sm-5 col-xs-5" style="padding: 0;">
							<label class="pull-right" style="line-height: 34px;">手機號碼或ID：</label>
						</div>
						<div class="col-sm-7 col-xs-7" style="padding: 0;">
							<input type="text" value="" v-model="referer" class="form-control pull-left"/>
						</div>  
					</div>
					<div class="row" style="margin-top: 30px;">
		            	<button type="button" class="pull-right btn btn-warning" v-on:click="submitReferee()">送出并確認</button>
		            </div>
				</div>				
			</div>	
		</div>
		<div class="row" id="passwordDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
					<div class="row" style="margin-top: 15px;">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-right" style="line-height: 34px;">目前密碼：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                        <input type="password" value="" class="form-control" v-model="currentPassword"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-right" style="line-height: 34px;">新密碼：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                        <input type="password" value="" class="form-control" v-model="newPassword"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-right" style="line-height: 34px;">新密碼確認：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                        <input type="password" value="" class="form-control" v-model="newPasswordCheck"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 30px;">
		            	<button type="button" class="pull-right btn btn-warning" v-on:click="submitPassword()">送出并確認</button>
		            </div>
				</div>
			</div>
		</div>
		<div class="row" id="emailDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
	                <div class="row">
	                  <div class="col-lg-12 col-md-12" style="padding: 0;">
	                    <p class="pull-left" style="text-align: left;">交易截圖将寄至MAIL ，請保持您電子信箱的完整性及正確性</p>
	                  </div>
	                </div>
	                <div class="row" style="margin-top: 15px;">
	                  <div class="col-sm-4 col-xs-4" style="padding: 0;">
	                    <label class="pull-right" style="line-height: 34px;">新E-Mail：</label>
	                  </div>
	                  <div class="col-sm-8 col-xs-8" style="padding: 0;">
	                    <input type="text" value="" class="form-control" v-model="newEmail"/>
	                  </div>
	                </div>
	                <div class="row" style="margin-top: 15px;">
	                  <div class="col-sm-4 col-xs-4" style="padding: 0;">
	                    <label class="pull-right" style="line-height: 34px;">手機號碼：</label>
	                  </div>
	                  <div class="col-sm-8 col-xs-8" style="padding: 0;">
	                    <p class="pull-left" style="margin-bottom: 0;line-height: 34px;font-weight: bold;">
	                      {{lockPhone}}</p>
	                  </div>
	                </div>
	                <div class="row" style="margin-top: 15px;">
	                  <div class="col-sm-4 col-xs-4" style="padding: 0;">
	                    <label class="pull-right" style="line-height: 34px;">驗證碼：</label>
	                  </div>
	                  <div class="col-sm-8 col-xs-8" style="padding: 0;">
	                  	<input type="password" class="form-control pull-left" value=""
	                         v-model="changeEmailCode"/>
	                  </div>	                  	                  
	                </div>
	                <div class="row" style="margin-top: 15px;">
	                	<button type="button" class="btn btn-primary pull-right" id="sendEmailCodeBtn" style="width: 40%;"
	                          v-on:click="sendEmailCode()">發送驗證碼
	                  	</button>
	                </div>
	                <div class="row" style="margin-top: 30px;">
		            	<button type="button" class="pull-right btn btn-warning" v-on:click="submitEmail()">送出并確認</button>
		            </div>
	            </div>
			</div>
		</div>
		<div class="row" id="phoneDetail" style="margin: 0;display: none;background: #fff;margin-top: 15px;padding-bottom: 30px;">
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12">
					<a class="pull-left" href="javascript:void(0)" v-on:click="backToList()"><返回</a>
				</div>				
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-lg-12 col-md-12" id="phoneSet1" style="padding: 0 15px;">
					<div class="row">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-left" style="line-height: 34px;">手機號碼：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                      	<p class="pull-left" style="margin-bottom: 0;line-height: 34px;font-weight: bold;">{{lockPhone}}</p>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-left" style="line-height: 34px;">驗證碼：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                      	<input type="password" class="form-control pull-left" name="" value=""
                               v-model="changePhoneCode"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                    	<button type="button" class="btn btn-primary pull-right" id="sendCodeBtn" style="width: 40%;"
                                v-on:click="sendCode()">發送驗證碼
                        </button>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                    	<div class="col-lg-12 col-md-12">
                    		<button type="button" class="btn btn-warning pull-right" v-on:click="nextStep()">下一步</button>
                    	</div>
                    </div>
				</div>
				<div class="col-lg-12 col-md-12" id="phoneSet2" style="padding: 0 15px;display: none;">
					<div class="row">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-left" style="line-height: 34px;">新手機號碼：</label>                        
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                      	<input type="text" class="form-control pull-left" v-model="newPhone"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-sm-4 col-xs-4" style="padding: 0;">
                        <label class="pull-left" style="line-height: 34px;">驗證碼：</label>
                      </div>
                      <div class="col-sm-8 col-xs-8" style="padding: 0;">
                      	<input type="password" class="form-control pull-left" value=""
                               v-model="newPhoneCode"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                    	<button type="button" class="btn btn-primary pull-right" id="sendNewCodeBtn" style="width: 40%;"
                                v-on:click="sendNewCode()">發送驗證碼
                        </button>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                    	<button type="button" class="pull-right btn btn-warning" v-on:click="submitPhone()">送出并確認</button>
                    </div>
				</div>
			</div>
		</div>
		<mobileFooter class="hidden-lg hidden-md"></mobileFooter>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import mobileFooter from './mobileFooter.vue'
	import mobileList from './mobileList.vue'
	export default {
		name: 'mobilePerson',
		data(){
			return{
				userInfo: '',
				secretPhone: '',
				bankNum:'',
				zhifubaoNum:'',
				wechatNum:'',
				lockPhone:'',
				identityFinish:false,
				displayRealIDNumber:'',
				nickName:'',
				referer:'',
				registPhoneConfig:/^(09)[0-9]{8}$/,
				currentPassword:'',
				newPassword:'',
				newPasswordCheck:'',
				newEmail:'',
				changeEmailCode:'',
				timeEmailInterval: '',
				timer: 60,
				changePhoneCode:'',
				newPhone:'',
				newPhoneCode:'',
				timeInterval:''
			}
		},
		components:{
			mobileFooter,
			mobileList
		},
		mounted:function () {
			this.getInfo();
		},
		methods:{
			setNewTimer: function () {
		        $('#sendNewCodeBtn').html(this.timer + '秒');
		        this.timer = parseInt(this.timer) - 1;
		        if (this.timer == -1) {
		          clearInterval(this.timeNewInterval);
		          this.timer = 60;
		          $('#sendNewCodeBtn').removeAttr('disabled');
		          $('#sendNewCodeBtn').css('background', '#00a6ff');
		          $('#sendNewCodeBtn').html('發送驗證碼');
		        }
		      },
			sendNewCode: function () {
		        if (this.newPhone == '') {
		          alert('请输入手机号');
		        }
		        else {
		          $('#sendNewCodeBtn').attr('disabled', 'disabled');
		          $('#sendNewCodeBtn').css('background', '#ccc');
		          this.timeNewInterval = setInterval(this.setNewTimer, 1000);
		          $.ajax({
		            type: 'post',
		            url: getService() + "/msg/updatePhoneNumberSendMassage",
		            dataType: "json",
		            data: {
		              tel_number: this.newPhone
		            },
		            xhrFields: {
		              withCredentials: true
		            },
		            crossDomain: true,
		            success: function (res) {
		              if (res.error_code == 0) {
		                console.log(res);
		              } else {
		                alert(res.error_msg);
		              }
		            }
		          });
		        }
		      },
			nextStep: function () {
		        if (this.changePhoneCode == '') {
		          alert('请输入驗證碼')
		        }
		        else {
		          $.ajax({
		            type: 'post',
		            url: getService() + "/user/verifySendMassage",
		            dataType: "json",
		            data: {
		              code: this.changePhoneCode
		            },
		            xhrFields: {
		              withCredentials: true
		            },
		            crossDomain: true,
		            success: function (res) {
		              if (res.error_code == 0) {
		                $('#phoneSet1').hide();
		                $('#phoneSet2').show();
		              } else {
		                alert(res.error_msg);
		              }
		            }
		          });
		        }
		      },
			sendCode: function () {
		//	  		if (this.registPhone == '') {
		//	  			$('#message').html('手機號不能為空');
		//	  			$('#myModal').modal('show');
		//	  		}
		//	  		else if(!this.registPhoneConfig.test(this.registPhone)){
		//	  			$('#message').html('請輸入正確的手機號');
		//	  			$('#myModal').modal('show');
		//	  		}
		//	  		else{
		        $('#sendCodeBtn').attr('disabled', 'disabled');
		        $('#sendCodeBtn').css('background', '#ccc');
		        this.timeInterval = setInterval(this.setTimer, 1000);
		        $.ajax({
		          type: 'get',
		          url: getService() + "/msg/currentSendMassage",
		          dataType: "json",
		//		  			data:{
		//		  				tel_number:this.userInfo.tel_number
		//		  			},
		          xhrFields: {
		            withCredentials: true
		          },
		          crossDomain: true,
		          success: function (res) {
		            console.log(res);
		          }
		        });
		//	  		}
		
		      },
		      setTimer: function () {
		        $('#sendCodeBtn').html(this.timer + '秒');
		        this.timer = parseInt(this.timer) - 1;
		        if (this.timer == -1) {
		          clearInterval(this.timeInterval);
		          this.timer = 60;
		          $('#sendCodeBtn').removeAttr('disabled');
		          $('#sendCodeBtn').css('background', '#00a6ff');
		          $('#sendCodeBtn').html('發送驗證碼');
		        }
		      },
			setEmailTimer: function () {
		        $('#sendEmailCodeBtn').html(this.timer + '秒');
		        this.timer = parseInt(this.timer) - 1;
		        if (this.timer == -1) {
		          clearInterval(this.timeEmailInterval);
		          this.timer = 60;
		          $('#sendEmailCodeBtn').removeAttr('disabled');
		          $('#sendEmailCodeBtn').css('background', '#00a6ff');
		          $('#sendEmailCodeBtn').html('發送驗證碼');
		        }
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
		              this.userInfo = res.data;
		              this.secretPhone = this.setSecretPhone(this.userInfo.tel_number);
		              this.bankNum = this.userInfo.bankAccounts.length;
		              this.zhifubaoNum = this.userInfo.aliPayAccounts.length;
		              this.wechatNum = this.userInfo.wechatAccounts.length;
		              this.lockPhone = this.userInfo.tel_number.substr(0, 2) + '****' + this.userInfo.tel_number.substr(6, 4);
		            	if (this.userInfo.userStatus.isRealName) {
		            		this.identityFinish = true;
		            		this.displayRealIDNumber = this.userInfo.realIDNumber.substr(0,2) + '****' + this.userInfo.realIDNumber.substr(6,4);
		            	}
		            }
		          }.bind(this)
		        });
		      },
		      setSecretPhone: function (num) {
		        var starPhone = num.substr(0, 3) + '***' + num.substr(7);
		        return starPhone;
		      },
		      showPersonDetail:function () {
		      	$('#personList').hide();
		      	$('#nickNameDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#personDetail').show();
		      },
		      showNickNameDetail:function () {
		      	$('#personList').hide();
		      	$('#personDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#nickNameDetail').show();
		      },
		      showRefereeDetail:function () {
		      	$('#personList').hide();
		      	$('#personDetail').hide();
		      	$('#nickNameDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#refereeDetail').show();
		      },
		      showPasswordDetail:function () {
		      	$('#personList').hide();
		      	$('#personDetail').hide();
		      	$('#nickNameDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#passwordDetail').show();
		      },
		      showEmailDetail:function () {
		      	$('#personList').hide();
		      	$('#personDetail').hide();
		      	$('#nickNameDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#emailDetail').show();
		      },
		      showPhoneDetail:function () {
		      	$('#personList').hide();
		      	$('#personDetail').hide();
		      	$('#nickNameDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').show();
		      },
		      backToList:function () {
		      	$('#personDetail').hide();
		      	$('#nickNameDetail').hide();
		      	$('#refereeDetail').hide();
		      	$('#passwordDetail').hide();
		      	$('#emailDetail').hide();
		      	$('#phoneDetail').hide();
		      	$('#personList').show();
		      },
		      submitNickName:function () {
		      	var _this = this;
		      	if (this.nickName == '') {
	              alert('请填写暱稱');
	            } else {
	              $.ajax({
	                type: 'post',
	                url: getService() + "/user/updateNickname",
	                dataType: "json",
	                data: {
	                  nickName: this.nickName
	                },
	                xhrFields: {
	                  withCredentials: true
	                },
	                crossDomain: true,
	                success: function (res) {
	                  if (res.error_code == 200) {
	                    alert('暱稱更新成功');
	                    _this.$router.push({path:'/center'});
	                  } else {
	                    alert(res.error_msg);
	                  }
	                }
	              });
	            }
		      },
		      submitReferee:function () {
		      	var _this = this;
		      	if (this.referer != '') {
		      		if (this.registPhoneConfig.test(this.referer)) {
		      			var param = {
			                referer: this.referer
			              }
			              $.ajax({
			                type: 'post',
			                url: getService() + "/setReferer",
			                dataType: "json",
			                data: JSON.stringify(param),
			                async: true,
			                headers: {'Content-Type': 'application/json'},
			                xhrFields: {
			                  withCredentials: true
			                },
			                crossDomain: true,
			                success: function (res) {
			                  if (res.error_code == 0) {	                    
			                    alert('推荐成功');
			                    _this.$router.push({path:'/center'});
			                  } else {
			                    alert(res.error_massage);
			                  }
			                }
			              });
		      		} else{
		      			alert('手機號或ID格式不正確');
		      		}	              
	            } else {
	              alert('请填写推荐人手机号或ID');
	            }
		      },
		      submitPassword:function () {
		      	var _this = this;
		      	if (this.newPassword != this.newPasswordCheck) {
	              alert('兩次密碼輸入不一致');
	            } else {
	              $.ajax({
	                type: 'post',
	                url: getService() + "/user/updatePassword",
	                dataType: "json",
	                data: {
	                  currentPassword: this.currentPassword,
	                  newPassword: this.newPassword
	                },
	                xhrFields: {
	                  withCredentials: true
	                },
	                crossDomain: true,
	                success: function (res) {
	                  if (res.error_code == 200) {
	                    alert('更新成功，請重新登錄');
	                    _this.$router.push({path: '/login'});
	                  } else {
	                    alert(res.error_massage);
	                  }
	                }
	              });
	            }
		      },
		      sendEmailCode: function () {
		        if (this.newEmail == '') {
		          alert('请输入邮箱');
		        }
		        else {
		          $('#sendEmailCodeBtn').attr('disabled', 'disabled');
		          $('#sendEmailCodeBtn').css('background', '#ccc');
		          this.timeEmailInterval = setInterval(this.setEmailTimer, 1000);
		          $.ajax({
		            type: 'get',
		            url: getService() + "/msg/updateEmailMassage",
		            dataType: "json",
		//          data: {
		//            email_address: this.newEmail
		//          },
		            xhrFields: {
		              withCredentials: true
		            },
		            crossDomain: true,
		            success: function (res) {
		              if (res.error_code == 0) {
		                console.log(res);
		              } else {
		                alert(res.error_msg);
		              }
		            }
		          });
		        }
		      },
		      submitEmail:function () {
		      	var _this = this;
		      	if (this.newEmail == '') {
	              alert('请填写新邮箱');
	            } else {
	              $.ajax({
	                type: 'post',
	                url: getService() + "/user/updateEmail",
	                dataType: "json",
	                data: {
	                  code: this.changeEmailCode,
	                  email_address: this.newEmail
	                },
	                xhrFields: {
	                  withCredentials: true
	                },
	                crossDomain: true,
	                success: function (res) {
	                  if (res.error_code == 0) {
	                    alert('邮箱更新成功');
	                    _this.$router.push({path:'/login'});
	                  } else {
	                    alert(res.error_msg);
	                  }
	                }
	              });
	            }
		      },
		      submitPhone:function () {
		      	var _this = this;
		      	if(this.newPhone == ''||this.newPhoneCode == ''){
		      		alert('手機號或驗證碼不能為空');
		      	}else{
		      		$.ajax({
		              type: 'post',
		              url: getService() + "/user/updatePhoneNumber",
		              dataType: "json",
		              data: {
		                tel_number: this.newPhone,
		                code: this.newPhoneCode
		              },
		              xhrFields: {
		                withCredentials: true
		              },
		              crossDomain: true,
		              success: function (res) {
		                if (res.error_code == 0) {
		                  alert('更新成功，请重新登录');
		                  $('#personalModal').modal('hide');
		                  _this.$router.push({path: '/login'});
		                } else {
		                  alert(res.error_msg);
		                }
		              }
		            });
		      	}
		      	
		      }
		}
	}
</script>

<style>
</style>