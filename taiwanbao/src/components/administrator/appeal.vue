<template>
	<div class="appeal" style="background: #f5f5f5;">
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
										<select  class="pull-left form-control" style="width: 15%;margin-right: 15px;" v-model="isSolve">
											<option value="">--请选择--</option>
											<option value="true">已解决</option>
											<option value="false">未解决</option>
										</select>
										<p class="pull-left" style="line-height: 34px;">申诉类别：</p>
										<select  class="pull-left form-control" style="width: 15%;margin-right: 15px;" v-model="L1_Issue" v-on:change="selectL1()">
											<option value="">--请选择--</option>
											<option v-for="item in IssueTitles.L1_Issue" v-bind:value="item.L1">{{item.L1}}</option>
										</select>
										<select  class="pull-left form-control" style="width: 15%;margin-right: 15px;" v-model="L2_Issue" v-on:change="selectL2()">
											<option value="" v-bind:selected="L1_Issue == ''">--请选择--</option>
											<option v-for="item in L2_Titles" v-if="item.L1 == L1_Issue" v-bind:value="item.L2">{{item.L2}}</option>
										</select>
										<select  class="pull-left form-control" style="width: 15%;margin-right: 15px;" v-model="L3_Issue">
											<option value="" v-bind:selected="L2_Issue == ''">--请选择--</option>
											<option v-for="item in L3_Titles" v-if="item.L2 == L2_Issue" v-bind:value="item.L3">{{item.L3}}</option>
										</select>
										<button type="button" class="pull-left btn btn-default" style="margin-right: 15px;" @click="showEditDescribe" >申述提示编辑</button>

									</div>
								</div>
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<select  class="pull-left form-control" style="width: 15%;margin-right: 15px;">
											<option value="">创建时间</option>
										</select>
										<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="startTime" style="width: 15%;margin-top: 2px;"></datetime>
										<p class="pull-left" style="line-height: 34px;margin: 0 5px;">-</p>
										<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="endTime" style="width: 15%;margin-top: 2px;"></datetime>
										<input type="text"  value="" v-model="appealFormID" class="pull-left form-control" placeholder="输入订单号或账号" style="width: 30%;margin-left: 15px;margin-right: 10px;"/>
										<button type="button" class="pull-left btn btn-default" v-on:click="getAppealInfo(currentPage)">搜索</button>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;">状态</th>
													<th style="width: 10%;">申诉账号</th>
													<th>申诉编号</th>
													<th style="width: 15%;">申诉类别(一级)</th>
													<th style="width: 15%;">申诉类别(二级)</th>
													<th style="width: 15%;">申诉类别(三级)</th>
													<th style="width: 10%;">创建时间</th>
													<th style="border-top-right-radius: 5px;">操作</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in appealInfo">
													<td style="line-height: 20px;border-left: 1px solid #666;" v-if="!item.isSolved">未解决</td>
													<td style="line-height: 20px;border-left: 1px solid #666;color: #92e3bd;" v-if="item.isSolved">已解决</td>
													<td style="line-height: 20px;">{{item.tel_number}}</td>
													<td style="line-height: 20px;">{{item.appealFormID}}</td>
													<td style="line-height: 20px;">{{item.L1_Issue}}</td>
													<td style="line-height: 20px;">{{item.L2_Issue}}</td>
													<td style="line-height: 20px;">{{item.L3_Issue}}</td>
													<td style="line-height: 20px;">{{item.created_at}}</td>
													<td style="border-right: 1px solid #666;line-height: 20px;">
														<a href="javascript:void(0)" v-on:click="showAppealInfo(item.appealFormID)"><img src="../../assets/images/administrator/check.png"/></a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="row nomargin">
									<div class="col-lg-12 col-md-12 paginate">
										<paginate :page-count="totalPage" :click-handler="currentPageInfo" :prev-text="'<'" :next-text="'>'" :container-class="'pull-right'"></paginate>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-12">
				<!-- 模态框（Modal） -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				    <div class="modal-dialog" style="width: 90%;">
				        <div class="modal-content">
				            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
				                <button type="button" class="close"  aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;" @click="closeMyModal">&times;</button>
				                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>处理申诉</h4>
				            </div>
				            <div class="modal-body">
				            	<div class="row">
				            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<h4 class="pull-left">问题类型</h4>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<p class="pull-left">{{appealDetail.L1_Issue}}-{{appealDetail.L2_Issue}}-{{appealDetail.L3_Issue}}</p>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<h4 class="pull-left">问题描述</h4>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<p class="pull-left">{{appealDetail.description}}</p>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<h4 class="pull-left">上传图片</h4>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-4 col-md-4" v-for="item in appealDetail.imagesFileArray">
				            					<img v-bind:src="item" class="pull-left" style="width: 100%;"/>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<h4 class="pull-left">问题答复</h4>
				            				</div>
				            			</div>
				            			<div class="row">
				            				<div class="col-lg-12 col-md-12">
				            					<!--<editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>-->
				            					<quill-editor ref="myEditor"
												              v-model="tinymceHtml"
												              :options="editorOption">
												</quill-editor>
				            				</div>
				            			</div>
				            			<div class="row" style="margin-top: 15px;margin-bottom: 30px;">
				            				<div class="col-lg-12 col-md-12">
				            					<center><button type="button" class="btn btn-default" v-on:click="submitAppeal()" style="padding: 6px 30px;">提交</button></center>
				            				</div>
				            			</div>
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
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-12">
				<div class="modal fade" id="popAppealDescribeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog" style="width: 60%;">
		        <div class="modal-content" style="border-radius: 5px;">
		            <div class="modal-header" style="background: #00a6ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>申述提示编辑</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-3 col-md-3">
		            					<label class="pull-right" style="line-height: 34px;">申诉类别：</label>
		            				</div>
		            				<div class="col-lg-3 col-md-3" style="padding-right: 10px;">
										<select  class="pull-left form-control"  v-model="L1_Issue" v-on:change="selectL1()">
											<option value="">--请选择--</option>
											<option v-for="item in IssueTitles.L1_Issue" v-bind:value="item.L1">{{item.L1}}</option>
										</select>
		            				</div>
		            				
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-3 col-md-3">
		            					<label class="pull-right" style="line-height: 34px;">申诉类别：</label>
		            				</div>
		            				<div class="col-lg-3 col-md-3" style="padding-right: 10px;">
										<select  class="pull-left form-control"  v-model="L2_Issue" v-on:change="selectL2()">
											<option value="" v-bind:selected="L1_Issue == ''">--请选择--</option>
											<option v-for="item in L2_Titles" v-if="item.L1 == L1_Issue" v-bind:value="item.L2">{{item.L2}}</option>
										</select>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-3 col-md-3">
		            					<label class="pull-right" style="line-height: 34px;">申诉类别：</label>
		            				</div>
		            				<div class="col-lg-3 col-md-3">
										<select  class="pull-left form-control"  v-model="L3_Issue" v-on:change="selectL3()">
											<option value="" v-bind:selected="L2_Issue == ''">--请选择--</option>
											<option v-for="item in L3_Titles" v-if="item.L2 == L2_Issue" v-bind:value="item.L3">{{item.L3}}</option>
										</select>
		            				</div>

		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-3 col-md-3">
		            					<label class="pull-right" style="line-height: 34px;">申诉描述：</label>
		            				</div>
		            			</div>
		            			<div class="row" style="margin-top: 15px;">
		            				<div class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
		            					<!--<editor id='describeEditor' v-model='describeHtml' :init='init'></editor>-->
		            					<quill-editor ref="myTextEditor"
										              v-model="describeHtml"
										              :options="editorOption">
										</quill-editor>
		            				</div>
		            			</div>
		            			
		            		</div>
		            	</div>
		            </div>
		            <div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
		            	<button type="button" class="btn btn-primary" @click="updateDescribe">保存</button>
		                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		                
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
	</div>
			</div>
		</div>
	</div>
