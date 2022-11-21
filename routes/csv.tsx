import UploadChart from "../islands/Upload.tsx";
import Header from "../components/Header.tsx";
import { useState } from "https://esm.sh/v98/preact@10.11.3/hooks/src/index.d.ts";
import Chart from '../islands/CsvChart.tsx';

export default function Csv () {
    const[data, setData] = useState([])

    return(
        <>
            <Header />
            <UploadChart/>
        </>

    )
}