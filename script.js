document.getElementById("add_grade").style.visibility = "hidden";
document.getElementById("grade_view").style.visibility = "hidden";

function login_user() 
{
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username == "cool") {
		if (password == "password") {
			document.getElementById("login_field").style.display = "none";
			document.getElementById("grade_view").style.visibility = "visible";
		} else {
			alert("password is incorrect!");
		}
	} else {
		alert("username is incorrect!");
	}
}

function toggle_page_view(view) {
	if (view = "grade_view") {
		document.getElementById("grade_view").style.visibility = "hidden";
		document.getElementById("add_grade").style.visibility = "visible";
	} else {
		document.getElementById("grade_view").style.visibility = "visible";
		document.getElementById("add_grade").style.visibility = "hidden";
	}
}

function add_grade() {
	let name = document.getElementById("name").value;
	let value = Number(document.getElementById("value").value);
	
	if (!isNaN(value)) {
		if (value >= 0 && value <= 100) {
				document.getElementById('grade_list').innerHTML += "Name: " + name + " Grade: " + value + "<br />";
				document.getElementById("grade_view").style.visibility = "visible";
				document.getElementById("add_grade").style.visibility = "hidden";
			} else {
				alert('Error! Grade value is either too high or too low! (Range is 0-100)');
			}
		} else {
			alert('Error! Grade value is invalid!');
		}
}

function go_back() {
	document.getElementById("grade_view").style.visibility = "visible";
	document.getElementById("add_grade").style.visibility = "hidden";
}