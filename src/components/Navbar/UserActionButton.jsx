import Link from "next/link"
import { authUserSession } from "../../libs/auth-libs"


const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className=" justify-between gap-6 flex">
            {
                user ? <Link  className="py-1 hover:text-color-primary duration-700 " href="/users/dashboard">Dashboard</Link>
                : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block hover:bg-color-primary hover:text-color-dark duration-700">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton