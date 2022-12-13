import Header from "../components/Header.tsx";
import CopyToClip from "../islands/CopyToClip.tsx";
import Filler from "../components/Filler.tsx";


export default function Docs() {
  const children = [
    { name: "What's DenoSoar", href: "#welcome" },
    { name: "Getting Started", href: "#gs" },
    { name: "Guide", href: "#guid" },
    { name: "Initializing Denosoar", href: "#init" },
    { name: "Recording to CSV", href: "#record" },
    { name: "Processing CSV Files", href: "#procCSV" },
    { name: "Change Sampling Frequency", href: "#freq" },
    { name: "Beta - Simple Load Test", href: "#lt" },
    { name: "Under Development", href: "#dev" },
  ];
  const text = `import { init } from "https://deno.land/x/denosoar@v0.0.4/mod.ts";`
  return (

    <div id ="docs">
      <Header />
      <Filler />
      <div id="docs-body" >
        <aside id="sidebarDocs" class="col-span-1" aria-label="Sidebar">
          <div
            class="pl-5 w-64 h-full shadow-md bg-white"
            key="Documentations"
          >
            <br />
            <div class="font-extrabold">Menu</div>
            <ul class="space-y-6">
              {children.map((child) => (
                <li class="mt-4" key={child.name}>
                  <a
                    class="w-full text-left text-[#635454] p-3 rounded-lg text-sm hover:bg-[#ded5ad] hover:text-[#17313b] hover:scale-110 duration-300"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main class="col-span-3 pt-20 px-5" id="docs-main">
          <h1 id="welcome" class="mx-auto max-w-screen-md font-bold text-6xl">
            Welcome to DenoSoar
          </h1>
          <p class="mx-auto max-w-screen-md">
            <br />
            Denosoar is an open source memory tool that is used to track
            potential memory leaks for applications built with Deno. Denosoar
            analyzes and displays in real time the RSS(resident set size), Heap
            Total, Heap Usage and External Memory using easy to read charts.
          </p> <br />
          <p class="mx-auto max-w-screen-md">
            If you find yourself here, you probably already have a memory leak. You'll know this when your app slows or crashes unexpectedly. In JavaScript and TypeScript applications, memory leaks are typically caused by the growth of the heap over time. The four main culprits of memory leaks in these applications are accidental global variables, closures, event listeners, and timers like setTimeout or setInterval. Navigate <a class="link" href="https://www.ditdot.hr/en/causes-of-memory-leaks-in-javascript-and-how-to-avoid-them">here</a> to learn more about memory leaks in JavaScript applications.
          </p >
          <br/>
          <p class="mx-auto max-w-screen-md">Before the release of Denosoar 1.0.0, Deno had no memory debugging libraries. Deno's internal function memoryUsage also returned an incorrectly labeled variable for Resident Set Size. Denosoar solves both of these issues and provides an easy interface for you to sample memory statistics in your server over long periods of time and digest these files into clear, interactive graphs.</p>
          <br />
          <h2 id="gs" class="mx-auto max-w-screen-md font-bold text-3xl">
            Getting started
          </h2>
          <p>
            <ul class="mx-auto max-w-screen-md ">
            <br></br>
              To get started, first install the Denosoar library from deno.land:
              <CopyToClip>
                deno install --allow-read --allow-write --allow-net --allow-env --allow-run --name denosoar https://deno.land/x/denosoar@v1.0.0/mod.ts
              </CopyToClip>
              Then, make sure denosoar is added to your path. This will allow you to execute commands on the CLI using denosoar. Let's try it out. Go ahead and type the following command into your CLI: 
              <CopyToClip>
                denosoar --example
              </CopyToClip>
              This will start up an example websocket connection and data stream for you to record, or tune into on the denosoar GUI. The connection will be available on port 3000. To see the server in action, navigate to the home page. Where it says 'Enter your port number' go ahead and enter the number 3000. The graph should begin showing you measurements of heapTotal, heapUsed, committedHeap, external memory, and the resident set size in kB. This example isn't very helpful though. It's only showing you the memory being used by the denosoar process (most of which will be shared with your server's process). Let's get denosoar initialized in your server.
            </ul>
          </p>
          <br />
          <h2 id="guide" class="mx-auto max-w-screen-md font-bold text-3xl">Guide</h2>
          <p class="mx-auto max-w-screen-md">
            <ul class="mx-auto max-w-screen-md">
              <li>
                <h3 id="init" class="section-title">Initializing Denosoar in Your App</h3>
                Inside of your entrypoint server file, import the denosoar init function: 
                <CopyToClip>
                  {text}
                </CopyToClip>
                Then, invoke the init function inside of your entrypoint server file passing in an unused localhost port as the only argument. For example: 
                <CopyToClip>
                  init(3001);
                </CopyToClip>
                The port should only be the number, not the entire url. This init invocation will spin up a lightweight denosoar server inside of your application, sharing memory and a process id with your application. Make sure that the port you invoke init with is the same port you connect to on the GUI. Here, we would connect to port 3001 on the front end.
              </li>
              <li>
                <h3 id="record" class="section-title">Record Memory</h3>
                If you would like to generate a .csv file of the memory statistics generated by denosoar, you can click the Start Recording button on the GUI when connected to a denosoar server. This will generate a .csv file named for the current date inside the directory where denosoar's server was initialized with the invocation of init. You can also begin recording utilizing the command line iterface. After installing denosoar and making sure it is added to your path, execute the following command: 
                <CopyToClip>
                  denosoar --start-record port-number
                </CopyToClip>
                Where the port number is the port you initialized the denosoar application with inside your server. You must have a running denosoar server listening on this port or else the command will fail. You can also stop recording by either clicking the Stop Recording button on the GUI or by executing the following command: 
                <CopyToClip>
                  denosoar --stop-record port-number
                </CopyToClip>
              </li>
              <li>
                <h3 id="procCSV" class="section-title">Processing .csv Files</h3>
                Processing your .csv files is as easy as dragging and dropping the file into the front-end GUI in the "Upload Chart" section. This will produce a memory graph of the entire dataset. If you would like to process the .csv files on your own, each row is organized into x (being time in seconds since recording began), committed, heapTotal, heapUsed, exteranl, and rss. They are always generated in this order. The first line is the headers for the rest of the data.
              </li>
              <li>
                <h3 id="freq" class="section-title">Change the Frequency of Data Sampling</h3>
                To change the frequency of data sampling, simply execute the following command: 
                <CopyToClip>
                  denosoar --freq port-number desired-freq
                </CopyToClip>
                The default sampling frequency will be one data point every fifteen seconds. You must have a denosoar server listening at the requested port for this command to function. Desired frequency must be a number. 
              </li>
              <li>
                <h3 id="lt" class="section-title">Beta - Perform a Simple Load Test</h3>
                Denosoar offers a Beta Load Testing tool. It is not sophisticated, or very customizable but in it's current state it can still stress an application enough speed up the time needed to see a memory leak. To perform a load test, execute the following command: 
                <CopyToClip>
                  denosoar --lt full-url concurrency rps duration
                </CopyToClip>
                You can also navigate to the GUI and use the Load Testing bar that appears beneath the live memory graph on the home page. Make sure you have connected the front end to your port, first.
              </li>
            </ul>
          </p>
          <br />
          <h2 id="dev" class="mx-auto max-w-screen-md font-bold text-3xl">
            Under Development
          </h2>
          <h3  class="mx-auto max-w-screen-md font-bold text-3xl section-title">Heap Snapshots</h3>
          <p class="mx-auto max-w-screen-md">Take and save snapshots of your heap with the click of a button.</p>
          <h3 class="mx-auto max-w-screen-md font-bold section-title">Comparative Snapshot Analysis</h3>
          <p class="mx-auto max-w-screen-md">Analyze heap snapshots to pinpoint objects that are likely culprits of memory leaks.</p>
          <h3 class="mx-auto max-w-screen-md font-bold section-title">Core Dump Analysis</h3>
          <p class="mx-auto max-w-screen-md">Analyze core dump files after application crashes.</p>
          <h3 class="mx-auto max-w-screen-md font-bold section-title">CPU Usage Analysis</h3>
          <p class="mx-auto max-w-screen-md">Analyze the CPU Usage of your application over time and under stress.</p>
          <br />
        </main>
      </div>
    </div>
  );
}
