let menuIcon = document.querySelector(".menu")
let sidebar = document.querySelector(".sidebar")
let main = document.querySelector(".main")

// menuIcon.onClick = function(){
//   sidebar.classList.toggle(".small-sidebar")
// }

menuIcon.addEventListener("click", ()=>{
  sidebar.classList.toggle("small-sidebar")
  main.classList.toggle("large-main")
})








// const counter = document.querySelector("#counter")
// const incrementbtn = document.querySelector("#increment")
// const resetbtn = document.querySelector("#reset")
// const decrementbtn = document.querySelector("#decrement")

// let countervalue = 0;
// incrementbtn.addEventListener("click" ,()=>{
//   countervalue +=1;
//     counter.innerHTML = countervalue
// })
// decrementbtn.addEventListener("click" ,()=>{
//   countervalue -=1;
//     counter.innerHTML = countervalue
// })
// resetbtn.addEventListener("click" ,()=>{
//   countervalue =0;
//     counter.innerHTML = countervalue
// })


// // incrementbtn.addEventListener("click", show)
// // function show(){
// //   countervalue++;
// //   counter.innerHTML = countervalue
// // }
