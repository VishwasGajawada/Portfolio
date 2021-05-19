const ham = document.querySelector(".hambur");
const nav = document.querySelector(".nav-items");
const header = document.querySelector("header");
const body = document.getElementsByTagName('body')[0];
const nav_item = document.querySelectorAll("li a");

function scrollfunc() {
    let nav = document.querySelector('header');
    // let windowPosition = window.scrollY > 0 && window.innerWidth > 600;
    let windowPosition = window.scrollY > 0;;
    nav.classList.toggle('scrolling-nav', windowPosition);
} 
window.addEventListener('scroll', scrollfunc);
document.body.addEventListener('touchmove',scrollfunc);
  

ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
    body.classList.toggle('hide');
    // header.classList.toggle('over-scroll');
    console.log("ok");
    // console.log(body);
});

for(const ele of nav_item){
    ele.addEventListener('click',()=>{
        nav.classList.toggle('active');
        body.classList.toggle('hide');
        // header.classList.toggle('over-scroll');
    })
}