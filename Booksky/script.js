// Selecting Variable from DOM
var deletebtn = document.getElementById("deletebtn");
var plus = document.getElementById("plusbtn");

var row = document.querySelector(".row");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var addbtn = document.getElementById("addbtn");
var cancelbtn = document.getElementById("cancelbtn");

var overlay = document.querySelector(".popup-overlay");
var box = document.querySelector(".popup-box");

// Delete The Book
deletebtn.addEventListener("click", function (event) {
  event.target.parentElement.parentElement.remove();
});

// Create New Book
plusbtn.addEventListener("click", function () {
  overlay.style.display = "block";
  box.style.display = "block";
});

// Submit New Book
addbtn.addEventListener("click", function () {
  var div = document.createElement("div");
  div.setAttribute("class", "card col-xl-3");
  div.innerHTML = `<div class="card-header">
    <h4>${title.value}</h4>
    <h6 class="text-body-secondary">${author.value}</h6>
  </div>

  <div class="card-body">
    <h5 class="card-text">
      ${description.value}  
    </h5>
    <a href="#" class="btn btn-primary" id="deletebtn">Delete</a>
  </div>
</div>`;
  row.append(div);

  overlay.style.display = "none";
  box.style.display = "none";
});

// Cancel To Add The Book
cancelbtn.addEventListener("click", function () {
  overlay.style.display = "none";
  box.style.display = "none";
});

// If the button type is submit and you don't want to refresh the page,
// try event.preventDefault() by using onclick funcction
