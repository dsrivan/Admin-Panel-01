const labels_line = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
];
const data_line = {
    labels: labels_line,
    datasets: [{
        label: 'First data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: 'Second data',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: [0, 5, 10, 20, 15, 35, 40],
    },
    {
        label: 'Third data',
        backgroundColor: 'rgb(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        data: [0, 15, 5, 10, 25, 30, 35],
    }]
};

const config_line = {
    type: 'line',
    data: data_line,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false, // true/false
                text: 'Chart.js Line Chart'
            }
        }
    }
};

var chart_line = new Chart(
    document.getElementById('chart-line--chart'),
    config_line
);



// ************************************************************************



const data_pie = {
    labels: [
        'First Data',
        'Second Data',
        'Third Data'
    ],
    datasets: [{
        label: 'Pie Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config_pie = {
    type: 'pie', // doughnut
    data: data_pie,
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }
};

var chart_pie = new Chart(
    document.getElementById('chart-pie--chart'),
    config_pie
);



// ************************************************************************