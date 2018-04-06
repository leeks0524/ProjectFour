export const chartjs = {
  bar: {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "ADBE",
          backgroundColor: "#335252",
          stack: "Expense",
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000]
        },
        {
          label: "GOGL",
          backgroundColor: "#52958b",
          stack: "Expense",
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked"
      },
      tooltips: {
        mode: "index",
        intersect: false
      },
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false
          }
        ],
        yAxes: [
          {
            stacked: true,
            display: false
          }
        ]
      }
    }
  },

  line: {
    data: {
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Balance of the month : AMZN",
          borderColor: "#5ea8a7",
          backgroundColor: "#5ea8a7",
          data: [
            1700,
            1300,
            2200,
            2400,
            2800,
            2500,
            1800,
            2030,
            2300,
            2100,
            2130,
            1900
          ]
        },

        {
          label: "Balance of the month : EA",
          borderColor: "#257985",
          backgroundColor: "#257985",
          data: [
            2100,
            1300,
            2200,
            2410,
            2600,
            2500,
            3000,
            3240,
            2032,
            3201,
            1820,
            2010
          ]
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: false,
        text: "Chart.js Line Chart - Stacked Area"
      },
      tooltips: {
        intersect: false,
        mode: "nearest"
      },
      hover: {
        mode: "index"
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "Month"
            },
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: "Value"
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    }
  }
};
