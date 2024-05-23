const itemsContainer = document.getElementById("container")

function additem(){

    const newItem = document.createElement('div');
    newItem.className = "child";
    newItem.textContent = '1'; // Change the content as needed
    // Append the new item to the items container
    itemsContainer.appendChild(newItem);
}

function removeItem() {
    // Get all child elements of the container
    const children = itemsContainer.children;

    // If there are no children, return
    if (children.length === 0) {
        return;
    }

    // Generate a random index within the range of children length
    const randomIndex = Math.floor(Math.random() * children.length);

    // Remove the randomly selected child
    children[randomIndex].remove();
}

function flex(){
    const itemsContainer = document.getElementById("container")
    itemsContainer.style.display = 'flex';
    console.log("flex clicked");
}

function gridd(){
    const itemsContainer = document.getElementById("container")
    itemsContainer.style.display = 'grid';
    console.log("grid clicked");
}

function fCheckbox1(e)
{

    if(e.checked)
    {console.log("checked")}

}