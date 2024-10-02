"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useModal } from "@/app/providers/modal-provider"
import CustomModal from "@/components/global/custom-modal"
import WorkflowForm from "@/components/forms/workflow-form"

type Props = {}
const WorkflowButton = ({}: Props) => {
    const { setOpen, setClose } = useModal()
    const handleClick = () => {
        setOpen(
            <CustomModal
                title={"Create a Workflow Automation"}
                subheading={"Workflows are a powerfull that help you automate task"}
            >
                <WorkflowForm />
            </CustomModal>,
        )
    }
    return (
        <Button size={"icon"} onClick={handleClick}>
            <Plus />
        </Button>
    )
}

export default WorkflowButton
