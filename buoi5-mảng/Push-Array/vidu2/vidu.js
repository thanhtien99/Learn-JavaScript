let arr = [];
let edit = 0;
let i = 0;
function save() {
    i++;
    let name = form.name.value;
    let id = form.id.value;
    let pro = form.pro.value;
    let qty = form.qty.value;
    let pri = form.pri.value;
    let total = parseFloat(qty * pri);
    
    let obj = {
        no : i, 
        name: name,
        id: id,
        pro: pro,
        qty: qty,
        pri: pri,
        total : total
        };
    arr.push(obj);
    console.log(arr);
    alert('Lưu thành công!')
}

function show() {
    let html = format(arr);
    document.getElementById("table").innerHTML = html.join("");
}

function format() {
    let result = arr.map((arr, index) => {
        return `<tr>
                <td>${arr.no}</td>
                <td>${arr.name}</td>
                <td>${arr.id}</td>
                <td>${arr.pro}</td>
                <td>${arr.qty}</td>
                <td>${arr.pri}</td>
                <td>${arr.total}</td>
                <td>
                <button type="button" class="btn btn-primary" onclick="update(${index})">
                    Edit
                </button>
                <button type="button" class="btn btn-primary" onclick="remove(${index})">
                    Delete
                </button>
                </td>
            </tr>`;
    });
    return result;   
}

function reset() {
  form.name.value = "";
  form.id.value = "";
  form.pro.value = "";
  form.qty.value = "";
  form.pri.value = "";
}
function update(index) {
  let element = arr[index];
  edit = index;
  form.name.value = element.name;
  form.id.value = element.id;
  form.pro.value = element.pro;
  form.qty.value = element.qty;
  form.pri.value = element.pri;
  document.getElementById("btn_edit").style.visibility = "visible";
}
function remove(index) {
  arr.splice(index, 1);
  show();
}
function editArr() {
    let name = form.name.value;
    let id = form.id.value;
    let pro = form.pro.value;
    let qty = form.qty.value;
    let pri = form.pri.value;
    let total = qty * pri;
    
    let obj = {
        no : i,
        name: name,
        id: id,
        pro: pro,
        qty: qty,
        pri: pri,
        total : total
        };
  arr.splice(edit, 1, obj);
  show();
  document.getElementById("btn_edit").style.visibility = "hidden";
}

document.getElementById("btn_edit").style.visibility = "hidden";
//  function showPreview(event) {
//    if (event.target.files.length > 0) {
//      var src = event.target.files[0].name;
//     var preview = document.getElementById("imageSRC");
//      preview.innerHTML = src;
//   }
//  }
