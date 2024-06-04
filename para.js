const input = document.getElementById("numberOfwords");
const container = document.querySelector(".container");


const generatestring =(n)=>{
  let text = "";
  let  letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnouprstuvwxyz";
  
  for(let i=0;i<n;++i){

    const random= (Math.random()*(letter.length-1)).toFixed(0);
    text += letter[random];
    
  }
  return text;
};



let numofwords;
const generate = ()=>{
 numofwords= Number(input.value);

 let data ="";
for(let i=0;i<numofwords;++i){
    const randomnumber =(Math.random()*15).toFixed(0);
  data +=  generatestring(randomnumber);
  data += " ";

}




 const para = document.createElement("p");

 para.innerHTML = data;

 para.setAttribute("class","paras");

 container.append(para);
 
};

