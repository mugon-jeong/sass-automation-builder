import React from "react"
import Workflow from "@/app/(main)/(pages)/workflows/_coomponents/workflow"
import { onGetWorkflows } from "@/app/(main)/(pages)/workflows/_actions/workflow-connections"
import MoreCredits from "@/app/(main)/(pages)/workflows/_coomponents/more-creadits"

type Props = {}
const Workflows = async ({}: Props) => {
    const workflows = await onGetWorkflows()
    return (
        <div className="relative flex flex-col gap-4">
            <section className="m-2 flex flex-col">
                <MoreCredits />
                {workflows?.length ? (
                    workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
                ) : (
                    <div className="mt-28 flex items-center justify-center text-muted-foreground">No Workflows</div>
                )}
            </section>
        </div>
    )
}

export default Workflows
