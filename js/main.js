var siteName = document.getElementById("siteName");
var urlName = document.getElementById("urlName");

var dataArray = [];

if (localStorage.getItem("myWebsite") != null) {
  dataArray = JSON.parse(localStorage.getItem("myWebsite"));
  displayInputs(dataArray);
}

function main() {
  getInputSData();
  displayInputs(dataArray);
  clear();
}

function getInputSData() {
  var informationData = {
    name: siteName.value,
    link: urlName.value,
  };
  console.log(informationData);
  dataArray.push(informationData);
  console.log(dataArray);
  localStorage.setItem("myWebsite", JSON.stringify(dataArray));
}

function displayInputs(Array) {
  var box = "";
  for (var i = 0; i < Array.length; i++) {
    box += ` <tr>
    <td>${i}</td>
    <td>${Array[i].name}</td>
    <td>
      <button onclick=" " class="btn btn-visit">
        <a
          href="${Array[i].link}"
          class="text-decoration-none text-white"
        >
          <i class="fa-regular fa-eye"></i> Visit</a
        >
      </button>
    </td>
    <td>
      <button
        onclick="deleteItem(${i})"
        class="btn btn-warning btn-delete"
      >
        <i class="fa-solid fa-trash-can"></i> Delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = box;
}

function clear() {
  siteName.value = "";
  urlName.value = "";
}
function deleteItem(index) {
  dataArray.splice(index, 1);
  localStorage.setItem("myWebsite", JSON.stringify(dataArray));
  displayInputs(dataArray);
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
