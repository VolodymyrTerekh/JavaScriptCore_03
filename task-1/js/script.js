document.getElementById('number').addEventListener("change", function(){

	var data = document.getElementById('number').value;

	if (data > 0) {
	    console.log(1);
	} else if (data < 0) {
	    console.log(-1);
	} else {
	    console.log(0);
	}
});