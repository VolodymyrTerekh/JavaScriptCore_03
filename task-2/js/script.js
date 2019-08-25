document.getElementById('begin').addEventListener("click", function(){

	var data = document.getElementById('login').value;
	var data_pass = document.getElementById('password').value;
	

	if (data == 'Admin') {
	    console.log('Whos there? - Admin');
	    if(data_pass == 'TheMaster'){
	    	console.log('Password? - Welcome!');
	    }else if(data_pass == 'Cancel'){
	    	console.log('Password? - Canceled');
	    }else{
	    	console.log('Password? - Wrong password')
	    }

	} else if (data == 'Cancel') {
	    console.log('Whos there? - Canceled');
	} else {
	    console.log('Whos there? - I dont know you');
	}
});