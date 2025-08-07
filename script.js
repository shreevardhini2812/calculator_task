let selectedvalue = document.getElementById("selectedvalue");
let desc = document.getElementById("desc");
let amount = document.getElementById("amount");


const filter_btn = document.querySelectorAll('input[name="category"]');
const datadisplay = document.getElementById('datadisplay');




let maincontainer = document.getElementById("main");
let main2container = document.getElementById("main2");



let submit = document.getElementById("submit");
let card = document.createElement("div");
let card1 = document.createElement("div");
let card2 = document.createElement("div");



let i=0;
    let incomeres=0;
    let expenseres=0;
    let netbalance=0;
let arr=[];
let arr2=[];
submit.addEventListener("click",()=>{
    
    const alldetails = {
    
        selectedvalue_value:selectedvalue.value,
        
        desc_value : desc.value,
        amount_value : amount.value,
    };

    arr.push(alldetails);

    card.innerHTML +=`
    <div class="pt-5 p-5">
    <div class="flex flex-row gap-15 pl-130 font-semibold">
    
    <div>${alldetails.selectedvalue_value}</div>
    <div>${alldetails.desc_value}</div>
    <div>${alldetails.amount_value}</div>
    </div>
    </div>
    `;
    // console.log(arr);
    // console.log(typeof(alldetails.amount_value));


    
    while(i<arr.length)
    {
    if(alldetails.selectedvalue_value == "Income"){
        incomeres = incomeres + Number((alldetails.amount_value));
        //console.log(typeof(incomeres));
       
    }
    else if(alldetails.selectedvalue_value == "Expense")
    {
        expenseres = expenseres + Number((alldetails.amount_value));
        
    }
    else{
        console.log("enter the value");
    }
    netbalance = incomeres-expenseres;
    i++;
    
    }

    card1.innerHTML +=`
    <div class="pt-10 p-3 card1des shadow">
    <div class="flex flex-row gap-10 pl-100 card1des">
    <div class="font-bold card1des">Total Income : </div>
    <div class="card1des">${incomeres-expenseres}</div>
    <div class="font-bold card1des">Total Expense : </div>
    <div class="card1des">${expenseres}</div>
    <div class="font-bold card1des">Net Balance : </div>
    <div class="card1des">${netbalance}</div>
    </div>
    </div>
    `;

    let arr2=[];
    arr2.push(alldetails);

    function displaydata(filtereddata) {
  datadisplay.innerHTML += " ";
  filtereddata.forEach(item => {
    const divs = document.createElement('div');
    divs.textContent = " ";
    divs.innerHTML += `
    <div class="pl-110">
    <div class="shadow-xl radiodet flex flex-row gap-10">
    Type: ${item.selectedvalue_value}   Description: ${item.desc_value}   Amount: ${item.amount_value}
    </div>
    </div>
    `;
    datadisplay.innerHTML +=`
    
    <br/>
    `;
    datadisplay.append(divs);
  });
}

function filterdata(filtervalue) {
  let filtereddata = arr2;

  if (filtervalue === "Income") {
    filtereddata = arr2.filter(item => item.selectedvalue_value == "Income");
  } else if (filtervalue === "Expense") {
    filtereddata = arr2.filter(item => item.selectedvalue_value == "Expense");
  }
  else{
    console.log("click any radio button");
  }

  displaydata(filtereddata);
}


filter_btn.forEach(buttons => {
  buttons.addEventListener('change', () => {
    
    filterdata(buttons.value);
  });
});
});

submit.addEventListener("click",()=>{
    selectedvalue.value="";
    desc.value="";
    amount.value="";
});


maincontainer.append(card,card1,card2);
