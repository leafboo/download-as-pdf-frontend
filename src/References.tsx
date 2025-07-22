import { useState } from "react"
import Reference from "./Reference";
import dummyData from "../dummy-data.json"


export default function References() {

    const [buttonClicked, setButtonClicked] = useState<string>("APA");

    const inactiveButtonStyle = "ml-[2rem] font-normal border-[1px] px-[1.5rem] py-[.2rem] cursor-pointer duration-[0.15s] hover:bg-black hover:text-white";
    const activeButtonStyle = "bg-black text-white ml-[2rem] font-normal border-[1px] px-[1.5rem] py-[.2rem] cursor-pointer"

    const referenceElement = dummyData.data.map(paper => <Reference references={paper.references} format={buttonClicked} />)

    return (
        <>
            <div className="w-[80rem] ml-auto mr-auto">
                <div className="text-[25px] font-semibold">References</div>
                <div>
                    <span className="text-[1.2rem]">Format: </span>
                    <button className={buttonClicked === "APA" ? activeButtonStyle : inactiveButtonStyle} onClick={() => { buttonClicked === "APA" ? "" : setButtonClicked("APA") }}>APA</button>
                    <button className={buttonClicked === "IEEE" ? activeButtonStyle : inactiveButtonStyle} onClick={() => { buttonClicked === "IEEE" ? "" : setButtonClicked("IEEE") }}>IEEE</button>
                </div>
                <br /><br />
                <div>
                    {referenceElement}
                </div>

            </div>

            
            
        </>
    )
}