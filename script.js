// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateCharts();
    updateDarkModeIcon();
});

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Market Overview Chart
let marketOverviewChart;
const marketOverviewCtx = document.getElementById('marketOverviewChart').getContext('2d');

function createMarketOverviewChart() {
    marketOverviewChart = new Chart(marketOverviewCtx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Patient Volume (in millions)',
                data: [1.2, 1.3, 1.35, 1.42, 1.49],
                borderColor: '#6400FF',
                backgroundColor: 'rgba(100, 0, 255, 0.1)',
                tension: 0.4
            },
            {
                label: 'Revenue (in billions $)',
                data: [1.4, 1.5, 1.6, 1.7, 1.8],
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                title: {
                    display: true,
                    text: 'Market Growth Trends',
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                }
            }
        }
    });
}

// Financial Projections Chart
let financialProjectionsChart;
const financialProjectionsCtx = document.getElementById('financialProjectionsChart').getContext('2d');

function createFinancialProjectionsChart() {
    financialProjectionsChart = new Chart(financialProjectionsCtx, {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027'],
            datasets: [{
                label: 'Projected Revenue (in billions $)',
                data: [1.9, 2.1, 2.3, 2.6, 2.9],
                backgroundColor: '#6400FF'
            },
            {
                label: 'Projected Expenses (in billions $)',
                data: [1.7, 1.9, 2.1, 2.3, 2.5],
                backgroundColor: '#000000'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                title: {
                    display: true,
                    text: 'Financial Projections',
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                }
            }
        }
    });
}

function updateCharts() {
    marketOverviewChart.destroy();
    financialProjectionsChart.destroy();
    createMarketOverviewChart();
    createFinancialProjectionsChart();
}

// Initialize the charts
createMarketOverviewChart();
createFinancialProjectionsChart();
