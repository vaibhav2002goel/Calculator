var a = document.getElementsByClassName('button')
var b = document.getElementsByClassName('operations')
var c = document.getElementsByClassName('button-zero')
var output = document.getElementById('output')

var n1 = null;
var op = null;
var n2 = null;
var counter1 = 0;

for(var i=0;i<a.length;i++)
{
	a[i].addEventListener('click',function(){
		var val1 = this.getAttribute('data-value')

		if(op!=null && counter1){
			output.innerText = "";
			counter1 = 0;
		}

		if(val1 == '+' || val1 == '*' || val1 == '/' || val1 == '%' || val1 == '-' ){

			n1 = parseFloat(output.innerText);
			console.log(n1);
			output.innerText = ""
			output.innerText = val1;
			op = val1;
			counter1 = 1;
		}

		else if(val1 == '+/-'){
			output.innerText += '-';
		}
		else if(val1 == "AC"){
			output.innerText = ""
			op = null;
			n1 = null;
			n2 = null;
			counter1 = 1;
		}

		else if(val1 == '='){
			n2 = parseFloat(output.innerText);
			console.log(n1,op,n2);
			var ans = eval(n1 + " " + op + " " + n2);
			output.innerText = ans;
		}

		else{
			output.innerText += val1;
		}
	})
}