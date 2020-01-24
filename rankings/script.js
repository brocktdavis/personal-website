function ajaxCall(url, callbackfunc) {

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callbackfunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function doUpdate() {
    ajaxCall("rankings/api", updateTable);
}

function updateTable(xhttp) {
    
    var data = JSON.parse(xhttp.responseText);
    for (var i = 0; data.length; i++) {

      var player = data[i];
      document.getElementById("table").innerHTML +=
      "<tr>" +
        "<td>" + player['ranking'] + "</td>" +
        "<td>" + player['name'] + "</td>" +
        "<td>" + player['rating'] + "</td>" + 
        "<td>" + player['id'] + "</td>" +
      "</tr>";
    }
}