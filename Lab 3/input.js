 document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
 document.getElementById("noteTitle").value = ""; 
 document.getElementById("notes").value = "";

 document.getElementById("noteTitle").value = window.localStorage["noteTitle"];
 document.getElementById("notes").value = window.localStorage["notes"];
 
saveValues1 = function(){
	if(window.localStorage["noteTitle"] == window.localStorage["x1"])
  {
  window.localStorage["noteTitle"] = document.getElementById("noteTitle").value;
  window.localStorage["y1"] = window.localStorage["noteTitle"];
  }
  else 
  {
 	window.localStorage["noteTitle"] = document.getElementById("noteTitle").value;
  window.localStorage["x1"] = window.localStorage["noteTitle"];
  }
  }
  
  saveValues2 = function(){
	if(window.localStorage["notes"] == window.localStorage["x2"])
  {
  window.localStorage["notes"] = document.getElementById("notes").value;
 	window.localStorage["y2"] = window.localStorage["notes"];
  }
  else 
  {
  window.localStorage["notes"] = document.getElementById("notes").value;
 	window.localStorage["x2"] = window.localStorage["notes"];
  }
  }
  
removeValues = function(){
	window.localStorage.setItem("noteTitle", "");
	window.localStorage.setItem("notes", "");
	window.localStorage.setItem("x1", "");
	window.localStorage.setItem("x2", "");
	window.localStorage.setItem("y1", "");
	window.localStorage.setItem("y2", "");
}

undoValues = function(){
  if(window.localStorage["noteTitle"] == window.localStorage["x1"])
  {
  window.localStorage["noteTitle"] = window.localStorage["y1"];
  window.localStorage["notes"] = window.localStorage["y2"];
  document.getElementById('noteTitle').value = window.localStorage["noteTitle"];
  document.getElementById('notes').value = window.localStorage["notes"];
  }
  else 
  {
 	window.localStorage["noteTitle"] = window.localStorage["x1"];
  window.localStorage["notes"] = window.localStorage["x2"];
  document.getElementById('noteTitle').value = window.localStorage["noteTitle"];
  document.getElementById('notes').value = window.localStorage["notes"];
  }
}
}
