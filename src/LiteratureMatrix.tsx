import LiteratureMatrixRow from "./LiteratureMatrixRow"
import References from "./References"
import dummyData from "../dummy-data.json"
import { jsPDF } from "jspdf"
import { autoTable } from "jspdf-autotable"

export default function LiteratureMatrix() {
    function downloadPdf() {
        const doc = new jsPDF();
        autoTable(doc, { html: '#my-table' })
        // console.log(doc)
        //doc.text('References', 20, 30) // doc.text(text content, margin left, margin top)
        doc.save('literatureMatrix.pdf')
    }
    
    

    const LitMatrixRowElement = dummyData.data.map(element => <LiteratureMatrixRow title={element.title}
                                                                                    authors={element.authors}
                                                                                    publicationYear={element.publicationYear}
                                                                                    abstract={element.abstract}
                                                                                    methods={element.methods}
                                                                                    findings={element.findings} /> )

    
    return (
        <>
            <br />
            <div className="flex justify-center text-[30px] font-bold"> Literature Matrix</div><br />
            <table className=" w-[80rem] ml-auto mr-auto text-left" id="my-table">
                <thead>
                    <tr>
                        <th className="p-[1rem] border-[1px]">Title</th>
                        <th className="p-[1rem] border-[1px]">Authors</th>
                        <th className="p-[1rem] border-[1px]">Publication Year</th>
                        <th className="p-[1rem] border-[1px]">Abstract</th>
                        <th className="p-[1rem] border-[1px]">Methods</th>
                        <th className="p-[1rem] border-[1px]">Findings</th>
                    </tr>
                </thead>
                <tbody>
                    {LitMatrixRowElement}
                </tbody>
                
                
                
            </table><br />
            <References />
            <br /><br />
            <div className="flex justify-center">
                <button className="p-[10px] border-[1px] cursor-pointer mb-[2rem] duration-[0.15s] hover:bg-black hover:text-white" onClick={downloadPdf} >Download as PDF</button>
            </div>
        </>
    )
}