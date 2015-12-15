// javscript

var str = "brian briiian elsker at kode in school or work briaS 123 love speghetti times elsker 6...! anni ";
console.log("REGULAREXPRESSIONS = brian elsker at kode in School or work 123 love speghetti times 6...!  " );
console.log("string.search I(case insensitive) (/school/i) " + str.search(/school/i) );
console.log("string.match (/el/) first el " + str.match(/el/) );
console.log("string.match (/el/g) multi el: " + str.match(/(el)/g) );
console.log("string.match (/\d/g) no digital values: " + str.match(/[\D]/g) );
console.log("string.match (/^\d\D/g) only digital values: " + str.match(/[^\D]/g) );
console.log("string.match (/^\d\D{3}/g) only digital values but not third: " + str.match(/[^\D{3}]/g) );

console.log("string.match (/ho*/g) " + str.match(/ho*/g) );
console.log("string.match (/a+n*/g) " + str.match(/a+n*/g) );
console.log("string.match (/an*/g) " + str.match(/an*/g) );
console.log("angle angel oslo.match (/e?el?/g) " + "angle angel oslo".match(/e?el?/g) );
console.log("str.match (/br*i+a[a-zA-Z]/g) all br multi i a and wildcard: " + str.match(/br*i+a[a-zA-Z]/g) );
console.log("str.match (//br?i/g) all br only one i a and wildcard (?  ot gready only one i): " + str.match(/br?i/g) );


regexp = /(.*?)for/g;
var match  = regexp.exec("something format_abc");
console.log( "groups: " + match[0]);
console.log(/(.{3})hur.{3,}/g.exec("madhur manhurt") );

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbzd");
console.log("test " + myArray);




$(document).ready(function(){
	var element = document.getElementById("imagesizer");
	console.log("element " + element);
	element.addEventListener("click",function(){
		// alert("brian har ret");
	});
	
	$("#imagesizer").click(function(){
		alert("perfect");
	});

});











