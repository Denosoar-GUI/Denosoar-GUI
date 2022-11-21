import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import { useEffect, useState } from "preact/hooks";
import styles  from '../utils/styles.ts';

 export default function CsvChart(props: { data: [] | [string, number[]][] }) {
  let x, rss, committed, heapTotal, heapUsed, external: number[] = [];
  props.data.forEach(e => {
    switch(e[0]){
      case 'x': x = e[1]; break;
      case 'rss': rss = e[1]; break;
      case 'committed': committed = e[1]; break;
      case 'heapTotal': heapTotal = e[1]; break;
      case 'heapUsed': heapUsed = e[1]; break;
      case 'external': external = e[1]; break;
      default: throw new Error('Please check your csv columns. Your columns must be named x, rss, commmitted, heapTotal, heapUsed, and external.')
    }
  })
  if(props.data.length !== 0){
    const { chartStyle, chartOptions } = styles(x, rss, committed, heapTotal, heapUsed, external);

    useEffect(() => {
      const ctx1 = document.getElementById("myCsvChart");
      const lineChart = new chartjs.Chart(ctx1, {
        type: "line",
        data: chartStyle,
        options: chartOptions,
      });
    }, []);

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
