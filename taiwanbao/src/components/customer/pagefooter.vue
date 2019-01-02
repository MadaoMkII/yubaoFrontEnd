<template>
	<div class="row nomargin" style="margin: 0;padding-bottom: 30px;margin-top: 15px;">
		<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 nopadding" style="padding: 0;">
			<center>
				<p style="margin-bottom: 0;font-size: 10px;">
					<a href="javascript:void(0)" v-on:click="showCompanyModal()" style="color: #666;">公司簡介</a>&nbsp;|&nbsp;<a href="javascript:void(0)" v-on:click="showRulesModal()" style="color: #666;">個人資料安全保障策略</a>&nbsp;|&nbsp;<a href="javascript:void(0)" v-on:click="showClauseModal()" style="color: #666;">會員條款</a>&nbsp;|&nbsp;<a href="javascript:void(0)" v-on:click="showProposalModal()" style="color: #666;">合作提案</a>&nbsp;|&nbsp;<a href="javascript:void(0)" v-on:click="showContactModal()" style="color: #666;">聯繫方式</a>
				</p>
			</center>
			<center style="margin-top: 10px;"><p style="margin-bottom: 0;font-size: 10px;color: #999;">玉寶國際有限公司 © 版權所有 2018-2020</p></center>
		</div>
		<!-- 公司簡介模态框（Modal） -->
		<div class="modal fade" id="companyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
<!-- 		            <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                <h4 class="modal-title" id="myModalLabel">公司簡介</h4>
		            </div> -->
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>帮助</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">我們致力提供會員購物平臺，以及優質的購物資訊。如果您是以下需求：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">1. 總是走在流行的前線，比別人早壹步</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">2. 想要完全自由的購物系統平臺</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">3. 要求商品品質較高, 價錢更合理</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">4. 喜歡獨一無二的稀有商品</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">5. 購物方便，物流快速，而且要安全</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">6. 要潮流的購物資訊</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">我們擁有研發系統的能力，網站內的系統機制都是依照消費者習慣去設計，採用自動化系統來取代麻煩的人工步驟，無論在服務或是效率上都要求做到卓越！而且配合各國的收貨站、先進的物流系統及專業團隊，專業程度絕對不能與一般傳統的人工作業網站相比。透過 Yubaopay團隊的專業服務，相信能完成您所託付的使命，將您訂購的商品安全地送達到您的手中。</p>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
		<!-- 安全保障策略模态框（Modal） -->
		<div class="modal fade" id="rulesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
<!-- 		            <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                <h4 class="modal-title" id="myModalLabel">個人資料安全保障策略</h4>
		            </div> -->
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>個人資料安全保障策略</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">由於網際網路資料的傳輸不能保證百分之百的安全，儘管Yubaopay 團隊網站努力保護網友的個人資料安全，在部分情況下會使用通行標準的 SSL 保全系統，保障資料傳送的安全性。由於資料傳輸過程牽涉您上網環境保全之良窳，我們會確保會員個人資料於Yubaopay 團隊網站上使用資料的安全。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">如果您在網路上公佈可被他人讀取的個人資料時，可能會收到其他團體主動提供的廣告或垃圾郵件。請您諒解此部份所造成的後果均非Yubaopay 團隊網站所能控制範圍，我們也無法負擔任何責任。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">隱私權暨資訊安全保護政策修訂</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">Yubaopay 團隊網站會不定時修訂本項政策，以符合最新之隱私權保護規範。當我們在使用個人資料的規定做較大幅度修改時，我們會在網頁上張貼告示，通知您相關事項。</p>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
		<!-- 联系方式模态框（Modal） -->
		<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
