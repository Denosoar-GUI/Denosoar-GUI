import { useState } from "preact/hooks";
import { tw } from "twind";
import loadtest from '../utils/loadTest.ts'


/**
 * A simple load tester for your application.
 */
export default function SiegeBar() {
    const [url, setURL] = useState('')
    const [concurrency, setConcurrency] = useState(0)
    const [rps, setRPS] = useState(0)
    const [duration, setDuration] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const INPUT_STYLE = tw` hover:bg-red-100 text-center border-2 border-red-800 mx-2 my-1 rounded-md w-36`;

    function handleClick(e: Event) {
        loadtest(url, concurrency.toString(), rps.toString(), duration.toString());
        setDisabled(true);
        document.getElementById('siege-bar')?.classList.add('glowing');
        setTimeout( () => {
            document.getElementById('siege-bar')?.classList.remove('glowing');
            setDisabled(false)
        } , duration * 1000)
    }

    return(
        <div id='siege-bar' class="leading-8 flex p-2 items-center">

            <div id="siege_input">
                I would like to siege
                <input
                    id="URLinput"
                    placeholder="URL here"
                    type="string"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setURL((e.target as HTMLInputElement)?.value)} />
                with 
                <input
                    id="concurrency_input"
                    placeholder="10,000"
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setConcurrency(Number((e.target as HTMLInputElement)?.value))} />
                concurrent requests, at
                <input
                    id="rps_input" 
                    placeholder="10" 
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    onInput = {(e) => setRPS(Number((e.target as HTMLInputElement)?.value))} />
                times per second, for
                <input
                    id="duration_input"
                    placeholder="30" 
                    type="number"
                    class={tw`${INPUT_STYLE}`} 
                    onInput = {(e) => setDuration(Number((e.target as HTMLInputElement)?.value))} />
                    seconds.
            </div>

            <button
                id="siege_button"
                class="text-2xl hover:bg-red-400 hover:border-red-900 w-24 h-24 flex-none border-2 bg-red-300"
                disabled={disabled}
                onClick = {handleClick}>
                    LOAD TEST
            </button>

        </div>
    )
}