<template>
	<div class="appeal">
		<!-- 申诉模态框（Modal） -->
		<div class="modal fade" id="appealModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog" style="width: 60%;max-width: 750px;">
		        <div class="modal-content" style="border-radius: 5px;">
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>申訴&提問<span style="font-size: 12px;margin-left: 5px;">(每次僅能發起一條申訴)</span></h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
		            			<div class="row">
		            				<div class="col-lg-2 col-md-2" style="padding: 0;">
		            					<label class="pull-right" style="line-height: 34px;">申訴類別：</label>
		            				</div>
		            				<div class="col-lg-3 col-md-3" style="padding-right: 10px;">
		            					<select name="" class="pull-left form-control" style="margin-right: 15px;" v-model="L1_Issue" v-on:change="selectL1()">
											<option value="">--請選擇--</option>
											<option v-for="item in IssueTitles.L1_Issue" v-bind:value="item.L1">{{item.L1}}</option>
										</select>
		            				</div>
		            				<div class="col-lg-3 col-md-3" style="padding-right: 10px;">
		            					<select name="" class="pull-left form-control" style="margin-right: 15px;" v-model="L2_Issue" v-on:change="selectL2()">
											<option value="" v-bind:selected="L1_Issue == ''">--請選擇--</option>
											<option v-for="item in L2_Titles" v-if="item.L1 == L1_Issue" v-bind:value="item.L2">{{item.L2}}</option>
										</select>
		            				</div>
		            				<div class="col-lg-3 col-md-3">
		            					<select name="" class="pull-left form-control" style="margin-right: 15px;" v-model="L3_Issue" v-on:change="selectL3()">
											<option value="" v-bind:selected="L2_Issue == ''">--請選擇--</option>
											<option v-for="item in L3_Titles" v-if="item.L2 == L2_Issue" v-bind:value="item.L3">{{item.L3}}</option>
										</select>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-9 col-md-9 col-lg-offset-2 col-md-offset-2">
		            					<p class="pull-right" style="line-height: 40px;margin-bottom: 0;background: #ccedff;border-radius: 10px;width: 100%;padding: 0 15px;text-align: left;" v-html="answer"></p>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-2 col-md-2" style="padding: 0;">
		            					<label class="pull-right" style="line-height: 34px;">說明原因：</label>
		            				</div>
		            				<div class="col-lg-9 col-md-9">
		            					<textarea name="" rows="4" cols="" v-model="description" class="pull-left form-control"></textarea>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-2 col-md-2" style="padding: 0;">
		            					<label class="pull-right" style="line-height: 34px;">上傳圖片：</label>
		            				</div>
		            				<div class="col-lg-9 col-md-9">
		            					<div class="row">
		            						<div class="col-lg-3 col-md-3" style="padding: 15px;" v-for="item in imgSrcs">
		            							<img v-bind:src="item" style="width: 100%;border: 1px solid #999;border-radius: 10px;"/>
		            						</div>
		            						<div class="col-lg-3 col-md-3" style="padding: 15px;">
		            							<a href="javascript:void(0)" v-on:click="setImg()"><img src="../../assets/images/updateImg_03.jpg" style="width: 100%;border: 1px solid #999;border-radius: 10px;"/></a>
		            						</div>
		            					</div>
		            					<input type="file" name="" id="appealPic" value="" style="margin-top: 5px;display: none;" v-on:change="updateImg()"/>
		            				</div>
		            			</div>
		            		</div>
		            	</div>
		            </div>
		            <div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
		                <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
		                <button type="button" class="btn btn-primary" v-on:click="submitAppeal()">提交更改</button>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'customerAppeal',
		data(){
			return{
				L1_Issue:'',
				L2_Issue:'',
				L3_Issue:'',
				description:'',
				IssueTitles:[],
				L2_Titles:[],
				L3_Titles:[],
				answer:'',
				imgSrcs:[]
			}
		},
		mounted:function (){
		 	this.getTitles();
		},
		methods:{
			//		  	获取申诉标题
			getTitles:function () {
				$.ajax({
		  			type:'get',
		  			url:getService()+"/get3level",
		  			dataType: "json",
//		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		this.IssueTitles = 	res.data;
				    	}
				    }.bind(this)
		  		});
			},
//			选择一级标题
			selectL1:function () {
				this.L2_Titles = this.IssueTitles.L2_Issue;
				for (var i=0;i<this.IssueTitles.L1_Issue.length;i++) {
					if (this.L1_Issue == this.IssueTitles.L1_Issue[i].L1) {
						this.answer = this.IssueTitles.L1_Issue[i].description;
					}
				}
//				console.log(this.L1_Issue);
			},
//			选择二级标题
			selectL2:function () {
				this.L3_Titles = this.IssueTitles.L3_Issue;
				for (var i=0;i<this.IssueTitles.L2_Issue.length;i++) {
					if (this.L2_Issue == this.IssueTitles.L2_Issue[i].L2) {
						this.answer = this.IssueTitles.L2_Issue[i].description;
					}
				}
			},
//			选择三级标题
			selectL3:function () {
				for (var i=0;i<this.IssueTitles.L3_Issue.length;i++) {
					if (this.L3_Issue == this.IssueTitles.L3_Issue[i].L3) {
						this.answer = this.IssueTitles.L3_Issue[i].description;
					}
				}
			},
			submitAppeal:function () {
				var param = {
					imagesFileArray:this.imgSrcs,
					L1_Issue:this.L1_Issue,
					L2_Issue:this.L2_Issue,
					L3_Issue:this.L3_Issue,
					description:this.description
				};
				$.ajax({
		  			type:'post',
		  			url:getService()+"/appealForm/addAppealForm",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_msg == 200) {
				    		$('#appealModal').modal('hide');
				    		alert('提交成功');
				    	} else{
				    		alert(res.error_code);
				    	}
				    }.bind(this)
		  		});
			},
			setImg:function () {
				$('#appealPic').click();
			},
			updateImg:function () {
				var formData = new FormData();
				var fileObj = document.getElementById('appealPic').files[0];
				formData.append('file',fileObj);
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
	                	if (res.error_code == '0') {
	                		this.imgSrcs.push(res.data);
	                		console.log(this.imgSrcs);
	                	}
	                }.bind(this)
				});
			}
		}
	}
</script>

<style>
</style>