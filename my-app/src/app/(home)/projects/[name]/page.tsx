import { capitalizeWords } from "@/helpers/capitalize-words"

export default async function ProjectName({ params }: { params: Promise<{ name: string }> }) {
    const name = (await params).name

    return (
        <div>Project {capitalizeWords(name)}</div>
    )
}
