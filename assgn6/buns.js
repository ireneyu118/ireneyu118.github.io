//change image upon dropdown

var imagesArray = [
  "smallbunbun.png", // represents val 0,
  "smallbunbun.png", // 1,
  "sugarmilk.png",  // 2 ...
  "vanillamilk.png",
  "doublechoc.png",
];

var text=localStorage.getItem('globalbun1');
// console.log(text);


function selectimage1() {
  document.getElementById("image1").src = imagesArray[document.getElementById("glazeselect1").value];
  console.log(this.value)
};

function selectimage2() {
  document.getElementById("image2").src = imagesArray[document.getElementById("glazeselect2").value];
  console.log(document.getElementById("glazeselect2"));
};

function selectimage3() {
  document.getElementById("image3").src = imagesArray[document.getElementById("glazeselect3").value];
  console.log(this.value)
};

function selectimage4() {
  document.getElementById("image4").src = imagesArray[document.getElementById("glazeselect4").value];
  console.log(this.value)
};

function selectimage5() {
  document.getElementById("image5").src = imagesArray[document.getElementById("glazeselect5").value];
  console.log(this.value)
};

function selectimage6() {
  document.getElementById("image6").src = imagesArray[document.getElementById("glazeselect6").value];
  console.log(this.value)
}; //end of change image upon dropdown

//add to cart
function updateno(){
	var x = document.getElementById("no");
	x.style.display= "block";
	var xnum = parseInt(x.children[1].innerHTML)+1;
	x.children[1].innerHTML = xnum;
  getbunvalue();
} //end of add to cart


//  open cart - some function that opens cart
function openCart(){
  window.location = 'bag.html';
  fillCart();
}

function fillCart() {
  console.log('in bag', localStorage.getItem('products'));
  var product = [];

  // get the item list
 if(localStorage.getItem('products')){
        product = JSON.parse(localStorage.getItem('products'));
 }

  console.log(product.length);

  var x = document.getElementById("bagno");
  x.style.display= "block";
  var xnum = parseInt(product.length);
  x.children[1].innerHTML = xnum;
}


// BAG view - update bag number

  window.addEventListener('load', function(){
     console.log('in bag', localStorage.getItem('products'));
    var product = [];

    // get the item list
   if(localStorage.getItem('products')){
          product = JSON.parse(localStorage.getItem('products'));
   }

   //console.log(product.length + " 111111");

    // document.getElementById('bagno').innerHTML=
    var x = document.getElementById("bagno");
    x.style.display= "block";
    var xnum = parseInt(product.length);
    x.children[1].innerHTML = xnum;
}, false);






//remove from cart
// var removeCartItemButtons = document.getElementsByClassName('x')
// console.log(removeCartItemButtons)
// for (var i=0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i]
//     button.addEventListener ('click', function(event) {

//     })
//   }

// end of remove from cart  

// store all the updated items in local storage and then when you go to the shopping cart
// check to see if there's anything in local storage, if no then load original html, if yes
// then load from local storage


function addProduct(){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({name:'Original', price:5, count:1, glaze:'Vanilla Milk'});
    localStorage.setItem('products', JSON.stringify(products));
}


var cart = [];
function item (name,price,count,glaze) {
  this.name = name;
  this.price = price;
  this.count = count;
  this.glaze = glaze;
}


getbunvalue = function(){

  var bun1= document.getElementById('glazeselect1').selectedIndex;
  var bun2= document.getElementById('glazeselect2').selectedIndex;
  var bun3= document.getElementById('glazeselect3').selectedIndex;
  var bun4= document.getElementById('glazeselect4').selectedIndex;
  var bun5= document.getElementById('glazeselect5').selectedIndex;
  var bun6= document.getElementById('glazeselect6').selectedIndex;

  var c1= document.getElementById('countselect1').selectedIndex;
  var c2= document.getElementById('countselect2').selectedIndex;
  var c3= document.getElementById('countselect3').selectedIndex;
  var c4= document.getElementById('countselect4').selectedIndex;
  var c5= document.getElementById('countselect5').selectedIndex;
  var c6= document.getElementById('countselect6').selectedIndex;


  if(bun1 != 0 && c1 != 0){
    let product1 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Original', price: 5, count: c1, glaze: bun1};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Original', price: 5, count: c1, glaze: bun1}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

  if(bun2 != 0 && c2 != 0){
    let product2 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Original (GF)', price: 6, count: c2, glaze: bun2};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Original (GF)', price: 6, count: c2, glaze: bun2}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

  if(bun3 != 0 && c3 != 0){
    let product3 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Pumpkin Spice', price: 6, count: c3, glaze: bun3};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Pumpkin Spice', price: 6, count: c3, glaze: bun3}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

  if(bun4 != 0 && c4 != 0){
    let product4 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Blackberry', price: 6, count: c4, glaze: bun4};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Blackberry', price: 6, count: c4, glaze: bun4}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

  if(bun5 != 0 && c5 != 0){
    let product5 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Walnut', price: 6, count: c5, glaze: bun5};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Walnut', price: 6, count: c5, glaze: bun5}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

  if(bun6 != 0 && c6 != 0){
    let product6 = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        const x = {name: 'Caramel Pecan', price: 6, count: c6, glaze: bun6};
        products.push(x);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }else{
        const products = [{name: 'Caramel Pecan', price: 6, count: c6, glaze: bun6}];
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
      
    }
  }

}

var removeCartItem = document.getElementsByClassName('classbutton')
console.log(removeCartItem)
for (var i = 0; i < removeCartItem.length; i++) {
  var buttonx = removeCartItem[i]
  buttonx.addEventListener('click', function(){
      console.log('clicked')

  })
}

// function removeCartItem(event) {
//   var buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove()
//   updatecartotal()
// }

// function updatecartotal (){

//}

  // if(bun2 != 0 && c2 != 0){
  //   let products = [];
  //   if(localStorage.getItem('products')){
  //       products = JSON.parse(localStorage.getItem('products'));
    
  //   products.push(item('Original', 5, 1, 'Vanilla Milk'));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }else{
  //     console.log("#1 has no item");
  //   }
  // }
  // if(bun3 != 0 && c3 != 0){
  //   let products = [];
  //   if(localStorage.getItem('products')){
  //       products = JSON.parse(localStorage.getItem('products'));
  //   }
  //   products.push(item('Original', 5, 1, 'Vanilla Milk'));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }
  // if(bun4 != 0 && c4 != 0){
  //   let products = [];
  //   if(localStorage.getItem('products')){
  //       products = JSON.parse(localStorage.getItem('products'));
  //   }
  //   products.push(item('Original', 5, 1, 'Vanilla Milk'));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }
  // if(bun5 != 0 && c5 != 0){
  //   let products = [];
  //   if(localStorage.getItem('products')){
  //       products = JSON.parse(localStorage.getItem('products'));
  //   }
  //   products.push(item( 'Original', 5, 1, 'Vanilla Milk'));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }
  // if(bun6 != 0 && c6 != 0){
  //   let products = [];
  //   if(localStorage.getItem('products')){
  //       products = JSON.parse(localStorage.getItem('products'));
  //   }
  //   products.push(item('Original', 5, 1, 'Vanilla Milk'));
  //   localStorage.setItem('products', JSON.stringify(products));
  // }
  





