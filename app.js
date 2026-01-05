let nav = document.getElementById("nav");


document.addEventListener("wheel", function(event){
    if(event.deltaY > 0){
        // Scroll Down
        nav.style.position = "fixed";
        nav.style.top = "-100px";
        nav.style.transition = "top 0.5s";
        console.log("scroll down");
    }
    else{
        // Scroll Up
        nav.style.position = "fixed";
        nav.style.top = "0px";
        nav.style.transition = "top 0.5s";
        console.log("scroll up");
    }
});

//--------------------Show All Student card---------------

let arr = [{
    Pic:"",
    Course:"CCC",
    Fee:"3000",
    Time:"3 Months"
},{
    Pic:"",
    Course:"DCA",
    Fee:"7000",
    Time:"12 Months"
},{
    Pic:"",
    Course:"PGDCA",
    Fee:"10000",
    Time:"12 Months"
},{
    Pic:"",
    Course:"NTT",
    Fee:"5500",
    Time:"2 Years"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
},{
    Pic:"",
    Course:"Tally",
    Fee:"4000",
    Time:"6 Months"
}]

let sum = ''

arr.forEach(function(elem,index){
    sum = sum + `<div class="card">
    <div class="up">
    <img src="ccc.png" alt="">
    <h1>${elem.Course}</h1>
    <h1>Fees :${elem.Fee}</h1>
    <h1>Time :${elem.Time}</h1>
    </div>
    
    <div class="down">
    <button>View Details</button>
    </div>
    </div>`
});

console.log(sum);

let view2 = document.querySelector('#view2')
let body = document.querySelector('body')
view2.innerHTML = sum;

//----------------- Goto All Student page---------------

var btn = document.getElementById('btnstu')

btn.addEventListener("click", function () {
    window.open("stu.html", "_blank");
});

//--------------------Goto sign in page---------------

let BSignIn = document.getElementById("btnsignin")

BSignIn.addEventListener('click',()=>{
    window.open("sign.html")
})