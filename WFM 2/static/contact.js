var container=document.getElementById("try");
var req= new XMLHttpRequest();
req.open('GET','http://192.168.43.144:5000/api/v1/users');
req.onload = function(){
 var data=JSON.parse(req.responseText);
 render(data);
};

req.send();
function render(data){
    var html_string= "";
    for (i=0; i < data.length; i++){
        html_string += "<p>" + data[i].title + data[i].start  + "</p>"
        }
    container.insertAdjacentHTML("beforeend",html_string);

}