const ham = document.querySelector(".hambur");
const nav = document.querySelector(".nav-items");
const body = document.getElementsByTagName('body')[0];
const nav_item = document.querySelectorAll("li a");
ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
    body.classList.toggle('hide');
    console.log("ok");
    // console.log(body);
});

for(const ele of nav_item){
    ele.addEventListener('click',()=>{
        nav.classList.toggle('active');
        body.classList.toggle('hide');
    })
}