<template>
	<div class="rebate" style="background: #f5f5f5;">
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
						<div class="row" id="rebate" style="margin: 15px;background: #fff;overflow-y: scroll;margin-bottom: 0;">
							<div class="col-lg-12 col-md-12" style="padding: 30px 15px;">
								<div class="row">
									<p class="pull-left" style="font-size: 16px;font-weight: bold;">返利设置</p>
								</div>
								<div class="row" style="margin-top: 15px;">
									<label class="pull-left" style="line-height: 34px;">返利比例：</label>
									<input type="number"  value="" class="pull-left form-control" style="width: 20%;" placeholder="输入金额"/>
									<p class="pull-left" style="color: #999;line-height: 34px;margin-left: 10px;">% （订单金额，不含运费）</p>
								</div>
								<div class="row" style="margin-top: 30px;">
									<p class="pull-left" style="font-size: 16px;font-weight: bold;">返利设置</p>
								</div>
								<div class="row" style="margin-top: 15px;">
									<label class="pull-left" style="line-height: 34px;">订单状态：</label>
									<select  class="form-control pull-left" style="width: 20%;margin-right: 30px;">
										<option value="">请选择</option>
									</select>
									<label class="pull-left" style="line-height: 34px;">返利状态：</label>
									<select  class="form-control pull-left" style="width: 20%;margin-right: 30px;">
										<option value="">请选择</option>
									</select>
								</div>
								<div class="row" style="margin-top: 15px;">
									<input type="text"  id="" value="" class="pull-left form-control" style="width: 40%;margin-right: 15px;" placeholder="输入订单号或账号"/>
									<button type="button" class="btn btn-default pull-left">搜索</button>
								</div>
								<div class="row" style="margin-top: 15px;">
									<div class="col-lg-12 col-md-12">
										<table class="table table-hover">
											<thead>
												<tr>
													<th style="border-top-left-radius: 5px;">淘宝订单号</th>
													<th>关联账户</th>
													<th>订单状态</th>
													<th>联盟返利金额</th>
													<th>返利状态</th>
													<th>返还用户R币</th>
													<th style="border-top-right-radius: 5px;">入账时间</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>19559959595</td>
													<td>vegeta2011@126.com</td>
													<td>订单付款</td>
													<td>100.08</td>
													<td>结算中</td>
													<td>1.97</td>
													<td>2017/09/10 14:38</td>
												</tr>
											</tbody>
										</table>
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
	export default {
		name:'rebate',
		data(){
			return {
				
			}
		},
		components:{
			leftmenu,
			rightheader
		},
		mounted:function () {
			this.setHeight();
		},
		methods:{
			setHeight:function () {
				$('#rebate').css('height',(window.screen.height-65)+'px');
			}
		}
	}
</script>

<style scoped>
	label{font-size: 12px;}
	table th,td{text-align: center;}
	table th{background: #33b8ff;color: #fff;}
</style>