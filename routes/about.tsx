import Header from "../components/Header.tsx";
import Bio from "../components/Bio.tsx";
import { tw } from "twind";
import { JSXInternal } from "https://esm.sh/v98/preact@10.11.3/src/jsx.d.ts";
import Filler from "../components/Filler.tsx";
export default function About() {

  const names: string[][] = [
    [
      "Katie Angelopoulos",
      "https://github.com/kangelopoulos",
      "https://www.linkedin.com/in/katharine-angelopoulos-8a69a6174/",
      '/kate.jpeg'
    ],
    [
      "David Russo",
      "https://github.com/RussoDavid",
      "https://www.linkedin.com/in/david-russo-742a7735/",
      "/david.jpeg"
    ],
    [
      "Mo Sebbagh",
      "https://github.com/moha99ed",
      "https://www.linkedin.com/in/m-sebbagh/",
      "/mo.jpg"
    ],
    [
      "Ethan Liu",
      "https://github.com/eliu080893",
      "https://www.linkedin.com/in/ethan-liu-0808/",
      "/ethan.jpeg"
    ],
  ];

  const bios: JSXInternal.Element[] = [];

  for (let i = 0; i < names.length; i++) {
    bios.push(<Bio count={i} name={names[i][0]} github={names[i][1]} linkedin={names[i][2]} image={names[i][3]} />)
  }


  const FEATURE_STYLE = tw`text-center font-extrabold text-left m-3 text-xl border-t-4 border-blue-400`;
  const FEATUREDES_STYLE = tw`text-center m-3 border-t-4 border-blue-400`;

  const feature1 = 'TRACK YOUR MEMORY'
  const feature2 = 'SAVE YOUR DATA'
  const feature3 = 'ANALYZE YOUR DATA'
  const feature4 = 'LOAD TEST YOUR APP'

  const featDes1 = 'Denosoar provides a simple UI for you to track the memory usage of your Deno application. Once our custom server class is imported and spun up on your Deno application, you can connect to it from our web application. If connected successfully, you will start to see the memory metrics streaming on the chart! It\'s that easy!'
  const featDes2 = 'Denosoar also has a feature for you to save the incoming data to a CSV file. Once you have started streaming the memory usage data, simply hit the START RECORDING button to start writing to a file, which will be saved and can be found at the root directory of your application.'
  const featDes3 = 'After saving your data to your local directory, you can view the file on our UPLOAD CHART path. Just upload or drag and drop any previously generated CSV file into the dropzone, and you should see your data pop up on the chart.'
  const featDes4 = 'If your Deno application is listening for incoming GET requests, you can choose to stress test your endpoint with our load-testing feature. Just enter the endpoint, concurrency, times per second, and duration into the load-test input, and then click SIEGE. You should start to see your application\'s memory usage spike, and hopefully drop back down after the load-test has stopped. If not, there\s a change your application could be experiencing a memory leak.'

  const featureObject: any = {
    [feature1]: featDes1,
    [feature2]: featDes2,
    [feature3]: featDes3,
    [feature4]: featDes4
  }

  const featureArray = [];

  for (const feature in featureObject) {
    featureArray.push(
      <div class={tw`${FEATURE_STYLE} h-56`} >{feature}</div>
    )
    featureArray.push(
      <div class={tw`${FEATUREDES_STYLE}`}>{featureObject[feature]}</div>
    )
  }

  return (
    <div>
      <Header />
      <Filler />
      <div id="about-page">
        <div class="bg-white mx-auto min-w-[800px] w-4/5 max-w-6xl pt-10 pb-10 shadow-md">
          <section
            id="about-product"
            class= "flex flex-wrap w-full justify-center bg-gradient-to-r p-4 pt-20 min-w-[700px]"
          >
            <h1 class="w-3/4 text-center text-7xl font-extrabold">About Denosoar</h1>
            <p class="text-lg w-3/4 my-4 border-b-1 border-t-1 border-green-900 border-dashed font-bold">
              Denosoar is an open source memory tool that is used to track potential
              memory leaks for applications built with Deno. Denosoar analyzes and
              displays in real time the RSS(resident set size), Heap Total, Heap
              Usage and External Memory using easy to read charts. Check out all our features below.
            </p>
            <h2 class="w-3/4 block mb-4 font-extrabold text-3xl border-b-1 border-green-900 mt-4">Features</h2>
            <div id="grid_container">
              {featureArray}
            </div>

            <h2 class="w-3/4 block mb-4 font-extrabold text-3xl border-b-1 border-green-900 mt-4">Upcoming Features</h2>
            <div id="grid_container">
              <div class={tw`${FEATURE_STYLE} h-20`} >Heap Snapshots</div>
              <div class={tw`${FEATUREDES_STYLE}`}>Take and save snapshots of your heap with the click of a button.</div>
            </div>
            <div id="grid_container">
              <div class={tw`${FEATURE_STYLE} h-20`} >Comparative Snapshot Analysis</div>
              <div class={tw`${FEATUREDES_STYLE}`}>Analyze heap snapshots to pinpoint objects that are likely culprits of memory leaks.</div>
            </div>
            <div id="grid_container">
              <div class={tw`${FEATURE_STYLE} h-20`} >Core Dump Analysis</div>
              <div class={tw`${FEATUREDES_STYLE}`}>Analyze core dump files after application crashes.</div>
            </div>
            <div id="grid_container">
              <div class={tw`${FEATURE_STYLE} h-20`} >CPU Usage Analysis</div>
              <div class={tw`${FEATUREDES_STYLE}`}>Analyze the CPU Usage of your application over time and under stress.</div>
            </div>
          </section>

          <section
            id="about-team"
            class="w-full py-5 min-w-[700px]"
          >
            <h1 class="m-4 w-full text-center text-7xl font-extrabold">Meet the team!</h1>
            {bios}
          </section>

        </div>
      </div>
    </div>
  );
}