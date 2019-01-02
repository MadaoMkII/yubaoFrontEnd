<template>
    <div class="popUpArea" v-show="showPopUpArea">
      <div>
        <div class="row nomargin bar hidden-sm hidden-xs" style="margin: 0;background: #ff8500;height: 34px;">
          <div class="col-lg-12 col-md-12 nopadding">
            <div class="row nomargin">
              <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
                <a href="" class="pull-left" style="margin-right: 30px;">會員中心</a>
                <!-- <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/messageicon.png" class="pull-left"/>消息</a> -->
                <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/shensuicon.png" class="pull-left"/>申訴&提問</a>
                <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/listicon.png" class="pull-left"/>工單</a>
                <a href="" class="pull-right">登出</a>
                <a href="" class="pull-right" style="margin-right: 30px;"><img src="../../assets/images/homeicon.png" class="pull-left"/>首頁</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row nomargin hidden-lg hidden-md" style="margin: 0;background: #ff8500;">
			<div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
				<p style="margin-bottom: 0;line-height: 42px;color: #fff;">訂單詳情</p>
			</div>
    		<mobileList></mobileList>
		</div>
        <div class="row nomargin" style="margin: 0;margin-top: 20px;margin-bottom: 30px;">
          <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
            <div class="row nomargin" style="margin-top: 20px;">
              <div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2" style="border: 0.5px solid #ccc;padding: 0 15px; background:#fff;  padding-bottom: 50px;">
            <div id="step1" v-show="showWhich==1">
              <div class="row" style=" border-bottom:1px solid #dbdbdb; ">
                <div class="col-lg-12 col-md-12">
                  <img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 10px;"/>
                  <span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
                  <a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
                  <a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
                </div>
              </div>
              <div class="row" style="margin-top: 20px;">
                <div class="col-lg-12 col-md-12" style="padding: 0px;">
                  <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
				  <p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  <p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                </div>
              </div>
              <div class="row" style="margin-top: 15px;">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive">
                  <table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
                    <thead>
                      <tr>
                        <th>订单金额</th>
                        <th>汇率</th>
                        <th>手续费</th>
                        <th>应付新台币</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
                        <td>{{rate}}</td>
                        <td>¥{{(feeRate/100*RMBAmount).toFixed(2)}}RMB</td>
                        <td>$<span style="font-size: 20px;">{{totalAmount}}</span>TWD</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <div class="row nomargin" style="margin-top: 10px;">
                    <p style="font-size: 12px;text-align: left;">应付新台币计算公式：{{RMBAmount}}*{{rate}}+{{(feeRate*RMBAmount/100).toFixed(2)}}*{{rate}}={{totalAmount}} TWD</p>
                  </div>
                </div>
              </div>
              <div class="row" style="margin-top: 20px;">
                <div class="col-lg-12 col-md-12">
                  <p class="pull-left" style="font-size: 20px;font-weight: bold;">订单留言</p>
                </div>
              </div>
              <div class="row" style="margin-top: 15px;">
                <div class="col-lg-12 col-md-12">
                  <p style="font-size: 12px;text-align: left;">{{comments}}</p>
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
                    <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;border-bottom: none;">
                      <div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;padding: 0 15px;">
                        <a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 20px;">
                    <p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;">
                      <div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
                        <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
                        <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
                        <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
                      </div>
                      <div class="row" style="padding: 0 15px">
                        <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶不接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
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
        <div id="step2" v-show="showWhich==2">
                <div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
                  <div class="col-lg-12 col-md-12">
                    <img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 10px;"/>
                    <span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
                    <a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
                    <a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
                    

                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0px;">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
                    <p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  <p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive">
                    <table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
                      <thead>
                        <tr>
                          <th>订单金额</th>
                          <th>汇率</th>
                          <th>手续费</th>
                          <th>应付新台币</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
                          <td>{{rate}}</td>
                          <td>¥{{(feeRate/100*RMBAmount).toFixed(2)}}RMB</td>
                          <td>$<span style="font-size: 20px;">{{totalAmount}}</span>TWD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px; margin-left:10px;">
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
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;">储值到微信账户：</p>
                  </div>
                </div>
                <div class="row nomargin" >
                  <div class="col-lg-12 col-md-12">
                    <div  style="border: 1px solid #ccc;padding: 15px;margin: 5px 15px;"  class="col-lg-2 col-md-2 nopadding">
                      <center><img :src="wechatAccountItem.profileImgUrl" style="width: 80%;"/></center>
                      <center v-if="wechatAccountItem.hasRealNameAuthed"><button type="button" class="btn btn-success" style="font-size: 12px;padding: 3px 12px;margin-top: 5px;">已實名</button></center>
                      <center v-if="!wechatAccountItem.hasRealNameAuthed"><button type="button" class="btn btn-warning" style="font-size: 12px;padding: 3px 12px;margin-top: 5px;">未實名</button></center>
                      <center><p class="nomargin" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 12px;color: #333;margin-top: 5px;">{{wechatAccountItem.nickname}}</p></center>
                    </div>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;">订单留言</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <p style="font-size: 12px;text-align: left;">{{comments}}</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;">ATM银行转账</span></p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <div class="row nomargin">
                      <p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
                    </div>
                    <div class="row nomargin">
                      <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;border-bottom: none;">
                        <div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                          <a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
                        </div>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 20px;">
                      <p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
                    </div>
                    <div class="row nomargin">
                      <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;">
                        <div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
                        </div>
                        <div class="row" style="padding: 0 15px">
                          <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶不接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-bottom: 30px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
                  </div>
                </div>
              </div>
              <div id="step3" v-show="showWhich==3">
                <div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
                  <div class="col-lg-12 col-md-12">
                    <img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 10px;"/>
                    <span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
                    <a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
                    <a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12" style="padding: 0px;">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
                    <p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  <p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  table-responsive">
                    <table class="table table-striped tableForBills" style="border:1px solid #dbdbdb;">
                      <thead>
                        <tr>
                          <th>订单金额</th>
                          <th>汇率</th>
                          <th>手续费</th>
                          <th>应付新台币</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>¥<span style="font-size: 20px;">{{RMBAmount}}</span>RMB</td>
                          <td>{{rate}}</td>
                          <td>¥{{(feeRate/100*RMBAmount).toFixed(2)}}RMB</td>
                          <td>$<span style="font-size: 20px;">{{totalAmount}}</span>TWD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px; margin-left:10px;">
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
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;">储值到支付宝账户：</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <!--<input type="text"  v-model="aliPayAccount" class="form-control" readonly="readonly" style="width:30%;"/>-->
                    <select  class="pull-left form-control" style=" width:30%; margin-top:10px;" v-model="aliPayAccount" disabled="disabled">
                      <option value="">--请选择--</option>
                      <option v-for="item in aliPayAccountArray" v-bind:value="item.user_id">{{item.alipayAccount}}</option>
                    </select>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;">订单留言</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <p style="font-size: 12px;text-align: left;">{{comments}}</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;">ATM银行转账</span></p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <div class="row nomargin">
                      <p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
                    </div>
                    <div class="row nomargin">
                      <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;border-bottom: none;">
                        <div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                          <a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
                        </div>
                      </div>
                    </div>
                    <div class="row nomargin" style="margin-top: 20px;">
                      <p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
                    </div>
                    <div class="row nomargin">
                      <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;">
                        <div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
                          <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
                        </div>
                        <div class="row" style="padding: 0 15px">
                          <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶不接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row nomargin" style="margin-top: 20px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">發票</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin-bottom: 30px;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">統一發票，本訂單無手續費，故不開立發票。</p>
                  </div>
                </div>
              </div>
              <div id="step4" v-show="showWhich==4">
                <div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
                  <img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 3px; margin-left:15px;"/>
                  <span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
                  <a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
                  <a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
                </div>
                <div class="row nomargin" style="padding: 30px 15px;">
                  <div class="row">
                    <div class="col-lg-12 col-md-12" style="padding: 0px;">
                      <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
                      <p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  <p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                    </div>
                  </div>
                  <div class="row nomargin" >
                      <p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px; ">朋友账号：</p>
                      <p class="pull-left nomargin" style="font-size: 12px;color: #58d198;margin-right: 15px; line-height:22px;">{{friendAccount}}</p>
                  </div>
                  <div class="row nomargin table-responsive" style="margin-top: 15px;">
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
                          <td>¥{{(feeAmount/rate).toFixed(2)}}RMB</td>
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
                        <p style="font-size: 12px;text-align: left;">应付新台币计算公式：{{RMBAmount}}*{{rate}}+{{(feeAmount/rate).toFixed(2)}}*{{rate}}={{totalAmount}} TWD</p>

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
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="chargeMethod == 'Rcoin'">R币代付</span><span style="margin-left: 15px;" v-if="chargeMethod == 'bankAccount'">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;" v-if="chargeMethod == 'bankAccount'">
                    <div class="col-lg-12 col-md-12">
                      <div class="row">
                        <p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
                      </div>
                      <div class="row" style="padding-top:5px;">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-bottom-left-radius:0; border-bottom-right-radius:0; background:#f5f5f5;padding: 0;border-bottom: none;">
                          <div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                            <a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-top-left-radius:0; border-top-right-radius:0;padding: 0;">
                          <div class="row" style="padding: 0 15px">
                            <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行账户转入或金额不符将不会为您完成交易！</p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="margin-top: 20px;">
                        <p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;">
                          <div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
                          </div>
                          <div class="row" style="padding: 0 15px">
                            <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶不接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
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
                  <div class="row nomargin" style="margin-top: 15px;" v-if="chargeMethod == 'Rcoin'">
                    <div class="row nomargin" style="margin-top: 15px;">
                      <p style="font-size: 12px;text-align: left;">您此次消费了<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R币，账户余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{Rcoins}}</span>R币</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="step5" v-show="showWhich==5">
                <div class="row nomargin" style=" border-bottom:1px solid #dbdbdb; ">
                  <img class="pull-left" src="../../assets/images/billDtailIcon.png" style="margin-top:18px; margin-right: 3px; margin-left:15px;"/>
                  <span class="pull-left" style="font-size: 20px;font-weight: bold; line-height:50px; ">订单詳情</span>
                  <a  class="pull-right" style="color: #08bf69;margin-right: 10px;line-height: 50px;">{{billState}}</a>
                  <a class="pull-right" style="color: #999;margin-right: 10px; line-height: 50px;">我們正在拼命為您代付，請稍等！</a>
                </div>
                <div class="row nomargin" style="padding: 30px 15px;">
                  <div class="row">
                    <div class="col-lg-12 col-md-12" style="padding: 0px;">
                      <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">订单明细：{{billID}}</p>
                      <p  class="pull-left hidden-lg hidden-md"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                  <p  class="pull-right hidden-sm hidden-xs"  style="background:#08bf69; padding:5px 5px; border-radius:5px; color:#fff; ">{{payState}}</p>
                    </div>
                  </div>
                  <div class="row nomargin table-responsive" style="margin-top: 15px;">
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
                          <td>¥{{(feeAmount/rate).toFixed(2)}}RMB</td>
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
                        <p style="font-size: 12px;text-align: left;">应付新台币计算公式：{{RMBAmount}}*{{rate}}+{{(feeAmount/rate).toFixed(2)}}*{{rate}}={{totalAmount}} TWD</p>

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
                    <p class="pull-left" style="font-size: 20px;font-weight: bold;text-align: left;">您选择的付款方式：<span style="margin-left: 15px;" v-if="chargeMethod == 'Rcoin'">R币代购</span><span style="margin-left: 15px;" v-if="chargeMethod == 'bankAccount'">ATM银行转账 <span style="font-size: 12px;color: #f00;margin-left: 15px;">请在8小时内完成付款</span></span></p>
                  </div>
                  <div class="row nomargin" style="margin-top: 15px;" v-if="chargeMethod == 'bankAccount'">
                    <div class="col-lg-12 col-md-12">
                      <div class="row">
                        <p class="pull-left" style="color: #999;font-size: 12px;">您的付款银行账户</p>
                      </div>
                      <div class="row" style="padding-top:5px;">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-bottom-left-radius:0; border-bottom-right-radius:0; background:#f5f5f5;padding: 0;border-bottom: none;">
                          <div class="row" style="background: #f5f5f5;padding: 0 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                            <a href="javascript:void(0)" class="pull-left" style="color: #08bf69;margin-right: 10px;line-height: 30px;">{{userBankName}}({{userLastSix}})</a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px; border-top-left-radius:0; border-top-right-radius:0;padding: 0;">
                          <div class="row" style="padding: 0 15px">
                            <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">请按订单金额使用您已经登记的银行账号付款，非上列银行账户转入或金额不符将不会为您完成交易！</p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="margin-top: 20px;">
                        <p class="pull-left" style="color: #999;font-size: 12px;">我们的收款银行账户</p>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12" style="border: 1px solid #ccc;border-radius: 5px;padding: 0;">
                          <div class="row" style="background: #f5f5f5;padding: 4px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom: 1px solid #ccc;">
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">转账金额：<span style="font-size: 22px;">{{totalAmount}}</span> TWD</p>
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">银行：{{finalbankDetailInfo.account}}</p>
                            <p class="pull-left" style="margin-bottom: 0;color: #08bf69;line-height: 22px;width: 100%;text-align: left;">公司名：{{finalbankDetailInfo.company}}</p>
                          </div>
                          <div class="row" style="padding: 0 15px">
                            <p class="pull-left" style="font-size: 12px;color: #999;line-height: 40px;margin-bottom: 0px;">一定要汇到上面的账号，玉寶不接受臨櫃匯款/無折存款/電匯/割發/ATM現金存入</p>
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
                  <div class="row nomargin" style="margin-top: 15px;" v-if="chargeMethod == 'Rcoin'">
                    <div class="row nomargin" style="margin-top: 15px;">
                      <p style="font-size: 12px;text-align: left;">您此次消费了<span style="font-size:16px; color:#e00000; font-weight:bold; margin:0 5px; ">{{(totalAmount/rate).toFixed(2)}}</span>R币，账户余额<span style="font-size:16px; color:#08bf69; font-weight:bold; margin:0 5px; ">{{Rcoins}}</span>R币</p>
                    </div>
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
import pageFooter from './pagefooter.vue'
import mobileFooter from './mobileFooter.vue'
import mobileList from './mobileList.vue'
import '../../../static/css/PCstyle.css'
export default {
  name: 'popUpArea',
  props: [],
  data () {
    return {
       showPopUpArea:true,
       userInfo:'',
        typeStr:'',
        rate:0,
        baseRate:0,
        comments:'',
        feeAmount:0,//手续费
        feeRate:0,
        totalAmount:0,
        RMBAmount:'',
        userLastSix:'',
        userBankName:'',
        created_at:'',
        updated_at:'',
        chooseBank:'',
        bankDetail:'',
        finalbankDetailInfo:{
          account:'',
          company:''
        },
        conditions:[],
        nextRateAmount:0,
        nextRate:0,
        preRateAmount:0,
        preRate:0,
        isShowRateWin:0, //顯示彈窗否
        billState:'',
        payState:'',

        billID:this.$route.params.billId,
        showWhich:0,
        wechatAccountItem:{
          profileImgUrl:'',
          hasRealNameAuthed:false,
          nickname:''
        },
        aliPayAccountArray:[],
        aliPayAccount:'',

        links:'',
        chargeMethod:'',
        friendAccount:'',
        Rcoins:''
    }
  },
  components:{
  	pageFooter,
  	mobileFooter,
  	mobileList
  },
  mounted(){
    let self = this;
    this.getBankDetailFunc();
    this.getInfo(this.billID);
    
  },
  methods:{
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
    getInfo(billId){
      var param={
        "billID":billId
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

              this.typeStr = res.data.typeStr;
              if(this.typeStr == 'R幣儲值'){
                this.showWhich = 1;
              }else if(this.typeStr == '微信錢包儲值'){
                this.showWhich = 2;
              }else if(this.typeStr == '支付寶儲值'){
                this.showWhich = 3;
              }else if(this.typeStr == '淘寶/天貓/阿里巴巴代付'){
                this.showWhich = 4;
                this.chargeMethod = res.data.chargeInfo?res.data.chargeInfo.chargeMethod:'';
                this.links= res.data.itemInfo?res.data.itemInfo.itemLink:'';
              }else if(this.typeStr == '其他網站代購'){
                this.showWhich = 5;
                this.chargeMethod = res.data.chargeInfo?res.data.chargeInfo.chargeMethod:'';
                this.links= res.data.itemInfo?res.data.itemInfo.itemLink:'';
              }

              this.billID = res.data.billID;
              this.created_at = this.transformDate(res.data.created_at);
              this.updated_at = this.transformDate(res.data.updated_at);
              this.RMBAmount = res.data.RMBAmount;
              this.rate = res.data.rate;
              this.feeAmount = res.data.fee;
              this.feeRate=res.data.feeRate;
              this.totalAmount = res.data.NtdAmount;
              this.comments = res.data.comment;

              //付款银行账号
              if(res.data.chargeInfo.chargeFromAccount){
                this.userBankName = res.data.chargeInfo.chargeFromAccount.bankName;
                this.userLastSix = res.data.chargeInfo.chargeFromAccount.last6digital;
              }

              if(res.data.chargeInfo.chargeAccount){
                this.userBankName = res.data.chargeInfo.chargeAccount.bankName;
                this.userLastSix = res.data.chargeInfo.chargeAccount.last6digital;
              }

              //收款银行账号
              if(res.data.chargeInfo.toOurAccount){
                this.finalbankDetailInfo.company=res.data.chargeInfo.toOurAccount.accountName;
                this.finalbankDetailInfo.account=res.data.chargeInfo.toOurAccount.bankCode+' '+res.data.chargeInfo.toOurAccount.bankName+' '+'收款賬號'+res.data.chargeInfo.toOurAccount.accountCode;
              }
              
              //微信账号
              if(res.data.rechargeInfo){
                if(res.data.rechargeInfo.rechargeAccountType=='wechat'){
                    if(res.data.rechargeInfo.rechargeToAccount){
                      this.wechatAccountItem.profileImgUrl = res.data.rechargeInfo.rechargeToAccount.profileImgUrl;
                      this.wechatAccountItem.nickname = res.data.rechargeInfo.rechargeToAccount.nickname;
                      this.wechatAccountItem.hasRealNameAuthed = true;
                    }
                }
                if(res.data.rechargeInfo.rechargeAccountType == 'alipay'){
                  if(res.data.rechargeInfo.rechargeToAccount){
                    this.aliPayAccount = res.data.rechargeInfo.rechargeToAccount.user_id;
                    this.aliPayAccountArray.push({
                      alipayAccount:res.data.rechargeInfo.rechargeToAccount.alipayAccount,
                      user_id:res.data.rechargeInfo.rechargeToAccount.user_id
                    });
                  }
                  console.log('aliPayAccountArray=',this.aliPayAccountArray);
                }
              }

              if(res.data.paymentInfo){
                this.friendAccount = res.data.paymentInfo.friendAlipayAccount;
              }

              if(res.data.userInfo){
                this.Rcoins = res.data.userInfo.Rcoins;
              }

              this.judgeState(res.data.typeState,res.data.dealState);
              
            }else{
              layer.msg('訂單获取失敗,請重新再試！',{icon:5});
            }
          }.bind(this),
          error:function(res){
            layer.msg('訂單获取失敗,請重新再試！',{icon:5});
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
   

  }
}
</script>
<style > 
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