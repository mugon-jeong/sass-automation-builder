import ProfileForm from "@/components/forms/profile-form"
import React from "react"
import ProfilePicture from "./_components/profile-picture"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"

type Props = {}

const Settings = async ({}: Props) => {
    const authUser = await currentUser()
    if (!authUser) return null
    const user = await db.user.findUnique({ where: { clerkId: authUser.id } })
    const removeProfileImage = async () => {
        "use server"
        return db.user.update({
            where: {
                clerkId: authUser.id,
            },
            data: {
                profileImage: "",
            },
        })
    }

    const uploadProfileImage = async (image: string) => {
        "use server"
        return db.user.update({
            where: {
                clerkId: authUser.id,
            },
            data: {
                profileImage: image,
            },
        })
    }

    const updateUserInfo = async (name: string) => {
        "use server"

        return db.user.update({
            where: {
                clerkId: authUser.id,
            },
            data: {
                name,
            },
        })
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 text-4xl backdrop-blur-lg">
                <span>Settings</span>
            </h1>
            <div className="flex flex-col gap-10 p-6">
                <div>
                    <h2 className="text-2xl font-bold">User Profile</h2>
                    <p className="text-base text-white/50">Add or update your information</p>
                </div>
                <ProfilePicture
                    userImage={user?.profileImage || ""}
                    onDelete={removeProfileImage}
                    onUpload={uploadProfileImage}
                />
                <ProfileForm user={user} onUpdate={updateUserInfo} />
            </div>
        </div>
    )
}

export default Settings
