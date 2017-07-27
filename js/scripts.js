//Get input from the form
var newTask = document.getElementById("taskInput");
// newTask.setAttribute("class","jumbotron");	
//get complete and incomplete tasks list
var incompleteTasks = document.getElementById("newTaskList");
var completeTasks = document.getElementById("doneTaskList");
//call new tasklist when the submit button is clicked
var submit = document.getElementById("submit");
submit.setAttribute("onclick", "newTaskList()");

// function to add the task to the apropriate list
function addStatus(checker,listElement) {
	incompleteTasks.appendChild(listElement);
	checker.onchange = function () {
		if (checker.checked) {
			completeTasks.appendChild(listElement)
		}else{
			incompleteTasks.appendChild(listElement)
		}
	}
}
//Funtion to delete task from any list
function deleteTask(deletes,listElement) {
	deletes.onclick = function (){
		var listParent = listElement.parentElement;
		listParent.removeChild(listElement);
	}
}

// Create the task item
function newTaskList() {
	//Create a list element
	var listElement =document.createElement("li");
	//Create the task node and checkbox
	var taskNode = document.createTextNode(newTask.value);
	var headingNode = document.createElement("h4");
	headingNode.setAttribute("class","lineHead")
	headingNode.appendChild(taskNode);
	// headingNode.setAttribute("class","jumbotron")
	var checker = document.createElement("input");
	checker.type = "checkbox";
	//Create the delete buttton
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("class","btn btn-warning")
	var deleteNode = document.createTextNode("Delete");
	deleteButton.appendChild(deleteNode);
	//Append the chechbox, Task name and deletebutton under the list element
	listElement.appendChild(checker);
	listElement.appendChild(headingNode);
	listElement.appendChild(deleteButton);
	//Call function to add the task to the apropriate list
	addStatus(checker,listElement);
	// call function to activate delete button
	deleteTask(deleteButton,listElement);
}