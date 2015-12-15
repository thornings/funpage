// javscript




function myClickFunction() {	
    document.getElementById("demo").innerHTML = "Paragraph clicked.";
}

function myOverFunction() {	
    document.getElementById("demo").innerHTML = "Paragraph over.";
}

function myOutFunction() {	
    document.getElementById("demo").innerHTML = "Paragraph out.";
}

var tt = "brian thorning";
console.log("charAt " + tt.charAt(6));
console.log("charAt " + tt.charCodeAt(6));
console.log("indexOf " + tt.indexOf("thor"));
console.log("lastIndexOf " + tt.lastIndexOf("i"));
console.log("search " + tt.search("th"));
console.log("slice with 2 " + tt.slice(7,11));
console.log("slice only 1 " + tt.slice(6));
console.log("slice only 1 minus " + tt.slice(-6)); // not <ie8
console.log("substring 2 " + tt.substring(1,3));
console.log("substring 1 " + tt.substring(6));
console.log("replace " + tt.replace("thorning", "jorgensen"));
console.log("Uppercase " + tt.toUpperCase());
console.log("concat " + tt.concat(" ", "Jorgensen"));
console.log("specifik char selection " + tt[6]);
console.log("concat " + tt.concat(" ", "Jorgensen"));
console.log("valueOf " + tt.valueOf());
var tt = "  bt  j ";
console.log("valueOf :" + tt.trim() +":");

var txt = "a-b-c-d-e";   // String
var arr = txt.split("-");
console.log("" + arr.length + " " + arr); 
console.log("");
console.log("wrapper anchor " + "link".link("www.tv2.dk"));
console.log("wrapper anchor " + "big".big());
console.log("wrapper anchor " + "link".blink());

$(document).ready(function(){
	var e = $("#inserting");

	e.append("link of wrapper function link".link("www.tv2.dk"));
	e.append("Big".big());
	e.append("blink".blink());
	e.append("bold".bold());
	e.append("fixed".fixed());
	e.append("color".fontcolor("blue"));
	e.append("size".fontsize("22"));
	e.append("italic bold".italics().bold());
	e.append("small strike".small().strike());
	e.append("sub".sub());
	e.append("sup".sup());

});











