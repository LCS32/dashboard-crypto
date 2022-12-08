const chart = document.querySelector("#chart").getContext("2d");

// create a new chart instance

new Chart(chart, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],

        datasets: [
            {
                label: "BTC",
                data: [29347, 38394, 20583, 29128, 19383, 19374, 32918, 19382, 19371, 19381, 19238, 20282],
                borderColor: "red",
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [12948, 29482, 29487, 20348, 19233, 20282, 29381, 38173, 29173, 19271, 18271, 24920],
                borderColor: "blue",
                borderWidth: 2
            },
        ]
    },
    options: {
        responsive: true,
    }
})

// Show or hide sidebar

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})


// CHANGE THEME

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})