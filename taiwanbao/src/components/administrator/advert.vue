<template>
	<div class="advert" style="background: #f5f5f5;">
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
										<ul class="pull-left" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
											<a href="javascript:void(0)" v-on:click="setTitle(1)"><li id="index" class="pull-left active">首页</li></a>
											<!--<a href="javascript:void(0)"><li class="pull-left">帮助中心</li></a>-->
											<a href="javascript:void(0)" v-on:click="setTitle(2)"><li id="supersede" class="pull-left">代付页</li></a>
											<!--<a href="javascript:void(0)"><li class="pull-left">淘宝天猫代付页</li></a>
											<a href="javascript:void(0)"><li class="pull-left">微信充值页</li></a>
											<a href="javascript:void(0)"><li class="pull-left">支付宝充值页</li></a>-->
										</ul>
									</div>
								</div>
								<div class="row" style="background: #33b8ff;border-top-left-radius: 5px;border-top-right-radius: 5px;">
									<div class="col-lg-8 col-md-8">
										<center><p style="margin-bottom: 0;color: #fff;line-height: 34px;">广告位</p></center>
									</div>
									<div class="col-lg-4 col-md-4">
										<center><p style="margin-bottom: 0;color: #fff;line-height: 34px;">操作</p></center>
									</div>
								</div>
								<div class="row" style="border: 1px solid #dbdbdb;border-top: none;">
									<div class="col-lg-8 col-md-8">
										<center><p style="margin-bottom: 0;line-height: 50px;">头图</p></center>
									</div>
									<div class="col-lg-4 col-md-4">
										<center>
											<a href="javascript:void(0)" v-on:click="addPic()"><img src="../../assets/images/administrator/edit.png" style="width: 28px;margin-top: 11px;margin-right: 15px;"/></a>
											<!--<a href="javascript:void(0)"><img src="../../assets/images/administrator/check.png" style="width: 28px;margin-top: 11px;margin-right: 15px;"/></a>
											<a href="javascript:void(0)"><img src="../../assets/images/administrator/delete.png" style="width: 28px;margin-top: 11px;"/></a>-->
										</center>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 图片编辑模态框（Modal） -->
		<div class="modal fade" id="picModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
		            <div class="modal-header" style="background: #33b8ff;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title" id="myModalLabel" style="font-size: 14px;color: #fff;text-align: left;">上传图片</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right">图片上传：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="file"  id="picUpload" value="" />
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 15px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right">图片预览：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<img v-bind:src="picSrc" style="width: 100%;"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 15px;margin-bottom: 30px;">
            				<div class="col-lg-12 col-md-12">
            					<center><button type="button" class="btn btn-default" v-on:click="submitPic()" style="padding: 6px 30px;">提交</button></center>
            				</div>
            			</div>
		            </div>
		            <!--<div class="modal-footer">
		                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		                <button type="button" class="btn btn-primary">提交更改</button>
		            </div>-->
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import leftmenu from './menu.vue'
	import rightheader from './rightheader.vue'
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'advert',
		data(){
			return {
				L1_category:'首页',
				L2_category:'头图',
				picSrc:''
			}
		},
		components:{
			leftmenu,
			rightheader
		},
		mounted:function () {
			this.getImg();
		},
		methods:{
			addPic:function () {
				$('#picModal').modal('show');
			},
			submitPic:function () {
				var formData = new FormData();
				var fileObj = document.getElementById('picUpload').files[0];
//				console.log(fileObj);
				formData.append('file',fileObj);
//				var param = {
//					L1_category:this.L1_category,
//					L2_category:this.L2_category,
//					link:'',
//					referrer:'',
//					file:formData
//				};
				$.ajax({
					url:getService()+"/uploadImgForEndpoint",
					type:'post',
					contentType:false,
					dataType: "json",
	                data:formData,
	                processData:false,
	                xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
	                success:function (res) {
	                	this.picSrc = res.data;
	                	if (this.L1_category == '首页') {
	                		var param = {
		                		L1_category:this.L1_category,
								L2_category:this.L2_category,
								advertisingLink:"",
								referrer:"",
								imageLink:this.picSrc
		                	}
	                		$.ajax({
								url:getService()+"/adv/setHomepage",
								type:'post',
								contentType:'application/json',
								dataType: "json",
				                data:JSON.stringify(param),
				                processData:false,
				                xhrFields: {
							        withCredentials: true
							    },
							    crossDomain: true,
				                success:function (res) {
				                	
				                }
							});
	                	} else{
	                		var param = {
								imageLink:this.picSrc
		                	}
	                		$.ajax({
								url:getService()+"/adv/setDFpage",
								type:'post',
								contentType:'application/json',
								dataType: "json",
				                data:JSON.stringify(param),
				                processData:false,
				                xhrFields: {
							        withCredentials: true
							    },
							    crossDomain: true,
				                success:function (res) {
				                	
				                }
							});
	                	}
	                	
	                }.bind(this)
				});
			},
			setTitle:function (num) {
				switch (num){
					case 1:
						this.L1_category = '首页';
						this.L2_category = '头图';
						$('#index').attr('class','pull-left active');
						$('#supersede').attr('class','pull-left');
						break;
					case 2:
						this.L1_category = '代付页';
						this.L2_category = '广告图';
						$('#index').attr('class','pull-left');
						$('#supersede').attr('class','pull-left active');
						break;
					default:
						break;
				}
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
							this.picSrc = res.data.imageLink;
				    	}
				    }.bind(this)
		  		});
		  	}
		}
	}
</script>

<style scoped>
	ul li{list-style: none;width: 100px;border: 1px solid #666;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #666;font-size: 12px;}
	.active{border: 1px solid #33b8ff;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #33b8ff;}
</style>