<!-- 		            <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                <h4 class="modal-title" id="myModalLabel">聯繫方式</h4>
		            </div> -->
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>聯繫方式</h4>
		            </div>
		            <div class="modal-body">
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">想進一步瞭解Yubaopay 團隊的服務，或是對Yubaopay 團隊有任何寶貴意見，都歡迎您與我們聯繫，我們將竭誠為您服務！</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">顧客服務專線：0902-276-088</p>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
		<!-- 合作提案模态框（Modal） -->
		<div class="modal fade" id="proposalModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
		            <!-- <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                <h4 class="modal-title" id="myModalLabel">合作提案</h4>
		            </div> -->
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>合作提案</h4>
		            </div>
		            <div class="modal-body" style="max-height:400px;overflow-y: scroll;">
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">Yubaopay 團隊在廣告刊登、異業合作、公益團體合作上，具有很高的彈性以及豐富度，歡迎您隨時透過e-mail、電話等管道我們聯繫，我們將由專人與您聯絡，為您提供最專業的服務！</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">異業合作或異業聯盟</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">Yubaopay 團隊很樂意進行異業合作、異業聯盟或是相關行銷活動配合，請來信說明您公司的性質或附上企劃案。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">公益團體活動配合</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">歡迎公益團體來信說明貴團體的性質或附上網站、活動等相關資訊。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">廣告刊登</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">Yubaopay 團隊除色情、非法內容，以及同性質網站之外，非常樂意刊登廣告。歡迎您留下您的公司名稱、連絡方式以及廣告相關說明。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">◎客服信箱：yubao42736989@gmail.com</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">◎活動合作洽詢專線：0902-276-088  黃小姐</p>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
		<!-- 会员条款模态框（Modal） -->
		<div class="modal fade" id="clauseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		        <div class="modal-content">
		            <!-- <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                <h4 class="modal-title" id="myModalLabel">會員條款</h4>
		            </div> -->
		            <div class="modal-header" style="background: #ff8500;padding: 10px 15px;border-top-left-radius: 5px;border-top-right-radius: 5px;">
		                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #fff;font-size: 14px;opacity: 1;">&times;</button>
		                <h4 class="modal-title pull-left" id="myModalLabel" style="color: #fff;font-size: 14px;"><img src="../../assets/images/shensuicon.png" class="pull-left" style="width: 15px;margin-top: 3px;margin-right: 5px;"/>會員條款</h4>
		            </div>
		            <div class="modal-body" style="max-height:400px;overflow-y: scroll;">
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">一、認知與接受條款</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">1.玉寶國際有限公司(以下簡稱Yubaopay 團隊)係依據本服務條款提供Yubaopay 團隊 (以下簡稱「本服務」)。當會員完成Yubaopay 團隊之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。Yubaopay 團隊有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，Yubaopay 團隊將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">2.若會員為未滿二十歲之未成年人，應於會員的家長（或監護人）閱讀、瞭解並同意本約定書之所有內容及其後修改變更後，方得註冊為會員、使用或繼續使用本服務。當會員使用或繼續使用Yubaopay 團隊時，即推定會員的家長（或監護人）已閱讀、瞭解並同意接受本約定書之所有內容及其後修改變更。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">3.會員及Yubaopay 團隊雙方同意使用本服務之所有內容包括意思表示等，以電子文件作為表示方式。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">4.為了確保會員之個人資料、隱私及消費者權益之保護，於交易過程中將使用會員之個人資料，謹依個人資料保護法第8條規定告知以下事項：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">蒐集之目的：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">蒐集之目的在於進行行銷業務、消費者、客戶管理與服務、網路購物及其他電子商務服務及與調查、統計與研究分析(法定特定目的項目編號為Ｏ四Ｏ、Ｏ九Ｏ、一四八、一五七)。Yubaopay 團隊將藉由加入會員之過程或進行交易之過程來蒐集個人資料。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">蒐集之個人資料類別：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">Yubaopay 團隊於網站內蒐集的個人資料包括：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(1) C001辨識個人者： 如會員之姓名、地址、電話、電子郵件等資訊。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(2) C002辨識財務者： 如信用卡或金融機構帳戶資訊。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(3) C011個人描述：例如：性別、出生年月日等。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">利用期間、地區、對象及方式：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(1) 期間：會員當事人要求停止使用或Yubaopay 團隊停止提供服務之日為止。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(2) 地區：會員之個人資料將使用於台灣、大陸等地區。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">(3) 利用對象及方式：會員之個人資料蒐集除用於Yubaopay 團隊之會員管理、客戶管理之檢索查詢等功能外，亦將利用於辨識身份、金流服務、物流服務、行銷廣宣等。例示如下：</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">a. 以會員身份使用Yubaopay 團隊提供之各項服務時，於頁面中自動顯示會員資訊。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">b. 為遂行交易行為：會員對商品或勞務為預約、下標、購買、參與贈獎等之活動或從事其他交易時，關於商品配送、勞務提供、價金給付、回覆客戶之詢問、Yubaopay 團隊對會員之詢問、相關售後服務及其他遂行交易所必要之業務。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">c. 宣傳廣告或行銷等：提供會員各種電子雜誌等資訊、透過電子郵件、郵件、電話等提供與服務有關之資訊。將會員所瀏覽之內容或廣告，依客戶之個人屬性或購買紀錄、Yubaopay 團隊網站之瀏覽紀錄等項目，進行個人化作業、會員使用服務之分析、新服務之開發或既有服務之改善等。針對民調、活動、留言版等之意見，或其他服務關連事項，與會員進行聯繫。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">d. 回覆客戶之詢問：針對會員透過電子郵件、電話或其他任何直接間接連絡方式向Yubaopay 團隊所提出之詢問進行回覆。</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			e. 其他業務附隨之事項：附隨於上述a至d.之利用目的而為Yubaopay 團隊提供服務所必要之使用。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			f. 對於各別服務提供者之資訊提供：會員對服務提供者之商品或勞務為預約、下標、購買、參加贈獎活動或申請其他交易時，Yubaopay 團隊於該交易所必要之範圍內，得將會員之個人資料檔案提供予服務提供者，並由服務提供者負責管理該個人資料檔案。Yubaopay 團隊將以規約課予服務提供者依保障會員隱私權之原則處理個人資料之義務，但無法保證服務提供者會必然遵守。詳細內容，請向各別服務提供者洽詢。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			g. 其他：提供個別服務時，亦可能於上述規定之目的以外，利用個人資料。此時將在該個別服務之網頁載明其要旨。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員就個人資料之權利：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			Yubaopay 團隊所蒐集個人資料之當事人，依個人資料保護法得對Yubaopay 團隊行使以下權利：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			(1) 查詢或請求閱覽。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			(2) 請求製給複製本。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			(3) 請求補充或更正。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			(4) 請求停止蒐集、處理或利用。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			(5) 請求刪除。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員如欲行使上述權利，可與Yubaopay 團隊客服連絡進行申請。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			請注意！如拒絕提供加入會員所需必要之資料，將可能導致無法享受完整服務或完全無法使用該項服務。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			二、會員的註冊義務
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			為了能使用本服務，會員同意以下事項：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			依本服務註冊表之提示提供會員本人正確、最新的資料，且不得以第三人之名義註冊為會員。每位會員僅能註冊登錄一個帳號，不可重覆註冊登錄。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			即時維持並更新會員個人資料，確保其正確性，以獲取最佳之服務。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			若會員提供任何錯誤或不實的資料、或未按指示提供資料、或欠缺必要之資料、或有重覆註冊帳號等情事時，Yubaopay 團隊有權不經事先通知，逕行暫停或終止會員的帳號，並拒絕會員使用本服務之全部或一部。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			三、Yubaopay 團隊隱私權政策
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			關於會員的註冊以及其他特定資料依Yubaopay 團隊「隱私權政策」受到保護與規範。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			四、會員帳號、密碼及安全
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			1.完成本服務的登記程序之後，會員將取得一個特定之密碼及會員帳號，維持密碼及帳號之機密安全，是會員的責任。任何依照規定方法輸入會員帳號及密碼與登入資料一致時，無論是否由本人親自輸入，均將推定為會員本人所使用，利用該密碼及帳號所進行的一切行動，會員本人應負完全責任。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			2.會員同意以下事項：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員的密碼或帳號遭到盜用或有其他任何安全問題發生時，會員將立即通知Yubaopay 團隊
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			每次連線完畢，均結束會員的帳號使用。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員的帳號、密碼及會員權益均僅供會員個人使用及享有，不得轉借、轉讓他人或與他人合用。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			帳號及密碼遭盜用、不當使用或其他Yubaopay 團隊無法辯識是否為本人親自使用之情況時，對此所致之損害，除證明係因可歸責於Yubaopay 團隊之事由所致，Yubaopay 團隊將不負任何責任。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			Yubaopay 團隊若知悉會員之帳號密碼確係遭他人冒用時，將立即暫停該帳號之使用(含該帳號所生交易之處理)。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			五、兒童及青少年之保護
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			為確保兒童及青少年使用網路的安全，並避免隱私權受到侵犯，家長（或監護人）應盡到下列義務： 未滿十二歲之兒童使用本服務時時，應全程在旁陪伴，十二歲以上未滿十八歲之青少年使用本服務前亦應斟酌是否給予同意。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			六、使用者的守法義務及承諾
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員承諾絕不為任何非法目的或以任何非法方式使用本服務，並承諾遵守中華民國相關法規及一切使用網際網路之國際慣例。會員若係中華民國以外之使用者，並同意遵守所屬國家或地域之法令。會員同意並保證不得利用本服務從事侵害他人權益或違法之行為，包括但不限於：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			公布或傳送任何誹謗、侮辱、具威脅性、攻擊性、不雅、猥褻、不實、違反公共秩序或善良風俗或其他不法之文字、圖片或任何形式的檔案
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			侵害或毀損Yubaopay 團隊或他人名譽、隱私權、營業秘密、商標權、著作權、專利權、其他智慧財產權及其他權利
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			違反依法律或契約所應負之保密義務
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			冒用他人名義使用本服務
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			傳輸或散佈電腦病毒
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			從事未經博客來事前授權的商業行為
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			刊載、傳輸、發送垃圾郵件、連鎖信、違法或未經Yubaopay 團隊許可之多層次傳銷訊息及廣告等；或儲存任何侵害他人智慧財產權或違反法令之資料
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			對本服務其他用戶或第三人產生困擾、不悅或違反一般網路禮節致生反感之行為
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			其他不符本服務所提供的使用目的之行為或Yubaopay 團隊有正當理由認為不適當之行為
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			七、服務內容之變更
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			1.會員同意Yubaopay 團隊所提供本服務之範圍，Yubaopay團隊均得視業務需要及實際情形，增減、變更或終止相關服務的項目或內容，且無需個別通知會員。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			2.會員同意Yubaopay 團隊得依實際執行情形，增加、修改或終止相關活動，並選擇最適方式告知會員。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			3.會員同意Yubaopay 團隊得不定期發送商品訊息至會員所登錄的電子信箱帳號。當會員收到訊息後表示拒絕接受行銷時，Yubaopay 團隊將停止繼續發送行銷訊息。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			八、服務之停止、中斷
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			Yubaopay 團隊將依一般合理之技術及方式，維持系統及服務之正常運作。但於以下各項情況時，博客來有權可以停止、中斷提供本服務：
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			Yubaopay 團隊網站電子通信設備進行必要之保養及施工時
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			發生突發性之電子通信設備故障時
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			Yubaopay 團隊網站申請之電子通信服務被停止，無法提供服務時
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			由於天災等不可抗力之因素或其他不可歸責於博客來致使Yubaopay 團隊網站無法提供服務時
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			九、交易行為
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			1.會員使用本服務進行交易時，應依據Yubaopay 團隊所提供之確認商品數量及價格機制進行。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			2.會員同意使用本服務訂購產品時，於Yubaopay 團隊通知確認交易成立前，Yubaopay 團隊仍保有不接受訂單或取消出貨之權利。會員向Yubaopay 團隊發出訂購通知後，系統將自動發出接受通知，但此通知並非訂單確認通知，關於交易成立與否Yubaopay 團隊將另行告知。若因訂單內容之標的商品或服務，其交易條件(包括但不限於規格、內容說明、圖片、)有誤時，Yubaopay 團隊仍得於下單後二工作日內拒絕該筆訂單。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			3.會員若於使用本服務訂購產品後倘任意退換貨、取消訂單、或有任何Yubaopay 團隊認為不適當而造成Yubaopay 團隊作業上之困擾或損害之行為，Yubaopay 團隊將可視情況採取拒絕交易、暫停取消配送付款方式，或永久取消會員資格辦理。若會員訂購之產品若屬於以下情形：（１）預購類商品（２）商品頁顯示無庫存（３）須向供應商調貨（４）轉由廠商出貨，因商品交易特性之故，倘商品缺絕、或廠商因故無法順利供貨導致訂單無法成立時，Yubaopay 團隊將以最適方式(以電子郵件為主，再輔以電話等)告知。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			4.會員使用本服務進行交易時，得依照消費者保護法之規定行使權利。因會員之交易行為而對本服務條款產生疑義時，應為有利於消費者之解釋。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十、責任之限制與排除
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			1.本服務所提供之各項功能，均依該功能當時之現況提供使用，Yubaopay 團隊對於其效能、速度、完整性、可靠性、安全性、正確性等，皆不負擔任何明示或默示之擔保責任。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			2.Yubaopay 團隊並不保證本服務之網頁、伺服器、網域等所傳送的電子郵件或其內容不會含有電腦病毒等有害物；亦不保證郵件、檔案或資料之傳輸儲存均正確無誤不會斷線和出錯等，因各該郵件、檔案或資料傳送或儲存失敗、遺失或錯誤等所致之損害，Yubaopay 團隊不負賠償責任。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十一、智慧財產權的保護
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			1.Yubaopay 團隊所使用之軟體或程式、網站上所有內容，包括但不限於著作、圖片、檔案、資訊、資料、網站架構、網站畫面的安排、網頁設計，均由Yubaopay 團隊或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。任何人不得逕自使用、修改、重製、公開播送、改作、散布、發行、公開發表、進行還原工程、解編或反向組譯。若會員欲引用或轉載前述軟體、程式或網站內容，必須依法取得Yubaopay 團隊或其他權利人的事前書面同意。尊重智慧財產權是會員應盡的義務，如有違反，會員應對Yubaopay 團隊負損害賠償責任（包括但不限於訴訟費用及律師費用等）。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			2.在尊重他人智慧財產權之原則下，會員同意在使用Yubaopay 團隊之服務時，不作侵害他人智慧財產權之行為。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			3.若會員有涉及侵權之情事，Yubaopay 團隊可暫停全部或部份之服務，或逕自以取消會員帳號之方式處理。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			4.若有發現智慧財產權遭侵害之情事，請將所遭侵權之情形及聯絡方式，並附具真實陳述及擁有合法智慧財產權之聲明，以下列方式聯絡Yubaopay 團隊：以電子郵件(E-mail)寄送至： yubao42736989@gmail.com(請注意！此為限定用途之信箱，非關侵權事項通知之信件寄送至此將不獲受理，Yubaopay 團隊會員有任何疑問請至客服中心詢問) 
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十二、會員對Yubaopay 團隊之授權
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			對於會員上載、傳送、輸入或提供之資料，會員同意Yubaopay 團隊網站得於合理之範圍內蒐集、處理、保存、傳遞及使用該等資料，以提供使用者其他資訊或服務、或作成會員統計資料、或進行關於網路行為之調查或研究，或為任何之合法使用。 若會員無合法權利得授權他人使用、修改、重製、公開播送、改作、散布、發行、公開發表某資料，並將前述權利轉授權第三人，請勿擅自將該資料上載、傳送、輸入或提供至Yubaopay 團隊。任何資料一經會員上載、傳送、輸入或提供至Yubaopay 團隊時，視為會員已允許Yubaopay 團隊無條件使用、修改、重製、公開播送、改作、散布、發行、公開發表該等資料，並得將前述權利轉授權他人，會員對此絕無異議。會員並應保證Yubaopay 團隊使用、修改、重製、公開播送、改作、散布、發行、公開發表、轉授權該等資料，不致侵害任何第三人之智慧財產權，否則應對Yubaopay 團隊負損害賠償責任（包括但不限於訴訟費用及律師費用等）。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十三、特別授權事項
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			因使用本服務所提供之網路交易或活動，可能須透過宅配或貨運業者始能完成貨品(或贈品等)之配送或取回，因此，會員同意並授權Yubaopay 團隊得視該次網路交易或活動之需求及目的，將由會員所提供且為配送所必要之個人資料(如收件人姓名、配送地址、連絡電話等)，提供予宅配貨運業者及相關配合之廠商，以利完成該次貨品(或贈品等)之配送、取回。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十四、拒絕或終止會員的使用
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			會員同意Yubaopay 團隊得基於維護交易安全之考量，因任何理由，包含但不限於缺乏使用，或違反本服務條款的明文規定及精神，終止會員的密碼、帳號（或其任何部分）或本服務（或其任何部分）之使用，或將本服務內任何「會員內容」加以移除並刪除。此外，會員同意若本服務（或其任何部分）之使用被終止，Yubaopay 團隊對會員或任何第三人均不承擔責任。
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 2em;text-align: left;line-height: 26px;">
		            			十五、準據法與管轄法院
		            		</p>
		            	</div>
		            	<div class="row" style="margin: 0;padding: 0 15px;">
		            		<p class="pull-left" style="text-indent: 4em;text-align: left;line-height: 26px;">
		            			本服務條款之解釋與適用，以及與本服務條款有關或會員與Yubaopay團隊間因交易行為而產生之爭議或糾紛，應依照中華民國法律予以處理，並以台灣台北地方法院為第一審管轄法院，但若法律對於管轄法院另有強制規定者，仍應依其規定。
		            		</p>
		            	</div>
		            </div>
		        </div><!-- /.modal-content -->
		    </div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	export default{
		name:'pagefooter',
		methods:{
			showCompanyModal:function () {
				$('#companyModal').modal('show');
			},
			showRulesModal:function () {
				$('#rulesModal').modal('show');
			},
			showClauseModal:function () {
				$('#clauseModal').modal('show');
			},
			showProposalModal:function () {
				$('#proposalModal').modal('show');
			},
			showContactModal:function () {
				$('#contactModal').modal('show');
			}
		}
	}
</script>

<style>
</style>