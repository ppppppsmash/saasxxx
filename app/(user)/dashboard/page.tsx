import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger>Create Project</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started.
          </DialogDescription>
        </DialogHeader>

        <form>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Project Name" />
          <Label htmlFor="url">URL</Label>
          <Input id="url" placeholder="https://example.com" />
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Project Description (optional)" />
        </form>
      </DialogContent>
    </Dialog>
  )
}
