$(document).ready(function(){
    $('#fullpage').fullpage({
    	verticalCentered: false,
    	scrollingSpeed: 600,
    	resize: false,
    	continuousVertical: true,
    	menu:true,
    	anchors: ['page1','page2','page3','page4','page5']
    });
});
$("#photo2").hover(function(){
	$(this).fadeTo(800,1);},function(){
	$(this).stop(true,false).fadeTo(800,0);
});