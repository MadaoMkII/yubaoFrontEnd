<template>
  <div class="center" v-on:click="closePopUpWechat()">
    <!--pc端-->
    <div class="hidden-sm hidden-xs" style="position:relative;">
      <div class="row nomargin bar" style="background: #ff8500;height: 34px;margin: 0;">
        <div class="col-lg-12 col-md-12 nopadding">
          <div class="row nomargin">
            <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
              <img src="../../../static/images/portrait.png" style="width: 20px;border-radius: 50%;margin-top: 5px;"
                   class="pull-left"/>
              <router-link to="center" class="pull-left" style="margin-right: 30px;">會員中心</router-link>
              <a href="javascript:void(0)" class="pull-left" style="margin-right: 30px;" v-on:click="showAppealModal()"><img
                src="../../assets/images/shensuicon.png" class="pull-left"/>申訴&提問</a>
              <router-link to="appealList" class="pull-left" style="margin-right: 30px;"><img
                src="../../assets/images/listicon.png" class="pull-left"/>工單
              </router-link>
              <a href="javascript:void(0)" class="pull-right" id="loginOut" @click="loginOut">登出</a>
              <router-link to="/index" class="pull-right" style="margin-right: 30px;"><img
                src="../../assets/images/homeicon.png" class="pull-left"/>首頁
              </router-link>
              <router-link to="/administrator_manage" class="pull-right" style="margin-right: 30px;"
                           v-show="userInfo.role == 'Super_Admin' || userInfo.role == 'Admin'">进入管理平台
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row nomargin" style="margin: 0;margin-top: 30px;">
        <div style="max-width: 1200px;width: 80%;margin: 0 auto;">
          <div class="row nomargin">
            <div class="col-lg-8 col-md-8" style="padding-right: 15px;padding-bottom: 50px;padding-left: 0;">
              <div class="userInfoBox" style="border: 0.5px solid #ccc;border-radius: 5px; background:#fff; ">
                <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <img src="../../assets/images/usericon.png" class="pull-left"
                         style="margin-right: 10px;margin-top: 12px;width: 16px;"/>
                    <p class="pull-left nomargin" style="color: #333;line-height: 40px;">會員資料</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <!--<div class="col-lg-3 col-md-3" style="padding: 0 15px;">
                                        <img src="../../assets/images/logo.png" style="width: 100%;border: 0.5px solid #ccc;border-radius: 5px;"/>
                                    </div>-->
                  <div class="col-lg-9 col-md-9" style="padding: 0 15px;">
                    <div class="row nomargin">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <img src="../../../static/images/portrait.png" class="pull-left"
                             style="width: 100px;margin-right: 15px;"/>
                        <p class="pull-left nomargin"
                           style="font-size: 20px;color: #333;font-weight: bold;margin-right: 10px;">
                          {{userInfo.nickName}}</p>
                        <a href="javascript:void(0)" class="pull-left" style="font-size: 12px;margin-top: 10px;"
                           v-on:click="showPersonalModal()">編輯個人資料</a>
                        <!--<div class="pull-right adopt" v-if="userInfo.isCStoreOpened">
                                                    <center><img src="../../assets/images/chaoshangicon2.png"/></center>
                                                    <center><p class="nomargin" style="color: #fff;font-size: 12px;">開通超商</p></center>
                                                </div>
                                                <div class="pull-right fail" v-if="!userInfo.isCStoreOpened">
                                                    <center><img src="../../assets/images/chaoshangicon2.png"/></center>
                                                    <center><p class="nomargin" style="color: #fff;font-size: 12px;">開通超商</p></center>
                                                </div>-->
                        <div class="pull-right adopt">
                          <center><img src="../../assets/images/shoujiicon2.png"/></center>
                          <center><p class="nomargin" style="color: #fff;font-size: 12px;">綁定手機</p></center>
                        </div>
                        <div class="pull-right adopt" v-if="userInfo.userStatus.isRealName">
                          <a href="javascript:void(0)" v-on:click="showIdentityModal()">
                            <center><img src="../../assets/images/shenfenicon2.png"/></center>
                            <center><p class="nomargin" style="color: #fff;font-size: 12px;">身份驗證</p></center>
                          </a>
                        </div>
                        <div class="pull-right fail" v-if="!userInfo.userStatus.isRealName">
                          <a href="javascript:void(0)" v-on:click="showIdentityModal()">
                            <center><img src="../../assets/images/shenfenicon2.png"/></center>
                            <center><p class="nomargin" style="color: #fff;font-size: 12px;">身份驗證</p></center>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!--<div class="row nomargin" style="margin-top: 15px;">
                                            <div class="col-lg-12 col-md-12 nopadding">
                                                <p class="pull-left nomargin" style="color: #363636;font-size: 12px;">累計購物返利：<span style="font-size: 16px;color: #333;">{{userInfo.returnCoins}}</span> R幣 <span style="color: #999;">1R幣 = 1人民幣</span></p>
                                                <a href="" class="pull-right" style="font-size: 12px;">返利明細</a>
                                            </div>
                                        </div>-->
                    <div class="row nomargin" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <p class="pull-left nomargin" style="color: #363636;font-size: 12px;">R幣剩餘：<span
                          style="font-size: 16px;color: #333;">{{userInfo.Rcoins}}</span> R幣 <span style="color: #999;">僅可用於支付</span>
                        </p>
                        <!--<router-link to="/rbinfo" class="pull-right" style="font-size: 12px;">交易明細</router-link>-->
                        <!--<a href="" class="pull-right" style="font-size: 12px;margin-right: 30px;">儲值R幣</a>-->
                        <router-link to="/RBrecharge" class="pull-right" style="font-size: 12px;">
                          儲值R幣
                        </router-link>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <p class="pull-left nomargin" style="color: #363636;font-size: 12px;">我的VIP等級：</p>
                        <p class="pull-right nomargin" style="color: #2a6baf;font-size: 16px;">{{userInfo.VIPLevel}}</p>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <p class="pull-left nomargin" style="color: #363636;font-size: 12px;">我的成長值：</p>
                        <p class="pull-right nomargin" style="color: #2a6baf;font-size: 16px;">
                          {{userInfo.growthPoints}}</p>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <p class="pull-left nomargin" style="color: #363636;font-size: 12px;">推薦的好友：</p>
                        <p class="pull-right nomargin" style="color: #2a6baf;font-size: 16px;">
                          {{referers_number}}</p>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 15px;margin-bottom: 20px;">
                      <div class="col-lg-12 col-md-12 nopadding">
                        <router-link to="/orderList">
                          <button type="button" class="btn pull-left"
                                  style="background: #fff;border: 0.5px solid #00a6ff;color: #00a6ff;margin-right: 30px;padding: 3px 20px;">
                            <img src="../../assets/images/orderbtnicon.png"
                                 style="margin-right: 10px;position: relative;top: -2px;width: 12px;"/>查詢訂單
                          </button>
                        </router-link>
                        <router-link to="/appealList">
                          <button type="button" class="btn pull-left"
                                  style="background: #fff;border: 0.5px solid #00a6ff;color: #00a6ff;padding: 3px 20px;">
                            <img src="../../assets/images/askicon.png"
                                 style="margin-right: 10px;position: relative;top: -2px;width: 12px;"/>我的提問
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="applicationBox"
                   style="border: 0.5px solid #ccc;border-radius: 5px;margin-top: 20px; background:#fff;">
                <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <img src="../../assets/images/appicon.png" class="pull-left"
                         style="margin-right: 10px;margin-top: 12px;width: 16px;"/>
                    <p class="pull-left nomargin" style="color: #333;line-height: 40px;">可用應用</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;margin-bottom: 20px; padding-left:110px; ">
                  <div class="col-lg-2 col-md-2 nopadding">
                    <router-link to="/supersede">
                      <center><img src="../../assets/images/taobao.png" style="width: 40%;"/></center>
                      <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">淘寶天貓代付</p>
                      </center>
                    </router-link>
                  </div>
                  <!--<div class="col-lg-2 col-md-2 nopadding">
                                        <center><img src="../../assets/images/RB.png" style="width: 40%;"/></center>
                                        <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">免費R幣</p></center>
                                    </div>-->
                  <div class="col-lg-2 col-md-2 nopadding">
                    <router-link to="/supersede">
                      <center><img src="../../assets/images/ali.png" style="width: 40%;"/></center>
                      <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">阿里巴巴代付</p>
                      </center>
                    </router-link>
                  </div>
                  <div class="col-lg-2 col-md-2 nopadding">
                    <router-link to="/aliRecharge">
                      <center><img src="../../assets/images/pay.png" style="width: 40%;"/></center>
                      <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">支付寶儲值</p>
                      </center>
                    </router-link>
                  </div>
                  <div class="col-lg-2 col-md-2 nopadding">
                    <router-link to="/wechatRecharge">
                      <center><img src="../../assets/images/wechat.png" style="width: 40%;"/></center>
                      <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">微信錢包</p></center>
                    </router-link>
                  </div>
                  <div class="col-lg-2 col-md-2 nopadding">
                    <router-link to="/purchase">
                      <center><img src="../../assets/images/daigou.png" style="width: 40%;"/></center>
                      <center><p class="nomargin" style="color: #666;font-size: 12px;margin-top: 5px;">網站代購</p></center>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="accountBox"
                   style="border: 0.5px solid #ccc;border-radius: 5px;margin-top: 20px;padding-bottom: 20px; background:#fff;">
                <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <img src="../../assets/images/accounticon.png" class="pull-left"
                         style="margin-right: 10px;margin-top: 12px;width: 16px;"/>
                    <p class="pull-left nomargin" style="color: #333;line-height: 40px;">關聯帳戶</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <p class="pull-left" style="font-size: 12px;color: #666;">付款銀行帳戶</p>
                    <button type="button" class="pull-right btn btn-default" v-on:click="showBankModal()"
                            style="font-size: 12px;padding: 3px 20px;"><img
                      src="../../assets/images/newaccounticon.png"/>新增銀行帳戶
                    </button>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 10px;" v-for="item in userInfo.bankAccounts">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.bankName}}</p>
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.accountName}}</p>
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.last6digital}}</p>
                      <a href="javascript:void(0)" class="pull-right" style="margin-right: 10px;line-height: 40px;"
                         v-on:click="deleteBankCode(item.last6digital)">刪除</a>
                    </div>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <p class="pull-left" style="font-size: 12px;color: #666;">收款支付寶帳戶</p>
                    <button type="button" class="pull-right btn btn-default" style="font-size: 12px;padding: 3px 20px;"
                            @click="showModalByAlipay"><img src="../../assets/images/newaccounticon.png"/>新增支付寶帳戶
                    </button>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 10px;" v-for="item in userInfo.aliPayAccounts">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.alipayAccount}}</p>
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.nickName}}</p>
                      <p class="pull-left nomargin" v-if="!item.isCertified"
                         style="font-size: 16px;font-weight: bold;color: #f00;margin-right: 15px;line-height: 40px;">
                        帳戶狀態未完善</p>
                      <p class="pull-left nomargin" v-if="item.isCertified"
                         style="font-size: 16px;font-weight: bold;color: #08bf69;margin-right: 15px;line-height: 40px;">
                        帳戶已實名</p>
                      <router-link to='aliRecharge' class="pull-right btn btn-primary"
                                   style="font-size: 12px;padding: 3px 20px; margin-top:8px;">去儲值
                      </router-link>
                      <a href="javascript:void(0)" class="pull-right" style="margin-right: 10px;line-height: 40px;"
                         v-on:click="deleteAli(item.alipayAccount)">刪除</a>
                    </div>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px; position:relative;">
                    <p class="pull-left" style="font-size: 12px;color: #666;">收款微信帳戶</p>
                    <button type="button" class="pull-right btn btn-default" style="font-size: 12px;padding: 3px 20px;"
                            @click="addWechatPopup"><img src="../../assets/images/newaccounticon.png"/>新增微信帳戶
                    </button>
                    <div id="popUpWechat"
                         style="position:absolute;left:72%; top:-400px; z-index:999; width:300px; height:400px; background:#666; margin-left:-150px;  padding-top:20px; color:#fff; display:none;">
                      <p>掃描二維條碼新增微信帳號</p>
                      <p>扫描后请<a href="javascript:void(0)" v-on:click="refreshPage()" style="color: #45c0fa;">刷新页面</a>哦
                      </p>
                      <img :src="wechatPic" style="margin:0 auto; width:80%; "/>
                    </div>
                  </div>
                </div>

                <div class="row nomargin" style="margin-top: 10px;margin-bottom: 30px;"
                     v-for="item in userInfo.wechatAccounts">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                      <img :src=item.profileImgUrl class="pull-left nomargin"
                           style="margin-left: 10px;margin-top: 10px;width: 20px;margin-right: 10px;"/>
                      <p class="pull-left nomargin"
                         style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                        {{item.nickname}}</p>
                      <p class="pull-left nomargin" v-if="item.hasRealNameAuthed"
                         style="font-size: 16px;font-weight: bold;color: #08bf69;margin-right: 15px;line-height: 40px;">
                        已實名</p>
                      <p class="pull-left nomargin" v-if="!item.hasRealNameAuthed"
                         style="font-size: 16px;font-weight: bold;color: #f00;margin-right: 15px;line-height: 40px;">
                        帳戶狀態異常</p>
                      <router-link to="wechatRecharge" class="pull-right btn btn-primary"
                                   style="font-size: 12px;padding: 3px 20px; margin-top:8px;">去儲值
                      </router-link>
                      <a href="javascript:void(0)" class="pull-right" style="margin-right: 10px;line-height: 40px;"
                         v-on:click="deleteWechat(item.wechatID)">刪除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 nopadding "
                 style="border: 0.5px solid #ccc; background:#fff; padding: 20px 0;">
              <notice :optionsFromFather="getCenterNotice" :titleFromFather="centerNoticeTitle"></notice>
              <!--<div class="row nomargin">
                                <div class="col-lg-12 col-md-12 nopadding">
                                    <div class="box">
                                        <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                                            <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                                                <p class="pull-left title"><img src="../../assets/images/normalicon.png" style="margin-right: 10px;"/>必看！常見問題操作</p>
                                            </div>
                                        </div>
                                        <div class="row nomargin" v-for="item in notices">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;padding: 0 15px;line-height: 28px;">
                                                <a href="javascript:void(0)" v-on:click="showNoticeModal(item.announcementTopic,item.created_at,item.content)" class="pull-left ask">{{item.announcementTopic}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
            </div>
          </div>
        </div>
      </div>
      <appeal></appeal>
      <pageFooter></pageFooter>
    </div>
    <!--手機端-->
    <div class="hidden-lg hidden-md">
      <div class="row nomargin" style="background: #ff8500;margin: 0;">
        <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
          <p style="margin-bottom: 0;line-height: 42px;color: #fff;">會員中心</p>
        </div>
        <mobileList></mobileList>
      </div>
      <div class="row nomargin" style="margin: 0;margin-top: 1em;">
        <div class="col-sm-4 col-xs-4">
          <img src="../../assets/images/mobile/touxiang.png" style="width: 100%;border: 0.05em solid #ccc;"/>
        </div>
        <div class="col-sm-4 col-xs-4 nopadding" style="padding: 0;">
          <div class="row nomargin">
            <p style="font-size: 1.5em;font-weight: bold;text-align: left;">{{userInfo.nickName}}</p>
          </div>
          <div class="row nomargin">
            <div class="pull-left" style="width: 45%;background: #08bf69;border-radius: 0.5em;margin-right: 0.2em;"
                 v-if="userInfo.userStatus.isRealName">
              <a href="javascript:void(0)" v-on:click="showIdentityModal()">
                <center><img src="../../assets/images/mobile/shenfenicon2.png" style="margin-top: 0.5em;"/></center>
                <center><p style="color: #fff;font-size: 0.7em;margin-top: 0.5em;">身份驗證</p></center>
              </a>
            </div>
            <div class="pull-left" style="width: 45%;background: #ccc;border-radius: 0.5em;margin-right: 0.2em;"
                 v-if="!userInfo.userStatus.isRealName">
              <a href="javascript:void(0)" v-on:click="showIdentityModal()">
                <center><img src="../../assets/images/mobile/shenfenicon2.png" style="margin-top: 0.5em;"/></center>
                <center><p style="color: #fff;font-size: 0.7em;margin-top: 0.5em;">身份驗證</p></center>
              </a>
            </div>
            <div class="pull-left" style="width: 45%;background: #08bf69;border-radius: 0.5em;margin-right: 0.2em;">
              <center><img src="../../assets/images/mobile/shoujiicon2.png" style="margin-top: 0.5em;"/></center>
              <center><p style="color: #fff;font-size: 0.7em;margin-top: 0.5em;">綁定手機</p></center>
            </div>
            <!--<div class="pull-left" style="width: 32%;background: #08bf69;border-radius: 0.5em;" v-if="userInfo.isCStoreOpened">
                            <center><img src="../../assets/images/mobile/chaoshangicon2.png" style="margin-top: 0.5em;"/></center>
                            <center><p style="color: #fff;font-size: 0.7em;margin-top: 0.5em;">開通超商</p></center>
                        </div>
                        <div class="pull-left" style="width: 32%;background: #ccc;border-radius: 0.5em;" v-if="!userInfo.isCStoreOpened">
                            <center><img src="../../assets/images/mobile/chaoshangicon2.png" style="margin-top: 0.5em;"/></center>
                            <center><p style="color: #fff;font-size: 0.7em;margin-top: 0.5em;">開通超商</p></center>
                        </div>-->
          </div>
        </div>
        <div class="col-sm-4 col-xs-4">
          <router-link to="/mobilePerson" class="pull-right" style="font-size: 0.8em;margin-top: 5em;color: #666;">
            帳戶設定>
          </router-link>
        </div>
      </div>
      <div class="row nomargin" style="margin: 0;margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;">
        <div class="col-sm-4 col-xs-4">
          <center><p style="margin-bottom: 0.1em;">我的VIP等級</p></center>
          <center><p style="color: #2a6baf;">{{userInfo.VIPLevel}}</p></center>
        </div>
        <div class="col-sm-4 col-xs-4">
          <center><p style="margin-bottom: 0.1em;">我的成長值</p></center>
          <center><p style="color: #2a6baf;">{{userInfo.growthPoints}}</p></center>
        </div>
        <div class="col-sm-4 col-xs-4">
          <center><p style="margin-bottom: 0.1em;">推薦的好友</p></center>
          <center><p style="color: #2a6baf;">{{userInfo.numberOfReferrers}}</p></center>
        </div>
      </div>
      <div class="row nomargin" style="margin: 0;margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;background: #fff;">
        <div class="col-sm-12 col-xs-12">
          <!--<div class="row nomargin" style="border-bottom: 0.05em solid #ccc;">
                        <div class="col-sm-12 col-xs-12 nopadding">
                            <p class="pull-left">累計購物返利：{{userInfo.returnCoins}} R幣</p>
                            <a href="javascript:void(0)" class="pull-right" style="color: #2a6baf;">返利明細</a>
                        </div>
                    </div>-->
          <div class="row nomargin" style="margin-top: 1em;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">R幣餘額：{{userInfo.Rcoins}} R幣</p>
              <!--<a href="javascript:void(0)" class="pull-right" style="color: #2a6baf;">交易明細</a>-->
              <router-link to="/RBrecharge" class="pull-right" style="color: #2a6baf;">儲值R幣</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row nomargin" style="margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;background: #fff;">
        <div class="col-sm-12 col-xs-12">
          <div class="row nomargin" style="border-bottom: 0.05em solid #ccc;margin-top: 1em;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">我的銀行帳戶：{{bankNum}}</p>
              <a href="javascript:void(0)" v-on:click="showBankModal()" class="pull-right"
                 style="color: #2a6baf;">添加帳戶</a>
              <a href="javascript:void(0)" v-on:click="showBankDetailModal()" class="pull-right"
                 style="color: #2a6baf;margin-right: 3em;">查看明細</a>
            </div>
          </div>
          <div class="row nomargin" style="margin-top: 1em;border-bottom: 0.05em solid #ccc;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">我的支付寶帳戶：{{zhifubaoNum}}</p>
              <a href="javascript:void(0)" @click="showModalByAlipay" class="pull-right"
                 style="color: #2a6baf;">添加帳戶</a>
              <a href="javascript:void(0)" v-on:click="showAliDetailModal()" class="pull-right"
                 style="color: #2a6baf;margin-right: 3em;">查看明細</a>
            </div>
          </div>
          <div class="row nomargin" style="margin-top: 1em;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">我的微信帳戶：{{wechatNum}}</p>
              <a href="javascript:void(0)" @click="addMobileWechatPopup" class="pull-right"
                 style="color: #2a6baf;">添加帳戶</a>
              <a href="javascript:void(0)" v-on:click="showWechatDetailModal()" class="pull-right"
                 style="color: #2a6baf;margin-right: 3em;">查看明細</a>
            </div>
          </div>
          <div id="popUpMobileWechat"
               style="position:absolute; z-index:999; width:300px; height:600px; background:#666; padding-top:20px; color:#fff; display:none;">
            <p>掃描二維條碼新增微信帳號</p>
            <p>掃描後請<a href="javascript:void(0)" v-on:click="refreshPage()" style="color: #45c0fa;">刷新頁面</a>哦</p>
            <img :src="wechatPic" style="margin:0 auto; width:80%; "/>
            <div class="row" style="margin:0 auto;margin-top: 15px;width:80%;">
              <p class="pull-left" style="text-align: left;">第一步 截下有完整QRcode的手機畫面；</p>
            </div>
            <div class="row" style="margin:0 auto;margin-top: 15px;width:80%;">
              <p class="pull-left" style="text-align: left;">第二步 打開微信or支付寶APP的掃描QRcode功能；</p>
            </div>
            <div class="row" style="margin:0 auto;margin-top: 15px;width:80%;">
              <p class="pull-left" style="text-align: left;">第三步 選擇掃描相簿中的QRcode；</p>
            </div>
            <div class="row" style="margin:0 auto;margin-top: 15px;width:80%;">
              <p class="pull-left" style="text-align: left;">第四步 在相簿中選擇剛剛截下的完整QRcode畫面，識別后就會完成綁定喔！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row nomargin"
           style="margin: 0;margin-top: 1em;border-bottom: 0.5em solid #f5f5f5;margin-bottom: 6em;background: #fff;">
        <div class="col-sm-12 col-xs-12">
          <div class="row nomargin" style="border-bottom: 0.05em solid #ccc;margin-top: 1em;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">我的訂單</p>
              <router-link to="/orderList" class="pull-right" style="color: #2a6baf;">查看明細</router-link>
            </div>
          </div>
          <div class="row nomargin" style="margin-top: 1em;">
            <div class="col-sm-12 col-xs-12 nopadding">
              <p class="pull-left">我的提問</p>
              <router-link to="/appealList" class="pull-right" style="color: #2a6baf;">查看明細</router-link>
            </div>
          </div>
        </div>
      </div>
      <mobileFooter></mobileFooter>
    </div>
    <!-- 身份认证模态框（Modal） -->
    <div class="modal fade" id="identityModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" style="width: 90%;max-width: 800px;margin:0 auto;margin-top:30px;">
        <div class="modal-content" style="border-radius: 5px;">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shenfenicon2.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>會員身份驗證</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <p class="pull-left"
                 style="text-align: left;background: #ffe7cc;padding: 15px;border-radius: 10px;margin-bottom: 0;">
                YUBAO為了避免第三方詐騙和被有心人士利用作為洗錢管道，我們需要手機 +
                證件雙認證來確定是您本人。您所填寫的身份證資料僅用於內政部連線認證過程，YUBAO不會儲存您的身份證資料到資料庫，僅會儲存認證失敗或成功這個結果。<br/><a
                href="javascript:void(0)" v-on:click="showWhy()" class="pull-left">為什麼要驗證身份證</a></p>
            </div>
            <div class="row" v-show="!identityFinish" style="margin-top: 30px;">
              <p class="pull-left" style="text-align: left;margin-bottom: 0;">請依據所持國民身份證記載之【身份證字號】及【發證日期】輸入資料</p>
            </div>
            <div class="row" v-show="!identityFinish">
              <p class="pull-left" style="text-align: left;margin-bottom: 0;">每日認證錯誤達2次后，此身份證字號將暫時無法進行認證。</p>
            </div>
            <div class="row" v-show="!identityFinish" style="margin-top: 30px;">
              <div class="col-lg-2 col-md-2" style="padding: 0;">
                <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">真實姓名：</label>
                <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">真實姓名：</label>
              </div>
              <div class="col-lg-10 col-md-10" style="padding: 0;">
                <input type="text" class="pull-left form-control" v-model="checkRealName"/>
              </div>
            </div>
            <div class="row" v-show="!identityFinish" style="margin-top: 30px;">
              <div class="col-lg-2 col-md-2" style="padding: 0;">
                <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">身份證字號：</label>
                <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">身份證字號：</label>
              </div>
              <div class="col-lg-10 col-md-10" style="padding: 0;">
                <input type="text" class="pull-left form-control" v-model="checkRealIDNumber"/>
              </div>
            </div>
            <div class="row" v-show="!identityFinish" style="margin-top: 30px;margin-bottom: 30px;">
              <center>
                <button type="button" class="btn btn-warning" style="background: #ff8500;"
                        v-on:click="submitIdentityInfo()">送出并確認
                </button>
              </center>
            </div>
            <div class="row" v-show="identityFinish" style="margin-top: 30px;margin-bottom: 30px;">
              <p class="pull-left" style="margin-bottom: 0;text-align: left;">身份證字號：{{displayRealIDNumber}}</p><span
              class="pull-left" style="color: #08bf69;margin-left: 30px;">已完成認證</span>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!-- 个人资料模态框（Modal） -->
    <div class="modal fade" id="personalModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" style="width: 80%;max-width: 800px;">
        <div class="modal-content" style="border-radius: 5px;">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shensuicon.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>編輯個人資料</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-3 col-md-3" style="border-right: 1px solid #ccc;">
                <div class="row">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('document')">個人資料</a></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('nickName')">修改暱稱</a></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('referee')">新增推薦人</a></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('password')">修改密碼</a></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('email')">修改E-Mail</a></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('phone')">修改手機</a></center>
                </div>
                <!--<div class="row" style="margin-top: 15px;">
                  <center><a href="javascript:void(0)" v-on:click="setPersonalType('validate')">会员身份驗證</a></center>
                </div>-->
              </div>
              <div class="col-lg-9 col-md-9" style="padding: 0 15px;">
                <div class="row" id="documentRow">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="pull-left" style="width: 25%;">
                          <p class="pull-right">手機號/郵箱：</p>
                        </div>
                        <div class="pull-left" style="width: 75%;">
                          <p class="pull-left" style="font-weight: bold;">
                            {{userInfo.tel_number}}/{{userInfo.email_address}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="pull-left" style="width: 25%;">
                          <p class="pull-right">真實姓名：</p>
                        </div>
                        <div class="pull-left" style="width: 75%;">
                          <p class="pull-left" style="font-weight: bold;">{{userInfo.realName}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" id="refereeRow" style="display: none;">
                  <div class="pull-left" style="width: 25%;">
                    <label class="pull-right" style="line-height: 34px;">手機號碼或ID：</label>
                  </div>
                  <div class="pull-left" style="width: 60%;">
                    <input type="text" v-model="referer" class="form-control pull-left"/>
                  </div>

                </div>
                <div class="row" id="validateRow" style="display: none;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row">
                      <div class="col-lg-3 col-md-3">
                        <label class="pull-right" style="line-height: 34px;">真實姓名：</label>
                      </div>
                      <div class="col-lg-9 col-md-9" style="padding: 0 15px;">
                        <input type="text" class="form-control" v-model="realName"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 col-md-3">
                        <label class="pull-right" style="line-height: 34px;">身份证字号：</label>
                      </div>
                      <div class="col-lg-9 col-md-9" style="padding: 0 15px;">
                        <input type="text" class="form-control" v-model="realIDNumber"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" id="emailRow" style="display: none;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <p>交易截圖将寄至MAIL ，請保持您電子信箱的完整性及正確性</p>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">新E-Mail：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <input type="text" class="form-control" v-model="newEmail"/>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <input type="text"  class="form-control" v-model="newEmail"/>
                      </div>-->
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">手機號碼：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <p class="pull-left" style="margin-bottom: 0;line-height: 34px;font-weight: bold;">
                            {{lockPhone}}</p>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <p class="pull-left" style="margin-bottom: 0;line-height: 34px;font-weight: bold;">
                          {{lockPhone}}</p>
                      </div>-->
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">驗證碼：</label>
                        </div>
                        <input type="password" class="form-control pull-left" value="" style="width: 45%;"
                               v-model="changeEmailCode"/>
                        <button type="button" class="btn btn-primary pull-left" id="sendEmailCodeBtn"
                                style="width: 20%;"
                                v-on:click="sendEmailCode()">發送驗證碼
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" id="phoneRow" style="display: none;">
                  <div class="col-lg-12 col-md-12" id="phoneSet1" style="padding: 0 15px;">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <label class="pull-left">手機號碼：{{lockPhone}}</label>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12">
                        <label class="pull-left" style="line-height: 34px;">驗證碼：</label>
                        <input type="password" class="form-control pull-left" name="" value="" style="width: 45%;"
                               v-model="changePhoneCode"/>
                        <button type="button" class="btn btn-primary pull-left" id="sendCodeBtn" style="width: 20%;"
                                v-on:click="sendCode()">發送驗證碼
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12" id="phoneSet2" style="padding: 0 15px;display: none;">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <label class="pull-left" style="line-height: 34px;">新手機號碼：</label>
                        <input type="text" class="form-control pull-left" style="width: 50%;" v-model="newPhone"/>
                      </div>
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12">
                        <label class="pull-left" style="line-height: 34px;">驗證碼：</label>
                        <input type="password" class="form-control pull-left" value="" style="width: 45%;"
                               v-model="newPhoneCode"/>
                        <button type="button" class="btn btn-primary pull-left" id="sendNewCodeBtn" style="width: 20%;"
                                v-on:click="sendNewCode()">發送驗證碼
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" id="passwordRow" style="display: none;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">目前密碼：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <input type="password" value="" class="form-control pull-left" v-model="currentPassword"/>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <input type="password" value="" class="form-control" v-model="currentPassword"/>
                      </div>-->
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">新密碼：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <input type="password" value="" class="form-control" v-model="newPassword"/>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <input type="password" value="" class="form-control" v-model="newPassword"/>
                      </div>-->
                    </div>
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">新密碼確認：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <input type="password" value="" class="form-control" v-model="newPasswordCheck"/>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <input type="password" value="" class="form-control" v-model="newPasswordCheck"/>
                      </div>-->
                    </div>
                  </div>
                </div>
                <div class="row" id="nickNameRow" style="display: none;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <div class="row" style="margin-top: 15px;">
                      <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                        <div class="pull-left" style="width: 20%;">
                          <label class="pull-right" style="line-height: 34px;">暱稱：</label>
                        </div>
                        <div class="pull-left" style="width: 60%;">
                          <input type="text" class="form-control pull-left" v-model="nickName"/>
                        </div>
                      </div>
                      <!--<div class="col-lg-8 col-md-8">
                        <input type="text"  class="form-control" v-model="nickName"/>
                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                <button type="button" class="pull-right btn btn-warning" id="nextStepBtn" style="display: none;"
                        v-on:click="nextStep()">下一步
                </button>
                <button type="button" class="btn btn-warning pull-right" id="saveAndSendBtn" style="display: none;"
                        v-on:click="submitInfo()">送出並確認
                </button>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="popUpAlipay" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" style="width: 90%;max-width: 800px;margin: 0 auto;margin-top: 30px;">
        <div class="modal-content" style="border-radius: 5px;">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shenfenicon2.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>新增支付寶</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12 col-md-12" style="padding: 0;">
                <div class="row" style="margin-top: 15px; text-align:left; ">
                  <p class="pull-left" style="margin-left:32px; text-align: left;">請輸入支付寶帳號：</p>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12" style="padding: 15px 0px;">
                    <input type="text" class="pull-left form-control" v-model="alipayAccountInput"
                           style="width:80%;margin-right:10px; margin-left:20px; "/>
                    <button type="button" class="btn btn-primary pull-left hidden-sm hidden-xs"
                            @click="sendAlipayAccountFunc">發送
                    </button>
                    <button type="button" class="btn btn-primary pull-right hidden-lg hidden-md"
                            @click="sendAlipayAccountFunc" style="margin-top: 15px;">發送
                    </button>
                  </div>
                </div>
                <div class="row" id="erweimatishi" style="margin-top: 15px;display: none;">
                  <center><p style="margin-bottom: 0;color: #f00;font-size: 16px;text-align: left;">
                    請使用支付寶客戶端掃描以下二維碼即可完成綁定</p></center>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                    <img :src="alipayImg" style="width:60%; margin:0 auto;"/>
                  </div>
                </div>
                <div class="row" v-show="alipayImg!=''" style="margin-top: 15px;">
                  <p class="pull-left" style="text-align: left;">第一步 截下有完整QRcode的手機畫面；</p>
                </div>
                <div class="row" v-show="alipayImg!=''" style="margin-top: 15px;">
                  <p class="pull-left" style="text-align: left;">第二步 打開微信or支付寶APP的掃描QRcode功能；</p>
                </div>
                <div class="row" v-show="alipayImg!=''" style="margin-top: 15px;">
                  <p class="pull-left" style="text-align: left;">第三步 選擇掃描相簿中的QRcode；</p>
                </div>
                <div class="row" v-show="alipayImg!=''" style="margin-top: 15px;">
                  <p class="pull-left" style="text-align: left;">第四步 在相簿中選擇剛剛截下的完整QRcode畫面，識別后就會完成綁定喔！</p>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                    <button type="button" class="btn btn-primary" v-on:click="submitAccount()">提交</button>
                </div>-->
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
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
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>新增付款銀行帳戶</h4>
          </div>
          <div class="modal-body">
            <div class="row nomargin">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding: 0;">
                <div class="row nomargin">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                       style="background: #ccedff;border-radius: 10px;padding: 10px 15px;">
                    <p class="pull-left" style="margin: 0;text-align: left;">省錢小技巧：轉賬時選擇同行轉賬，可以避免銀行跨行轉賬手續費喲。</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                       style="background: #ffe7cc;border-radius: 10px;padding: 15px;">
                    <p class="pull-left" style="margin: 0;text-align: left;">付款銀行帳戶新增后不可刪除，銀行帳戶為【存簿】帳戶，切勿填成信用卡卡號。</p>
                    <p class="pull-left" style="margin: 0;text-align: left;">請勿綁定他人帳戶，若產生爭議請私下處理，玉寶概不介入！</p>
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
                    <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">帳戶姓名：</label>
                    <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">帳戶姓名：</label>
                  </div>
                  <div class="col-lg-10 col-md-10" style="padding: 0 15px;">
                    <input type="text" value="" v-model="accountName" class="form-control"/>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-2 col-md-2" style="padding: 0 15px;">
                    <label class="pull-right hidden-sm hidden-xs" style="line-height: 34px;">帳戶末六位碼：</label>
                    <label class="pull-left hidden-lg hidden-md" style="line-height: 34px;">帳戶末六位碼：</label>
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
                    <button type="button" class="btn btn-primary hidden-sm hidden-xs" @click="sendBankCode"
                            id="pcSendCodeBtn1" style="border:none; width: 100%;">發送驗證碼
                    </button>
                    <button type="button" class="btn btn-primary hidden-lg hidden-md pull-right"
                            style="margin-top: 15px; border:none; width: 100%;" id="pcSendCodeBtn2"
                            @click="sendBankCode">發送驗證碼
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
            <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" v-on:click="submitAccount()">提交</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!-- 銀行明細模态框（Modal） -->
    <div class="modal fade" id="bankDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shenfenicon2.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>銀行帳戶明細</h4>
          </div>
          <div class="modal-body">
            <div class="row nomargin" style="margin-top: 10px;" v-for="item in userInfo.bankAccounts">
              <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                  <p class="pull-left nomargin"
                     style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                    {{item.accountName}}</p>
                  <p class="pull-left nomargin"
                     style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                    {{item.bankName}}</p>
                  <p class="pull-left nomargin"
                     style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                    {{item.accountTelNumber}}</p>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!-- 支付寶明細模态框（Modal） -->
    <div class="modal fade" id="aliDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shenfenicon2.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>支付寶帳戶明細</h4>
          </div>
          <div class="modal-body">
            <div class="row nomargin" style="margin-top: 10px;" v-for="item in userInfo.aliPayAccounts">
              <div class="col-lg-12 col-md-12" style="padding: 0 15px;">
                <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                  <div class="row">
                    <p class="pull-left nomargin"
                       style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                      {{item.alipayAccount}}</p>
                    <p class="pull-left nomargin"
                       style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                      {{item.nick_name}}</p>
                  </div>
                  <div class="row">
                    <p class="pull-left nomargin" v-if="!item.is_certified"
                       style="font-size: 16px;font-weight: bold;color: #f00;margin-right: 15px;line-height: 40px;">
                      待檢測</p>
                    <p class="pull-left nomargin" v-if="item.is_certified"
                       style="font-size: 16px;font-weight: bold;color: #08bf69;margin-right: 15px;line-height: 40px;">
                      已通過</p>
                    <router-link to='aliRecharge' class="pull-right btn btn-primary"
                                 style="font-size: 12px;padding: 3px 20px; margin-top:8px;">去儲值
                    </router-link>
                    <a href="javascript:void(0)" class="pull-right" style="margin-right: 10px;line-height: 40px;"
                       v-on:click="deleteAli(item.alipayAccount)">刪除</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!-- 微信明細模态框（Modal） -->
    <div class="modal fade" id="wechatDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"
               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shenfenicon2.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>微信帳戶明細</h4>
          </div>
          <div class="modal-body">
            <div class="row nomargin" style="margin-top: 10px;margin-bottom: 30px;"
                 v-for="item in userInfo.wechatAccounts">
              <div class="col-lg-12 col-md-12" style="padding: 0;">
                <div class="row nomargin" style="background: #f3f3f3;border-radius: 10px;padding-left: 15px;">
                  <div class="row">
                    <img :src=item.profileImgUrl class="pull-left nomargin"
                         style="margin-left: 10px;margin-top: 10px;width: 20px;margin-right: 10px;"/>
                    <p class="pull-left nomargin"
                       style="font-size: 16px;font-weight: bold;color: #333;margin-right: 15px;line-height: 40px;">
                      {{item.nickname}}</p>
                    <p class="pull-left nomargin" v-if="item.hasRealNameAuthed"
                       style="font-size: 16px;font-weight: bold;color: #08bf69;margin-right: 15px;line-height: 40px;">
                      已實名</p>
                    <p class="pull-left nomargin" v-if="!item.hasRealNameAuthed"
                       style="font-size: 16px;font-weight: bold;color: #f00;margin-right: 15px;line-height: 40px;">
                      帳戶狀態異常</p>
                  </div>
                  <div class="row">
                    <router-link to="wechatRecharge" class="pull-right btn btn-primary"
                                 style="font-size: 12px;padding: 3px 20px; margin-top:8px;">去儲值
                    </router-link>
                    <a href="javascript:void(0)" class="pull-right" style="margin-right: 10px;line-height: 40px;"
                       v-on:click="deleteWechat(item.wechatID)">刪除</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!--為什麼要驗證身份證模态框-->
    <verificationScriptModal></verificationScriptModal>

    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myErrorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
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
              <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
          </div> -->
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
  import {getService} from '../../assets/js/configs.js'
  //	import {checkLogin} from '../../assets/js/checkLogin.js'
  import appeal from './appeal.vue'
  import notice from './notice.vue'
  import mobileFooter from './mobileFooter.vue'
  import mobileList from './mobileList.vue'
  import pageFooter from './pagefooter.vue'
  import verificationScriptModal from './verificationScript.vue'
  import '../../../static/css/PCstyle.css'

  export default {
    name: 'cen',
    data() {
      return {
        userInfo: '',
        bankNum: '',
        zhifubaoNum: '',
        wechatNum: '',
        type: 'bank',
        typeList: [],
        accountName: '',
        sixCode: '',
        bankCode: '',
        secretPhone: '',
        bankName: '',
        notices: [],
        noticeTitle: '',
        noticeTime: '',
        noticeContent: '',
        personalType: 'document', //设置个人资料模态框的当前功能（新增推荐人，修改个人资料等）
        referer: '',
        realIDNumber: '', //身份证号
        realName: '', //真实姓名
        checkRealName: '', //身份驗證真實姓名
        checkRealIDNumber: '', //身份驗證身份證號
        displayRealIDNumber: '',
        identityFinish: false,
        lockPhone: '',
        timer: 60,
        timeInterval: '',
        timeNewInterval: '',
        timeEmailInterval: '',
        changePhoneCode: '',
        newPhone: '',
        newPhoneCode: '',
        newEmail: '',
        currentPassword: '',
        newPassword: '',
        newPasswordCheck: '',
        emailCode: '',
        nickName: '',
        changeEmailCode: '',
        centerNoticeTitle: '会员公告',
        getCenterNotice: {
          showFlag: false,
          noticeArray: []
        },
        wechatPic: '',
        alipayImg: ``,
        alipayAccountInput: '',
        isCertified: ``,
        popup_error_msg: '',
        bank_timer: 60,
        bank_timeInterval: '',

      }
    },
    components: {
      appeal,
      notice,
      mobileFooter,
      mobileList,
      pageFooter,
      verificationScriptModal
    },
    mounted: function () {
      this.getInfo();
      this.getTypes();
//	  	this.getNotices();
//	  	checkLogin();
      this.getCenterNoticeFunc();

    },
    methods: {
      showWhy: function () {
        $('#verificationScriptModal').modal('show');
        $('#identityModal').modal('hide');
      },
      setBankTimer: function () {
        $('#pcSendCodeBtn1').html(this.bank_timer + '秒');
        $('#pcSendCodeBtn2').html(this.bank_timer + '秒');

        this.bank_timer = parseInt(this.bank_timer) - 1;
        if (this.bank_timer == -1) {
          clearInterval(this.bank_timeInterval);
          this.bank_timer = 60;
          $('#pcSendCodeBtn1').removeAttr('disabled');
          $('#pcSendCodeBtn1').css('background', '#00a6ff');
          $('#pcSendCodeBtn1').html('發送驗證碼');
          $('#pcSendCodeBtn2').removeAttr('disabled');
          $('#pcSendCodeBtn2').css('background', '#00a6ff');
          $('#pcSendCodeBtn2').html('發送驗證碼');
        }
      },
      closePopUpWechat: function () {
        $('#popUpWechat').hide();
        $('#popUpMobileWechat').hide();
      },
      refreshPage: function () {
        window.location.reload();
      },
      deleteWechat: function (str) {
        $.ajax({
          type: 'post',
          url: getService() + "/user/delUserWechat",
          dataType: "json",
          data: {
            wechatID: str
          },
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0) {
              window.location.reload();
            } else {
              alert('刪除失敗');
            }
          }
        });
      },
      getCenterNoticeFunc() {
        var that = this;
        var param = {
          "location": '会员中心'
        }
        $.ajax({
          type: 'post',
          url: getService() + "/announcement/findCommonAnnouncement",
          dataType: "json",
          data: JSON.stringify(param),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            console.log('res=', res);
            if (res.error_code == 0) {
              that.getCenterNotice.showFlag = true;
              that.getCenterNotice.noticeArray = res.data;
            }

          },
          error: function (res) {

          }
        });

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
              if (this.userInfo.referrer && this.userInfo.referrer.referrals) {
                this.referers_number = this.userInfo.referrer.referrals.length;
              } else {
                this.referers_number = 0;
              }
              this.secretPhone = this.setSecretPhone(this.userInfo.tel_number);
              this.bankNum = this.userInfo.bankAccounts.length;
              this.zhifubaoNum = this.userInfo.aliPayAccounts.length;
              this.wechatNum = this.userInfo.wechatAccounts.length;
              this.lockPhone = this.userInfo.tel_number.substr(0, 2) + '****' + this.userInfo.tel_number.substr(6, 4);
              if (this.userInfo.userStatus.isRealName) {
                this.identityFinish = true;
                this.displayRealIDNumber = this.userInfo.realIDNumber.substr(0, 2) + '****' + this.userInfo.realIDNumber.substr(6, 4);
              }
            }
          }.bind(this)
        });
      },
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
      showIdentityModal: function () {
        $('#identityModal').modal('show');
      },
      showAppealModal: function () {
        $('#appealModal').modal('show');
      },
      showBankModal: function () {
        $('#bankModal').modal('show');
      },
      setSecretPhone: function (num) {
        var starPhone = num.substr(0, 3) + '***' + num.substr(7);
        return starPhone;
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

        if (!this.bankName) {
          layer.msg('請選擇付款渠道', {icon: 5});
        } else if (!this.accountName) {
          layer.msg(' 帳戶姓名不能為空！', {icon: 5});
        } else if (!this.sixCode) {
          layer.msg(' 帳戶末六位不能為空！', {icon: 5});
        } else if (!this.bankCode) {
          layer.msg(' 驗證碼不能為空！', {icon: 5});
        }

        if (this.sixCode.length != 6) {
          layer.msg(' 請輸入正確的帳戶末六位！', {icon: 5});
        }


        var param = {
          code: this.bankCode,
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
            if (res.error_code == 0 || res.error_code == 200) {
              layer.msg(' 提交成功！', {icon: 1});
              $('#bankModal').modal('hide');
              window.location.reload();
            }
          }.bind(this)
        });
      },
      showPersonalModal: function () {
        $('#personalModal').modal('show');
      },
      submitInfo: function () {
        var _this = this;
        switch (this.personalType) {
          case 'referee':
            if (this.referer != '') {
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
                    $('#personalModal').modal('hide');
                    alert('推荐成功');
                  } else {
                    alert(res.error_massage);
                  }
                }.bind(this)
              });
            } else {
              alert('请填写推荐人手机号或ID');
            }
            break;
          case 'validate':
            if (this.realIDNumber != '' && this.realName != '') {
              var reg = /^[a-zA-Z][0-9]{9}$/;
              if (reg.test(this.realIDNumber)) {
                var param = {
                  realIDNumber: this.realIDNumber,
                  realName: this.realName
                }
                $.ajax({
                  type: 'post',
                  url: getService() + "/addUserRealName",
                  dataType: "json",
                  data: JSON.stringify(param),
                  async: true,
                  headers: {'Content-Type': 'application/json'},
                  xhrFields: {
                    withCredentials: true
                  },
                  crossDomain: true,
                  success: function (res) {
                    if (res.error_code == 200) {
                      alert('驗證成功')
                    } else {
                      alert(res.error_massage);
                    }
                  }.bind(this)
                });
              } else {
                alert('请输入有效的身份证');
              }
            } else {
              alert('信息不能为空');
            }
            break;
          case 'phone':
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
            break;
          case 'password':
            if (this.newPassword != this.newPasswordCheck) {
              alert('两次密碼输入不一致');
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
                    alert('更新成功，请重新登录');
                    $('#personalModal').modal('hide');
                    _this.$router.push({path: '/login'});
                  } else {
                    alert(res.error_massage);
                  }
                }
              });
            }
            break;
          case 'email':
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
                    $('#personalModal').modal('hide');
                  } else {
                    alert(res.error_msg);
                  }
                }
              });
            }
            break;
          case 'nickName':
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
                    $('#personalModal').modal('hide');
                  } else {
                    alert(res.error_msg);
                  }
                }
              });
            }
            break;
          default:
            break;
        }
      },
      setPersonalType: function (str) {
        this.personalType = str;
        switch (str) {
          case 'referee':
            $('#validateRow').hide();
            $('#phoneRow').hide();
            $('#documentRow').hide();
            $('#emailRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').hide();
            $('#refereeRow').show();
            $('#nextStepBtn').hide();
            $('#saveAndSendBtn').show();
            break;
          case 'validate':
            $('#refereeRow').hide();
            $('#phoneRow').hide();
            $('#documentRow').hide();
            $('#emailRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').hide();
            $('#validateRow').show();
            $('#nextStepBtn').hide();
            $('#saveAndSendBtn').show();
            break;
          case 'phone':
            $('#refereeRow').hide();
            $('#validateRow').hide();
            $('#documentRow').hide();
            $('#emailRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').hide();
            $('#phoneRow').show();
            $('#saveAndSendBtn').hide();
            $('#nextStepBtn').show();
            break;
          case 'document':
            $('#refereeRow').hide();
            $('#validateRow').hide();
            $('#phoneRow').hide();
            $('#emailRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').hide();
            $('#documentRow').show();
            $('#saveAndSendBtn').hide();
            $('#nextStepBtn').hide();
            break;
          case 'email':
            $('#refereeRow').hide();
            $('#validateRow').hide();
            $('#phoneRow').hide();
            $('#documentRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').hide();
            $('#emailRow').show();
            $('#nextStepBtn').hide();
            $('#saveAndSendBtn').show();
            break;
          case 'password':
            $('#refereeRow').hide();
            $('#validateRow').hide();
            $('#phoneRow').hide();
            $('#documentRow').hide();
            $('#emailRow').hide();
            $('#nickNameRow').hide();
            $('#passwordRow').show();
            $('#nextStepBtn').hide();
            $('#saveAndSendBtn').show();
            break;
          case 'nickName':
            $('#refereeRow').hide();
            $('#validateRow').hide();
            $('#phoneRow').hide();
            $('#documentRow').hide();
            $('#emailRow').hide();
            $('#passwordRow').hide();
            $('#nickNameRow').show();
            $('#nextStepBtn').hide();
            $('#saveAndSendBtn').show();
            break;
          default:
            break;
        }
      },
      submitIdentityInfo: function () {
        var reg = /^[a-zA-Z][0-9]{9}$/;
        if (this.checkRealIDNumber != '' && this.checkRealName != '') {
          if (reg.test(this.checkRealIDNumber)) {
            $.ajax({
              type: 'post',
              url: getService() + "/addUserRealName",
              dataType: "json",
              data: {
                realIDNumber: this.checkRealIDNumber,
                realName: this.checkRealName
              },
              xhrFields: {
                withCredentials: true
              },
              crossDomain: true,
              success: function (res) {
                if (res.error_code == 200) {
                  window.location.reload();
                } else {
                  alert('驗證失敗');
                }
              }
            });
          }
          else {
            alert('请输入有效的身份證');
          }
        } else {
          alert('真實姓名和身份證字號不能為空');
        }

      },
      deleteAli: function (str) {
        $.ajax({
          type: 'post',
          url: getService() + "/user/delAliPayAccount",
          dataType: "json",
          data: {
            alipayAccount: str
          },
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0) {
              window.location.reload();
            } else {
              alert('刪除失敗');
            }
          }
        });
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
                $('#nextStepBtn').hide();
                $('#saveAndSendBtn').show();
              } else {
                alert(res.error_msg);
              }
            }
          });
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
      addWechatPopup() {
        $.ajax({
          type: 'get',
          url: getService() + "/wechat/getQRcodeUrl",
          dataType: "json",
          data: {},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0 || res.error_code == 200) {
              this.wechatPic = res.data.QRUrl;
              $('#popUpWechat').show();
            }
          }.bind(this)
        });
      },
      addMobileWechatPopup() {
        $.ajax({
          type: 'get',
          url: getService() + "/wechat/getQRcodeUrl",
          dataType: "json",
          data: {},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0 || res.error_code == 200) {
              this.wechatPic = res.data.QRUrl;
              $('#popUpMobileWechat').show();
            }
          }.bind(this)
        });
      },
      sendAlipayAccountFunc() {
        if (this.alipayAccountInput == '') {
          alert('請填寫您的支付寶帳戶');
        } else {
          let url = getService() + `/alipay/QRcode?alipayAccount=${this.alipayAccountInput}`;
          console.log(url)
          this.alipayImg = url;
          document.getElementById('erweimatishi').style.display = '';
        }
      },
      showModalByAlipay() {
        $('#popUpAlipay').modal('show');

      },
      showBankDetailModal: function () {
        $('#bankDetailModal').modal('show');
      },
      showAliDetailModal: function () {
        $('#aliDetailModal').modal('show');
      },
      showWechatDetailModal: function () {
        $('#wechatDetailModal').modal('show');
      },
      loginOut: function () {
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
              this.$router.push({path: '/index'});
            } else {

            }
          }.bind(this)
        });
      },
      sendBankCode() {
        $('#pcSendCodeBtn1').attr('disabled', 'disabled');
        $('#pcSendCodeBtn1').css('background', '#ccc');
        $('#pcSendCodeBtn2').attr('disabled', 'disabled');
        $('#pcSendCodeBtn2').css('background', '#ccc');

        this.bank_timeInterval = setInterval(this.setBankTimer, 1000);
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

            } else {
              this.popup_error_msg = '發送驗證碼失败！';
              $('#myErrorModal').modal('show');
            }
          }.bind(this),
          error: function () {
            this.popup_error_msg = '發送驗證碼失败！';
            $('#myErrorModal').modal('show');
          }.bind(this)
        });
      },
      deleteBankCode(param) {
        $.ajax({
          type: 'post',
          url: getService() + "/user/delBank",
          dataType: "json",
          data: {
            last6digital: param
          },
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 0 || res.error_code == 200) {
              layer.msg(' 提交成功！', {icon: 1});
              window.location.reload();
            } else {
              layer.msg(' 刪除失敗！', {icon: 5});
            }
          },
          error: function (res) {
            layer.msg(' 刪除失敗！', {icon: 5});
          }
        });
      }

    }
  }
</script>

<style scoped>
  /*  @import url("../../../static/css/PCstyle.css");*/
  .nomargin {
    margin: 0;
  }

  .nopadding {
    padding: 0;
  }

  .margin_L_10 {
    margin-left: -10px;
  }
</style>
