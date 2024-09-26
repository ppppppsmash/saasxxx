import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";

export default async function ProjectPage({
  params
}: {
  params: { projectId: string }
}) {
  if (!params.projectId) return (<div>Invalid Project ID</div>);

  const project = await db.query.projects.findMany({
    where: (eq(projects.id, parseInt(params.projectId)))
  });

  return (
    <div>
      <h1>Project Page: {params.projectId}</h1>
    </div>
  )
}
