<template>
	<div class="logMessage" style="background: #f5f5f5;">
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
						<div class="row" style="margin-top: 15px;background: #fff;min-height: 735px;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<label class="pull-left" style="line-height: 34px;">状态：</label>
									<select name="" v-model="type" class="form-control pull-left" style="width: 15%;">
										<option value="warning">warning</option>
										<option value="error">error</option>
										<option value="info">info</option>
									</select>
									<select name="" v-model="timeType" class="form-control pull-left" style="width: 15%;margin-left: 30px;margin-right: 15px;">
										<option value="0">创建时间</option>
										<option value="1">更新时间</option>
									</select>
									<!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="startTime" style="width: 15%;margin-top: 2px;margin-left: 10px;"></datetime>-->
									<el-date-picker class="pull-left"
								            type="datetime"
								            format="yyyy-MM-dd hh:mm:ss"
								            value-format="yyyy-MM-dd hh:mm:ss"
								            placeholder="选择日期时间"  v-model="selectAfterTime" :picker-options="startDatePicker">
								    </el-date-picker>
									<p class="pull-left" style="line-height: 34px;margin: 0 5px;">-</p>
									<el-date-picker class="pull-left"
								            type="datetime"
								            format="yyyy-MM-dd hh:mm:ss"
								            value-format="yyyy-MM-dd hh:mm:ss"
								            placeholder="选择日期时间"  v-model="selectBeforeTime" :picker-options="endDatePicker">
								    </el-date-picker>
										
									<!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="endTime" style="width: 15%;margin-top: 2px;"></datetime>-->
									<button type="button" class="btn btn-default pull-left" style="margin-left: 30px;" v-on:click="searchList()">搜索</button>
								</div>	
								<div class="row" style="margin-top: 30px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-striped">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;">信息</th>
													<th>等级</th>
													<th>发生方法名</th>
													<th>发生位置</th>
													<th>发生行数</th>
													<th>创建时间</th>
													<th style="border-top-right-radius: 5px;">具体信息</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in listInfo">
													<td style="line-height: 20px;border-left: 1px solid #666;">{{item.info}}</td>
													<td style="line-height: 20px;">{{item.level}}</td>
													<td style="line-height: 20px;">{{item.functionName}}</td>
													<td style="line-height: 20px;">{{item.filePath}}</td>
													<td style="line-height: 20px;">{{item.lineNumber}}</td>
													<td style="line-height: 20px;">{{item.created_at}}</td>
													<td style="line-height: 20px;border-right: 1px solid #666;">
														<a href="javascript:void(0)" v-on:click="showErrorInfo(item)"><img src="../../assets/images/administrator/check.png"/></a>
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
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<!-- 模态框（Modal） -->
										<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
										    <div class="modal-dialog" style="width: 90%;">
										        <div class="modal-content">
										            <div class="modal-header" style="background: #33b8ff;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
										                <button type="button" class="close"  aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;" @click="closeMyModal()">&times;</button>
										                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>错误信息</h4>
										            </div>
										            <div class="modal-body">
										            	<div class="row">
										            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
										            			<p class="pull-left" style="text-align: left;" id="errorBox"></p>
										            			<!--<p class="pull-left" style="text-align: left;" id="infoBox"></p>
										            			<p class="pull-left" style="text-align: left;" id="warningBox"></p>-->
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
							</div>
						</div>
					</div>					
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
	export default {
		name:'logMessage',
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
				selectAfterTime:'',
				selectBeforeTime:'',
				type:'warning',
				timeType:0,
				listInfo:[],
				currentPage:1,
				totalPage:1,
			    pageCount:10
			}
		},
		components:{
			leftmenu,
			rightheader,
			datetime
		},
		mounted:function () {
			this.getList();
		},
		methods:{
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
			closeMyModal:function () {
				$('#myModal').modal('hide');
			},
			currentPageInfo:function (pageNum) {
				this.currentPage = pageNum;
				this.getList();
			},
			getList:function () {
				var param = { 
				  "level":this.type,
				  "createdAt":this.createdAt,
				  "updatedAt":this.updatedAt,
				  "page":this.currentPage,
				  "unit":this.pageCount
				}
				$.ajax({
		  			type:'post',
		  			url:getService()+"/getLogger",
		  			dataType: "json",
		  			data:JSON.stringify(param),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	this.listInfo = res.data;
				    	for (var i=0;i<this.listInfo.length;i++) {
				    		this.listInfo[i].created_at = this.transformDate(this.listInfo[i].created_at);
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
			searchList:function () {
				if(this.timeType == 0){
					this.createdAt.afterDate = this.selectAfterTime;
					this.createdAt.beforeDate = this.selectBeforeTime;
					this.updatedAt.afterDate = '';
					this.updatedAt.beforeDate = '';
				}else{
					this.updatedAt.afterDate = this.selectAfterTime;
					this.updatedAt.beforeDate = this.selectBeforeTime;
					this.createdAt.afterDate = '';
					this.createdAt.beforeDate = '';
				}
				this.getList();
			},
			showErrorInfo:function (str) {
				$('#errorBox').html(str.error);
//				$('#infoBox').html(str.info);
//				$('#warningBox').html(str.warning);
				$('#myModal').modal('show');
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
	.ql-container{height: 200px;}

	.nomargin{margin: 0;}
  	.nopadding{padding: 0;}
</style>