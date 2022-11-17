/** @jsx */

import { useEffect, useState } from "preact/hooks";
import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import RecordData from "../components/RecordData.tsx";

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
        label: "Committed Heap",
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
        suggestedmax: 1000,
        suggestedmin: 0,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: 'Memory Usage (Mb)',
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
          text: "Data Collections",
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
        const ws = new WebSocket(`ws://127.0.0.1:${port}/wss`);
        ws.onopen = () => {
          setError('');
        }
        ws.onmessage = (e: MessageEvent) => {
          const mem = JSON.parse(e.data);
          chartStyle.labels = chartStyle.labels.map((x: number) => x + 1);
          for(let i = 0; i < 5; i++){
            let data;
            if(i === 0) data = mem.rss/1000;
            else if(i === 1) data = mem.committed/1000000;
            else if(i === 2) data = mem.heapTotal/1000000;
            else if(i === 3) data = mem.heapUsed/1000000;
            else if(i === 4) data = mem.external/1000000;
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
      document.getElementById("bar")?.classList.add("class", "hidden");
      document.getElementById("line")?.classList.remove("hidden");
    } else {
      document.getElementById("line")?.classList.add("class", "hidden");
      document.getElementById("bar")?.classList.remove("hidden");
    }
  }

  return (
    <div class="w-4/5 mx-auto min-w-800 max-w-6xl pt-10 pb-10" id="chartContainer">
      <div class="justify-center items-center flex flex-col">
        <div>
          <label htmlFor="port">Localhost Port: </label>
          <input id="port" class="p-2 border-2" name="port" type="text" placeholder="Enter port number" onInput={e => handleChange(e)}/>
          <button onClick={handleStart} class='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-6 mt-4 p-2 rounded shadow-2xl' id ="startWS">Connect</button>
          <button class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-6 mt-4 p-2 rounded' id="closeWS">Disconnect</button>
        </div>
      </div>
      <h1 class="mx-auto text-4xl left-3 pt-10 pb-5 text-center">Memory Usage</h1>
      <div id="line" class="border-2 border-solid border-gray-300 p-4 ">
        <button class="border-2 border-yellow-600 rounded-lg px-3 py-2 text-black cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 ml-6" id="barBtn" onClick={toggleGraph}>Bar Chart</button>
          <canvas id="myLineChart"></canvas>
      </div>
      <div id="bar" class="hidden border-2 border-solid border-gray-300 p-4">
        <button class="border-2 border-yellow-600 rounded-lg px-3 py-2 text-black cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 ml-6" id="lineBtn" onClick={toggleGraph}>Line Chart</button>
        <canvas id="myBarChart"></canvas>
      </div>
      <div class="justify-center items-center flex flex-col">
        <RecordData port={port}/>
        <div id="error-msg"class="text-red-500">{error}</div>
      </div>
    </div>
  );
}
