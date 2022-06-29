import Bats from "./products.js"


let cartArr = [] 

let dupId = [];

let isThere = true;

let addCartInp = document.getElementById("addcartinp");

let addCartBtn = document.getElementById("addcartbtn");

let cartBtn = document.getElementById("cartbtn");

let remCartInp = document.getElementById("remcartinp");

let removeProd = document.getElementById("removeprod");


addCartBtn.addEventListener("click",function(){
    let ID = addCartInp.value
    
    if(ID != ""){
        isThere = dupId.some((l) => l == ID);


    if (isThere) {
      cartArr.forEach((e) => {
        if (ID == e.id) {
          e.qty++;
        }
      })
    } 
    else {
      
      Bats.forEach((e) => {
        if (e.id == ID) {
          cartArr.push(e);
        }
      })
      dupId.push(ID);
    }
    
    }
    else{
        alert("input some value")
    }
    // isThere = dupId.some((l) => l == ID);


    // if (isThere) {
    //   cartArr.forEach((e) => {
    //     if (ID == e.id) {
    //       e.qty++;
    //     }
    //   })
    // } else {
    //   console.log("in else");
    //   Bats.forEach((e) => {
    //     if (e.id == ID) {
    //       cartArr.push(e);
    //     }
    //   })
    //   dupId.push(ID);
    // }
    
})

cartBtn.addEventListener("click",function(){
    if(cartArr.length == 0){
        alert("First add something to the cart")
    }else{
        console.log(cartArr);
    }
    
})






removeProd.addEventListener("click",function(){
    let rmvID = remCartInp.value
    
    cartArr.forEach((e)=>{
        if(rmvID == e.id){
            
           let ind = cartArr.findIndex((e)=> {
            return e.id == rmvID
        })
        
           cartArr.splice(ind,1)
        }
    })
})