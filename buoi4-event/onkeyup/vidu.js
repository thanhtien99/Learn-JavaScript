function tinh(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var result = document.getElementById("result");

    var tong = parseInt(a.value) + parseInt(b.value);
    if(!isNaN(tong)){
        result.value= tong ;

    }
}