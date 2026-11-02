import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Schedule | MNHS WEB PORTAL",
};

export default function AdminSchedulePage() {
  return <ScheduleClient />;
}
