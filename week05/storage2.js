const welcome = document.getElementById("welcome");
const clicks = document.getElementById("clicks");
const nameField = document.getElementById("txtName");

function displayStorage() {
    const storageName = localStorage.getItem("name");
    if (storageName)
        welcome.innerText = `Hello, ${storageName}`; // Use backticks for template literals
    
    const storedClicks = localStorage.getItem("clicks");
    if (storedClicks)
        clicks.innerText = storedClicks;
}

function updateStorage() {
    const newName = nameField.value;
    nameField.value = "";
    localStorage.setItem("name", newName);

    const storageClicks = parseInt(localStorage.getItem("clicks") ?? 0); // Fix variable name
    localStorage.setItem("clicks", storageClicks + 1); // Increment clicks
    displayStorage();
}

document.getElementById("btnUpdate").addEventListener("click", updateStorage); // Fix event name

displayStorage();