</template>

<script>
	import leftmenu from './menu.vue'
	import rightheader from './rightheader.vue'
	import datetime from 'vue-datetimepicker'
	import {getService} from '../../assets/js/configs.js'
	import { quillEditor } from 'vue-quill-editor'
	import {quillRedefine} from 'vue-quill-editor-upload'
	import '../../../static/css/PCstyle.css'

	export default {
		name:'appeal',
		data(){
			return {
				updatedAt:{
					afterDate:'',
					beforeDate:''
				},
				createdAt:{
					afterDate:'',
					beforeDate:''
				},
				L1_Issue:'',
				L2_Issue:'',
				L3_Issue:'',
				IssueTitles:[],
				L2_Titles:[],
				L3_Titles:[],
				appealFormID:'',
				order:'',
				sortBy:'',
				currentPage:1,
			    totalPage:1,
			    pageCount:10,
			    appealInfo:[],
			    appealDetail:'',
			    tinymceHtml: '',
			    describeHtml:'',
			    editorOption: {
			       // something config
			     },
			      init: {
			        language_url: '/static/tinymce/zh_CN.js',
//			        language: 'zh_CN',
			        skin_url: '/static/tinymce/skins/lightgray',
			        height: 300,
			        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
			        toolbar:
			          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
			        branding: false
			      },
			      isSolve:''
			}
		},
		components:{
			leftmenu,
			rightheader,
			datetime,
//			Editor,
			quillEditor,
			quillRedefine
		},
		mounted:function (){
		  	this.getAppealInfo(this.currentPage);
//		  	tinymce.init({});

		  	this.getTitles();
		  	//$('#myModal').modal('show');
		  },
		  created () {
		      this.editorOption = quillRedefine(
		        {
		          // 图片上传的设置
		          uploadConfig: {
		            action:  getService()+"/uploadImgForEndpoint",  // 必填参数 图片上传地址
		            // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
		            // 你必须把返回的数据中所包含的图片地址 return 回去
		            res: (respnse) => {
		              return respnse.data  // 这里切记要return回你的图片地址
		            }
		          }
		        }
		      )
		      console.log(this.editorOption)
		   },
		methods:{
			currentPageInfo:function (pageNum) {
		  		this.currentPage = pageNum;
		  		this.getAppealInfo(this.currentPage);
		  	},
			getAppealInfo:function (num) {
				var param = {
	  				page:parseInt(num),
	  				unit:this.pageCount,
	  				updatedAt:this.updatedAt,
	  				createdAt:this.createdAt,
//		  				order:this.order,
//		  				sortBy:this.sortBy,
	  				appealFormID:this.appealFormID,
	  				L1_Issue:this.L1_Issue,
	  				L2_Issue:this.L2_Issue,
	  				L3_Issue:this.L3_Issue,
	  				"isSolved":this.isSolve
	  			}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/appealForm/findAppealForm",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	this.appealInfo = res.data;
				    	for (var i=0;i<this.appealInfo.length;i++) {
				    		this.appealInfo[i].created_at = this.transformDate(this.appealInfo[i].created_at);
				    	}
				    	var totalNum = parseInt(res.nofdata);
			    		var pageMore = totalNum % this.pageCount;
			    		if (pageMore == 0) {
			    			this.totalPage = parseInt(totalNum / this.pageCount);
			    		} else{
			    			this.totalPage = parseInt(totalNum / this.pageCount) + 1;
			    		}
			    		if (this.totalPage == 0) {
			    			this.totalPage = 1;
			    		}
				    }.bind(this)
		  		});
			},
			//	  	时间戳转为日期
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
	//	        var str = Y+M+D+h+m+s;
	//	        return date;
		  	},
		  	showAppealInfo:function (num) {
		  		var param = {
		  				appealFormID:num
		  		}
		  		$.ajax({
		  			type:'post',
		  			url:getService()+"/appealForm/getAppealFormById",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	this.appealDetail = res.data[0];
				    	this.tinymceHtml = res.data[0].response;
				    	$('#myModal').modal('show');
				    	this.appealFormID = num;
//				    	console.log(this.appealDetail);
				    }.bind(this)
		  		});
		  	},
		  	submitAppeal:function () {
		  		var param = {
		  				appealFormID:this.appealFormID,
		  				response:this.tinymceHtml
		  		}
		  		$.ajax({
		  			type:'post',
		  			url:getService()+"/appealForm/setResponseAppealForm",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	this.appealFormID = '';
				    	if (res.error_msg == '200') {
				    		window.location.reload();
				    	}
//				    	console.log(res);
				    }.bind(this)
		  		});
