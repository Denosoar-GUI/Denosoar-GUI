export default function RecordData(props: { port: string }) {
  function start() {
    fetch(`http://localhost:${props.port}/start`, {
      mode: "no-cors",
    });
  }
  function stop() {
    fetch(`http://localhost:${props.port}/stop`, {
      mode: "no-cors",
    });
  }
  return (
    <div id="recording flex flex-row justify-center">
      <button
        id="record-on"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-6 mt-4"
        onClick={start}
      >
        &#9655; Start Recording Data
      </button>
      <button
        id="record-off"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-6 mt-4"
        onClick={stop}
      >
        &#11036; Stop Recording Data
      </button>
    </div>
  );
}
