/** @jsx */

import { useEffect, useState } from "preact/hooks";
import { StandardWebSocketClient } from "websocket";
import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import RecordData from "./RecordData.tsx";
import { createWebSocket } from "https://deno.land/std@0.92.0/ws/mod.ts";


export default function MemoryChart() {
  // Number of points to display on the chart
  const displaySize = 50;
  const label: number[] = [];
  const [port, setPort] = useState('');
  const [inUse, setInUse] = useState(false);
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

  function startWebsocket(lineChart: any, barChart: any, endWS: HTMLElement | null){
    if(inUse) return;
    const ws = new StandardWebSocketClient(
      "ws://127.0.0.1:3000",
    )
    ws.on("open", function () {
      setInterval(() => {
        ws.send("give me data");
      }, 1000);
    });
    ws.addListener("message", function (e: MessageEvent) {
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
    });
    endWS?.addEventListener('click', callback)
    function callback(){
      if(inUse){
        ws.removeAllListeners();
        alert('stopped recording');
        endWS?.removeEventListener('click', callback);
      }
    }
  }


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
    const startWS = document.getElementById('startWS');
    const endWS = document.getElementById('closeWS');
    startWS?.addEventListener('click', e => startWebsocket(lineChart, barChart, endWS));
    return () => {
      lineChart.destroy();
      barChart.destroy();
    };
  }, []);

  useEffect(() => {
    const startWS = document.getElementById('startWS');
    const endWS = document.getElementById('endWS');
  }, [inUse])

  function handleChange(e: any) {
    setPort(e.target.value);
  }

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
        <button class="" id="lineBtn" onClick={toggleGraph}>Line Chart</button>
        <canvas id="myBarChart"></canvas>
      </div>
      <input type="text" placeholder="port#" onChange={handleChange}/>
      <button id ="startWS">Start WS</button>
      <button id="closeWS">Close WS</button>
      <RecordData />
    </div>
  );
}
