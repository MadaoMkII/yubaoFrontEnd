<template>
	<div class="notice" style="background: #f5f5f5;">
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
						<div class="row" id="notice" style="margin: 15px;background: #fff;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<button type="button" class="pull-left btn btn-default" style="margin-right: 15px;" v-on:click="showCreateModal()">创建公告</button>
										<button type="button" class="pull-left btn btn-default" style="margin-right: 15px;" v-on:click="showEditModal()" v-if="isShowEditMod">编辑模块</button>
									</div>
								</div>
								<div class="row" style="margin-top: 30px;">
									<div class="col-lg-12 col-md-12">
										<ul class="pull-left nave" style="margin-bottom: 0;margin-left: 20px;padding-left: 0;">
											<li v-for='(item,index) in itemNames' :class="[{active:istrue==index},'pull-left','chooseItemNames']" @click="chooseItem(index)">{{item.name}}</li>
										</ul>
									</div>
								</div>
								<!--<table id="table"></table>-->

								
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover" style="width: 100%;table-layout: fixed;">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;width: 10%;" v-if="istrue == 0">模块名称</th>
													<th style="width: 20%;">公告名称</th>
													<th style="width: 30%;">公告内容</th>
													<th style="width: 25%;">公告链接</th>
													<th style="border-top-right-radius: 5px;width: 15%;">操作</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in noticeList">
													<td style="line-height: 40px;" v-if="istrue == 0">{{item.model.name||''}}</td>
													<td style="line-height: 40px;">{{item.announcementTopic}}</td>
													<td style="line-height: 40px;">{{item.content}}</td>
													<td style="line-height: 40px;">{{item.announcementLink}}</td>
													<td>
														<a href="javascript:void(0)" v-on:click="editNotice(item)"><img src="../../assets/images/administrator/bianji.png" style="width: 28px;margin-top: 6px;margin-right: 15px;"/></a>
														<a href="javascript:void(0)" v-on:click="checkNotice(item)"><img src="../../assets/images/administrator/check.png" style="width: 28px;margin-top: 6px;margin-right: 15px;"/></a>
														<a href="javascript:void(0)" v-on:click="deleteNotice(item.announcementID)"><img src="../../assets/images/administrator/delete.png" style="width: 28px;margin-top: 6px;"/></a>
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
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<!-- 创建公告模态框（Modal） -->
						<div class="modal fade" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						    <div class="modal-dialog" style="width: 90%;">
						        <div class="modal-content">
						            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
						                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
				                		<h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>{{popTitle}}</h4>
						            </div>
						            <div class="modal-body" style="padding-bottom: 50px;">
						            	<div class="row">
						            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
						            			
								            	<div class="row" style="margin-top: 15px;">
								            		<div class="col-lg-12 col-md-12">
								            			<label class="pull-left" style="line-height: 34px;">公告名称：</label>
								            			<input type="text" class="pull-left form-control"  v-model="announcementTopic" style="width: 50%;"/>
								            		</div>
								            	</div>
								            	<div class="row" style="margin-top: 15px;">
								            		<div class="col-lg-12 col-md-12" v-if="popTitle == '创建公告'">
								            			<label class="pull-left" style="line-height: 34px;">所属页面：</label>
								            			<select  id="selectPage"  v-model="v_selectPage" class="pull-left form-control" style="width: 30%;">
								            				<option v-for="(pitem,pindex) in itemNames"  v-text="pitem.name" :value="pitem.name"></option>
								            			</select>
								            		</div>
								            	</div>
								            	<div class="row" style="margin-top: 15px;" v-if="v_selectPage == '帮助中心'">
								            		<div class="col-lg-12 col-md-12">
								            			<label class="pull-left" style="line-height: 34px;">所属模块：</label>
								            			<select id="selectMod"  v-model="v_selectMod" class="pull-left form-control" style="width: 30%;">
								            				<option v-for="(mitem,mindex) in modelNames"  v-text="mitem" :value="mitem"></option>
								            			</select>
								            		</div>
								            	</div>
								            	<div class="row" style="margin-top: 15px;">
								            		<div class="col-lg-12 col-md-12">
								            			<label class="pull-left" style="line-height: 34px;">公告链接：</label>
								            			<input type="text" class="pull-left form-control"  v-model="announcementLink" style="width: 50%;" readonly="true" />
								            		</div>
								            	</div>
								            	<div class="row" style="margin-top: 15px;">
								            		<div class="col-lg-12 col-md-12">
								            			<label class="pull-left" style="line-height: 34px;">公告内容：</label>
								            		</div>
								            	</div>
								            	<div class="row" style="margin-top: 15px;">
								            		<div class="col-lg-12 col-md-12">
								            			<quill-editor ref="myTextEditor"
														              v-model="content"
														              :options="editorOption"
														              @blur="onEditorBlur($event)"
														              @focus="onEditorFocus($event)"
														              @ready="onEditorReady($event)">
														</quill-editor>
								            		</div>
								            	</div>
								            	<div class="row" id="noticeBtnRow" style="margin-top: 30px;">
								            		<div class="col-lg-6 col-md-6">
								            			<button type="button" class="pull-right btn btn-default" style="margin-right: 15px;" v-on:click="submitNotice()">保存</button>
								            		</div>
								            		<div class="col-lg-6 col-md-6">
								            			<button type="button" class="btn btn-default pull-left" data-dismiss="modal" style="margin-left: 15px;">取消</button>
								            		</div>
								            	</div>
						            		</div>
						            	</div>
						            </div>
						        </div><!-- /.modal-content -->
						    </div><!-- /.modal -->
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<!-- 模态框（Modal） -->
						<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						    <div class="modal-dialog" style="width: 60%;">
						        <div class="modal-content">
						            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
						                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
						                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/editicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>编辑模块</h4>
						            </div>
						            <div class="modal-body" style="padding-bottom: 50px;">
						            	<div class="row">
						            		<div class="col-lg-12 col-md-12" style="padding: 0 30px;">
						            			<div class="row">
						            				<label class="pull-left" style="line-height: 34px;">模块名称：</label>
						            				<input type="text" id="createModelName" class="pull-left form-control" style="width: 20%;" placeholder="请输入模块名称" @keyup="clearErrorInfo" />
						            				<label class="pull-left" style="line-height: 34px;margin-left: 30px;">所属页面：帮助中心</label>
						            				<button type="button" class="btn btn-default pull-left" style="margin-left: 30px;width: 100px;"  @click="createModelNameFunc">保存</button>
						            				<button type="button" class="btn btn-default pull-left" style="margin-left: 30px;width: 100px;" data-dismiss="modal">取消</button>
						            			</div>
						            			<div class="row">
						            				<p class="pull-left" style="color: #f00;margin-left: 70px;font-size: 12px; height:17px;" id="errorInfo">{{errorInfoVal}}</p>
						            			</div>
						            			<div class="row" style="margin-top: 30px;margin-bottom: 10px;">
						            				<label class="pull-left">已创建模块</label>
						            			</div>
						            			<div class="showAlreadyExist">
						            			<div  v-for="(modelName,modelIndex) in modelNames">
													<div class="clearfix" style="margin-bottom: 20px;">
							            				<input type="text" v-bind:value="modelName" class="pull-left form-control updateModelName" style="width: 30%;" readonly="true"  @keyup.enter="onEnter(modelName)"/>
							            				<a href="javascript:void(0)" class="pull-left" style="line-height: 34px;margin-left: 15px;color: #888;font-size: 12px;" v-on:click="updateModule(modelName,modelIndex)"><img class="pull-left" src="../../assets/images/edit.png" style="margin: 10px;"/>修改名称</a>
							            				<a href="javascript:void(0)" class="pull-left" style="line-height: 34px;margin-left: 15px;color: #888;font-size: 12px;" v-on:click="deleteModule(modelName)"><img class="pull-left" src="../../assets/images/delete.png" style="margin: 10px;"/>删除模块(旗下内容将全部删除)</a>
							            			</div>
							            			<div  class="clearfix deleteConfirm" style="width: 250px;height: 130px;background: #fff;z-index: 99;box-shadow: 0px 0px 10px #000;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;border-radius: 10px;display: none; padding-top: 20px;" >
														<div class="col-lg-12 col-md-12" >
															<div class="clearfix">
																<img src="../../assets/images/alerticon.png" class="pull-left" style="width: 10%;"/>
																<div class="pull-left" style="width: 90%;padding: 0px 10px;">
																	<p class="pull-right" style="text-align: left;">删除模块后旗下内容将全部删除，请确认</p>
																</div>
															</div>
															<div class="clearfix">
																<div class="col-lg-6 col-md-6" style="padding: 0 15px;">
																	<button type="button" class="btn btn-default" v-on:click="cancelDelete()">取消</button>
																</div>
																<div class="col-lg-6 col-md-6" style="padding: 0 15px;" >
																	<button class="btn btn-primary" @click="deleteModel()">确定</button>
																</div>
															</div>
														</div>
													</div>
						            				
						            			</div>
						            			</div>
						            		</div>
						            	</div>
						            </div>
						        </div><!-- /.modal-content -->
						    </div><!-- /.modal -->
						</div>
					</div>
				</div>
				<!-- 公告模态框（Modal） -->
				<div class="modal fade" id="noticeInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				    <div class="modal-dialog">
				        <div class="modal-content" style="border-radius: 5px;">
				            <div class="modal-header" style="background: #00a6ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
				                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
				                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>帮助</h4>
				            </div>
				            <div class="modal-body">
				            	<div class="row">
				            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding" v-html="annoucetitle" style="border-bottom:0.5px #ccc solid; text-align:left">
				            			
				            		</div>
				            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 nopadding annoucemsg" v-html="annoucemsg" style="margin-top:20px;">
				            			
				            		</div>
				            	</div>
				            </div>
				            <!--<div class="modal-footer" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
				                <button type="button" class="btn btn-warning" data-dismiss="modal">关闭</button>
				            </div>-->
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
	import {getService} from '../../assets/js/configs.js'
	import { generateUUID } from '../../assets/js/guid'
	import { quillEditor } from 'vue-quill-editor'
	import {quillRedefine} from 'vue-quill-editor-upload'
	import '../../../static/css/PCstyle.css'
	export default {
		name:'notice',
		data(){
			return {
				announcementLink:'',
				announcementTopic:'',
				announcementID:'',
				noticeList:[],
				currentPage:1,
			    totalPage:1,
			    pageCount:8,
			    flag:true,	//模态框保存按钮标志位，true为创建公告，false为编辑公告
			    content: '',
			      editorOption: {
			       // something config
			      },
			    modelNames:[],
			    chooseModelName:'',
			    errorInfoVal:'   ',
			    istrue: 0,
			    itemNames:[
				    {name:'帮助中心',isShowEditMod:true},
	                {name:'淘宝天猫代付页',isShowEditMod:false},
	                {name:'微信充值页',isShowEditMod:false},
	                {name:'支付宝充值页',isShowEditMod:false},
	                {name:'会员中心',isShowEditMod:false},
	                {name:'代购',isShowEditMod:false}
			    ],
			    model_name:'帮助中心',
			    isShowEditMod:true, //显示编辑模块按钮
			    v_selectPage:'帮助中心',
			    v_selectMod:'',
			    popTitle:'创建公告',
			    popAnnounceId:0,
			    annoucetitle:'',
	  			annoucemsg:''

			}
		},
		components:{
			leftmenu,
			rightheader,
			quillEditor,
			quillRedefine
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
		mounted:function () {
			this.getNotice(this.currentPage);
			this.getAllModelNames();
			this.setHeight();
//			tinymce.init({});
		},
		updated(){
		  	$('.annoucemsg').find('img').css('width','100%');
		  },
		methods:{
			setHeight:function () {
				$('#notice').css('height',(window.screen.height-65)+'px');
			},
			//			编辑器函数
			onEditorBlur(editor) {
		      console.log('editor blur!', editor)
		    },
		    onEditorFocus(editor) {
		      console.log('editor focus!', this.content)
		    },
		    onEditorReady(editor) {
		      console.log('editor ready!', editor)
		    },
		    onEditorChange({ editor, html, text }) {
		      // console.log('editor change!', editor, html, text)
		      this.content = html
		    },
//			编辑器函数结束
			//获取公告
			getNotice:function (num) {
				var that =this;
				var param = {
					"page":num,
					"unit":this.pageCount,
					"location": this.model_name
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/announcement/findCommonAnnouncement",
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
				    	that.noticeList = res.data;
				    	that.totalPage = Math.ceil(res.nofdata/that.pageCount);
				    	console.log('totalPage=',that.totalPage);
				    }
		  		});
			},
			//获取所有的模块名
			getAllModelNames:function(){
				var that = this;
				$('.updateModelName').attr("readonly",true);
				$.ajax({
		  			type:'get',
		  			url:getService()+"/announcement/getModel",
		  			dataType: "json",
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	that.modelNames = [];
				    	if(res.error_code == 0){
				    		//that.modelNames = res.data;
				    		if(res.data && res.data.length>0){
				    			for( var i=0;i<res.data.length;i++){
				    				that.modelNames.push(res.data[i].name);
				    			}

				    		}
				    	}
				    	
				    }.bind(this)
		  		});
			},
			clearErrorInfo:function(){
				this.errorInfoVal='   ';
			},
			createModelNameFunc:function(){
				var that = this;
				if($('#createModelName').val() == ''){
					//为空判断
					//$('#errorInfo').html('模块名不能为空');
					that.errorInfoVal='模块名不能为空';
					return;
				}
				var dataParam = {
					"model_name": $('#createModelName').val()
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/announcement/addModel",
		  			dataType: "json",
		  			data:JSON.stringify(dataParam),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if(res.error_code == 0){
				    		layer.msg('操作成功', {icon: 1});
				    		that.getAllModelNames();
				    	}else{
				    		that.errorInfoVal=res.error_msg;
				    	}
				    	
				    },
				    error:function(res){
				    	console.log('res=',res);
				    	that.errorInfoVal=res.statusText;
				    }
		  		});
			},
			deleteModel(){
				var that = this;
				var dataParam={
					"model_name":that.chooseModelName
				};

				that.cancelDelete();
				$.ajax({
		  			type:'post',
		  			url:getService()+"/announcement/removeModel",
		  			dataType: "json",
		  			data:JSON.stringify(dataParam),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if(res.error_code == 0){
				    		layer.msg('操作成功', {icon: 1});
				    		that.getAllModelNames();
				    	}
				    },
				    error:function(res){

				    }
		  		});
			},
			currentPageInfo:function (pageNum) {
				this.currentPage = pageNum;
				this.getNotice(this.currentPage);
			},
			showCreateModal:function () {
				this.flag = true;
				this.popTitle = '创建公告'
				this.announcementLink = '/announcementId='+generateUUID();
				this.clearModal();
				$('#noticeBtnRow').show();
				$('#noticeModal').modal('show');
			},
			clearModal(){
				var that=this;
				that.content='';
				that.announcementTopic='';
			},
			submitNotice_createNotice(){
				var that=this;
				var param = {};
				var url='';
				if(this.v_selectPage == '帮助中心'){
					param = {
						"model_name":that.v_selectMod,
					    "content":that.content,
					    "announcementLink":that.announcementLink,
					    "announcementTopic":that.announcementTopic
					}
					url = '/announcement/addHelpCenterAnnouncement'
				}else{
					param = {
						"location": that.v_selectPage,
						"content": that.content,
						"announcementLink":that.announcementLink,
						"announcementTopic": that.announcementTopic
					}
					url = '/announcement/addCommonAnnouncement'

				}
				
				$.ajax({
			  			type:'post',
			  			url:getService()+url,
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if (res.error_code == '0') {
					    		layer.msg('操作成功', {icon: 1});
					    		that.getNotice(that.currentPage);
					    	}
					    	else{
					    		layer.msg(res.error_msg, {icon: 5});
					    	}
					    },
					    error:function(res){
					    	console.log('res=',res);
					    	layer.msg(res.statusText, {icon: 5});
					    	
					    }
			  	});
			},
			submitNotice_editNotice(){
				var that=this;
				var param = {};
				var url='';
				if(!this.popAnnounceId){
					return;
				}
				if(this.v_selectPage == '帮助中心'){
					param = {
						"model_name":that.v_selectMod,
					    "content":that.content,
					    "announcementLink":that.announcementLink,
					    "announcementTopic":that.announcementTopic,
					    "announcementID":that.popAnnounceId
					}
					url = '/announcement/updateHelpCenterAnnouncement'
				}else{
					param = {
						"location": that.v_selectPage,
						"content": that.content,
						"announcementLink":that.announcementLink,
						"announcementTopic": that.announcementTopic,
						"announcementID":that.popAnnounceId
					}
					url = '/announcement/updateCommonAnnouncement'

				}

				$.ajax({
			  			type:'post',
			  			url:getService()+url,
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if (res.error_code == '0') {
					    		layer.msg('操作成功', {icon: 1});
					    		that.getNotice(that.currentPage);
					    	}
					    	else{
					    		layer.msg(res.error_msg, {icon: 5});
					    	}
					    },
					    error:function(res){
					    	console.log('res=',res);
					    	layer.msg(res.statusText, {icon: 5});
					    	
					    }
			  		});

			},
			submitNotice:function () {
				if(this.popTitle == '创建公告'){
					this.submitNotice_createNotice();
				}else{
					this.submitNotice_editNotice();
				}
				
				
					
				$('#noticeBtnRow').hide();
				$('#noticeModal').modal('hide');
				
			},
			checkNotice:function (item) {
				this.annoucetitle = item.announcementTopic;
				this.annoucemsg = item.content;
				$('#noticeInfoModal').modal('show');
			},
			editNotice:function (item) {
				console.log('item=',item);
				this.clearModal();
				this.popTitle = '编辑公告';
				this.v_selectPage = item.location;
				if(this.v_selectPage=='帮助中心'){
					this.v_selectMod=item.model.name || '';
				}
				this.content = item.content;
				this.announcementLink = item.announcementLink;
				this.announcementTopic = item.announcementTopic;
				this.popAnnounceId = item.announcementID;
				$('#noticeBtnRow').show();
				$('#noticeModal').modal('show');



				/*var param = {
					announcementID:num
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/findAnnouncement",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == '0') {
				    		this.announcementTopic = res.data[0].announcementTopic;
				    		this.announcementLink = res.data[0].link;
				    		this.tinymceHtml = res.data[0].content;
				    		this.announcementID = res.data[0].announcementID;
				    		$('#noticeBtnRow').show();
				    		$('#noticeModal').modal('show');
				    		this.flag = false;
				    	}
				    	else{
				    		alert(res.error_msg);
				    	}
				    }.bind(this)
		  		});*/
			},
			deleteNotice:function (num) {
				var that = this;
				var param = {
					"announcementID":num
				}
				layer.msg('确定删除该公告吗？', {
				  time: 0 
				  ,btn: ['确定', '取消']
				  ,yes: function(index){
				    layer.close(index);
				    $.ajax({
			  			type:'post',
			  			url:getService()+"/announcement/delCommonAnnouncement",
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if (res.error_code == '0') {
					    		that.getNotice(that.currentPage);
					    	}
					    	else{
					    		alert(res.error_msg);
					    	}
					    }
			  		});
				  }
				});
				
			},
			showEditModal:function () {
				$('#editModal').modal('show');
				this.getAllModelNames();
			},
			deleteModule:function (modelName) {
				this.chooseModelName = modelName;
				$('.deleteConfirm').fadeIn();
			},
			updateModule(modelName,index){
				console.log('modelName=',modelName);
				console.log('index=',index);
				$('.updateModelName').siblings().attr("readonly",true);
				$('.updateModelName').eq(index).attr("readonly",false);
			},
			onEnter(modelName){
				console.log('event target=',event.target.value);
				console.log('enter modelName=',modelName);
				var that = this;
				if(!event.target.value){
					layer.msg('模块名不能为空', {icon: 5});
					return;
				}
				var param = {
					"model_name":modelName,
     				"new_model_name":event.target.value
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/announcement/updateModel",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == '0') {
				    		layer.msg('操作成功', {icon: 1});
				    		that.getAllModelNames();
				    	}
				    	else{
				    		alert(res.error_msg);
				    	}
				    },
				    error:function(res){
				    	console.log('res=',res);
				    	layer.msg(res.statusText, {icon: 5});
				    	
				    }
		  		});

			},
			cancelDelete:function () {
				$('.deleteConfirm').fadeOut();
				this.chooseModelName = ''
			},
			chooseItem(index){
				this.istrue = index;
				this.v_selectPage = this.itemNames[index].name;
				this.model_name = this.itemNames[index].name;
				this.isShowEditMod = this.itemNames[index].isShowEditMod;
				this.getNotice(this.currentPage);
			}
		}
	}
</script>

<style scoped>
	/*@import url("../../assets/css/PCstyle.css");*/
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
	.nave li{list-style: none;width: 100px;border: 1px solid #666;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #666;font-size: 12px;float: left;}
	.nave .active{border: 1px solid #33b8ff;border-bottom: none;border-top-left-radius: 5px;border-top-right-radius: 5px;line-height: 30px;color: #33b8ff;}
	table th,td{text-align: center;white-space: nowrap;/*控制单行显示*/
overflow: hidden;/*超出隐藏*/
text-overflow: ellipsis;/*隐藏的字符用省略号表示*/}
	table th{background: #33b8ff;color: #fff;}

	.showAlreadyExist{ 
		width:100%;
		overflow-y: auto;
		max-height:440px;
	}
	.clearfix:after {
	    content: '';
	    display: block;
	    clear: both;
	}
	.chooseItemNames{
		cursor: pointer;
	}
	.ql-container{height: 200px;}
	.nomargin{margin: 0;}
  	.nopadding{padding: 0;}
</style>