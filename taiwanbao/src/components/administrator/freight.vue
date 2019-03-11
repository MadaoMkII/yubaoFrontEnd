<template>
	<div class="freight" style="background: #f5f5f5;">
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
						<div class="row" id="freight" style="margin: 15px;background: #fff;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<p class="pull-left" style="line-height: 34px;">状态：</p>
										<select class="pull-left form-control" style="width: 15%;margin-right: 15px;" v-model="chooseState">
											<option value="">--请选择--</option>
											<option v-for="(item,index) in states" :value="index" >{{item}}</option>
										</select>
										<label class="pull-left" style="margin-left: 30px;line-height: 34px;margin-right: 15px;">补缴运费时间：</label>
										<!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="startTime" style="width: 15%;margin-top: 2px;"></datetime>-->
										<el-date-picker class="pull-left"
									            type="datetime"
									            format="yyyy-MM-dd hh:mm:ss"
									            value-format="yyyy-MM-dd hh:mm:ss"
									            placeholder="选择日期时间"  v-model="selectAfterTime" :picker-options="startDatePicker">
									    </el-date-picker>
										<p class="pull-left" style="line-height: 34px;margin: 0 5px;">-</p>
										<!--<datetime :readonly='true' format='YYYY-MM-DD' class="pull-left" id="endTime" style="width: 15%;margin-top: 2px;"></datetime>-->
										<el-date-picker class="pull-left"
									            type="datetime"
									            format="yyyy-MM-dd hh:mm:ss"
									            value-format="yyyy-MM-dd hh:mm:ss"
									            placeholder="选择日期时间"  v-model="selectBeaforeTime" :picker-options="endDatePicker">
									    </el-date-picker>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<input type="text"  value="" class="pull-left form-control" style="width: 15%;margin-right: 15px;" placeholder="输入订单号" v-model="searchBillId"/>
										<input type="text"  value="" class="pull-left form-control" style="width: 15%;margin-right: 15px;" placeholder="输入手机号" v-model="searchPhoneNum"/>
										<input type="text"  value="" class="pull-left form-control" style="width: 15%;margin-right: 15px;" placeholder="输入邮箱号" v-model="searchEmail"/>
										<button type="button" class="pull-left btn btn-default"  @click="searchByChooseFunc">搜索</button>
									</div>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover">
											<thead>
												<tr>
													<th style="width: 10%;">手机号</th>
													<th style="width: 10%;">邮箱号</th>
													<th>关联订单编号</th>
													<th style="width: 15%;">补缴运费金额(NT)</th>
													<th style="width: 15%;">补缴运费状态</th>
													<th style="width: 15%;">补缴时间</th>
													<th style="border-top-right-radius: 5px;">备注</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item,index) in transportInfos">
													<td style="line-height: 20px;">{{item.userInfo?item.userInfo.tel_number:''}}</td>
													<td style="line-height: 20px;">{{item.userInfo?item.userInfo.email_address:''}}</td>
													<td style="line-height: 20px;">{{item.billID}}</td>
													<td style="line-height: 20px;">{{item.replacePostage?item.replacePostage.postageAmount:''}}</td>
													<td style="line-height: 20px;" v-if="item.replacePostage && item.replacePostage.status==1">已缴费</td>
													<td style="line-height: 20px;" v-else-if="item.replacePostage && item.replacePostage.status==0">未缴费</td>
													<td style="line-height: 20px;" v-else >--</td>
													<td style="line-height: 20px;">{{item.newTime}}</td>
													<td style="border-right: 1px solid #666;line-height: 20px;">{{item.replacePostage?item.replacePostage.comment:''}}
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
	</div>
</template>

<script>
	import leftmenu from './menu.vue'
	import rightheader from './rightheader.vue'
	import {getService} from '../../assets/js/configs.js'
	export default {
		name:'freight',
		data(){
			return {
				selectAfterTime:'',
				selectBeaforeTime:'',
				states:['未缴费','已缴费'],
				chooseState:'',
				currentPage:1,
			    totalPage:1,
			    pageCount:8,
			    transportInfos:[],
				searchBillId:'',
				searchPhoneNum:'',
				searchEmail:'',
				startDatePicker: this.beginDate(),
    			endDatePicker: this.processDate(),
			}
		},
		components:{
			leftmenu,
			rightheader,
		},
		mounted(){
			this.getAllTransportHandelInfo();
			this.setHeight();
		},
		methods:{
			setHeight:function () {
				$('#freight').css('height',(window.screen.height-65)+'px');
			},
			getAllTransportHandelInfo(){
				var that = this;
				var param={
					"page":that.currentPage,
  					"unit":that.pageCount
				}
				that.searchTransportHandel(param);

			},
			searchTransportHandel(params){
				var that=this;
		  		$.ajax({
		  			type:'post',
		  			url:getService()+"/bills/findPostage",
		  			dataType: "json",
		  			data:JSON.stringify(params),
		  			async:true,
					headers: {'Content-Type': 'application/json'},
		  			xhrFields: {
				        withCredentials: true
				    },
				    crossDomain: true,
				    success:function (res) {
				    	console.log('deal res=',res);
				    	if(res.error_code == 0||res.error_code == 200){
				    		that.transportInfos = res.data;
				    		for(var i=0;i<that.transportInfos.length;i++){
				    			that.transportInfos[i].newTime = '';
				    			if(that.transportInfos[i].replacePostage){
				    				that.transportInfos[i].newTime = that.transformDate(that.transportInfos[i].replacePostage.replaceTime);
				    			}

				    		}
				    		that.totalPage = Math.ceil(res.nofdata/that.pageCount);

				    	}
				    }
		  		});

			},
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

		  	},
			currentPageInfo:function (pageNum) {
				this.currentPage = pageNum;
				this.searchByChooseFunc(this.currentPage);
			},
			searchByChooseFunc(){
		  		var that = this;

		  		var param={
		  			"billID": that.searchBillId,
		  			"beforeDate":that.selectBeaforeTime,
		  			"afterDate":that.selectAfterTime,
		  			"page":that.currentPage,
		  			"unit":that.pageCount,
		  			"replacePostage.status":that.chooseState,
		  			"userInfo.tel_number":that.searchPhoneNum,
		  			"userInfo.email_address":that.searchEmail
		  		}

		  		that.searchTransportHandel(param);

			},
			beginDate(){
			  const self = this
			  return {
			    disabledDate(time){
			      if (self.selectBeforeTime) {  //如果结束时间不为空，则小于结束时间
			        return new Date(self.selectBeforeTime).getTime() < time.getTime()
			      } 
			    }
			  }
			},
			processDate() {
			  const  self = this
			  return {
			    disabledDate(time) {
			      if (self.selectAfterTime) {  //如果开始时间不为空，则结束时间大于开始时间
			        return new Date(self.selectAfterTime).getTime() > time.getTime()
			      } 
			    }
			  }
			},
		},
	}
</script>

<style scoped>
	table th,td{text-align: center;white-space: nowrap;/*控制单行显示*/
overflow: hidden;/*超出隐藏*/
text-overflow: ellipsis;/*隐藏的字符用省略号表示*/}
	table th{background: #33b8ff;color: #fff;}
	table td{border-bottom: 1px solid #666;}
	.paginate ul li{list-style: none;float: left;padding: 3px 6px;width: auto;border: none;}
	.paginate ul li a:hover{color: #ff8500;}
	.paginate ul .active a{color: #ff8500;}
	.paginate ul .active{border: none;}
</style>