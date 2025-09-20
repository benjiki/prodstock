import { Status } from "@/types";
import { CheckCircle2Icon, CircleX, PencilRuler } from "lucide-react";

export const statuses: Status[] = [
  {
    value: "published",
    label: "Published",
    icons: <CheckCircle2Icon />,
  },
  {
    value: "inactive",
    label: "Inactive",
    icons: <CircleX />,
  },
  { value: "draft", label: "Draft", icons: <PencilRuler /> },
];
