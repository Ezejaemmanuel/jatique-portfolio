/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SmHy0Q5Hvxu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function View() {
    return (
        <Button variant="outline">
            View
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Button>
    )
}

function ArrowUpRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    )
}
