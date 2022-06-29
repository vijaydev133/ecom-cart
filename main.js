import Bats from "./products.js"

console.log(Bats);
let cartArr = []

let dupId = [];

let addCartInp = document.getElementById("addcartinp");

let addCartBtn = document.getElementById("addcartbtn");

let cartBtn = document.getElementById("cartbtn");

let remCartInp = document.getElementById("remcartinp");

let removeProd = document.getElementById("removeprod");


addCartBtn.addEventListener("click",function(){
    let ID = addCartInp.value
    // if(dupId.length == 0){
    //     // console.log("nothing");
    //     Bats.forEach((s)=>{
    //         if(s.id == ID){
    //             cartArr.push(s)
    //         }  
              
    //       })
    //       dupId.push(ID)
    //       console.log(dupId);
    // }
    // else{
    //     dupId.forEach(e => {
    //         console.log(e);
            
    //    if(ID == e){
    //        cartArr.forEach((m)=>{
    //            if(ID == m.id){
    //                m.qty++
    //            }
    //        })
    //    }
    //    else{
    //        console.log("in else");
    //        Bats.forEach((s)=>{
    //            if(s.id == ID){
    //                cartArr.push(s)
    //            }  
                 
    //          })
    //          dupId.push(ID)
    //          console.log(dupId);
    //         }    
    //     }) 
    // }
    
    if(ID == dupId){
        cartArr.forEach((e)=>{
            if(ID == e.id){
                e.qty++
            }
        })
    }
    else{
        Bats.forEach((e)=>{
            if(e.id == ID){
                cartArr.push(e)
            }  
              
          })
          dupId = ID
    }
    
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
        //    console.log(ind);
           cartArr.splice(ind,1)
        }
    })
})