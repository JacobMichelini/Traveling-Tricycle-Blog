//////////////////////////////////////////////////////////////////////////////////////////
// JQUERY YAY!
//////////////////////////////////////////////////////////////////////////////////////////
var body = $("body")
var white = $(".whitecontainer")
var black = $(".blackcontainer")
var whitebox = $(".whitebox")
var blackbox = $(".blackbox")

white.click(function(){

	body.addClass('whitebody')
	body.removeClass('blackbody')
	whitebox.addClass('border')
	blackbox.removeClass('border')

})

black.click(function(){

	body.addClass('blackbody')
	body.removeClass('whitebody')
	blackbox.addClass('border')
	whitebox.removeClass('border')

})


































