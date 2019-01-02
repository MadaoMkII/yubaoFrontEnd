<template>
  <div class="orderList" style="position:relative;">
    <div>
      <div class="row nomargin bar hidden-sm hidden-xs" style="margin: 0;background: #ff8500;height: 34px;">
        <div class="col-lg-12 col-md-12 nopadding">
          <div class="row nomargin">
            <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
              <a href="" class="pull-left" style="margin-right: 30px;">會員中心</a>
              <!-- <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/messageicon.png" class="pull-left"/>消息</a> -->
              <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/shensuicon.png"
                                                                            class="pull-left"/>申訴&提問</a>
              <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/listicon.png"
                                                                            class="pull-left"/>工單</a>
              <a href="" class="pull-right">登出</a>
              <a href="" class="pull-right" style="margin-right: 30px;"><img src="../../assets/images/homeicon.png"
                                                                             class="pull-left"/>首頁</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row nomargin hidden-lg hidden-md" style="margin: 0;background: #ff8500;">
        <div class="col-sm-4 col-xs-4 col-sm-offset-4 col-xs-offset-4">
          <p style="margin-bottom: 0;line-height: 42px;color: #fff;">訂單列表</p>
        </div>
        <mobileList></mobileList>
      </div>
      <div class="row nomargin" style="margin: 0;margin-top: 20px;margin-bottom: 50px;min-height: 450px;">
        <div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding">
          <div class="row nomargin" style="background:#fff;">
            <div class="col-lg-12 col-md-12" style="padding: 0;">
              <div class="box">
                <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                  <div class="col-lg-12 col-md-12">
                    <p class="pull-left title"><img src="../../assets/images/orderlisticon.png"
                                                    style="margin-right: 10px;"/>交易記錄</p>
                  </div>
                </div>
                <div class="row nomargin" style="margin: 15px;">
                  <div class="col-lg-12 col-md-12 table-responsive">
                    <table class="table table-striped orderListTable">
                      <thead>
                      <tr>
                        <th class="hidden-sm hidden-xs">類型</th>
                        <th>訂單編號</th>
                        <th class="hidden-sm hidden-xs">訂單金額</th>
                        <th class="hidden-sm hidden-xs">匯率</th>
                        <th class="hidden-sm hidden-xs">應付新台幣</th>
                        <th class="hidden-sm hidden-xs">完成時間</th>
                        <!--<th>
                                                      <select name="" class="form-control" v-model="dealState" v-on:change="getListInfo(1)" style="font-size: 12px; margin-bottom: -6px;" >
                                                          <option value="">交易狀態</option>
                                                          <option :value="item" v-for="(item,index) in dealStatesArray">{{item}}</option>
                                                      </select>
                                                  </th>-->
                        <th class="hidden-sm hidden-xs">交易狀態</th>
                        <th>操作</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in orderListInfo">
                        <td class="hidden-sm hidden-xs">
                          <!--<p class="pull-left nomargin" style="text-align: center;width: 100%;font-size: 10px;">代付</p>
                                                      <p class="pull-left success nomargin" v-if="item.typeState == 1" style="text-align: center;width: 100%;font-size: 10px;">代付成功</p>
                                                      <p class="pull-left failed nomargin" v-if="item.typeState == 0" style="text-align: center;width: 100%;font-size: 10px;">代付失败</p>
                                                      <p class="pull-left failed nomargin" v-if="item.typeState == 2" style="text-align: center;width: 100%;font-size: 10px;">链接无效</p>-->
                          {{item.typeStr}}
                        </td>
                        <td>{{item.billID}}</td>
                        <td class="hidden-sm hidden-xs">￥{{item.RMBAmount}}</td>
                        <td class="hidden-sm hidden-xs">{{item.rate}}</td>
                        <td class="hidden-sm hidden-xs">￥{{item.NtdAmount}}</td>
                        <td class="hidden-sm hidden-xs">{{item.dealDate}}</td>
                        <td class="hidden-sm hidden-xs">
                          <!--<p class="nomargin btn btn-success" v-if="item.billState == 1" style="font-size: 10px;">交易成功</p>
                                                      <p class="nomargin btn btn-default" v-if="item.dealState == 0" style="font-size: 10px;background: #999;color: #fff;border: none;">交易关闭</p>
                                                      <p class="nomargin btn btn-default" v-if="item.dealState == 2" style="font-size: 10px;background: #666;color: #fff;border: none;">原路退回</p>-->
                          <p
                            :class="item.billState=='交易完成'|| item.billState=='交易进行中'?'nomargin btn btn-success':'nomargin btn btn-default btnGray'"
                            style="font-size: 10px; width:100%;">{{item.billState}}</p>
                        </td>
                        <td>
                          <a href="javascript:void(0);" style="display: block;" @click="watchDetailBill(item)">查看</a>
                          <a href="javascript:void(0);" v-if="item.typeStr != 'R幣儲值' && item.billState=='交易完成'"
                             style="display: block;" @click="sendDealPic(item)">發送交易截圖</a>
                          <a href="javascript:void(0);" v-if="item.payFreight == 1" style="display: block;"
                             @click="transportDetailBill(item)">補繳運費</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
                <div class="row nomargin" style="margin-bottom: 20px;">
                  <div class="col-lg-12 col-md-12 paginate">
                    <paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'"
                              :container-class="'pull-right'"></paginate>
                  </div>
                </div>
              </div>
            </div>
            <!--<div class="col-lg-3 col-md-3 nopadding">
                            <div class="row nomargin">
                                <div class="col-lg-12 col-md-12 nopadding">
                                    <div class="box">
                                        <div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
                                            <div class="col-lg-12 col-md-12">
                                                <p class="pull-left title"><img src="../../assets/images/normalicon.png" style="margin-right: 10px;"/>必看！常見問題操作</p>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何關閉原本的代付鏈接再重新申請一個新的</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何關閉原本的代付鏈接再重新申請一個新的</a>
                                            </div>
                                        </div>
                                        <div class="row nomargin">
                                            <div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;">
                                                <a href="" class="pull-left ask">如何使用幫幫寶集運</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>-->
          </div>
        </div>
      </div>
      <pageFooter class="hidden-sm hidden-xs"></pageFooter>
      <mobileFooter class="hidden-lg hidden-md"></mobileFooter>
      <!--<div class="row nomargin" style="margin: 0;padding-bottom: 30px;">
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
  </div>
