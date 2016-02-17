/*
    Author: Briana Oree
    Creation Date: 
    Title: First Phone gap app
    Revised:
    Purpose: get used to phone gap
    Notes:
*/
//===================================
var base = 'https://dl.dropboxusercontent.com/u/21142484/modules/';
var $ = lib;
var menuGap = "85";

//----------------------------------------
$(window).on("load", function(){ 
    resize();
    window.onresize = resize;
    $("#menu").toggle(openMenu, closeMenu);
    //getFilefromBase("lib.js");
    $.get(main.js, function(r){
		var fourSpaces = "&nbsp;&nbsp;&nbsp;&nbsp;";
        var twoSpaces = "&nbsp;&nbsp;";
        //The order is crucial
        r = r.replace(/\t/g, fourSpaces);
        r = r.replace(/</g,"&lt;");
        r = r.replace(/>/g,"&gt;");
        r = r.replace(/\n/g,"<br/>"); 
        r = r.replace(/\s\s/g, twoSpaces);
        $("#backPanel").html(r);
	});
	
	$("#menu").hover(function over(){
            $("#menu").css("color","lightblue");
            setTimeout(function(){
                $("#menu").css("color","hsl(184, 70%, 18%)");
            },1000);
        },function out(){
            $("#menu").css("color","hsl(184, 70%, 18%)");
        }
    );
});//---END of window onload handler


//=============Under The Hood==============
function resize(){
  var root = document.documentElement;
  var screen = window.screen.width;
  var width = window.innerWidth;
  var rem = (8 + width/200)+ "px";
  root.style.fontSize = rem;
}
//------------------------------------------
function openMenu(){
  $("#frontPanel").css("left", menuGap + "%");
  $(".banner").css("left", menuGap + "%");  
}
function closeMenu(){
  $("#frontPanel").css("left","0px");
  $(".banner").css("left","0px");   
}
//-------------------------------------------
function getFilefromBase(file){
    $.get(base + file, function(r){

        var fourSpaces = "&nbsp;&nbsp;&nbsp;&nbsp;";
        var twoSpaces = "&nbsp;&nbsp;";
        //The order is crucial
        r = r.replace(/\t/g, fourSpaces);
        r = r.replace(/</g,"&lt;");
        r = r.replace(/>/g,"&gt;");
        r = r.replace(/\n/g,"<br/>"); 
        r = r.replace(/\s\s/g, twoSpaces);
        $("#backPanel").html(r);
    });
}
//-------------------------









