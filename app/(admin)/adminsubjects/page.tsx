import type { Metadata } from "next";
import PortalNavbar from "@/app/components/AdminNavbar";
import CominSoonPage from "@/app/components/ComingSoon";

export const metadata: Metadata = {
  title: "Subjects | MNHS WEB PORTAL",
};

export default function AdminSubjectPage() {
  return (
    <>
      <PortalNavbar />
      <CominSoonPage />
    </>
  );
}
