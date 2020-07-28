/*--------------------------- Contact Form Handler ---------------------------*/
function validate_email(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

(() => {
	const form = document.querySelector('form');
	const form_submit = form.querySelector('button:last-of-type');
	const form_reply = form_submit.querySelector('h2');

	form.addEventListener('submit', event => {
		// Prevent default send
		event.preventDefault();
		// Prepare data to send
		const data = {};
		const form_elements = Array.from(form);
		form_elements.map(input => (data[input.name] = input.value));

		// Form Validation
		if (data["name"] == "") {
			alert("name field cannot be empty!");
			return;
		}
		if (validate_email(data["reply_to"]) == false) {
			alert("Invalid Email Address!");
			return;
		}
		if (data["message"] == "") {
			alert("message field cannot be empty!");
			return;
		}
	
		// Construct an HTTP request
		var xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action, true);
		xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
		xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	
		// Send the collected data as JSON
		xhr.send(JSON.stringify(data));
	
		// Callback function
		xhr.onloadend = response => {
			if (response.target.status === 200) {
				// The form submission was successful
				form.reset();
				form_submit.style.pointerEvents = "none";
				form_reply.style.color = "green";
				form_reply.innerHTML = 
				'Thanks for the message!';
			} else {
				// The form submission failed
				form_submit.style.pointerEvents = "none";
				form_reply.style.color = "red";
				form_reply.innerHTML = 'Something went wrong!';
				console.error(JSON.parse(response.target.response).message);
			}
		};
	});
})();
