<template>
	<div class="rbinfo">
		<!--PC端-->
		<div>
			<div class="row nomargin bar hidden-sm hidden-xs" style="margin: 0;background: #ff8500;height: 34px;">
				<div class="col-lg-12 col-md-12 nopadding">
					<div class="row nomargin">
						<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding">
							<a href="" class="pull-left" style="margin-right: 30px;">會員中心</a>
							<!-- <a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/messageicon.png" class="pull-left"/>消息</a> -->
							<a href="javascript:void(0)" class="pull-left" style="margin-right: 30px;" v-on:click="showAppealModal()"><img src="../../assets/images/shensuicon.png" class="pull-left"/>申訴&提問</a>
							<a href="" class="pull-left" style="margin-right: 30px;"><img src="../../assets/images/listicon.png" class="pull-left"/>工單</a>
							<a href="" class="pull-right">登出</a>
							<a href="/index" class="pull-right" style="margin-right: 30px;"><img src="../../assets/images/homeicon.png" class="pull-left"/>首頁</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row nomargin hidden-lg hidden-md" style="margin: 0;background: #ff8500;">
				<div class="col-sm-12 col-xs-12">
					<div class="dropdown">
						<p class="pull-left" style="font-size: 1em;color: #fff;margin-left: 50%;position: relative;left: -2em;margin-top: 1em;">R币</p>
					    <button type="button" class="btn dropdown-toggle pull-right" id="dropdownMenu1" data-toggle="dropdown" style="background: none;color: #fff;font-size: 2em;padding: 0;">...</button>
					    <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1" style="margin-top: 3em;">
					        <img src="../../assets/images/mobile/arrow.png" style="position: absolute;right: 0;top: -1em;"/>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/askicon.png" style="width: 1em;margin-right: 0.5em;"/>申訴</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/dealicon.png" style="width: 1em;margin-right: 0.5em;"/>交易記錄</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/RBdealicon.png" style="width: 1em;margin-right: 0.5em;"/>R幣交易明細</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/helpicon.png" style="width: 1em;margin-right: 0.5em;"/>幫助中心</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/messageicon.png" style="width: 1em;margin-right: 0.5em;"/>消息</a>
					        </li>
					        <li role="presentation">
					            <a role="menuitem" tabindex="-1" href="#" style="line-height: 2em;"><img src="../../assets/images/mobile/logouticon.png" style="width: 1em;margin-right: 0.5em;"/>登出</a>
					        </li>
					    </ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import '../../../static/css/PCstyle.css'
	export default {
		name: 'rbinfo',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	/*@import url("../../assets/css/PCstyle.css");*/
</style>