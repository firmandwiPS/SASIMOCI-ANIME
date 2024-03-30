import { authUserSession } from "../../../libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return (
        <div className=" mt-9 gap-3 text-color-primary flex justify-center flex-col items-center ">
            <h5 className="text-2xl font-bold ">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width={250} height={250} />

            <div className="py-6  flex gap-5 flex-wrap">
                <Link
                    href="/users/dashboard/collection"
                    className=" text-color-dark bg-color-accent  hover:bg-color-primary hover:text-color-accent duration-500 font-bold px-4 py-3 text-xl"
                >My Collection
                </Link>
                <Link
                    href="/users/dashboard/comment"
                    className="  text-color-dark bg-color-accent hover:bg-color-primary hover:text-color-accent  duration-500font-bold px-4 py-3 text-xl"
                >My Comment
                </Link>
            </div>
        </div>

    )
}

export default Page 