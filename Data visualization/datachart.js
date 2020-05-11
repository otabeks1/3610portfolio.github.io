document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

  var ctx = document.getElementById('doughnutChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
      labels: flavors,
      datasets: [
        {
          backgroundColor: ["#E6B0AA", "#D4E6F1", "#ABEBC6", "#A2D9CE", "#FCF3CF", "#EDBB99", "#D2B4DE", "#F7F9F9", "#D6DBDF"],
          data: percentages,
        }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Percentage of Favorite Donut Flavors (2018 Survey of 57,520 People)'
        }
      }
  });




  var ctx2 = document.getElementById('barChart').getContext('2d');
  var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
      labels: months,
      datasets: [
        {
          backgroundColor: ["#C62828", "#AD1457", "#6A1B9A", "#4527A0", "#283593", "#1565C0", "#0277BD", "#00838F", "#00695C", "#2E7D32", "#F9A825", "#EF6C00"],
          data: temps,
        }]
      },

      // Configuration options go here
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Average Monthly Temperatures at Central Park for 2019'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Degrees (Fahrenheit)'
            }
          }]
        }
      }
    });

  }

