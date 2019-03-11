<template>
	<div class="recommend" style="background: #f5f5f5;">
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
						<div class="row" id="recommend" style="margin: 15px;background: #fff;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<button type="button" class="pull-left btn btn-default" v-on:click="createItem()">创建商品</button>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;">序号</th>
													<th>商品名称</th>
													<th>推荐人</th>
													<th>优先级</th>
													<th style="border-top-right-radius: 5px;">操作</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item,index) in itemInfo">
													<td style="line-height: 20px;border-left: 1px solid #666;">{{index+1}}</td>
													<td style="line-height: 20px;">{{item.item_name}}</td>
													<td style="line-height: 20px;">{{item.referer}}</td>
													<td style="line-height: 20px;">{{item.priority}}</td>
													<td style="border-right: 1px solid #666;line-height: 20px;">
														<!--<a href="javascript:void(0)"><img src="../../assets/images/administrator/edit.png" style="width: 28px;margin-top: 6px;margin-right: 15px;"/></a>
														<a href="javascript:void(0)"><img src="../../assets/images/administrator/check.png" style="width: 28px;margin-top: 6px;margin-right: 15px;"/></a>-->
														<a href="javascript:void(0)"><img src="../../assets/images/administrator/bianji.png" style="width: 28px;margin-top: 6px;margin-right: 5px;" v-on:click="showShopItem(item)"/></a>
														<a href="javascript:void(0)"><img src="../../assets/images/administrator/delete.png" style="width: 28px;margin-top: 6px;" @click="deleteShopItem(item)"/></a>
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
		<!-- 新增首页商品模态框（Modal） -->
		<div class="modal fade" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog" style="width: 50%;">
		        <div class="modal-content">
		            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>首页商品推荐</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">推荐人：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="text" class="form-control" name="" id="" value="" v-model="referrer"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">淘宝链接：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="text" class="form-control" name="" id="" value="" v-model="advertisingLink"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">商品名称：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="text" class="form-control" name="" id="" value="" v-model="item_name"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">商品价格：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="text" class="form-control" name="" id="" value="" v-model="price"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">优先级：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<input type="text" class="form-control" name="" id="" value="" v-model="priority"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin-top: 30px;">
		            		<div class="col-lg-3 col-md-3">
		            			<label class="pull-right" style="line-height: 34px;">上传图片：</label>
		            		</div>
		            		<div class="col-lg-9 col-md-9">
		            			<div class="row">
            						<div class="col-lg-3 col-md-3" style="padding: 15px;" v-if="imgSrcs!=''">
            							<a href="javascript:void(0)" v-on:click="setImg()"><img v-bind:src="imgSrcs" style="width: 100%;border: 1px solid #999;border-radius: 10px;"/></a>
            						</div>
            						<div class="col-lg-3 col-md-3" id="setImg" style="padding: 15px;" v-if="imgSrcs==''">
            							<a href="javascript:void(0)" v-on:click="setImg()"><img src="../../assets/images/updateImg_03.jpg" style="width: 100%;border: 1px solid #999;border-radius: 10px;"/></a>
            						</div>
            					</div>
            					<input type="file" name="" id="appealPic" value="" style="margin-top: 5px;display: none;" v-on:change="updateImg()"/>
		            		</div>
		            	</div>
		            	<div class="row" style="margin: 15px 0px 30px;">
		            		<div class="col-lg-6 col-md-6">
		            			<center><button type="button" class="btn btn-primary" v-on:click="addItem()">保存</button></center>
		            		</div>
		            		<div class="col-lg-6 col-md-6">
		            			<center><button type="button" class="btn btn-default" data-dismiss="modal">取消</button></center>
		            		</div>
		            	</div>
		            </div>
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
		name:'recommend',
		data(){
			return {
				referrer:'玉寶小二',
				advertisingLink:'',
				advertisingID:'',
				item_name:'',
				priority:'',
				price:'',
				currentPage:1,
			    totalPage:1,
			    pageCount:10,
				imgSrcs:'',
				itemInfo:[]
			}
		},
		components:{
			leftmenu,
			rightheader
		},
		mounted:function () {
			this.getItemInfo(this.currentPage);
			this.setHeight();
		},
		methods:{
			setHeight:function () {
				$('#recommend').css('height',(window.screen.height-65)+'px');
			},
			createItem:function () {
				this.referrer = '玉寶小二';
				this.advertisingLink = '';
				this.imgSrcs = '';
				this.item_name = '';
				this.price = '';
				this.priority = '';
				this.advertisingID = '';
				$('#itemModal').modal('show');				
			},
			currentPageInfo:function (pageNum) {
		  		this.currentPage = pageNum;
		  		this.getItemInfo(this.currentPage);
		  	},
		  	getItemInfo:function (num) {
		  		var param = {
	  				page:parseInt(num),
	  				unit:this.pageCount
	  			}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/adv/getHomepageItemsList",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	if (res.error_code == 0) {
				    		this.itemInfo = res.data;
				    		var totalNum = parseInt(res.nofdata);
				    		var pageMore = totalNum % this.pageCount;
				    		if (pageMore == 0) {
				    			this.totalPage = parseInt(totalNum / this.pageCount);
				    		} else{
				    			this.totalPage = parseInt(totalNum / this.pageCount) + 1;
				    		}
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
	                		this.imgSrcs=res.data;
	                		$('#setImg').hide();
	                	}
	                }.bind(this)
				});
			},
			addItem:function () {
				var param = {
					referrer:this.referrer,
					referer:this.referrer,
					advertisingLink:this.advertisingLink,
					imageLink:this.imgSrcs,
					item_name:this.item_name,
					price:this.price,
					priority:this.priority,
					advertisingID:this.advertisingID
				}
				if (this.advertisingID!='') {
					$.ajax({
			  			type:'post',
			  			url:getService()+"/adv/updateHomepageItem",
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if (res.error_code == 0) {
					    		alert('更新商品成功');
					    		window.location.reload();
					    	}
					    }.bind(this)
			  		});
				} else{
					$.ajax({
			  			type:'post',
			  			url:getService()+"/adv/addHomepageItems",
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if (res.error_code == 0) {
					    		alert('添加商品成功');
					    		window.location.reload();
					    	}
					    }.bind(this)
			  		});
				}				
			},
			showShopItem:function (item) {
				var param = {
					advertisingID:item.advertisingID
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/adv/getItemDetail",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	console.log(res);
				    	if (res.error_code == 0) {
							this.referrer = res.data.referer;
							this.advertisingLink = res.data.advertisingLink;
							this.item_name = res.data.item_name;
							this.price = res.data.price;
							this.priority = res.data.priority;
							this.imgSrcs = res.data.imageLink;
							this.advertisingID = res.data.advertisingID;
							$('#itemModal').modal('show');
				    	}
				    }.bind(this)
		  		});
			},
			updateShopItem:function (item) {
				console.log(item);
				var that =this;
				layer.msg('确定更新该商品吗？', {
				  time: 0 
				  ,btn: ['确定', '取消']
				  ,yes: function(index){
				    layer.close(index);
				    $.ajax({
			  			type:'post',
			  			url:getService()+"/adv/updateHomepageItem",
			  			dataType: "json",
			  			data:JSON.stringify(item),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if(res.error_code == 0){
					    		layer.msg('操作成功', {icon: 1});
					    		that.getItemInfo(that.currentPage);
					    	}else{
					    		layer.msg('操作失败', {icon: 5});
					    	}
					    },
					    error:function(res){
					    	layer.msg('操作失败', {icon: 5});
					    }
			  		});
				  }
				});
			},
			deleteShopItem(item){
				var that =this;
				var param={
					"advertisingID": item.advertisingID
				}
				layer.msg('确定删除该商品吗？', {
				  time: 0 
				  ,btn: ['确定', '取消']
				  ,yes: function(index){
				    layer.close(index);
				    $.ajax({
			  			type:'post',
			  			url:getService()+"/delAdvertising",
			  			dataType: "json",
			  			data:JSON.stringify(param),
			  			async:true,
						headers: {'Content-Type': 'application/json'},
			  			xhrFields: {
					        withCredentials: true
					    },
					    crossDomain: true,
					    success:function (res) {
					    	if(res.error_code == 0){
					    		layer.msg('操作成功', {icon: 1});
					    		that.getItemInfo(that.currentPage);
					    	}else{
					    		layer.msg('操作失败', {icon: 5});
					    	}
					    },
					    error:function(res){
					    	layer.msg('操作失败', {icon: 5});
					    }
			  		});
				  }
				});
			}
		}
	}
</script>

<style scoped>
	table th,td{text-align: center;}
	table th{background: #33b8ff;color: #fff;}
	table td{border-bottom: 1px solid #666;font-size: 12px;}
	
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
</style>