<?php
	$title= "License Search Test" ;
	include '/home/codio/workspace/includes/header.html';
    include '/home/codio/workspace/includes/menus/no_menu.html'; 
?>

<p>This test page attempts to link directly to the license search without first visiting the VO homepage.</p>
<p><a title="Public License Search" href="https://vo.ras.dshs.state.tx.us/datamart/selSearchTypeTXRAS.do?from=loginPage" target="_blank">Begin your license search here</a>.</p>

<hr/>
<h2>Getting the Session ID</h2>
<p>This page works by grabbing the Java Session ID from VO via an inline frame that is hidden from the user:</p>

<table class="border" style="background-color:#EEE;" width="80%">
	<tr>
		<td style="padding:20px !important;">
			<p><strong>Code:</strong></p>
			
			&lt;iframe src="https://vo.ras.dshs.state.tx.us/datamart/login.do" style="display: none;"&gt;&lt;/iframe&gt;
			
		</td>
	</tr>
</table>

<hr/>
<h2>Managing Timeouts</h2>
<p>We can also set a javascript refresh to reload this page at the same interval that the session ID expires.</p>
<table class="border" style="background-color:#EEE;" width="80%">
	<tr>
		<td style="padding:20px !important;">
			<p><strong>Code:</strong></p>
			
			&lt;script type="text/javascript"&gt;<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(function(){<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.location.reload(1);<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;}, 1790000);<br/>
			&lt;script&gt;
			
		</td>
	</tr>
</table>

<hr/>
<h2>Browser Compatibility</h2>
<p>This approach should work for all modern browsers and any legacy browsers that support iframes and javascript.</p>

<iframe src="https://vo.ras.dshs.state.tx.us/datamart/login.do" style="display: none;"></iframe>
<script type="text/javascript">
	setTimeout(function(){
		window.location.reload(1);
	}, 1790000);	
</script>
<?php include '/home/codio/workspace/includes/footer.html' ?>