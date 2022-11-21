import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import { useEffect } from "preact/hooks";
import styles  from '../utils/styles.ts';

 export default function Chart(props: { data: [string, number[]][] }) {
  useEffect(() => {
    let x, rss, committed, heapTotal, heapUsed, external: number[] = [];
    for(let i = 0; i < props.data.length; i++){
      console.log('in the for loop');
      switch(props.data[i][0]){
        case 'x': x = props.data[i][1]; break;
        case 'rss': rss = props.data[i][1]; break;
        case 'committed': committed = props.data[i][1]; break;
        case 'heapTotal': heapTotal = props.data[i][1]; break;
        case 'heapUsed': heapUsed = props.data[i][1]; break;
        case 'external': external = props.data[i][1]; break;
        default: 
          console.log('default');
          throw new Error('Please check your csv columns. Your columns must be named x, rss, commmitted, heapTotal, heapUsed, and external.')
      }
    }
    const { chartStyle, chartOptions } = styles(x, rss, committed, heapTotal, heapUsed, external);
    console.log(x, rss);
    const ctx1 = document.getElementById("myCsvChart");
    const lineChart = new chartjs.Chart(ctx1, {
      type: "line",
      data: chartStyle,
      options: chartOptions,
    });
    return () => {
      console.log('I should not be here')
      lineChart.destroy();
    }
  }, [props.data]);

  return(
    <div>
      <div id="line" class="border-2 border-solid border-gray-300 p-4 ">
          <canvas id="myCsvChart"></canvas>
      </div>
    </div>
  )
}
