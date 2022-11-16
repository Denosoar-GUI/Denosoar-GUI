export default function RecordData(props: any) {
function buttonClick() {
    // Create the websocket
    props.ws.send('record');

    // await ws.close(1000, 'closed');
    // check to see if the start button is clicked
    const record = document.getElementById("off-button")?.classList.contains(
      "hidden",
    );
    // if start button was clicked
    if (record) {
      // change the start button to hidden and bring up the off button
      document.getElementById("on-button")?.classList.add("class", "hidden");
      document.getElementById("off-button")?.classList.remove("hidden");
    } else {
      document.getElementById("off-button")?.classList.add("class", "hidden");
      document.getElementById("on-button")?.classList.remove("hidden");
    }
  }

  return (
    <div id="recording">
      <div id="on-button" class="">
        <button id="record-on" class='border border-gray-700 bg-green-500 ml-6 mt-4 p-2 rounded shadow-2xl' onClick={buttonClick}>
          Start Recording Data
        </button>
      </div>
      <div id="off-button" class="hidden">
        <button id="record-off" class='border border-gray-700 bg-red-500 ml-6 mt-4 p-2 rounded' onClick={buttonClick}>
          Stop Recording Data
        </button>
      </div>
    </div>
  );
}
