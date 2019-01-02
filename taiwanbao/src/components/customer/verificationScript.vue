<template>
	<div class="modal fade" id="verificationScriptModal" v-on:click="showIdentity()" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog" style="width: 100%;max-width: 800px;margin:0 auto;margin-top:30px;">
	        <div class="modal-content" style="border-radius: 5px;">
	            <div class="modal-header"
		               style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		            <button type="button" v-on:click="showIdentity()" class="close" data-dismiss="modal" aria-hidden="true"
		                    style="color: #fff;font-size: 14px;opacity: 1;">&times;
		            </button>
		            <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img
		              src="../../assets/images/shenfenicon2.png" class="pull-left"
		              style="width: 15px;margin-top: 3px;margin-right: 5px;"/>為什麼要驗證身份證</h4>
		          </div>
	            <div class="modal-body" style="padding-bottom: 30px;">
	            	<div class="row" style="margin-top: 15px;">
	            		<p class="pull-left" style="text-align: left;margin-bottom: 0;">1、依據經濟部發布法規</p>
	            	</div>
	            	<div class="row" style="margin-top: 15px;">
	            		<p class="pull-left" style="text-align: left;margin-bottom: 0;">2、使用代儲代付服務必填</p>
	            	</div>
	            	<div class="row" style="margin-top: 15px;">
	            		<p class="pull-left" style="text-align: left;margin-bottom: 0;">3、供主管單位備查</p>
	            	</div>
	            	<div class="row" style="margin-top: 30px;">
	            		<p class="pull-left" style="text-align: left;margin-bottom: 0;">102年05月31日，經濟部發佈法規：資料處理服務業者受託處理跨境網路交易評鑑要點<br />要點第八條第一項：<br />資料處理服務業者必須留存服務使用者之交易明細資料，交易明細資料應包含服務使用者之姓名或機構名稱、出生年月日或核准設立日期、身分證字號或統一編號或其他身分證明登記證號。</p>
	            	</div>
	            	<div class="row" style="margin-top: 15px;">
	            		<p class="pull-left" style="text-align: left;margin-bottom: 0;">YUBAO建站以來，一直僅守政府法規，為了合法使用本站服務，請配合完成身份證填寫。<br />為提醒您，不要選擇不合法、不合規的業者及來源不明的境外網站，也許您暫時可以取得您要的服務，但其風險是很高的，稍有問題，您將血本無歸，並且找不到人可以負責。</p>
	            	</div>
	            </div>
	        </div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
</template>

<script>
	export default{
		name:'verificationScriptModal',
		methods:{
			showIdentity:function () {
				$('#identityModal').modal('show');
			}
		}
	}
</script>

<style>
</style>