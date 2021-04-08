var listPro ="";
pro.forEach(p=>{
    listPro += "<div class='col-3 item'> <div>" + "<img src='"+ p.img +"' alt=''>" + "<p>" + p.name
    + "</p>" + "<p style=\"color:teal\">" + p.price + "Đ</p>" + "<button>Đặt mua</button>" + "</div></div>"
})
document.getElementById('pro').innerHTML = listPro;
