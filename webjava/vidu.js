// buoi 1
        /* var a = prompt("Input price:", );
           var b = prompt("Input price:", );
           var c = a*b;
        alert("dien tich la:" + c);
         var x = 100 + 200;
        xuat ra man hinh
        document.getElementById('kq').innerHTML= c; 
        document.write('kq');  */


//buoi 2

        //bai tap 1
       /* alert("Welcome to Game Zone!");
        if(confirm("Do you want to play?")){
                var n = prompt("Enter your name:","" )
                alert(n +"! now you're part of the game, enjoy!")
        } */

        // bai tap 2
        /*function myFunction(){
                var person = prompt("Enter your name","");
                if(person != null){
                        document.getElementById('demo').innerHTML = "Hello! " + person + " How are you?"
                }
        }
        */

        //bai tap 3 : nhap vao ngay thang nam sinh va xuat ra thu ngay va tuoi 
        
        var date = prompt("enter your birthday","");
        var myBirthday = new Date(date);
        var myDateName= myBirthday.getDay();
        var myDate = new Date();
        var myYear = prompt("enter your year", "")
        var curentYear = myDate.getFullYear();
        var myage = curentYear - Number(myYear)
        alert ("thu ngay: " + myDateName + "Tuoi: " + myage )
        


