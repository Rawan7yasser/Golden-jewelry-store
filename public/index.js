
const showMyProducts =document.querySelector('.products')

var counter = 1
setInterval(function(){
document.getElementById('#radio').onclick(()=>{
    counter++
    if(counter>5) {
        counter=1
    }
    })
},4500); 




// 




const container =document.querySelector('.container');
const navBar =document.querySelectorAll(".nav-bar");
const menu = document.querySelector(".menu")
const main = document.querySelector(".main")


let isOpen = false;


menu.addEventListener("click", function () {
    isOpen= !isOpen ;
   if (isOpen == true) {
    console.log("true")

   }
   else{
    console.log("false")
   }

    
}) 




var a = 0 



const showProduct =async()=>{
    
    const url ='/api/v1/product'
   
try{
        const myProducts =await axios.get(url)
        myProducts.data.map((pro)=>{
        let  productDiv = document.createElement('div')
        productDiv.classList.add('product-my');
        productDiv.innerHTML=`
        <iframe src="${pro.img}"  height="326" width="236" frameborder="0" scrolling="no" ></iframe>
            <div class="info-prod">
            <h2>${pro.name}</h2>
            <p class="price">price:${pro.price}</p>
            </div>
            </div>
            `
            showMyProducts.appendChild(productDiv) ;
        })
        
    // const like= document.querySelectorAll('.liked') 
    // let [id]=myProducts.data.map(e=>e._id)
    // like.forEach((e)=>{
    //     e.addEventListener('click',async(e)=> { 
    //         a++
    //         e.preventDefault()
    //         e.target.classList.toggle("active");  
    //         try{
    //         await axios.patch(`/api/v1/product/${id}`,{rating:[1]})
           
    //         console.log("ccccc")
     //     }catch(err){console.log(err)}
    //   })
        
   // })

    
// console.log(myProducts.data.map(e=>e.name)); 
// console.log(myProducts.data.map(e=>e._id));


   
 
}catch(err){
    console.log(err)
}
}

showProduct()


