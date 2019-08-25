document.getElementById('begin').addEventListener("click", function(){

	var data = document.getElementById('login').value;
	var data_pass = document.getElementById('password').value;
	

	switch(data) {
		case 'Admin':
	    console.log('Whos there? - Admin');
	    switch(data_pass){
	    	case 'TheMaster':
	    		console.log('Password? - Welcome!');
	    		break;
	    	case 'Cancel':
	    		console.log('Password? - Canceled');
	    		break;
	    	default:
	    		console.log('Password? - Wrong password');
	    }
	    break;
	  case 'Cancel':
	  	console.log('Whos there? - Canceled');
	  	break;
	  default:
	  	console.log('Whos there? - I dont know you');

}
});