//		  		console.log(this.tinymceHtml);
		  	},
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
				this.L2_Issue = '';
				this.L3_Issue = '';
				for (var i=0;i<this.IssueTitles.L1_Issue.length;i++) {
					if (this.L1_Issue == this.IssueTitles.L1_Issue[i].L1) {
						this.describeHtml = this.IssueTitles.L1_Issue[i].description;
					}
				}
			},
//			选择二级标题
			selectL2:function () {
				this.L3_Titles = this.IssueTitles.L3_Issue;
				this.L3_Issue = '';
				for (var i=0;i<this.IssueTitles.L2_Issue.length;i++) {
					if (this.L2_Issue == this.IssueTitles.L2_Issue[i].L2) {
						this.describeHtml = this.IssueTitles.L2_Issue[i].description;
					}
				}
			},
//			选择三级标题
			selectL3:function () {
				for (var i=0;i<this.IssueTitles.L3_Issue.length;i++) {
					if (this.L3_Issue == this.IssueTitles.L3_Issue[i].L3) {
						this.describeHtml = this.IssueTitles.L3_Issue[i].description;
					}
				}
			},			
			showEditDescribe(){
				this.L1_Issue = '';
				this.L2_Issue = '';
				this.L3_Issue = '';
				this.describeHtml = '';
				$('#popAppealDescribeModal').modal('show');

			},
			updateDescribe(){
				var num=0;
				var that = this;
				if(this.L1_Issue){
					num++;
				}
				if(this.L2_Issue){
					num++;
				}
				if(this.L3_Issue){
					num++;
				}
				console.log('num=',num);
				var param = {};
				switch(num){
					case 1:
						param ={
							"L1_Issue": {
							    "description": that.describeHtml,
							    "L1": that.L1_Issue
							  }

						};

						break;
					case 2:
						param ={
							"L2_Issue": {
							      "L1": that.L1_Issue,
							      "L2": that.L2_Issue,
							      "description": that.describeHtml
							   }
						};

						break;
					case 3:
						param ={
							"L3_Issue": {
							      "L1": that.L1_Issue,
							      "L2": that.L2_Issue,
							      "L3": that.L3_Issue,
							      "description": that.describeHtml
							   }
						};

						break;

				}
				console.log('update param',param)
				$.ajax({
		  			type:'post',
		  			url:getService()+"/update3level",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	console.log('res=',res);
				    	layer.msg('操作成功', {icon: 1});
				    	$('#popAppealDescribeModal').modal('hide');
				    	that.getTitles();
				    }
		  		});

			},
			closeMyModal(){
				$('#myModal').modal('hide');
				this.appealFormID='';
			}
		}
	}
</script>

<style scoped>
	/*@import url("../../assets/css/PCstyle.css");*/

	table th,td{text-align: center;}
	table th{background: #33b8ff;color: #fff;}
	table td{border-bottom: 1px solid #666;font-size: 12px;}
	
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
	.ql-container{height: 200px;}

	.nomargin{margin: 0;}
  	.nopadding{padding: 0;}
</style>