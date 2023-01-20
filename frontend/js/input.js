// After the DOM has loaded
document.addEventListener("DOMContentLoaded", function(){
    // Make a POST call with JSON data
    document.getElementById("sendButton").addEventListener("click", function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/api/send", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.alert("Conferma ricezione");
            }
        };
        xhr.send(JSON.stringify([{id: 1, value: 10},{id: 2, value: 30}]));
    });
});