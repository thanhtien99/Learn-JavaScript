function date() {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear() +' '+
     today.getHours() +':'+ today.getMinutes() +':'+ today.getSeconds();
    document.getElementById("text").innerHTML = date;
}