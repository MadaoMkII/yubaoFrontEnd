<template>
  <div class="deal" style="background: #f5f5f5;">
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
                    <p class="pull-left" style="line-height: 34px;">状态：</p>
                    <select class="pull-left form-control" style="width: 13%;margin-right: 15px;" v-model='billState'>
                      <option value="">--请选择--</option>
                      <option v-for="(item,index) in billStates" :value="index">{{item}}</option>
                    </select>
                    <p class="pull-left" style="line-height: 34px;">业务类型：</p>
                    <select class="pull-left form-control" style="width: 13%;margin-right: 15px;" v-model='typeState'>
                      <option value="">--请选择--</option>
                      <option v-for="item in typeStates" :value="item">{{item}}</option>
                    </select>
                    <p class="pull-left" style="line-height: 34px;">交易时间：</p>
                    <!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left vue-start-picker" id="startTime" style="width: 13%;margin-top: 2px;" name="start-picker"  ></datetime>-->
                    <el-date-picker class="pull-left"
                                    type="datetime"
                                    format="yyyy-MM-dd hh:mm:ss"
                                    value-format="yyyy-MM-dd hh:mm:ss"
                                    placeholder="选择日期时间" v-model="selectAfterTime" :picker-options="startDatePicker">
                    </el-date-picker>
                    <p class="pull-left" style="line-height: 34px;margin: 0 5px;">-</p>
                    <!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="endTime" style="width: 13%;margin-top: 2px;margin-right: 10px;"></datetime>-->
                    <el-date-picker class="pull-left"
                                    type="datetime"
                                    format="yyyy-MM-dd hh:mm:ss"
                                    value-format="yyyy-MM-dd hh:mm:ss"
                                    placeholder="选择日期时间" v-model="selectBeforeTime" :picker-options="endDatePicker">
                    </el-date-picker>
                    <button type="button" class="pull-left btn btn-default" style="margin-left:20px;"
                            @click="exportExcelFunc">导出
                    </button>
                    <a id="exportA" href="javascript:void(0);" style="display:none;"><span id="spanId"></span></a>
                  </div>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <input type="text" class="pull-left form-control" style="width: 20%; margin-right: 10px;"
                           placeholder="输入订单编号" v-model="searchBillId"/>

                    <button type="button" class="pull-left btn btn-default" style="margin-left: 10px;"
                            @click="searchByChooseFunc">搜索
                    </button>
                  </div>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <div class="col-lg-12 col-md-12">
                    <table class="table table-hover" id="dealMainTable">
                      <thead>
                      <tr>
                        <th style="border-top-left-radius: 5px;width: 10%;">业务类型</th>
                        <th>订单编号</th>
                        <th>订单金额(RMB)</th>
                        <th>汇率</th>
                        <th>应付新台币</th>
                        <th>交易状态</th>
                        <th>交易时间</th>
                        <th style="border-top-right-radius: 5px;width: 15%;">操作</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item,index) in allDeals">
                        <td style="line-height: 40px;border-left: 1px solid #666;">{{item.typeStr}}</td>
                        <td style="line-height: 40px;">{{item.billID}}</td>
                        <td style="line-height: 40px;">{{item.RMBAmount}}</td>
                        <td style="line-height: 40px;">{{item.rate}}</td>
                        <td style="line-height: 40px;">{{item.NtdAmount}}</td>
                        <td style="line-height: 40px;">{{item.newState}}</td>
                        <td style="line-height: 40px;">{{item.newdate}}</td>
                        <td style="border-right: 1px solid #666;">
                          <a href="javascript:void(0)"><img src="../../assets/images/administrator/edit.png"
                                                            style="width: 24px;margin-top: 6px;margin-right: 15px;"
                                                            @click="handleDealDtails(item)"/></a>
                          <a href="javascript:void(0)"><img src="../../assets/images/administrator/check.png"
                                                            style="width: 24px;margin-top: 6px;margin-right: 15px;"
                                                            @click="showDealDtails(item)"/></a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row nomargin">
                  <div class="col-lg-12 col-md-12 paginate">
                    <paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'"
                              :container-class="'pull-right'"></paginate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="width: 80%;">
        <div class="modal-content">
          <div class="modal-header"
               style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
            </button>
            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
              src="../../assets/images/shensuicon.png" class="pull-left"
              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>{{popTitle}}</h4>
          </div>
          <div class="modal-body" style="padding: 15px;">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <h4 class="pull-left bolden">订单详情</h4>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单号：{{billDetails.billID}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">付款状态：<span style="color: #08bf69;"
                                                v-if="billDetails.typeState == 1">付款成功</span><span
                  v-else-if="billDetails.typeState == 0" style="color: #ff0000;">付款失败</span><span
                  v-else-if="billDetails.typeState == 2" style="color: #08bf69;">进行中</span></p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单状态：<span style="color: #08bf69;"
                                                v-if="billDetails.dealState == 0">交易关闭</span><span
                  style="color: #08bf69;" v-else-if="billDetails.dealState == 1">交易完成</span><span
                  style="color: #08bf69;" v-else-if="billDetails.dealState == 2">进行中</span><span style="color: #ff0000;"
                                                                                                 v-else-if="billDetails.dealState == 3">原路退回</span><span
                  style="color: #ff0000;" v-else-if="billDetails.dealState == 4">已退款</span></p>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单类型：{{billDetails.typeStr}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单金额：{{billDetails.RMBAmount}}RMB</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单汇率：1RMB={{billDetails.rate}}NT</p>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4" v-if="billDetails.typeStr == '支付寶儲值'">
                <p class="pull-left">充值支付宝：{{billDetails.rechargeInfo.rechargeToAccount.alipayAccount}}</p>
              </div>
              <div class="col-lg-4 col-md-4" v-if="billDetails.typeStr == '微信錢包儲值'">
                <p class="pull-left" style="text-align: left;">
                  充值微信账户：{{billDetails.rechargeInfo.rechargeToAccount.openID}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">应付新台币：{{billDetails.NtdAmount}}NT</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">订单创建时间：{{billDetails.newCreateTime}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">手续费：{{billDetails.fee}}NT</p>
              </div>
              <div class="col-lg-8 col-md-8" v-if="billDetails.chargeInfo">
                <p class="pull-left" v-if="billDetails.chargeInfo.chargeMethod == 'Rcoin'">订单支付方式：R币支付</p>
                <!--<p class="pull-left" v-if="billDetails.chargeInfo.chargeMethod == 'bankAccount'">订单支付方式：银行转账 {{billDetails.chargeInfo.chargeFromAccount.bankName}} {{billDetails.chargeInfo.chargeFromAccount.last6digital}} {{billDetails.chargeInfo.chargeFromAccount.accountName}}</p>-->
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-6 col-md-6" v-if="billDetails.chargeInfo">
                <!--<p class="pull-left" v-if="billDetails.chargeInfo.chargeMethod == 'Rcoin'">订单支付方式：R币支付</p>-->
                <p class="pull-left" v-if="billDetails.chargeInfo.chargeMethod == 'bankAccount'">订单支付方式：银行转账
                  {{billDetails.chargeInfo.chargeFromAccount.bankName}}
                  {{billDetails.chargeInfo.chargeFromAccount.last6digital}}
                  {{billDetails.chargeInfo.chargeFromAccount.accountName}}</p>
              </div>
              <div class="col-lg-6 col-md-6" v-if="billDetails.chargeInfo">
                <p class="pull-left" v-if="billDetails.chargeInfo.chargeMethod == 'bankAccount'">
                  汇入玉宝账户：{{billDetails.chargeInfo.toOurAccount.bankCode}}
                  {{billDetails.chargeInfo.toOurAccount.bankName}} {{billDetails.chargeInfo.toOurAccount.accountCode}}
                  {{billDetails.chargeInfo.toOurAccount.accountName}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 30px;">
              <div class="col-lg-12 col-md-12">
                <h4 class="pull-left bolden">代购商品信息</h4>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left">代购链接：{{billDetails.itemInfo?billDetails.itemInfo.itemLink:''}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left" style="margin-right:20px;">商品名称：</p>
                <div class="pull-left">
                  <div class="row">
                    <p class="pull-left">{{billDetails.itemInfo?billDetails.itemInfo.itemName:''}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left">订单留言：{{billDetails.comment}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 30px;">
              <div class="col-lg-12 col-md-12">
                <h4 class="pull-left bolden">用户详情</h4>
                <button type="button" class="btn btn-default pull-right"
                        v-if="popTitle =='订单处理' && billDetails.typeStr!='R幣儲值'" style="margin-right: 30px;"
                        @click="rCoinBackFunc">R币退款
                </button>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">用户姓名：{{billDetails.userInfo?billDetails.userInfo.realName:''}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">用户昵称：{{billDetails.userInfo?billDetails.userInfo.nickName:''}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">用户手机号：{{billDetails.userInfo?billDetails.userInfo.tel_number:''}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">用户邮箱：{{billDetails.userInfo?billDetails.userInfo.email_address:''}}</p>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left">VIP等级：{{billDetails.userInfo?billDetails.userInfo.VIPLevel:''}}</p>
              </div>
            </div>
            <div class="row" style="margin-top: 30px;">
              <div class="col-lg-12 col-md-12" v-if="popTitle =='订单处理'">
                <h4 class="pull-left bolden">订单处理</h4>
                <button type="button" class="btn btn-default pull-right" style="margin-right: 30px;"
                        v-for="(item,index) in bottonValues" :class="{activeBtnBill:chooseNum==index}"
                        @click="chooseWhichBottonFunc(item,index)">{{item}}
                </button>
              </div>
              <div class="col-lg-12 col-md-12" v-if="popTitle =='订单详情'">
                <h4 class="pull-left bolden">订单处理</h4>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-4 col-md-4">
                <p class="pull-left" style="line-height: 34px;">充值金额：</p>
                <input type="text" class="pull-left form-control" style="width: 50%;"
                       :disabled="popTitle =='订单详情'?true:false" v-model="billParam.b_rechargeAmount"/>
                <p class="pull-left" style="line-height: 34px;margin-left: 5px;">RMB</p>
              </div>
              <div class="col-lg-4 col-md-4" v-if="IsShowAccount">
                <p class="pull-left" style="line-height: 34px;">使用账号：</p>
                <select name="" class="pull-left form-control" style="width: 60%;" v-model="billParam.b_userAccount"
                        :disabled="popTitle =='订单详情'?true:false">
                  <option value="">--</option>
                  <option v-for="(item,index) in billDetails.payAccountNames" :value="item" v-text="item"></option>
                </select>
              </div>
              <div class="col-lg-4 col-md-4">
                <p class="pull-left" style="line-height: 34px;">充值时间：</p>
                <!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="startTime" style="width: 60%;margin-top: 2px;" v-model="billParam.b_rechargeTime" :disabled="popTitle =='订单详情'?true:false"></datetime>-->
                <el-date-picker class="pull-left"
                                type="datetime"
                                format="yyyy-MM-dd hh:mm:ss"
                                value-format="yyyy-MM-dd hh:mm:ss"
                                placeholder="选择日期时间" v-model="billParam.b_rechargeTime"
                                :disabled="popTitle =='订单详情'?true:false">
                </el-date-picker>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left" style="line-height: 34px; margin-right:28px;">备注：</p>
                <input type="text" name="" id="" value="" class="pull-left form-control" style="width: 80%;"
                       v-model="billParam.b_moreInfo" :disabled="popTitle =='订单详情'?true:false"/>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;" v-if="IsShowPics">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left " style="margin-right:20px;">充值证明：</p>
                <div class="pull-left" style="width: 90%;">
                  <div class="row">
                    <div class="col-lg-3 col-md-3" style="padding: 15px;" v-for="item in imgSrcs">
                      <img v-bind:src="item" style="width: 100%;border: 1px solid #999;border-radius: 10px;"/>
                    </div>
                    <div class="col-lg-3 col-md-3" style="padding: 15px;">
                      <a href="javascript:void(0)" v-on:click="setImg()" v-if="popTitle =='订单处理'"><img
                        src="../../assets/images/updateImg_03.jpg"
                        style="width: 100%;border: 1px solid #999;border-radius: 10px;"/></a>
                    </div>
                    <input type="file" id="appealPic" style="margin-top: 5px;display: none;" v-on:change="updateImg()"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" v-if="popTitle =='订单处理'">
              <button type="button" class="btn btn-primary" @click="submitBillHandleFunc">提交</button>
            </div>
            <div class="row" style="margin-top: 30px;" v-if="IsShowTransport">
              <div class="col-lg-12 col-md-12">
                <h4 class="pull-left bolden">补缴运费</h4>
              </div>
            </div>
            <div class="row" style="margin-top: 15px;" v-if="IsShowTransport">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left" style="line-height: 34px;">补缴金额：</p>
                <input type="text" class="pull-left form-control" style="width: 20%;"
                       v-model="transportParam.t_rechargeAmount" :disabled="popTitle =='订单详情'?true:false"/>
                <p class="pull-left" style="line-height: 34px;margin-left: 5px;">NT</p>
                <!--<button type="button" class="btn btn-default pull-left" style="margin-left: 30px;">提交</button>
                          <button type="button" class="btn btn-default pull-left" style="margin-left: 15px;">补缴完成</button>-->
                <p class="pull-left" style="line-height: 34px; margin-left:30px;">补缴时间：</p>
                <!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="transportTime" style="margin-top: 2px;" v-model="transportParam.t_rechargeTime" :disabled="popTitle =='订单详情'?true:false"></datetime>-->
                <el-date-picker class="pull-left"
                                type="datetime"
                                format="yyyy-MM-dd hh:mm:ss"
                                value-format="yyyy-MM-dd hh:mm:ss"
                                placeholder="选择日期时间" v-model="transportParam.t_rechargeTime"
                                :disabled="popTitle =='订单详情'?true:false">
                </el-date-picker>

              </div>
            </div>
            <div class="row" style="margin-top: 15px;" v-if="IsShowTransport">
              <div class="col-lg-12 col-md-12">
                <p class="pull-left" style="line-height: 34px;">补缴备注：</p>
                <input type="text" class="pull-left form-control" style="width: 90%;"
                       v-model="transportParam.t_moreInfo" :disabled="popTitle =='订单详情'?true:false"/>
              </div>
            </div>
            <div class="row" v-if="IsShowTransport && popTitle =='订单处理'" style="margin-top: 30px; margin-bottom: 30px;">
              <button type="button" class="btn btn-primary" @click="transportFeeFunc">新增运费订单</button>
              <button type="button" class="btn btn-primary" @click="transportFinishFunc" style="margin-left: 30px;">
                补缴完成
              </button>
              <button type="button" class="btn btn-primary" @click="transportunFinishedFunc" style="margin-left: 30px;">
                未补缴
              </button>
            </div>
          </div>
          <!--<div class="modal-footer" v-if="popTitle =='订单处理'">
                  <center><button type="button" class="btn btn-primary">提交</button></center>
              </div>-->
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
  import leftmenu from './menu.vue'
  import {getService} from '../../assets/js/configs.js'
  import rightheader from './rightheader.vue'
  //import datetime from 'vue-datetimepicker'
  export default {
    name: 'notice',
    data() {
      return {
        allDeals: [],
        currentPage: 1,
        totalPage: 1,
        pageCount: 8,
        typeStates: [
          'R幣儲值',
          '淘寶/天貓/阿里巴巴代付',
          '其他網站代購',
          '支付寶儲值',
          '微信錢包儲值'
        ],
        billStates: [
          '交易关闭', '交易完成', '交易进行中', '原路退回'
        ],
        bottonValues: [
          '等待付款', '已付款等待处理', '交易完成', '交易关闭'

        ],
        billState: '',
        typeState: '',
        searchBillId: '',
        searchUserId: '',
        selectAfterTime: '',
        selectBeforeTime: '',
        popTitle: '',
        IsShowAccount: true,
        IsShowPics: true,
        IsShowTransport: true,
        billDetails: {},
        billParam: {
          b_rechargeAmount: '0',//充值金额
          b_userAccount: '',
          b_rechargeTime: '',
          b_moreInfo: '',
        },
        transportParam: {
          t_rechargeAmount: '0',//充值金额
          t_rechargeTime: '',
          t_moreInfo: '',
        },
        chooseNum: -1,
        imgSrcs: [],
        startDatePicker: this.beginDate(),
        endDatePicker: this.processDate(),


      }
    },
    components: {
      leftmenu,
      rightheader,
      //datetime
    },
    mounted: function () {
      this.getBillsAllDeals();
    },
    methods: {
      setImg: function () {
        $('#appealPic').click();
      },
      updateImg: function () {
        var formData = new FormData();
        var fileObj = document.getElementById('appealPic').files[0];
        formData.append('file', fileObj);
        $.ajax({
          url: getService() + "/uploadImgForEndpoint",
          type: 'post',
          contentType: false,
          dataType: "json",
          data: formData,
          processData: false,
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == '0') {
              this.imgSrcs.push(res.data);
              console.log(this.imgSrcs);
            }
          }.bind(this)
        });
      },
      getBillsAllDeals() {
        var that = this;
        var param = {
          "page": that.currentPage,
          "unit": that.pageCount
        }
        that.searchBill(param);

      },
      currentPageInfo: function (pageNum) {
        this.currentPage = pageNum;
        this.searchByChooseFunc(this.currentPage);
      },
      transformDate: function (timeStamp) {
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
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;

      },
      searchByChooseFunc() {
        console.log('here');
        var that = this;
        var deal = '';
        var type = '';
        console.log('startTime=', $('#startTime').val());
        switch (that.billState) {
          case 0:
            deal = 0;
            break;
          case 1:
            deal = 1;
            type = 1;
            break;
          case 2:
            deal = 2;
            break;
          case 3:
            deal = 3;
            break;
        }
        var param = {
          "typeStr": that.typeState,
          "dealState": deal,
          "typeState": type,
          "billID": that.searchBillId,
          "createdAt": {
            "beforeDate": that.selectBeforeTime,
            "afterDate": that.selectAfterTime
          },
          "page": that.currentPage,
          "unit": that.pageCount
        }

        that.searchBill(param);

      },
      searchBill(params) {
        var that = this;
        $.ajax({
          type: 'post',
          url: getService() + "/bills/getBills",
          dataType: "json",
          data: JSON.stringify(params),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            console.log('deal res=', res);
            if (res.error_code == 0) {
              that.allDeals = res.data;
              for (var i = 0; i < that.allDeals.length; i++) {
                that.allDeals[i].newdate = that.transformDate(that.allDeals[i].dealDate);
                if (that.allDeals[i].dealState == 0) {
                  that.allDeals[i].newState = '交易关闭'
                } else if (that.allDeals[i].dealState == 1) {
                  if (that.allDeals[i].typeState == 1) {
                    that.allDeals[i].newState = '交易完成'
                  }
                } else if (that.allDeals[i].dealState == 2) {
                  if (that.allDeals[i].typeState == 1) {
                    that.allDeals[i].newState = '交易进行中'
                  } else if (that.allDeals[i].typeState == 2) {
                    that.allDeals[i].newState = '交易进行中'
                  }
                } else if (that.allDeals[i].dealState == 3) {
                  that.allDeals[i].newState = '原路退回'
                }
              }
              that.allDeals.sort((a, b) => {
                return b.dealDate - a.dealDate;
              });
              that.totalPage = Math.ceil(res.nofdata / that.pageCount);

            }
          }
        });
      },
      judgeMore(item) {
        switch (item.typeStr) {
          case 'R幣儲值':
            this.IsShowAccount = false;
            this.IsShowPics = false;
            this.IsShowTransport = false;
            break;
          case '淘寶/天貓/阿里巴巴代付':
            this.IsShowAccount = true;
            this.IsShowPics = true;
            this.IsShowTransport = true;
            break;
          case '其他網站代購':
            this.IsShowAccount = true;
            this.IsShowPics = true;
            this.IsShowTransport = true;
            break;
          case '支付寶儲值':
            this.IsShowAccount = false;
            this.IsShowPics = true;
            this.IsShowTransport = false;
            break;
          case '微信錢包儲值':
            this.IsShowAccount = false;
            this.IsShowPics = true;
            this.IsShowTransport = false;
            break;

        }

      },
      ajaxGetBillDetail(param) {
        var that = this;
        $.ajax({
          type: 'post',
          url: getService() + "/bills/getBillDetail",
          dataType: "json",
          data: JSON.stringify(param),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            console.log('dealdetail res=', res);
            if (res.error_code == 200 || res.error_code == 0) {
              that.billDetails = res.data;
              //payAccountNames 试用账号进行拼接
              that.billDetails.payAccountNames = [];
              if (that.billDetails.paymentInfo) {
                that.billDetails.payAccountNames.push(that.billDetails.paymentInfo.friendAlipayAccount);
              }

              if (that.billDetails.processOrder) {
                that.billParam.b_rechargeTime = that.transformDate(that.billDetails.processOrder.chargeDate);
                that.billParam.b_rechargeAmount = that.billDetails.processOrder.chargeAmount;
                that.billParam.b_moreInfo = that.billDetails.processOrder.comment;
                that.imgSrcs = that.billDetails.processOrder.imageFilesNames;
              } else {
                that.billParam.b_rechargeTime = '';
                that.billParam.b_rechargeAmount = 0;
                that.billParam.b_moreInfo = "";
                that.imgSrcs = [];
              }
              that.billParam.b_userAccount = that.billDetails.paymentInfo ? that.billDetails.paymentInfo.friendAlipayAccount : '';

              that.billDetails.newCreateTime = that.transformDate(that.billDetails.created_at);

              if (that.billDetails.replacePostage) {
                that.transportParam.t_moreInfo = that.billDetails.replacePostage.comment;
                that.transportParam.t_rechargeTime = that.transformDate(that.billDetails.replacePostage.replaceTime);
                that.transportParam.t_rechargeAmount = that.billDetails.replacePostage.postageAmount;
              } else {
                that.transportParam.t_moreInfo = '';
                that.transportParam.t_rechargeTime = '';
                that.transportParam.t_rechargeAmount = '';

              }
            }
          }
        });
      },
      showDealDtails(item) {
        this.popTitle = '订单详情';
        this.judgeMore(item);
        this.billDetails = {};
        this.chooseNum = -1;
        var param = {
          "billID": item.billID
        }

        this.ajaxGetBillDetail(param);
        $('#myModal').modal('show');

      },
      handleDealDtails(item) {
        this.popTitle = '订单处理';
        this.judgeMore(item);
        this.billDetails = {};
        this.chooseNum = -1;

        var param = {
          "billID": item.billID
        }

        this.ajaxGetBillDetail(param);
        $('#myModal').modal('show');

      },
      rCoinBackFunc() {
        var that = this;
        console.log('bill=', that.billDetails);
        var param = {
          "billID": that.billDetails.billID
        };
        $.ajax({
          type: 'post',
          url: getService() + "/recharge/returnRcoin",
          dataType: "json",
          data: JSON.stringify(param),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            console.log('dealdetail res=', res);
            if (res.error_code == 200 || res.error_code == 0) {
              layer.msg('操作成功', {icon: 1});
              var lookparam = {
                "billID": that.billDetails.billID
              }

              that.ajaxGetBillDetail(lookparam);

            } else {
              layer.msg('操作失败', {icon: 5});
            }
          },
          error: function (res) {
            layer.msg('操作失败', {icon: 5});
          }
        });
      },
      chooseWhichBottonFunc(item, index) {
        var that = this;
        this.chooseNum = index;
        var tt = '';
        var dd = '';
        switch (index) {
          case 0:
            tt = 2;
            dd = 2;
            break;
          case 1:
            tt = 1;
            dd = 2;
            break;
          case 2:
            tt = 1;
            dd = 1;
            break;
          case 3:
            tt = '';
            dd = 0;
            break;

        }
        var param = {
          "typeState": tt,
          "dealState": dd,
          "billID": that.billDetails.billID
        }
        layer.msg('确定修改订单状态吗？', {
          time: 0
          , btn: ['确定', '取消']
          , yes: function (index) {
            layer.close(index);
            $.ajax({
              type: 'post',
              url: getService() + "/bills/setBillStatus",
              dataType: "json",
              data: JSON.stringify(param),
              async: true,
              headers: {'Content-Type': 'application/json'},
              xhrFields: {
                withCredentials: true
              },
              crossDomain: true,
              success: function (res) {
                if (res.error_code == '0' || res.error_code == '200') {
                  layer.msg('操作成功', {icon: 1});
                  var lookparam = {
                    "billID": that.billDetails.billID
                  }

                  that.ajaxGetBillDetail(lookparam);

                }
                else {
                  layer.msg('操作失败', {icon: 5});
                }
              },
              error: function () {
                layer.msg('操作失败', {icon: 5});
              }
            });
          }
        });
      },
      submitBillHandleFunc() {
        var that = this;
        var url = '';
        var param = {};
        console.log('bill=', that.billDetails);

        if (that.billDetails.typeStr == that.typeStates[0] || that.billDetails.typeStr == that.typeStates[3] || that.billDetails.typeStr == that.typeStates[4]) {
          url = '/recharger/addProcessOrderForCharge';
          param = {
            "chargeDate": that.billParam.b_rechargeTime,
            "chargeAmount": that.billParam.b_rechargeAmount,
            "comment": that.billParam.b_moreInfo,
            "billID": that.billDetails.billID
          };
        } else {
          url = '/item/addProcessOrder';
          param = {
            "billID": that.billDetails.billID,
            "imageFilesNames": that.imgSrcs,
            "chargeDate": that.billParam.b_rechargeTime,
            "chargeAmount": that.billParam.b_rechargeAmount,
            "comment": that.billParam.b_moreInfo,
          };
        }
        $.ajax({
          type: 'post',
          url: getService() + url,
          dataType: "json",
          data: JSON.stringify(param),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            console.log('dealdetail res=', res);
            if (res.error_code == 200 || res.error_code == 0) {
              layer.msg('操作成功', {icon: 1});
            } else {
              layer.msg('操作失败', {icon: 5});
            }
          },
          error: function (res) {
            layer.msg('操作失败', {icon: 5});
          }
        });
      },
      transportPost(param) {
        var that = this;
        $.ajax({
          type: 'post',
          url: getService() + '/item/addReplacePostageBill',
          dataType: "json",
          data: JSON.stringify(param),
          async: true,
          headers: {'Content-Type': 'application/json'},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (res) {
            if (res.error_code == 200 || res.error_code == 0) {
              layer.msg('操作成功', {icon: 1});
            } else {
              layer.msg('操作失败', {icon: 5});
            }
          },
          error: function (res) {
            layer.msg('操作失败', {icon: 5});
          }
        });

      },
      transportFeeFunc() {
        var that = this;
        var param = {
          "comment": that.transportParam.t_moreInfo,
          "postageAmount": that.transportParam.t_rechargeAmount,
          "replaceTime": that.transportParam.t_rechargeTime,
          "billID": that.billDetails.billID
        };
        that.transportPost(param);

      },
      exportExcelFunc() {
        var html = "<html><head><meta charset='utf-8' /></head><body>" + $('#dealMainTable').prop("outerHTML") + "</body></html>";
        var blob = new Blob([html], {type: "application/vnd.ms-excel"});
        var newA = $('#exportA');
        $('#exportA').attr('href', URL.createObjectURL(blob));
        $('#exportA').attr('download', '交易管理.xls');
        $("#spanId").click();
      },
      transportFinishFunc() {
        var that = this;
        var param = {
          "status": 1,
          "comment": that.transportParam.t_moreInfo,
          "postageAmount": that.transportParam.t_rechargeAmount,
          "replaceTime": that.transportParam.t_rechargeTime,
          "billID": that.billDetails.billID
        };
        that.transportPost(param);

      },
      transportunFinishedFunc() {
        var that = this;
        var param = {
          "status": 0,
          "comment": that.transportParam.t_moreInfo,
          "postageAmount": that.transportParam.t_rechargeAmount,
          "replaceTime": that.transportParam.t_rechargeTime,
          "billID": that.billDetails.billID
        };
        that.transportPost(param);

      },
      beginDate() {
        const self = this
        return {
          disabledDate(time) {
            if (self.selectBeforeTime) {  //如果结束时间不为空，则小于结束时间
              return new Date(self.selectBeforeTime).getTime() < time.getTime()
            }
          }
        }
      },
      processDate() {
        const self = this
        return {
          disabledDate(time) {
            if (self.selectAfterTime) {  //如果开始时间不为空，则结束时间大于开始时间
              return new Date(self.selectAfterTime).getTime() > time.getTime()
            }
          }
        }
      },

    }
  }
</script>

<style scoped>
  table th, td {
    text-align: center;
    white-space: nowrap; /*控制单行显示*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*隐藏的字符用省略号表示*/
  }

  table th {
    background: #33b8ff;
    color: #fff;
  }

  table td {
    border-bottom: 1px solid #666;
  }

  .paginate ul li {
    list-style: none;
    float: left;
    padding: 3px 6px;
    width: auto;
    border: none;
  }

  .paginate ul li a:hover {
    color: #ff8500;
  }

  .paginate ul .active a {
    color: #ff8500;
  }

  .paginate ul .active {
    border: none;
  }

  .bolden {
    font-weight: bold !important;
  }

  .activeBtnBill {
    background: #00a6ff !important;
    border: blue !important;
  }
</style>
