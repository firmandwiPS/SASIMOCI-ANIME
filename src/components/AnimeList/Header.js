import Link from "next/link"

const Header = ({ title, linkHref, linkTitle, }) => {
    return (
        <div className="p-4 flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link href={linkHref} className="md:text-xl text-ms underline hover:text-indigo-500 transsition-all">
                {linkTitle}
            </Link>
        </div>
    )
}

export default Header