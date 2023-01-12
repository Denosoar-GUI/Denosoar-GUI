# Denosoar-GUI
Denosoar Front End GUI

Denosoar is an open source memory tool that is used to track potential memory leaks for applications built with Deno. Denosoar analyzes and displays in real time the RSS(resident set size), Heap Total, Heap Usage and External Memory using easy to read charts. The features provided by our front-end GUI must be used in tandem with our Deno third-party module, which can be imported and downloaded from the Deno-land third party library [right here](https://deno.land/x/denosoar).

## Getting started

### Connecting / Disconnecting to your application
After starting the back-end Deno application, and invoking denosoar.init(**PORT#**) from within the application, you will be able to connect to that **PORT** from the [front-end GUI](denosoar.deno.dev). Just type the port number into the input section and click the 'Connect' button. If connected successfully, you should see the data streaming on the Chart.

![Connecting](https://user-images.githubusercontent.com/108940347/204696182-f6755735-0d25-4c5c-81de-6503bb7bd9ce.gif)

To disconnect from your server, all you need to do is hit the 'Disconnect' button.

### Adjusting the sampling frequency of your data.

By default, denosoar.init starts a websocket connection that streams data every 1000ms. To change the sampling frequency, just enter the number (in milliseconds) to the input box provided. Your sampling frequency should update immediately, and you should be able to see a change on your chart.

![AdjustFreq](https://user-images.githubusercontent.com/108940347/204696204-2389c467-87c4-460c-b9eb-2f934cac8d3c.gif)


### Switching between bar and a line chart.

You can also toggle between displaying bar or a line chart by just toggling the button on the top left of the chart area!

![SwitchCharts](https://user-images.githubusercontent.com/108940347/204696241-a11ff0bd-5918-4e8d-941c-828560581ce3.gif)

### Start and Stop recording

Once you have connected, you can save all your incoming data to a CSV file. The CSV file will be generated at the root directory of your application, and will contain information regarding the time, and the memory usage statistics taken at each data point. To stop recording, just hit the 'Stop Recording' function on the screen. Our application will then stop writing to the file created.

### Load test your application

If your backend application is listening for any GET requests at any endpoint, you can choose to load-test your server using our built-in load-testing tool. To do this, just enter the requested information detailed below. **If you are connected to a server and you enter in an incorrect URL endpoint to load-test, the app will attempt to send GET requests to that endpoint.** (*note* - you will not be able to submit another load-test until the current test has finished.) 

  *Inputs*
  - **Endpoint** : Enter the exact URL at which you would like to send GET requests to.
  - **Concurrency** : Enter how many GET requests you would like to send at one time.
  - **Times per Second** : Enter how many times per second you would like to send the concurrent requests.
  - **Duration** : Enter how long you would like to test your application for.
  
 *Example* 
  - **Endpoint** : 'http://localhost:3000/'
  - **Concurrency** : '10000'
  - **Times per Second** : '5'
  - **Duration** : '10'
  - **Result** : Send 10,000 concurrent GET requests, 5 times a second, for a duration of 10 seconds... 10,000 X 5 X 10 = 250,000 GET requests to your endpoint.

![LoadTest](https://user-images.githubusercontent.com/108940347/204696333-56f5d5fb-b3bf-4bdb-8f84-60eaf7646eb7.gif)


 ### Uploading a previously generated Denosoar CSV file.
 
If you have a saved CSV file generated from Denosoar, you can choose to display the data with our graphing tool. Just upload or drag and drop any previously generated CSV file into the dropzone, and you should see your data pop up on the chart!
  
  
