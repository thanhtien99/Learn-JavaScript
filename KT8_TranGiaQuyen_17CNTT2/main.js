let arr = [];
let image = "";
function dongy(){
    let dm = form.danhmuc.value;
    let sp = form.sanpham.value;
    let ten = form.ten.value;
    let gia = form.gia.value;
    let giacu = form.giacu.value;
    
    let obj = {
        dm: dm,
        sp: sp,
        ten: ten,
        gia: gia,
        giacu: giacu,
        image : image,
        };
    arr.push(obj);
    console.log(arr);
    alert('Lưu thành công!')  
    listProducts();  
}

function uploadImg(event) {
    image = URL.createObjectURL(event.target.files[0]);
}

function listProducts() {
    for (let product of arr) {
    var html =`
        <div class="col-md-4 col-sm-6 single">
        <div class="product">
            <div class="product-img">
                <img class="img-responsive" src="${product.image}">                            
            </div>
                    
            <div class="product-text">                            
                <h6 class="product-text-title">                        
                    ${product.ten}
                </h6>
                <p class="product-text-price">                              
                    ${product.gia}
                    <span><strike style="color: black;">${product.giacu}</strike></span>                            
                </p>
            </div>
            <div class="product-button">                                                         
                <button type="button">
                    Đặt mua
                </button>
            </div>
        </div>
    </div>
    `;
    
    var app = document.querySelector('.result');
    app.innerHTML += html;
    }
}
