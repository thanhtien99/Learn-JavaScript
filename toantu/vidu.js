function myFunction(){
    var number = document.getElementById("nhap").value;
    var greeting;
    if(number == 0){
        document.getElementById("demo").innerHTML = "ban duoc 0 diem"
        document.getElementById("demo").style.color = "yellow"
    }else if (number >0){
        document.getElementById("demo").innerHTML = "do la so duong"
        document.getElementById("demo").style.backgroundColor = "blue"
    }
    else{
        document.getElementById("demo").innerHTML =  "day la so am"
    }
    //document.getElementById("demo").innerHTML = greeting ;
}