# Denosoar-GUI
Denosoar Front End GUI

Denosoar is an open source memory tool that is used to track potential memory leaks for applications built with Deno. Denosoar analyzes and displays in real time the RSS(resident set size), Heap Total, Heap Usage and External Memory using easy to read charts. The features provided by our front-end GUI must be used in tandem with our Deno third-party module, which can be imported and downloaded from the Deno-land third party library [right here](https://deno.land/x/denosoar).

### Getting started

## Connecting / Disconnecting to your application
After starting up your back-end Deno application, and invoking denosoar.init(*PORT#*) from within your application, you should be able to connect to that *PORT* from the [front-end GUI](denosoar.deno.dev). Just type the direct URL path into the input section, and then click the 'Connect' button. If connected successfully, you should see the data streaming on the Chart.

(Insert a GIF of properly connecting to a listening server)

To disconnect from your server, all you need to do is hit the 'Disconnect' button.

### 

