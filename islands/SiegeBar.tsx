import { useEffect, useState } from "preact/hooks";
import { tw } from "twind";



export default function SiegeBar(props: any) {
    const [url, setURL] = useState('')
    const [concurrency, setConcurrency] = useState(0)
    const [rps, setRPS] = useState(0)
    const [duration, setDuration] = useState(0)

    const INPUT_STYLE = tw` hover:bg-red-100 text-center border-2 border-red-800 mx-2 my-1 rounded-md w-36`;

    function handleClick() {

        const siegeObj = {
            url,
            concurrency,
            rps,
            duration
        }

        const response = fetch(`http://localhost:${props.port}/siege`, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(siegeObj),
        });
        
        console.log('SIEGE')
        resetSiege();

    }

    function resetSiege() {

        setURL('');
        setConcurrency(0);
        setRPS(0);
        setDuration(0);


        // This is to set the input fields back to display their placeholder value.
        document.getElementById('URLinput').value = ''
        document.getElementById('concurrency_input').value = ''
        document.getElementById('rps_input').value = ''
        document.getElementById('duration_input').value = ''

    }

    return(
        <div id='siege-bar' class="border-1 border-solid border-green-500 leading-8 flex p-2 items-center">
            <div>
                I would like to siege
                <input
                    id="URLinput"
                    placeholder="URL here"
                    type="string"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setURL(e.target?.value)} />
                with 
                <input
                    id="concurrency_input"
                    placeholder="10,000"
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setConcurrency(e.target?.value)} />
                concurrent requests, at
                <input
                    id="rps_input" 
                    placeholder="10" 
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setRPS(e.target?.value)} />
                requests per second, for
                <input
                    id="duration_input"
                    placeholder="30" 
                    type="number"
                    class={tw`${INPUT_STYLE}`} 
                    onInput = {(e) => setDuration(e.target?.value)} />
                    seconds.
            </div>
            <button
                class="text-2xl hover:bg-red-400 hover:border-red-900 w-24 h-24 flex-none border-2 bg-red-300"
                onClick = {handleClick}>
                    SIEGE
            </button>
        </div>
    )
}