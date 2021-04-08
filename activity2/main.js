function myFunction(){
    var text;
    var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
    switch(favDrink){
        case "Martini" :
            text = "Excelent choice. Martini is good for your soul.";
            break;
        case "Daiquiri" :
            text = "Daiquiri is my favorite too!";
            break;
        case "Cosmopolitan" :
            text = "Really? Are you sure the Cosmopolitan is your favorite?";
            break;
        default:
            text = "I have never heard of that one.."

    }
    document.getElementById("demo").innerHTML = text ;
}