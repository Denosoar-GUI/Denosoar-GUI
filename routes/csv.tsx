import UploadChart from "../islands/Upload.tsx";
import Header from "../components/Header.tsx";

export default function Csv () {

    return(
        <div id="csv-body">
            <Header />
            <div>
                <UploadChart/>
            </div>
        </div>

    )
}