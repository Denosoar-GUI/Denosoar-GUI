import { useEffect, useState } from "preact/hooks";
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
    const [fetchErr, setFetchErr] = useState(false)

    const INPUT_STYLE = tw` hover:bg-red-100 text-center border-2 border-red-800 mx-2 my-1 rounded-md w-36`;

    // On button click, start the animation effects, and disable the button so that it can't be clicked again until the current load-test has ended
    // Take in user input value and invoke loadtest() 
    // After the load-test has ended, stop animation, and re-enable the button click
    async function handleClick(e: Event) {

        // Check if all the fields are inputted correctly.
        const isFormValid = document.getElementById('siege-bar')?.checkValidity();

        if (isFormValid) {
            e.preventDefault();

            // Make one request to test validity of the endpoint.
            const res = await fetch(url, {
                mode: "no-cors"
            });

            console.log(res)
            
            if (res.status !== 404) {
                loadtest(url, concurrency.toString(), rps.toString(), duration.toString());
                setDisabled(true);
                document.getElementById('siege-bar')?.classList.add('glowing');
                setTimeout( () => {
                    document.getElementById('siege-bar')?.classList.remove('glowing');
                    setDisabled(false)
                } , duration * 1000)
            } else {
                setFetchErr((prev) => !prev);
                setTimeout( () => setFetchErr( prev => !prev), 2000)
            }
        } 

    }

    return(
        <form id='siege-bar' class="leading-8 flex p-2 items-center relative">
            
            <div id="siege_input">
                I would like to siege
                <input
                    id="URLinput"
                    placeholder="URL here"
                    type="string"
                    class={tw`${INPUT_STYLE}`}
                    required
                    onInput = {(e) => setURL((e.target as HTMLInputElement)?.value)} />
                with 
                <input
                    id="concurrency_input"
                    placeholder="5,000"
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    required
                    onInput = {(e) => setConcurrency(Number((e.target as HTMLInputElement)?.value))} />
                concurrent requests, at
                <input
                    id="rps_input" 
                    placeholder="5" 
                    type="number"
                    class={tw`${INPUT_STYLE}`}
                    required
                    onInput = {(e) => setRPS(Number((e.target as HTMLInputElement)?.value))} />
                times per second, for
                <input
                    id="duration_input"
                    placeholder="0" 
                    type="number"
                    class={tw`${INPUT_STYLE}`} 
                    required
                    onInput = {(e) => setDuration(Number((e.target as HTMLInputElement)?.value))} />
                    seconds.
            </div>

            <button
                id="siege_button"
                type='submit'
                class="text-2xl hover:bg-red-400 hover:border-red-900 w-24 h-24 flex-none border-2 bg-red-300"
                disabled={disabled}
                onClick = {handleClick}>
                    LOAD TEST
            </button>

            {!fetchErr ?
                null
                :   <div class="absolute bg-[#FAFAD2] text-[#FF0000] border-[#FFA500] top-[-20%] left-[50%] translate-x-[-50%] border border-solid rounded px-2">
                        404! URL endpoint not found. Could not get response from {url}
                    </div>
            }

        </form>
    )
}