</template>

<script>
  //	import VuePaginate from 'vue-paginate'
  //	import {asf,init,nextPage} from '../../assets/js/pages.js'
  import {getService} from '../../assets/js/configs.js'
  import pageFooter from './pagefooter.vue'
  import mobileFooter from './mobileFooter.vue'
  import mobileList from './mobileList.vue'

  export default {
    name: 'orderList',
    components: {
      pageFooter,
      mobileFooter,
      mobileList
    },
    data() {
      return {
        orderListInfo: '',
        dealState: '',
        currentPage: 1,
        totalPage: 1,
        pageCount: 10,
        dealStatesArray: ['交易关闭', '交易完成', '交易进行中', '原路退回'],
        billState: ''
      }
    },
    mounted: function () {
      this.getListInfo(this.currentPage);

    },
    methods: {
      judgeState(typeState, dealState) {
        var billState = '';
        if (dealState == 0) {
          billState = '交易关闭';
        } else if (dealState == 1) {
          if (typeState == 1) {
            billState = '交易完成';
          }
        } else if (dealState == 2) {
          if (typeState == 1) {
            billState = '交易进行中';
          } else if (typeState == 2) {
            billState = '交易进行中';
          }
        } else if (dealState == 3) {
          billState = '原路退回';
        } else if (dealState == 4) {
          billState = 'R币退款';
        }
        return billState;

      },
      getListInfo: function () {
        var param = {
          "page": this.currentPage,
          "unit": this.pageCount
        }
        $.ajax({
          type: 'post',
          url: getService() + "/bills/findMyBills",
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
              this.orderListInfo = res.data;
              for (var i = 0; i < this.orderListInfo.length; i++) {
                this.orderListInfo[i].dealDate = this.transformDate(this.orderListInfo[i].dealDate);
                this.orderListInfo[i].billState = this.judgeState(this.orderListInfo[i].typeState, this.orderListInfo[i].dealState);
                if (this.orderListInfo[i].replacePostage) {
                  this.orderListInfo[i].payFreight = 1;
                }
              }

              this.orderListInfo.sort((a, b) => {
                return new Date(b.dealDate).getTime() - new Date(a.dealDate).getTime();
              });

              var totalNum = parseInt(res.nofdata);
              var pageMore = totalNum % this.pageCount;
              if (pageMore == 0) {
                this.totalPage = parseInt(totalNum / this.pageCount);
              } else {
                this.totalPage = parseInt(totalNum / this.pageCount) + 1;
              }
              if (this.totalPage == 0) {
                this.totalPage = 1;
              }
            }

          }.bind(this)
        });
      },
      currentPageInfo: function (pageNum) {
        this.currentPage = pageNum;
        this.getListInfo(this.currentPage);
      },
//	  	时间戳转为日期
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
//	        var str = Y+M+D+h+m+s;
//	        return date;
      },
      watchDetailBill(item) {
        this.$router.push({name: 'PopUpDetail', params: {billId: item.billID}});
      },
      transportDetailBill(item) {
        this.$router.push({name: 'UserFreight', params: {billId: item.billID, state: item.replacePostage.state}});
      },
      sendDealPic(item) {
        var param = {
          "billID": item.billID
        };
        $.ajax({
          type: 'post',
          url: getService() + "/mail/send_pic_mail",
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
              layer.msg('操作成功', {icon: 1});
            } else {
              layer.msg('操作失败', {icon: 5});
            }
          }.bind(this),
          error: function (res) {
            layer.msg('操作失败', {icon: 5});
          }
        });
      }
    }
  }
</script>

<style scoped>

  ul li {
    list-style: none;
    padding: 3px 6px;
  }

  ul li a:hover {
    color: #ff8500;
  }

  ul .active a {
    color: #ff8500;
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

  .btnGray {
    background: #999;
    color: #fff;
    border: none;
  }

  .popUp {
    position: absolute;
    left: 50%;
    margin-left: -500px;
    top: 50px;
    z-index: 99999;
  }
</style>
