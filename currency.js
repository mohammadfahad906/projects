const base_Url="https://latest.currency-api.pages.dev/v1/currencies";
let inpt=document.querySelector(" .amount input ");
let messege=document.querySelector(".msg");
let buttons=document.querySelector("form button ")
  let dropdowns=document.querySelectorAll(".dropdown select");
  let currvalue=document.querySelector(".from select");
  let appl=document.querySelector(".to select");

  for(let select of dropdowns){
    for(let code in countryList){
      
        let newOption=document.createElement("option");
        newOption.innerText=code;
        if(select.name === "from" && code === "USD"){
          newOption.selected="selected";
        }else if(select.name==="to" && code==="INR"){
          newOption.selected="selected";

        }
        select.append(newOption);
    }
    select.addEventListener("change",(evnt)=>{
      updateflag(evnt.target);
    })
  }
  const updateflag=(element)=>{
let currcode=element.value;
let countrycode=countryList[currcode];
console.log(countrycode);
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
let img=element.parentElement.querySelector("img");
img.src=newsrc;
  }


    buttons.addEventListener("click", async(evt)=>{
      evt.preventDefault();
      let amtvalue=inpt.value;
      console.log(amtvalue);
      if(amtvalue==="" || amtvalue<"1"){
       
        inpt.value="1";
      }
      
    
 const URL=`${base_Url}/${currvalue.value.toLowerCase()}/${appl.value.toLowerCase()}.json`;
  let response=await fetch(URL);
  console.log(response);
  let data=await response.json();
  console.log(data);
  let rate=data[appl.value.toLowerCase()];
  console.log(rate);

});