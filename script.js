const myChart = document.getElementById("myChart").getContext('2d');

// Create variables
let dollarAmount = 100;
let housing = parseFloat(dollarAmount * 0.25);
let transportation = parseFloat(dollarAmount * 0.15);
let groceries = parseFloat(dollarAmount * 0.12);
let savings = parseFloat(dollarAmount * 0.10);
let utilities = parseFloat(dollarAmount * 0.10);
let charity = parseFloat(dollarAmount * 0.05);
let clothing = parseFloat(dollarAmount * 0.05);
let entertainment = parseFloat(dollarAmount * 0.05);
let medical = parseFloat(dollarAmount * 0.05);
let gifts = parseFloat(dollarAmount * 0.05);
let misc = parseFloat(dollarAmount * 0.05);

let popChart = new Chart(myChart, {
    // Types availlable: bar, horizontal, pie, line, doughnut, radar, polarArea    
    type: 'pie',
    data: {
        labels: [
            'Housing', 
            'Transportation', 
            'Groceries & Dining',
            'Savings',
            'Utilities & Phone',
            'Charity',
            'Clothing',
            'Entertainment',
            'Medical',
            'Holidays & Gifts',
            'Misc'
        ],
        datasets: [{
            label: 'Budget',
            data: [
                housing, 
                transportation, 
                groceries,
                savings,
                utilities,
                charity,
                clothing,
                entertainment,
                medical,
                gifts,
                misc
            ]
        }]
    }
});