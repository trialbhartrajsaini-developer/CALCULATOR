let input=document.querySelector("input");
let buttons=document.querySelectorAll("button")
let arr=Array.from(buttons)
let string="";

arr.forEach(btn=>{
btn.addEventListener("click",(e)=>{
if(e.target.innerText === "AC"){
string="";
input.value=string;
}
else if(e.target.innerText==="DEL"){
string=string.substring(0,string.length-1)
input.value=string;
}
else if(e.target.innerText==="="){
string=eval(string)//this is a most property eval convert to strin num and calculate automatic
input.value=string;
}
else{
    string+=e.target.innerText
    input.value=string;
}
})
})