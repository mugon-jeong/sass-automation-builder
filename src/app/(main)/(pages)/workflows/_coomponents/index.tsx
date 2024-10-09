import React from "react"
import Workflow from "@/app/(main)/(pages)/workflows/_coomponents/workflow"

type Props = {}
const Workflows = ({}: Props) => {
    return (
        <div className="relative flex flex-col gap-4">
            <section className="m-2 flex flex-col">
                {/*<MoreCredits />*/}
                {/*{workflows?.length ? (*/}
                {/*    workflows.map((flow) => <Workflow key={flow.id} {...flow} />)*/}
                {/*) : (*/}
                {/*    <div className="mt-28 flex items-center justify-center text-muted-foreground">No Workflows</div>*/}
                {/*)}*/}
                <Workflow name={""} description={""} id={"discord"} publish={null} />
            </section>
        </div>
    )
}

export default Workflows
