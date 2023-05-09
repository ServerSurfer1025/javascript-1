console.log("hi");
function addAttendee() {
  let firstName = partyForm.finame.value;
  let lastName = partyForm.lasname.value;
  if (firstName == "" || lastName == "") {
    alert("Full Name has to be entered");
    return false;
  }
  let name = firstName + " " + lastName;
  let ul = document.getElementById("confirmed");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
  return false;
}
