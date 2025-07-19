type ReferenceProps = {
    references: {
        APA: string,
        IEEE: string
    };
    format: string
}

export default function Reference(props: ReferenceProps) {

    function returnContent() {
        if (!props.format) {
            return ""
        } else if(props.format === "APA") {
            return props.references.APA
        } else {
            return props.references.IEEE
        }
    }

    return (
        <>
            <div>
                {returnContent()}
            </div><br />
        </>
    )
}