//chart doughnut section

  const ctx = document.getElementById('myChart0');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      // labels: ['completed', 'Uncompleted'],
      datasets: [{
        label: '# of Votes',
        data: [5, 3],
        borderWidth: 1
      }]
    },     
  });

  const ctx1 = document.getElementById('myChart1');

  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      // labels: ['completed', 'Uncompleted'],
      datasets: [{
        label: '# of Votes',
        data: [5, 3],
        borderWidth: 1
      }]
    },     
  });

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      // labels: ['completed', 'Uncompleted'],
      datasets: [{
        label: '# of Votes',
        data: [5, 3],
        borderWidth: 1
      }]
    },     
  });

