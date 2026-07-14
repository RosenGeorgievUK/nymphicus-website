"use client";

import { useInView } from "@/components/hooks/use-in-view";
import { ConnectSequenceDemo } from "@/components/workflow-demo/ConnectSequenceDemo";
import { GovernSequenceDemo } from "@/components/workflow-demo/GovernSequenceDemo";
import { WorkflowBuilderDemo } from "@/components/workflow-demo/WorkflowBuilderDemo";

export type WalkthroughStepId = "template" | "connect" | "govern";

type WalkthroughDemoCanvasProps = {
  stepId: WalkthroughStepId;
};

export function WalkthroughDemoCanvas({ stepId }: WalkthroughDemoCanvasProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full" data-in-view={inView ? "true" : "false"}>
      {stepId === "template" && <WorkflowBuilderDemo />}
      {stepId === "connect" && <ConnectSequenceDemo />}
      {stepId === "govern" && <GovernSequenceDemo />}
    </div>
  );
}
