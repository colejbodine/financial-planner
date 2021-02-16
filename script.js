// Create variables
const myChart = document.getElementById("myChart").getContext("2d");
const input = document.getElementById("input")
const update = document.getElementById("update")

// Create chart
function createChart() {
    let dollarAmount = parseFloat(input.value);
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

    return popChart()
}

function updateChart() {
    dollarAmount = input.value;
    createChart();
}


// TODO: Find a way to update/refresh chart on button click with new values.
update.addEventListener("click", createChart)