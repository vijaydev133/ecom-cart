export default function removeID(){
    {
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
    }
}