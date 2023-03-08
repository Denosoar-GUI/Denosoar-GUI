import UploadChart from "../islands/Upload.tsx";
import Header from "../components/Header.tsx";
import Filler from "../components/Filler.tsx";
export default function Csv () {

    return(
        <div id="csv-body">
            <Header />
            <Filler />
            <div>
                <UploadChart/>
            </div>
        </div>

    )
}