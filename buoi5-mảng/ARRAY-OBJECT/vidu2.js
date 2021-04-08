var man = [
    {
        id:1,
        name:"Áo thun Nam",
        code:"TC1025011BA",
        price:"150.000",
        image:"https://salt.tikicdn.com/cache/280x392/ts/product/93/52/47/10b9b3ccdd1f5c186fab406daa300994.jpg"
    },
    {
        id:2,
        name:"Quần tây (Đen)",
        code:"TC1025012BN",
        price:"250.000",
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmyU8Jv4Xsgi7tVbFtS6GVAY5qweFIO6ulLUBkHPOWKYuE_cjblO2UJtlqa1RfpoGMruzlRfXJVg&usqp=CAc"
    },
    {
        id:3,
        name:"Áo khoác kaki jean",
        code:"AACCBB000",
        price:"250.000",
        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpSJ1svSz33v3z8krEJ393oZpeaT8adB4y_qctZG4sYhVerhoALj4Peekr_frCO5bwIf9LSIZmW4hKafj7KF3oFf_4sEnUv4GFJSgidQLmbPQtsm6wykW_&usqp=CAc"
    },
    {
        id:4,
        name:"Áo So Mi Caro",
        code:"TC1025011BA",
        price:"170.000",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1c3rmMl_8R-CXO7mazY9i3DCwYrLMPyEoGBArU0sBOrCxP5xIA-vliNzVlgkLLFNIJo4oh8Hfy9ic4RInIpw_pmIFfKsYwNAH696MnSw&usqp=CAc"
    }
];

var women = [
    {
        id:1,
        name:"Quần jean nữ",
        code:"TC1025011BA",
        price:"250.000",
        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0CqvK7kA29Y021XbFYVjy-SZqfq46II-Pys5x6i9Y6bUGvRJ9cAEMcGd6NAL6e6rcjgo_bebHJSHA1Ty9TqvokOJKO3jS_plIzbythFQw_WIVvmzZjDLa1Au6&usqp=CAc"
    },
    {
        id:2,
        name:"Áo khoác nữ",
        code:"TC1025011BA",
        price:"250.000",
        image:"https://salt.tikicdn.com/cache/280x392/ts/product/7f/5d/2d/699efc983dff3df1834254502e06d506.png"
    },
    {
        id:3,
        name:"Áo thun nữ",
        code:"TC1025011BA",
        price:"250.000",
        image:"https://salt.tikicdn.com/cache/280x392/ts/product/f8/94/27/d45e967802bc8e49fe090d849abc1a5f.jpg"
    },
    {
        id:4,
        name:"Đầm nữ",
        code:"TC1025011BA",
        price:"120.000",
        image:"https://salt.tikicdn.com/cache/280x392/ts/product/95/6e/78/129b3b55b02756894422dbf47403833e.jpg"
    }

];
function listProduct(){
    for(var i=0;i< man.length; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style = width: "18rem">';
        demo += '<img src="'+man[i].image+'" class="card-img-top" style="height: 400px">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
    for(var i=0;i< women.length; i++){
      
     var demo = '<div class="col-3">';
        demo += '<div class="card" style = width: "18rem">';
        demo += '<img src="'+women[i].image+'" class="card-img-top" style="height: 400px">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+'</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    
    }
}
function oder(){
    alert("Thank you");
}