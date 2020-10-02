function run(button_number_value){
	
	document.case.display.value += button_number_value ;
}

function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};
function runc() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function runDec(){

	document.case.display.value += "."
};

function runC(){

	document.case.display.value = ""
};

function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
};




