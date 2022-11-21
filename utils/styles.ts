export default function styles(x: number[] = [], rss: number[] = [], committed: number[] = [], heapTotal: number[] = [], heapUsed: number[] = [], external: number[] = [],){
  const chartStyle = {
    labels: x,
    datasets: [
      {
        label: "RSS",
        data: rss,
        backgroundColor: [
          "rgba(105, 0, 132, .2)",
        ],
        borderColor: [
          "rgba(200, 99, 132, .7)",
        ],
        fill: true,
        borderWidth: 1,
        tension: 0.5,
      },
      {
        label: "Committed Heap",
        data: committed,
        backgroundColor: [
          "rgba(0, 20, 20, .2)",
        ],
        borderColor: [
          "rgba(0, 30, 20, .7)",
        ],
        fill: true,
        borderWidth: 1,
      },
      {
        label: "Heap Total",
        data: heapTotal,
        backgroundColor: [
          "rgba(0, 137, 132, .2)",
        ],
        borderColor: [
          "rgba(0, 10, 130, .7)",
        ],
        fill: true,
        borderWidth: 1,
      },
      {
        label: "Heap Used",
        data: heapUsed,
        backgroundColor: [
          "rgba(0, 255, 0, .2)",
        ],
        borderColor: [
          "rgba(0, 153, 0, .7)",
        ],
        fill: true,
        borderWidth: 1,
        tension: 0.5,
      },
      {
        label: "External",
        data: external,
        backgroundColor: [
          "rgba(255, 102, 78, .2)",
        ],
        borderColor: [
          "rgba(255, 0, 127, .7)",
        ],
        fill: true,
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: {
        suggestedmax: 1000000,
        suggestedmin: 0,
        ticks: {
          stepSize: 10000,
        },
        title: {
          display: true,
          text: 'Memory Usage (Kb)',
          align: 'center',
          padding: 16,
          font: {
            size: 24
          }
        }
      },
      xAxes: {
        title: {
          display: true,
          text: "Time (s)",
          align: 'center',
          padding: 12,
          font: {
            size: 24
          }
        }
      }
    },
    animation: true,
    elements: {
      line: {},
      point: {
        radius: 1
      }
    }
  };
  return {
    chartStyle: chartStyle,
    chartOptions: chartOptions
  }
}