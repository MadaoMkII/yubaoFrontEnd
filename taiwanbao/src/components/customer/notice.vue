<template>
	<div class="notice">
		<div class="row nomargin">
			<div class="col-lg-12 col-md-12 nopadding">
				<div class="box">
					<div class="row nomargin" style="border-bottom: 0.5px solid #ccc;">
						<div class="col-lg-12 col-md-12" style="padding: 0 15px;">
							<p class="pull-left title"><img src="../../assets/images/normalicon.png" style="margin-right: 10px;"/>{{titleFromFather}}</p>
						</div>
					</div>
					<div class="row nomargin" v-for="item in optionsFromFather.noticeArray">
						<div class="col-lg-12 col-md-12" style="border-bottom: 0.5px dashed #ccc;padding: 0 15px;line-height: 28px;">
							<a href="javascript:void(0)" v-on:click="showNoticeModal(item.announcementTopic,item.created_at,item.content)" class="pull-left ask">{{item.announcementTopic}}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content" style="border-radius: 5px;">
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>帮助</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row">
		            		<div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
		            			<div class="row">
		            				<p class="pull-left" style="font-size: 20px;font-weight: bold;">{{noticeTitle}}</p>
		            			</div>
		            			<div class="row" style="margin-top: 15px;margin-bottom: 20px;border-bottom: 1px solid #ccc;">
		            				<p class="pull-left" style="font-size: 12px;color: #999;">{{noticeTime}}</p>
		            			</div>
		            			<div class="row" id="noticeContent" style="margin-top: 20px;text-align: left;">
		            				
		            			</div>
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
</template>

<script>
	import {getService} from '../../assets/js/configs.js'
	import '../../../static/css/PCstyle.css'
	export default{
		name:'customerNotice',
		props: ['optionsFromFather','titleFromFather'],
		data(){
			return{
				notices:[],
	  			noticeTitle:'',
	  			noticeTime:'',
	  			noticeContent:''
			}
		},
		mounted:function () {
			this.getNotices();
		},
		methods:{
			getNotices:function () {
		  		var param = {
		  			page:1,
		  			unit:10
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
				    	this.notices = res.data;
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
		  	showNoticeModal:function (title,time,content) {
		  		this.noticeTitle = title;
		  		this.noticeTime = this.transformDate(time);
		  		$('#noticeContent').html(content);
		  		$('#noticeContent').find('img').css('width','100%');
		  		$('#noticeModal').modal('show');
		  	}
		}
	}
</script>

<style scoped>
	.nomargin{margin: 0;}
  	.nopadding{padding: 0;}
  	#noticeContent img{width: 100%;}
</style>