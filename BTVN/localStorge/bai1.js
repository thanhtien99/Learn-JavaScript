var product= [
    {
        id : "1",
        name:"Ao dai theu hoa tiet",
        img:"https://lkbridal.com/wp-content/uploads/2020/03/67903896_2456020897792385_1815564924642918400_o.jpg",
        price:"1.500.000 VND",

    },
    {
        id:"2",
        name:"Ao dai co dau",
        img:"https://vcdn-ngoisao.vnecdn.net/2019/09/30/LCS00337-2682-1569812294.jpg",
        price:"1.600.000 vnd"
    },
    {
        id:"3",
        name:"Ao dai trang",
        img:"https://lahava.vn/public/uploads/images/lad225-1527327050.jpg",
        price:"1.700.000 vnd",
    },
];
function Save(){
    localStorage.setItem('listProduct',JSON.stringify(product));
}
function load(){
    product = JSON.parse(localStorage.getItem('listProduct'));
}
if(localStorage.getItem('listProduct') != null){
    load();
}
var listLocal = function(){
    var listProduct = "";
    for ( var i in product) {
      var data =JSON.parse(JSON.stringify(product[i])) ;
       listProduct += `
      <div class="card">
                <img class="card-img-top" src=${product[i].img}  alt="">
                <div class="card-body">
                  <h4 class="card-title">${product[i].name}</h4>
                  <p class="card-text">Giá tiền ${product[i].price}</p>
                  <button onclick='order()'> Đặt ngay</button>
                </div>
              </div>
      `;
      document.getElementById("banchay").innerHTML= listProduct ;

}
Save();
}
function order() {
    alert("Cảm ơn bạn đã đặt phòng ")
  }
    