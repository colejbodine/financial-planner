// DOM elemements.
const myChart = document.getElementById("myChart").getContext("2d");
const input = document.getElementById("input")
const update = document.getElementById("update")

/**
 * createChart.
 * 
 * When called, this method will create a new chart.
 * 
 * @returns budgetChart.
 */
function createChart() {
    let dollarAmount = (parseFloat(input.value) / 12).toFixed(2);
    let housing = parseFloat(dollarAmount * 0.25).toFixed(2);
    let transportation = parseFloat(dollarAmount * 0.15).toFixed(2);
    let groceries = parseFloat(dollarAmount * 0.12).toFixed(2);
    let savings = parseFloat(dollarAmount * 0.10).toFixed(2);
    let utilities = parseFloat(dollarAmount * 0.10).toFixed(2);
    let charity = parseFloat(dollarAmount * 0.05).toFixed(2);
    let clothing = parseFloat(dollarAmount * 0.05).toFixed(2);
    let entertainment = parseFloat(dollarAmount * 0.05).toFixed(2);
    let medical = parseFloat(dollarAmount * 0.05).toFixed(2);
    let gifts = parseFloat(dollarAmount * 0.05).toFixed(2);
    let misc = parseFloat(dollarAmount * 0.05).toFixed(2);

    let budgetChart = new Chart(myChart, {  
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

    return budgetChart()
}

/**
 * getRandomFloat.
 * 
 * This method creates a random floating point number to be used in another method.
 * 
 * @param {int} min 
 * @param {int} max
 * 
 * @returns a random floating point variable. 
 */
function getRandomFloat(min, max) {
    min = 30000;
    max = 45000;
    return Math.random() * (max - min) + min;
}


/**
 * createRandomChart.
 * 
 * This method creates a chart generated by a randomly selected value.
 * 
 * !This method is to be used on page load only.
 */
function createRandomChart() {
    input.value = getRandomFloat().toFixed(2);
    createChart();
}

/**
 * updateChart.
 * 
 * This method updates the chart using a value provided by the user.
 */
function updateChart() {
    dollarAmount = input.value;
    createChart();
}

// Event listeners.
window.onload = createRandomChart;
update.addEventListener("click", updateChart);