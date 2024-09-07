// Chart.js example
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',  // You can use other types like 'bar', 'pie', etc.
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '流量分布',
            data: [0, 0, 0, 0, 0, 1.13],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
