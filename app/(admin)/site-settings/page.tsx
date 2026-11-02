import type { Metadata } from "next";
import PortalNavbar from "@/app/components/AdminNavbar";
import CominSoonPage from "@/app/components/ComingSoon";

export const metadata: Metadata = {
  title: "Site Settings | MNHS WEB PORTAL",
};
export default function AdminSiteSettings() {
  return (
    <>
      <PortalNavbar />
      <CominSoonPage />
    </>
  );
}
