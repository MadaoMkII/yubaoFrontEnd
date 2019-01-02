<template>
	<div class="imageTest">
		<div class="row">
			<div class="col-lg-12 col-md-12">
				<input type="file" name="picUpload" id="picUpload" value="" class="pull-left" style="width: 40%;"/>
				<button type="button" class="pull-left btn btn-default" style="margin-left: 15px;" v-on:click="test()">上传</button>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-12">
				<img src="" id="picView" style="width: 10%;" class="pull-left"/>
				<button type="button" id="deleteBtn" class="pull-left btn btn-default" v-on:click="deleteImg($event)">删除</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'imageTest',
		data(){
			return {
				imgName:''
			}
		},
		methods:{
			test:function () {
				var formData = new FormData();
				var img_file = document.getElementById('picUpload');
				var fileObj = img_file.files[0];
				console.log(fileObj);
				formData.append('files',fileObj);
				$.ajax({
					url:'http://www.yubaopay.com.tw/upload',
					type:'post',
					contentType:false,
	                data:formData,
	                processData:false,
	                success:function (res) {
	                	if (res.filenames.length>0) {
                			$('#picView').attr('src','http://www.yubaopay.com.tw/image/'+res.filenames[0]);
	                		$('#deleteBtn').attr('filename',res.filenames[0]);
	                	}
	                }
				});
			},
			deleteImg:function (event) {
				console.log(event.target.getAttribute('filename'));
				$.ajax({
					url:'http://www.yubaopay.com.tw/delImage/'+event.target.getAttribute('filename'),
					type:'get',
	                success:function (res) {
	                	console.log(res);
	                }
				});
			}
		}
	}
</script>

<style>
</style>