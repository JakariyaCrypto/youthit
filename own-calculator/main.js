// =============== calculator js =================
let inputdata = document.getElementById('input');

let calculate = (number) => {

	var found = inputdata.value += number;

}

let result = () => {
	try{
		inputdata.value = eval(inputdata.value);
	}catch(err){
		alert('enter valid data');
	}
}

function clr(){
	inputdata.value = "";
}


function del(){
	inputdata.value = inputdata.value.slice(0,-1);
}





















