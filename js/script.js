var client=new Keen({projectId:"52ec0e5900111c3a4f00000f",readKey:"d6047a75ee959a16cc5ed869c11a22599a79bc00a0cb5386aac4effdf51f215e0aafeaf556bccdd8d162d6455512ee6e63a1ebdf91b2f08e1ff29890b166c8ce2767c47902e4927b8c3002638eed76d0cd5a43cad6b59a273d36b358ca1615cafdd4953723de9083fa7025975b9d51c8"});Keen.ready(function(){var a=document.getElementById("my_chart"),b=new Keen.Query("average",{eventCollection:"checks",targetProperty:"request.duration",groupBy:"check.name",timeframe:"this_48_hours",interval:"hourly",filters:[{property_name:"check.name",operator:"eq",property_value:"Keen IO"}]});client.draw(b,a,{library:"c3",chartType:"line",height:400,chartOptions:{legend:{show:!1},axix:{x:{type:"timeseries",tick:{format:"%b %d %H:%M"}}}}})});var ToC,newLine,random;ToC="";var random3="-";$(window).resize(function(){for(var a=$("#hero").height(),b=$(window).width(),c=Math.round(a/40),d=Math.round(b/40),e=Math.round(d*c),f=0;e>f;f++){if(random=Math.ceil(3*Math.random()),random2=Math.ceil(4e3*Math.random()),"-"==g)var g="",h="even";else var g="-",h="odd";newLine="<div class='color"+random+" "+h+"' style='transform: scale(10) translate3d("+g+random2+"px, "+random2+"px, 0)'></div>",ToC+=newLine}$("area").append(ToC),$("div.dots").height(a+20),$("div.dots").width(b),$("area").width(b+50)}),$(window).resize(),window.setTimeout(function(){$("body").addClass("switched_on")},500),$(window).scroll(function(){$(window).scrollTop()>20?$("body").addClass("scroll"):$("body").removeClass("scroll")});