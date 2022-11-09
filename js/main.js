let lis=document.querySelectorAll(".list li")
let img=document.querySelectorAll(".a")
let imgweb=document.querySelectorAll(".b")
let imgcode=document.querySelectorAll(".c")
let imgapp=document.querySelectorAll(".d")
let imgall=document.querySelectorAll(".box img")
let all=document.querySelector(".all")
let design=document.querySelector(".design")
let code=document.querySelector(".code")
let photo=document.querySelector(".photo")
let app=document.querySelector(".app")
lis.forEach((li) =>{
    li.addEventListener("click",(e)=>{
        lis.forEach((li) =>{
            li.classList.remove("selected")
        })
        e.currentTarget.classList.add("selected")  
        // if(design.classList==="active"){
        //     imgweb.className="hidden";
        // }
    })
})

design.onclick=function(){
    img.forEach((e) =>{
        e.classList.remove("hidden")
    })
    imgweb.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgcode.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgapp.forEach((e) =>{
        e.classList.add("hidden")
    })
    
}
all.onclick=function(){
    imgweb.forEach((e) =>{
        e.classList.remove("hidden")
    })
    imgcode.forEach((e) =>{
        e.classList.remove("hidden")
    })
    imgapp.forEach((e) =>{
        e.classList.remove("hidden")
    })
    img.forEach((e) =>{
        e.classList.remove("hidden")
    })
}
code.onclick=function(){
    imgweb.forEach((e) =>{
        e.classList.add("hidden")
    })
    img.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgapp.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgcode.forEach((e) =>{
        e.classList.remove("hidden")
    })
    
}
app.onclick=function(){
    imgapp.forEach((e) =>{
        e.classList.remove("hidden")
    })
    imgweb.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgcode.forEach((e) =>{
        e.classList.add("hidden")
    })
    img.forEach((e) =>{
        e.classList.add("hidden")
    })
    
}
photo.onclick=function(){
    img.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgcode.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgapp.forEach((e) =>{
        e.classList.add("hidden")
    })
    imgweb.forEach((e) =>{
        e.classList.remove("hidden")
    })
    
}

