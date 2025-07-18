type LiteratureMatrixRowProps ={
    title: string;
    authors: string;
    publicationYear: number;
    abstract: string;
    methods: string;
    findings: string
}

export default function LiteratureMatrixRow(props: LiteratureMatrixRowProps) {

    return (
        <>
            <tr className="">
                <td className="p-[1rem] border-[1px]">{props.title}</td>
                <td className="p-[1rem] border-[1px]">{props.authors}</td>
                <td className="p-[1rem] border-[1px]">{props.publicationYear}</td>
                <td className="p-[1rem] border-[1px]">{props.abstract}</td>
                <td className="p-[1rem] border-[1px]">{props.methods}</td>
                <td className="p-[1rem] border-[1px]">{props.findings}</td>
            </tr>
        </>
    )
}