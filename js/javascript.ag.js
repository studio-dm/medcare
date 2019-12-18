//Custom script for the operator timeout. author: dmorgan 3-24-2016
//it is necessary to put a span tag around the the operator number like so: <span id="operator">n</script>

function changeit(){
	$("#operator").css("color","ccc").fadeOut(20, function(){
			$("#operator").css("color","#0e9108").fadeIn(2000);
		});
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function checkCookie() {
    var ops=getCookie("operator");
    if (ops != "") {
        countdown(ops);
    } else {
       oper = Math.floor((Math.random() * 6) + 1); 
	   countdown(oper);
       setCookie("operator", oper, .0005); 
    }
}

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("operator");
        var current_minutes = mins
        seconds--;
       
		counter.innerHTML = current_minutes.toString();
        if( seconds > 0 ) {
			
            setTimeout(tick, 300);
        } else {
            if(mins > 0){
				
				changeit();
				oper = Math.floor((Math.random() * 6) + 2); 
				countdown(oper);
       			setCookie("operator", oper, .0005);    
            }
        }
    }
    tick();

}

checkCookie();