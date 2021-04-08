
var arr=[];
function add(){
    
    var pname = frm.namesp.value;
    var price = frm.pri.value;
    var priceold = frm.priold.value;
    var img = frm.img.value;
    var image = img.slice(12);
    var html =`
    <div class="col-lg-3">
        <div class="card" >
        <img class="card-img-top" src="./img/${image}" alt="Card image cap" style="height: 280px;width: 245px;">
        <div class="card-body">
            <h5 class="card-title">${pname}</h5>
            <p class="card-text" id="price">${price}₫</p>
            
            <del class="card-text" id="price">${priceold}₫</del> <br>
            <a href="#" class="btn btn-success">Đặt mua</a>
        </div>
        </div>
        </div>
       
    `;
    
    var app = document.querySelector('.row');
    app.innerHTML += html;
}