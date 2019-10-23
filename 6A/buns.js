var imagesArray = [
  "smallbunbun.png", // represents val 0,
  "smallbunbun.png", // 1,
  "sugarmilk.png",  // 2 ...
  "vanillamilk.png",
  "doublechoc.png",
];

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
};


function updateno(){
	var x = document.getElementById("no");
	x.style.display= "block";
	var xnum = parseInt(x.children[1].innerHTML)+1;
	x.children[1].innerHTML = xnum;

}