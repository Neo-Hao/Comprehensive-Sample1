function showNewCode(e){if(e!=showLevel){showLevel=e;var t=showLevel+"code.html";$.ajax({url:t,context:document.body}).done(function(e){$("#codeGoesHere").text(e)})}}function showOldCode(e){if(e!=showLevel){showLevel=e;var t=showLevel+"code.html";0==showLevel?($("#codeGoesHere").html(t),$.ajax({url:t,context:document.body}).done(function(e){$("#codeGoesHere").text(e)})):($("#codeGoesHere").html(t),$.ajax({url:t,context:document.body}).done(function(e){$("#codeGoesHere").text(e)}))}}var trigger=[],showLevel=0;$.get("layer1.txt",function(e){var t=[],o={};t=e.split("\n");var r=t[0].split(",");o[0]=parseInt(r[0]),$("span.step").text(r[1]),void 0!=r[2]&&$("a.query").attr("href",r[2]),void 0!=r[3]&&$("a.codelink").attr("href",r[3]),$("#0").addClass("0level");for(var s=1;s<t.length;s++){r=t[s].split(",");var n=$("#0").clone();if(n.addClass(r[0]+"level"),o[s]=parseInt(r[0]),n.find("span.step").text(r[1]),void 0!=r[2]&&n.find("a.query").attr("href",r[2]),void 0!=r[3]&&n.find("a.codelink").attr("href",r[3]),r[0]>"0"){var a=20*parseInt(r[0]);n.css("margin-left",a+"px"),n.css("display","none")}$(".task-layer").append(n)}var a=o[0];for(var l in o)o[l]==a+1&&trigger.push(l-1),a=o[l];for(var s=0;s<trigger.length;s++)$("p.steps").eq(trigger[s]).addClass("trigger")}),$(document).on("click",".trigger",function(){var e=parseInt($(this).attr("class").substring(6,7),10),t=e+1,o=t+"level",r={};if(r=$(this).nextUntil("p:not(."+o+")"),"none"==r.css("display"))r.show(),showNewCode(t);else{for(;r.hasClass("trigger");){r.hide();var s=r.length,n=$(r[s-1]);t++,o=t+"level",r=n.nextUntil("p:not(."+o+")")}r.hide(),showOldCode(e)}});