# Denosoar-GUI
Denosoar Front End GUI

Denosoar is an open source memory tool that is used to track potential memory leaks for applications built with Deno. Denosoar analyzes and displays in real time the RSS(resident set size), Heap Total, Heap Usage and External Memory using easy to read charts. The features provided by our front-end GUI must be used in tandem with our Deno third-party module, which can be imported and downloaded from the Deno-land third party library [right here](https://deno.land/x/denosoar).

## Getting started

### Connecting / Disconnecting to your application
After starting the back-end Deno application, and invoking denosoar.init(**PORT#**) from within the application, you will be able to connect to that **PORT** from the [front-end GUI](denosoar.deno.dev). Just type the port number into the input section and click the 'Connect' button. If connected successfully, you should see the data streaming on the Chart.

![611B14CD-7E12-4DAF-8004-FB4CF52C4883](https://user-images.githubusercontent.com/34800232/204637697-c2baab21-84bc-4948-abfb-66b7a837a32f.gif)


To disconnect from your server, all you need to do is hit the 'Disconnect' button.

### Adjusting the sampling frequency of your data.

By default, denosoar.init starts a websocket connection that streams data every 1000ms. To change the sampling frequency, just enter the number (in milliseconds) to the input box provided. Your sampling frequency should update immediately, and you should be able to see a change on your chart.

(Insert a GIF of starting a connection, changing it to 2000ms, and then chaging it to 500ms)
![A13E1A9E-E166-4F3A-B400-07088F785C55](https://user-images.githubusercontent.com/34800232/204643175-233a2ee4-f1a4-4980-9fe2-2eecbf8f8618.gif)

### Switching between bar and a line chart.

You can also toggle between displaying bar or a line chart by just toggling the button on the top left of the chart area!
![B99B8175-316D-4F23-A2F4-9EB1545B381F_1_102_o](https://user-images.githubusercontent.com/34800232/204643352-9525f5b1-11c9-4fce-add2-3679ae2efc46.gif)

### Start and Stop recording

Once you have connected, you can save all your incoming data to a CSV file. The CSV file will be generated at the root directory of your application, and will contain information regarding the time, and the memory usage statistics taken at each data point. To stop recording, just hit the 'Stop Recording' function on the screen. Our application will then stop writing to the file created.


(Insert a GIF of starting to record a graph, and show the file generated as a CSV)

### Load test your application

If your backend application is listening for any GET requests at any endpoint, you can choose to load-test your server using our built-in load-testing tool. To do this, just enter the requested information detailed below. (*note* - you will not be able to submit another load-test until the current test has finished.)

  *Inputs*
  - **Endpoint** : Enter the exact URL at which you would like to send GET requests to
  - **Concurrency** : Enter how many GET requests you would like to send at one time.
  - **Times per Second** : Enter how many times per second you would like to send the concurrent requests.
  - **Duration** : Enter how long you would like to test your application for.
  
 *Example* 
  - **Endpoint** : 'http://localhost:3000/'
  - **Concurrency** : '10000'
  - **Times per Second** : '5'
  - **Duration** : '10'
  - **Result** : Send 10,000 concurrent GET requests, 5 times a second, for a duration of 10 seconds... 10,000 X 5 X 10 = 250,000 GET requests to your endpoint.

 (Insert a GIF of entering a SIEGE command into the GUI)
 ![B32C224E-40D4-47B1-92F5-ADB9E431546A](https://user-images.githubusercontent.com/34800232/204643039-a9256c11-e6bd-4317-b052-bb75e5b7645b.gif)


 ### Uploading a previously generated Denosoar CSV file.
 
If you have a saved CSV file generated from Denosoar, you can choose to display the data with our graphing tool. Just upload or drag and drop any previously generated CSV file into the dropzone, and you should see your data pop up on the chart.
  
  
