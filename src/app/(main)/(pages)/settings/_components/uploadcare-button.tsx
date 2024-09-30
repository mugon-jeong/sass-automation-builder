"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FileUploaderRegular } from "@uploadcare/react-uploader/next"
import "@uploadcare/react-uploader/core.css"

type Props = {
    onUpload?: any
}
const UploadcreaButton = ({ onUpload }: Props) => {
    const router = useRouter()
    const handleChangeEvent = async (files: any) => {
        console.log("change event payload:", files)
        const url = files.allEntries.filter((f: any) => f.status === "success")[0]
        console.log("url", url)
        const file = await onUpload(url.cdnUrl)
        if (file) {
            router.refresh()
        }
    }
    return (
        <div>
            <FileUploaderRegular
                sourceList="local, url, camera, dropbox"
                onChange={handleChangeEvent}
                classNameUploader="uc-light"
                pubkey="01097fe71698c109c8ce"
            />
        </div>
    )
}

export default UploadcreaButton
