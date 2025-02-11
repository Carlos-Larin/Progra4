var x = 0;
var array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}

function display_array() {
    var e = "<hr/>";   
    
    for (var y = 0; y < array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}

function delete_element_from_array() {
    var index = prompt("Enter the index of the element to delete:");
    if (index !== null && index >= 0 && index < array.length) {
        array.splice(index, 1);
        x--;
        alert("Element at index " + index + " deleted.");
        display_array();
    } else {
        alert("Invalid index.");
    }
}
