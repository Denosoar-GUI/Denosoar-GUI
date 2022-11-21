import { useRef, useEffect, useState } from 'preact/hooks'
import Chart from './CsvChart.tsx';
import readCSV from "../utils/readCSV.ts";

export default function UploadChart(){
    const [data, setData] = useState<[string, number[]][]>([]);
    const [dragActive, setDragActive] = useState<boolean>(false);
    const input = useRef<HTMLInputElement>(null)

    // Handles drag event
    const handleDrag = function(e: DragEvent) {
        e.stopPropagation();
        e.preventDefault();
        if(e.type === 'dragenter'){
            setDragActive(true);
        } else if(e.type === 'dragleave'){
            setDragActive(false);
        }
    }

    // Handles drag over event
    const dragOver = function(e: DragEvent) {
        e.stopPropagation();
        e.preventDefault();
    }

    // Handles drop event
    const handleDrop = async function(e: DragEvent){
        e.preventDefault();
        e.stopPropagation();
        if(e.dataTransfer?.files && e.dataTransfer?.files[0]){
            const data = await readCSV(e.dataTransfer.files[0])
            setData(data);
        }
        setDragActive(false);
    }

    // Handles change in input 
    const handleChange = async function(e: any){
        console.log('changing');
        e.preventDefault();
        if(e.target?.files && e.target.files[0]){
            console.log(e.target);
            const data = await readCSV(e.target.files[0]);
            setData(data);
        }
    }

    return(
        <div>
            <form onSubmit={e => e.preventDefault()} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={dragOver} onDrop={handleDrop} class='h-full text-center' id='upload-csv'>
                <input class='hidden' ref={input} type='file' multiple={true} onChange={handleChange}/>
                <label class='h-full flex items-center justify-center border-dotted border-2 border-red-200 rounded m-10 p-10' htmlFor='upload-csv' className={dragActive ? 'drag-active' : ''}>
                    <div> 
                        <p>Drag and drop your csv file here</p>
                        <button class='p-1 border-2 border-black' onClick={() => input.current?.click()}>Upload Chart</button>
                    </div>
                </label>
            </form>
            <Chart data={data}/>
        </div>
    )
}  