/** @jsx */

import { useEffect, useState } from "preact/hooks";
import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import RecordData from "./RecordData.tsx";

export default function MemoryChart() {
  // Number of points to display on the chart
  const displaySize = 50;
  const label: number[] = [];
  const [port, setPort] = useState<string>('');
  const [inUse, setInUse] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: any) => {
    setPort(e.target.value);
    console.log(port);
  }

  const handleStart = () => {
    if(inUse) return;
    else setInUse(true);
  }

  for (let i = 0; i < displaySize; i++) {
    label.push(i - displaySize);
  }

  const startArray = new Array(displaySize).fill(0);

  const chartStyle = {
    labels: label,
    datasets: [
      {
        label: "RSS",
        data: [...startArray],
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
        label: "Committed Heap (kB)",
        data: [...startArray],
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
        data: [...startArray],
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
        data: [...startArray],
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
        data: [...startArray],
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
        suggestedmax: 6000,
        suggestedmin: 0,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };


  useEffect(() => {
    const ctx1 = document.getElementById("myLineChart");
    const ctx2 = document.getElementById("myBarChart");
    const lineChart = new chartjs.Chart(ctx1, {
      type: "line",
      data: chartStyle,
      options: chartOptions,
    });
    const barChart = new chartjs.Chart(ctx2, {
      type: "bar",
      data: chartStyle,
      options: chartOptions,
    });
    if(inUse){
      try {
        let myInterval: number;
        const ws = new WebSocket(`ws://127.0.0.1:${port}`);
        ws.onopen = () => {
          setError('');
          myInterval = setInterval(() => {
            ws.send('give me data');
          }, 1000);
        };
        ws.onmessage = (e: MessageEvent) => {
          console.log('added');
          const mem = JSON.parse(e.data);
          lineChart.data.labels = lineChart.data.labels.map((x: number) => x + 1);
          barChart.data.labels = barChart.data.labels.map((x: number) => x + 1);
          for(let i = 0; i < 5; i++){
            let data;
            if(i === 0) data = mem.rss;
            else if(i === 1) data = mem.committed/1000;
            else if(i === 2) data = mem.heapTotal/1000;
            else if(i === 3) data = mem.heapUsed/1000;
            else if(i === 4) data = mem.external/1000;
            chartStyle.datasets[i].data = [
              ...chartStyle.datasets[i].data.slice(1),
              data
            ]
          }
          lineChart.update();
          barChart.update();
        };
        ws.onerror = () => {
          ws.close(1000, 'bye');
          setInUse(false);
          setError(`There was an error in connecting this websocket. Please verify the following and try again:\n1)Your server has the denosoar init(port) function included in its entrypoint file.\n2)Your server is currently running.\n3)The port with which you initialized our application is the same port you are now attempting to access.`)
        };
        ws.onclose = () => console.log('closed');
        // Add button functionality to close the websocket
        const closeWS = document.getElementById('closeWS');
        const end = () => {
          ws.close();
          clearInterval(myInterval);
          setInUse(false);
          closeWS?.removeEventListener('click', end);
        }
        closeWS?.addEventListener('click', end);
      } catch(err) {
        setError(err.message);
        setInUse(false);
      }
    }
    return () => {
      lineChart.destroy();
      barChart.destroy();
    };
  }, [inUse]);


  function toggleGraph() {
    const line = document.getElementById("line")?.classList.contains("hidden");
    // console.log(line, "hi");
    if (line) {
      document.getElementById("bar")?.setAttribute("class", "hidden");
      document.getElementById("line")?.classList.remove("hidden");
    } else {
      document.getElementById("line")?.setAttribute("class", "hidden");
      document.getElementById("bar")?.classList.remove("hidden");
    }
  }

  return (
    <div class="block" id="chartContainer">
      <h1>Memory Usage</h1>
      <div id="line">
        <button class="" id="barBtn" onClick={toggleGraph}>Bar Chart</button>
        <canvas id="myLineChart"></canvas>
      </div>
      <div id="bar" class="hidden">
        <button class={``} id="lineBtn" onClick={toggleGraph}>Line Chart</button>
        <canvas id="myBarChart"></canvas>
      </div>
      <label htmlFor="port">Localhost Port: </label>
      <input id="port" name="port" type="text" placeholder="port#" onInput={e => handleChange(e)}/>
      <button onClick={handleStart} id ="startWS">Connect</button>
      <button id="closeWS">Disconnect</button>
      <div>{error}</div>
      <RecordData />
    </div>
  );
}
