
function loadjson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
if(xhr.readyState===4 && xhr.status=="200"){
callback(xhr.responseText);
}
};
xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    basic(data.details);
    careerinfo(data.careerobjective);
    education(data.educationalqualification);
    skills(data.technicalskills);
    w(data.Workshops);
    x(data.Projects);
    y(data.Hobbies);
    z(data.Declaration);
  

})
var child1=document.querySelector(".child1");
function basic(det){
var image=document.createElement("img");
image.src=det.image;
child1.appendChild(image);
var name=document.createElement("h4");
name.textContent = det.name;
child1.appendChild(name);
var email=document.createElement("a");
email.textContent=det.email;
child1.appendChild(email);
var number=document.createElement("h4");
number.textContent=det.number;
child1.appendChild(number);
var address=document.createElement("h4");
address.textContent=det.address;
child1.appendChild(address);


}
var child2 = document.querySelector(".child2");
var child3 = document.querySelector(".child3");


function careerinfo(info1){
	var heading1 = document.createElement("h3");
	heading1.textContent="CareerObjective :";
	child3.appendChild(heading1);

	child3.appendChild(document.createElement("hr"));

	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child3.appendChild(heading2);

}
function education(edu){
	var heading3 = document.createElement("h3");
	heading3.textContent="Educational qualification";
	child3.appendChild(heading3);

	child3.appendChild(document.createElement("hr"));

	var table1 = document.createElement("table");
	table1.border="1";
	child3.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

var child4 = document.querySelector(".child4");
var child5 = document.querySelector(".child5");
var child6 = document.querySelector(".child6");

function skills(skillinfo){
	var hd = document.createElement("h3");
	hd.textContent="Technicalskills";
	child5.appendChild(hd);

	child5.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		
		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child5.appendChild(skillul);
       child5.appendChild(document.createElement("br"));
	}


}


function w(skillinfo){
	var hd = document.createElement("h3");
	hd.textContent="Workshops";
	child6.appendChild(hd);

	child6.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child6.appendChild(skillul);
		

	}

}
var child7 = document.querySelector(".child7");
var child8 = document.querySelector(".child8");
var child9 = document.querySelector(".child9");


function x(skillinfo){
	var hd = document.createElement("h3");
	hd.textContent="Projects";
	child8.appendChild(hd);

	child8.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		
		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child8.appendChild(skillul);
       child8.appendChild(document.createElement("br"));
	}


}
function y(skillinfo){
	var hd = document.createElement("h3");
	hd.textContent="Hobbies";
	child9.appendChild(hd);

	child9.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		
		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child9.appendChild(skillul);
       child9.appendChild(document.createElement("br"));
	}


}
var child10 = document.querySelector(".child10");

function z(info1){
	var heading1 = document.createElement("h3");
	heading1.textContent="Declaration :";
	child10.appendChild(heading1);

	child10.appendChild(document.createElement("hr"));

	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child10.appendChild(heading2);

}
