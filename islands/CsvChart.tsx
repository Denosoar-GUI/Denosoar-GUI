import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import { useEffect } from "preact/hooks";


 export default function CsvChart(props: { data: [] | [string, number[]][] }) {
  if(props.data.length !== 0){
    const chartStyle = {
      labels: [...props.data[0][1]],
      datasets: [
        {
          label: "RSS",
          data: [...props.data[5][1]],
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
          data: [...props.data[1][1]],
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
          data: [...props.data[2][1]],
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
          data: props.data[3][1],
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
          data: [...props.data[4][1]],
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
            text: "Data Points",
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
        line: {
        },
        point: {
          radius: 1
        }
      }
    };
  
    useEffect(() => {
      const ctx1 = document.getElementById("myCsvChart");
      const lineChart = new chartjs.Chart(ctx1, {
        type: "line",
        data: chartStyle,
        options: chartOptions,
      });
    }, [props.data]);

    return(

        <div>
          <div id="line" class="border-2 border-solid border-gray-300 p-4 ">
              <canvas id="myCsvChart"></canvas>
          </div>
        </div>
    )
  } else {
    return <h1>Hi :)</h1>
  }
}
