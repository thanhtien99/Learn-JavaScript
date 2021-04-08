var id= 0;
function add(){
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.pri.value;
    var sub = qty*price;
    var row = "<tr>";
    row += "<td>"+ id + "</td>";
    row += "<td>"+ pname + "</td>";
    row += "<td>"+ qty + "</td>";
    row += "<td>"+ price + "</td>";
    row += "<td>"+ sub + "</td>";
    row += "</tr>";
    
    var total = document.getElementById('total').innerHTML ;

    total = parseInt(total) + parseInt(sub) ;
        
    var row_total = "<tr>"; 
            row_total += "<td>Total</td>";
            row_total += "<td></td>";
            row_total += "<td></td>";
            row_total += "<td></td>";
            row_total += "<td id='total'>" + total + "</td>";
            row_total += "</tr>";
        
        document.getElementById('thead').innerHTML += row ;
        document.getElementById('tbody').innerHTML = row_total ;
    }

