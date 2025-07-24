import Reference from "./Reference";
import dummyData from "../dummy-data.json"

type ReferencesProps = {
    buttonClicked: string;
    changeButtonClicked: (type: string) => void;
}


export default function References({ buttonClicked, changeButtonClicked }: ReferencesProps) {

    const inactiveButtonStyle = "ml-[2rem] font-normal border-[1px] px-[1.5rem] py-[.2rem] cursor-pointer duration-[0.15s] hover:bg-black hover:text-white";
    const activeButtonStyle = "bg-black text-white ml-[2rem] font-normal border-[1px] px-[1.5rem] py-[.2rem] cursor-pointer"

    const referenceElement = dummyData.data.map(paper => <Reference references={paper.references} format={buttonClicked} />)

    return (
        <>
            <div className="w-[80rem] ml-auto mr-auto">
                <div className="text-[25px] font-semibold">References</div>
                <div>
                    <span className="text-[1.2rem]">Format: </span>
                    <button className={buttonClicked === "APA" ? activeButtonStyle : inactiveButtonStyle} onClick={() => { changeButtonClicked("APA") }}>APA</button>
                    <button className={buttonClicked === "IEEE" ? activeButtonStyle : inactiveButtonStyle} onClick={() => { changeButtonClicked("IEEE") }}>IEEE</button>
                </div>
                <br /><br />
                <div>
                    {referenceElement}
                </div>

            </div>

            
            
        </>
    )
}