export default function RecordData(props: any) {
  function start() {
    fetch(`http://localhost:${props.port}/start`, {
      mode: 'no-cors'
    });
  }
  function stop() {
    fetch(`http://localhost:${props.port}/stop`, {
      mode: 'no-cors'
    })
  }
  return (
    <div id="recording">
      <div id="on-button" class="">
        <button id="record-on" class='border border-gray-700 bg-green-500 ml-6 mt-4 p-2 rounded shadow-2xl' onClick={start}>
          Start Recording Data
        </button>
      </div>
      <div id="off-button" class="hidden">
        <button id="record-off" class='border border-gray-700 bg-red-500 ml-6 mt-4 p-2 rounded' onClick={stop}>
          Stop Recording Data
        </button>
      </div>
    </div>
  );
}
