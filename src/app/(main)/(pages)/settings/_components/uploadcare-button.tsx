"use client"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { FileUploaderRegular } from "@uploadcare/react-uploader/next"
import "@uploadcare/react-uploader/core.css"

type Props = {
    onUpload?: any
}
const UploadcreaButton = ({ onUpload }: Props) => {
    const router = useRouter()
    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl)
            if (file) {
                router.refresh()
            }
        }
    }, [])
    return (
        <div>
            <FileUploaderRegular
                sourceList="local, url, camera, dropbox"
                classNameUploader="uc-light"
                pubkey="01097fe71698c109c8ce"
            />
        </div>
    )
}

export default UploadcreaButton
