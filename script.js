const container = document.querySelector('.slider-container');
const btn = document.querySelectorAll('.btn');
console.log("btn")
const ImgList = ["1","2","3","4"];

let index = 0
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
           if(index<0){
                index = ImgList.length-1;
           }
           container.style.background = `url("./media/${ImgList[index]}.jpg") center/cover  no-repeat`
        }else{
            index++;
            if(index == ImgList.length){
                index = 0;
            }
            container.style.background = `url("./media/${ImgList[index]}.jpg") center/cover  no-repeat`
        }
    })
})

function order(){
    
}

// setInterval(()=>{
//     if(index == ImgList.length){
//         index = 0;
//     }else{
//         index++
//     }
//     updateindex();
// },3000);