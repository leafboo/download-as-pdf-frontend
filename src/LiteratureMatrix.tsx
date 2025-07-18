import LiteratureMatrixRow from "./LiteratureMatrixRow"
import dummyData from "../dummy-data.json"

export default function LiteratureMatrix() {

    const LitMatrixRowElement = dummyData.data.map(element => <LiteratureMatrixRow title={element.title}
                                                                                    authors={element.authors}
                                                                                    publicationYear={element.publicationYear}
                                                                                    abstract={element.abstract}
                                                                                    methods={element.methods}
                                                                                    findings={element.findings} /> )

    
    return (
        <>
            <br />
            <div className="flex justify-center text-[30px]"> Literature Matrix</div><br />
            <table className=" w-[80rem] ml-auto mr-auto text-left">
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
                
                
                
            </table>
            <br /><br />
            <div className="flex justify-center">
                <button className="p-[10px] border-[1px] cursor-pointer">Download as PDF</button>
            </div>
        </>
    )
}