import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      Dashboard Page

      <ul className="list-disc">
        <li><Link href="projects/alpha"> Project Alpha</Link></li>
        <li><Link href="projects/beta"> Project Beta</Link></li>
        <li><Link href="projects/charlie"> Project Charlie</Link></li>
      </ul>
    </div>
  )
}
