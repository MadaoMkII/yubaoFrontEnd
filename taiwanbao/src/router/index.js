import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/customer/index' //首页
import Help from '@/components/customer/help'  //帮助中心
import OrderList from '@/components/customer/orderList'  //交易列表
import Login from '@/components/customer/login'  //登录注册
import Center from '@/components/customer/center'  //会员中心
import Purchase from '@/components/customer/purchase'  //代购
import Supersede from '@/components/customer/supersede'  //代付
import MobileEntry from '@/components/customer/mobileEntry'  //手機代充入口
import RBRecharge from '@/components/customer/RBrecharge'  //R幣儲值
import AliRecharge from '@/components/customer/aliRecharge'  //支付寶儲值
import WechatRecharge from '@/components/customer/wechatRecharge'  //微信儲值
import Developing from '@/components/customer/developing'  //正在研发中
import RBInfo from '@/components/customer/RBInfo'  //R币流水
import AppealList from '@/components/customer/appealList'  //R币流水
import GetPass from '@/components/customer/getpass'  //找回密码
import UserFreight from '@/components/customer/freight'  //补缴运费
import PopUpDetail from '@/components/customer/PopUpDetail'  //补缴运费
import MobilePerson from '@/components/customer/mobilePerson'  //补缴运费

//管理端
import Rebate from '@/components/administrator/rebate.vue'  //返利设置和流水
import Advert from '@/components/administrator/advert.vue'  //广告
import Notice from '@/components/administrator/notice.vue'  //公告
import Manage from '@/components/administrator/manage.vue'  //管理中心
import Rate from '@/components/administrator/rate.vue'  //汇率设置
import Member from '@/components/administrator/member.vue'  //会员资料
import Deal from '@/components/administrator/deal.vue'  //交易管理
import Appeal from '@/components/administrator/appeal.vue'  //申诉处理
import Recommend from '@/components/administrator/recommend.vue'  //首页商品推荐
import Freight from '@/components/administrator/freight.vue'  //运费处理

import ImageTest from '@/components/administrator/imageTest.vue'  //运费处理

import LogMessage from '@/components/administrator/logMessage.vue'  //日志页面

Vue.use(Router)

export default new Router({
//	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/supersede',
      name: 'Supersede',
      component: Supersede
    },
    {
      path: '/mobileEntry',
      name: 'MobileEntry',
      component: MobileEntry
    },
    {
      path: '/RBrecharge',
      name: 'RBRecharge',
      component: RBRecharge
    },
    {
      path: '/aliRecharge',
      name: 'AliRecharge',
      component: AliRecharge
    },
    {
      path: '/wechatRecharge',
      name: 'WechatRecharge',
      component: WechatRecharge
    },
    {
      path: '/developing',
      name: 'Developing',
      component: Developing
    },
    {
      path: '/PopUpDetail',
      name: 'PopUpDetail',
      component: PopUpDetail
    },
    {
      path: '/rbinfo',
      name: 'RBInfo',
      component: RBInfo
    },
    {
      path: '/appeallist',
      name: 'AppealList',
      component: AppealList
    },
    {
      path: '/getpass',
      name: 'GetPass',
      component: GetPass
    },
    {
      path: '/userfreight',
      name: 'UserFreight',
      component: UserFreight
    },
    {
      path: '/mobilePerson',
      name: 'MobilePerson',
      component: MobilePerson
    },
//  {
//    path: '/administrator',
//    name: 'Rebate',
//    component: Rebate
//    children:[
//    	{
//	      path: '/rebate',
//	      name: 'Rebate',
//	      component: Rebate
//	    },
//	    {
//	      path: '/advert',
//	      name: 'Advert',
//	      component: Advert
//	    }
//    ]
// },
    {
      path: '/administrator_rebate',
      name: 'Rebate',
      component: Rebate
    },
    {
      path: '/administrator_advert',
      name: 'Advert',
      component: Advert
    },
    {
      path: '/administrator_notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/administrator_manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/administrator_rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/administrator_member',
      name: 'Member',
      component: Member
    },
    {
      path: '/administrator_deal',
      name: 'Deal',
      component: Deal
    },
    {
      path: '/administrator_appeal',
      name: 'Appeal',
      component: Appeal
    },
    {
      path: '/administrator_recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/administrator_freight',
      name: 'Freight',
      component: Freight
    },
    {
      path: '/administrator_imagetest',
      name: 'ImageTest',
      component: ImageTest
    },
    {
      path: '/administrator_logMessage',
      name: 'LogMessage',
      component: LogMessage
    }
  ]
})
