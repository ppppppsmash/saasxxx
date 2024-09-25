import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";

import NewProjBtn from "@/components/new-proj"

export default async function Page() {
  const allProjects = await db.select().from(projects);
  
  const { userId } = auth();
  const user = await currentUser();

  console.log(userId);
  console.log(user);

  return (
    <div>
      <NewProjBtn />
    </div>
  )
}
