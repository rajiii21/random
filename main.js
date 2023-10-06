let input=prompt("enter your Number");

let result=function(min,max){
	let ans=Math.floor(Math.random()*(max-min)+min);
	if(ans==input){
		document.write("Good work");
	}
	else{
		document.write("Not matched");
	}
console.log(ans);
}

result(1,10)



