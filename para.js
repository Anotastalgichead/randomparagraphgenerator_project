//creating a variable which will store the "INPUT" tag using it's ID = "numberOfwords"
const input = document.getElementById("numberOfwords");
//creating a variable which will store the "Div" or the container tag using it's queryselector property of js or we can also store it using it class by getElementByclassName ".container"
const container = document.querySelector(".container");

//createing a Arrow function which will create a string of a random length from the givern letter variable 
const generatestring =(n)=>{
  let text = "";
  let  letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnouprstuvwxyz";
  
  for(let i=0;i<n;++i){
//math.rondom() is used for creating random number 
//the scope of the random number would be till the length of the "letter" variable - 1 
//using the .tofixed(0) method "." or float value is being removed 
    const random= (Math.random()*(letter.length-1)).toFixed(0);
//the variable "text" will store the variable "letter" character in every itteration until the loops end and the "random" variable will give the  "index value" each time to the "letter" variable
    text += letter[random];
    
  }
//end of the loop we will get the string stored in the text
  return text;
};



let numofwords;
//this Arrow function will do all the functioning from:
//1. giving the "n" to the above "generatestring" function
//2. generating string of the particular length user has given 
//3.creating a paragragh 
//4. adding a class="paras" to the paragraph
//5. adding the paragraph to the div container 
const generate = ()=>{

//stores the input given by the user in number form
 numofwords= Number(input.value);

 let data ="";

//this loop will generate string of max 15 length until the string lenght matches the lenght of the user input
for(let i=0;i<numofwords;++i){
    const randomnumber =(Math.random()*15).toFixed(0);
  data +=  generatestring(randomnumber);
  data += " ";

}



//it will create a paragraph and store it inside the "para" variable
 const para = document.createElement("p");

//.innerhtml helps to edit data inside a attribute or a tag and here the "data" gets inside the paragraph
 para.innerHTML = data;

//it created a class of name paras into the paragraph tag 
//<p class="paras"></p>
 para.setAttribute("class","paras");

//this will add the paragraph after all the above changes to the DIV container
 container.append(para);
 
};

