let userForm = document.querySelector('#userForm');
let inputBox = document.querySelector('#inputBox');
let addButton = document.querySelector('#addButton');
let userList = document.querySelector('#userList');
let alertBox = document.querySelector('#alertBox');
let closeAlert = document.querySelector('#closeAlert');
let index = 0;

addButton.addEventListener("click", addFonk) // userForm.addEventListener("submit", addFonk) da olabilirdi.
closeAlert.addEventListener("click", closeAlertFonk)

function closeAlertFonk() {
    alertBox.style.display = "none";
}

function addFonk(event) {
    event.preventDefault();
    // index++
    function ekleFonkKontrol() {
        let userListItem = document.createElement("li");
        let deleteButton = document.createElement("button");
        userListItem.classList.add("list-group-item", "d-flex");
        deleteButton.classList.add("btn-close", "ms-auto");
        

        userListItem.innerHTML = `${inputBox.value}`;  /// <b>${index} - </b>  $ dan önce
        userList.appendChild(userListItem);
        userListItem.appendChild(deleteButton)
        inputBox.value = "";

        deleteButton.addEventListener("click",deleteFonk);
        function deleteFonk() {
            userList.removeChild(userListItem);
            // index--
        }
        
    }

    inputBox.value == "" ? (alertBox.style.display = "flex"): ekleFonkKontrol() ///  index-- "flex" ten sonra
}