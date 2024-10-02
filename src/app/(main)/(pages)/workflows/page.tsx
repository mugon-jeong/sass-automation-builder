// @flow
import React from "react"
import WorkflowButton from "@/app/(main)/(pages)/workflows/_coomponents/workflow-button"

type Props = {}
const Workflows = ({}: Props) => {
    return (
        <div className="relative flex flex-col">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
                Workflows
                <WorkflowButton />
            </h1>
        </div>
    )
}

export default Workflows
