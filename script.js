const transactions = [];
        

const form = document.getElementById('transactionForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const netBalance = document.getElementById('netBalance');
const transactionList = document.getElementById('transactionList');
const filters = document.querySelectorAll('input[name="filter"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.querySelector('input[name="type"]:checked').value;
  transactions.push({
      description: description.value,
      amount: parseFloat(amount.value),
      type
  });
  description.value = '';
  amount.value = '';
  renderTransactions();
});

filters.forEach(filter => {
    filter.addEventListener('change', renderTransactions);
 });

function renderTransactions() {
    const filter = document.querySelector('input[name="filter"]:checked').value;
    transactionList.innerHTML = '';

    let incomeTotal = 0;
    let expenseTotal = 0;

    transactions.filter(t => filter === 'all' || t.type === filter).forEach(t => {
      const div = document.createElement('div');
      div.classList.add('item');
     div.innerHTML = `<span>${t.description}</span><span class="${t.type}">${t.type === 'income' ? '+' : '-'}${t.amount}</span>`;
     transactionList.appendChild(div);
  });

  transactions.forEach(t => {
      if (t.type === 'income') {
          incomeTotal += t.amount;
      } else {
           expenseTotal += t.amount;
       }
  });

totalIncome.textContent = `${incomeTotal}`;
totalExpense.textContent = `${expenseTotal}`;
netBalance.textContent = `${(incomeTotal - expenseTotal)}`;
        }