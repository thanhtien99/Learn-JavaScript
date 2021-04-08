var id = 0;
var total = 0;
function sell() {
    id ++;
    let name = frm.pname.value;
    let qty = frm.qty.value;
    let img = frm.img.value;
    let price = frm.up.value;
    let imgs =  img.slice(12);
    let sub = qty*price;
    let imgss =  `<img class="card-img-top" src="/bt2/img/${imgs}" alt="Card image cap" id="image"></img>`
    total += sub;
    var row = "<tr>";
    row += "<th>" + id + "</th>";
    row += "<td>" + name + "</td>";
    row += "<th>" + imgss + "</th>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price +" $" + "</td>";
    row += "<td>" + sub +" $" + "</td>";
    row += "</tr>";

    let row1 = "<tr>";
    row1 += "<td>" + "Total" + "</td>";
    row1 += "<td></td>";
    row1 += "<td></td>";
    row1 += "<td></td>";
    row1 += "<td>" + total + "</td>";
    row1 += "</tr>";
    
    document.getElementById("tbl").innerHTML += row;
    document.getElementById("tf").innerHTML = row1;
}

function cancle() {
    var name = frm.pname.value = " ";
    var qty = frm.qty.value = " ";
    var price = frm.price.value = " ";
}