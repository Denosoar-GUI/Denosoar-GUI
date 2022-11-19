import { useRef, useEffect, useState } from 'preact/hooks'
import CsvChart from './CSVChart.tsx';
import readCSV from "../utils/readCSV.ts";

export default function UploadChart(){
    const [data, setData] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const input = useRef(null)

    // handle drag
    const handleDrag = function(e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        console.log('DRAGGING')
        console.log('TYPE', e.type)
        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActive(true);
        } else if(e.type === 'dragleave'){
            setDragActive(false);
        }
    }

    // handle the drop
    const handleDrop = async function(e: DragEvent){
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        setDragActive(false);
        if(e.dataTransfer.files && e.dataTransfer.files[0]){
            setData(await readCSV(e.dataTransfer.files[0]));
            console.log('data:',data);
        }
    }

    // handle change
    const handleChange = async function(e: any){
        e.preventDefault();
        if(e.target.files && e.target.files[0]){
            setData(await readCSV(e.target.files[0]));
            console.log('data:',data);
        }
    }

    // use button
    const buttonClick = () => {
        input.current.click();
    }

    return(
        <div onDragEnd={handleDrag} onDrag={handleDrag} onDragStart={handleDrag} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>

            <form class='h-full w-1/4 text-center' id='upload-csv' onSubmit={(e) => e.preventDefault()}>
                    <input class='hidden' ref={input} type='file' multiple={true} onChange={handleChange}/>
                    <label class='h-full flex items-center justify-center border-dotted border-2 border-red-200 rounded m-10 p-10' htmlFor='upload-csv' className={dragActive ? 'drag-active' : ''}>
                        <div>
                            <p>Drag and drop your csv file here</p>
                            <button class='p-1 border-2 border-black' onClick={buttonClick}>Upload Chart</button>
                        </div>
                    </label>
            </form>
            {data?<CsvChart data={data}/>:<></>}
        </div>
    )
}  