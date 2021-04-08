var id= 0;
var sub = 0;
function add(){
    id++;
    var img = frm.img.value;
    var image = img.slice(11);
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.pri.value;
    var total = parseFloat(qty * price);

    var cont = $(".numb").length;
    var index = cont + 1;
    var newQty = "<input  value='"+qty+"' id='nm_"+index+"' onkeyup='calculate("+index+"); total()'>";
    var newPrice = "<span class='numb' id='nn_"+index+"'>"+price+"</span>";
    var newResult = "<spam class='sum' id='result_"+index+"' >"+total+"</span>";
    var html = `
    <img src="/img/${image}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    sub += total;
    var row = "<tr>";
    row += "<td>"+ id + "</td>";
    row += "<td>"+ html + "</td>";
    row += "<td>"+ pname + "</td>";
    row += "<td>"+ newQty + "</td>";
    row += "<td>"+ newPrice + "</td>";
    row += "<td>"+ newResult + "</td>";
    row += "</tr>";

  
    var row1 = "<tr>"; 
            row1 += "<td>Tạm tính</td>";
            row1 += "<td>" + `<span id='sub'>${sub}</span>` +"</td>" ;
            row1 += "</tr>";
     var row2 = "<tr>"; 
            row2 += "<td>Tổng</td>";
            row2 += "<td>" + `<span id='sub'>${sub}</span>` +"</td>" ;
            row2 += "</tr>";
        document.getElementById('thead').innerHTML += row ;
        document.getElementById('tbody').innerHTML = row1 ;
        document.getElementById('tbody2').innerHTML = row2 ;
        document.getElementById("text").innerHTML = pname + " đã thêm vào giỏ hàng";
    }
    function calculate(idx){
        let num1 = parseFloat($("#nn_" + idx).text());
        let num2 = parseFloat($("#nm_" + idx).val());
        let kq = num1 * num2;
        $("#result_" + idx).text(kq);
    }
    
    function total() {
        var sum = 0;
        
        $.each($(".sum"), function() {
          sum = sum + Number($(this).text());
        });
        
          $("#sub").text(sum);
    }

