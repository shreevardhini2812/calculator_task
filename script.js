let type = document.getElementById("type");
let desc = document.getElementById("desc");
let amount = document.getElementById("amount");



let all_radio = document.getElementById("all_radio");
let income_radio = document.getElementById("income_radio");
let expense_radio = document.getElementById("expense_radio");
let datadisplay = document.getElementById("datadisplay");



let editbtn = document.getElementById("editbtn");
let deletebtn = document.getElementById("deletebtn");




let maincontainer = document.getElementById("main");
let main2container = document.getElementById("main2");
let listelement = document.createElement("div");
let listcontainer = document.getElementById("listcont");



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
        type_value :  type.value,
        desc_value : desc.value,
        amount_value : amount.value,
    };

    arr.push(alldetails);

    card.innerHTML +=`
    <span class="flex flex-row gap-15 pt-10">
    <div>${alldetails.type_value}</div>
    <div>${alldetails.desc_value}</div>
    <div>${alldetails.amount_value}</div>
    </span>
    `;
    // console.log(arr);
    // console.log(typeof(alldetails.amount_value));


    
    while(i<arr.length)
    {
    if((alldetails.type_value) == "income"){
        incomeres = incomeres + Number((alldetails.amount_value));
        //console.log(typeof(incomeres));
       
    }
    else if((alldetails.type_value) == "expense")
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
    <div class="flex flex-row gap-10">
    <div>Total Income : </div>
    <div>${incomeres-expenseres}</div>
    <div>Total Expense : </div>
    <div>${expenseres}</div>
    <div>Net Balance : </div>
    <div>${netbalance}</div>
    </div>
    `;

    let arr2=[];
    all_radio.addEventListener("click",()=>{
   
    let alldetails2 = alldetails;
    console.log(alldetails2);
    arr2=arr;
    console.log(arr2);
    card2.innerHTML +=`
    <div class = "font-semibold pl-120 flex flex-row pt-10 gap-15">
    <div>All Details</div>
    <div>${alldetails2.type_value}</div>
    <div>${alldetails2.desc_value}</div>
    <div>${alldetails2.amount_value}</div>
    </div>
    `;
});


income_radio.addEventListener("click",()=>{
    
    let alldetails2 = alldetails;
    console.log(alldetails2);
    arr2=arr;
    console.log(arr2);
    if(alldetails2.type_value=="income")
    {
    card2.innerHTML +=`
    <div class = "font-semibold pl-120 flex flex-row pt-10 gap-15">
    <div>Income Details</div>
    <div>${alldetails2.type_value}</div>
    <div>${alldetails2.desc_value}</div>
    <div>${alldetails2.amount_value}</div>
    </div>
    `;
    }
});



expense_radio.addEventListener("click",()=>{
   
    let alldetails2 = alldetails;
    console.log(alldetails2);
    arr2=arr;
    console.log(arr2);
    if(alldetails2.type_value=="expense")
    {
    card2.innerHTML +=`
    <div class = "font-semibold pl-120 flex flex-row pt-10 gap-15">
    <div>Expense Details</div>
    <div>${alldetails2.type_value}</div>
    <div>${alldetails2.desc_value}</div>
    <div>${alldetails2.amount_value}</div>
    </div>
    `;
    }
});


});

submit.addEventListener("click",()=>{
    type.value="";
    desc.value="";
    amount.value="";
});

maincontainer.append(card,card1,card2);
