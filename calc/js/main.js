window.addEventListener('keydown', run);

function run(e){
	const key = document.querySelector(`input[data-key="${e.keyCode}"]`);
	if(key.value == 1)
		run1();
	else if(key.value == 2)
		run2();
	else if(key.value == 3)
		run3();
	else if(key.value == 4)
		run4();
	else if(key.value == 5)
		run5();
	else if(key.value == 6)
		run6();
	else if(key.value == 7)
		run7();
	else if(key.value == 8)
		run8();
	else if(key.value == 9)
		run9();
	else if(key.value == 0)
		run0();
	else if(key.value == "00")
		run00();
	else if(key.value == ".")
		runDeci();
	else if(key.value == '*')
		runMultiply();
	else if(key.value == '+')
		runPlus();
	else if(key.value == '-')
		runMinus();
	else if(key.value == '/')
		runDivide();
	else if(key.value == '=')
		runEquals();
	else if(key.value == '/')
		runDivide();
	else if(key.value == 'C')
		runC();
}

function run1(){

	document.case.display.value += "1"
};
function run2(){

	document.case.display.value += "2"
};
function run3(){

	document.case.display.value += "3"
};
function run4(){

	document.case.display.value += "4"
};
function run5(){

	document.case.display.value += "5"
};

function run6(){

	document.case.display.value += "6"
};

function run7(){

	document.case.display.value += "7"
};

function run8(){

	document.case.display.value += "8"
};

function run9(){

	document.case.display.value += "9"
};

function run0(){

	document.case.display.value += "0"
};
function run00(){

	document.case.display.value += "00"
};
function runDeci(){

	document.case.display.value += "."
};
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

function runC(){

	document.case.display.value = ""
};

function rund(){

	document.case.display.value = "."
};


function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
