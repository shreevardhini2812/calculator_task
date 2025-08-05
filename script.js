let income = document.getElementById("income");
let desc = document.getElementById("desc");
let expense = document.getElementById("expense");


let maincontainer = document.getElementById("main");


let submit = document.getElementById("submit");
let card = document.createElement("div");
let card1 = document.createElement("div");

let bal=[];
let arr=[];
submit.addEventListener("click",()=>{
    const alldetails = {
        income_value :  income.value,
        desc_value : desc.value,
        expense_value : expense.value,
    };

    arr.push(alldetails);
    console.log(arr);

    card.innerHTML +=`
    <div class="flex flex-row gap-15">
    <div>${alldetails.income_value}</div>
    <div>${alldetails.desc_value}</div>
    <div>${alldetails.expense_value}</div>
    <div>${alldetails.income_value-alldetails.expense_value}</div>
    </div>
    `;

    

    let res=alldetails.income_value - alldetails.expense_value;
    
    bal.push(res);
    
    let i,j=0;
    for(i=0;i<bal.length;i++)
    {
        j = j + (bal[i]);
    }

    card1.innerHTML +=`
    <div class="font-bold">Net Balance : </div>
    <div>${j}</div>
    `;  


});


submit.addEventListener("click",()=>{
    income.value="";
    desc.value="";
    expense.value="";
});





maincontainer.append(card,card1);
