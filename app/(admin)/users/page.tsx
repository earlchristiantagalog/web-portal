import PortalNavbar from "@/app/components/AdminNavbar";
import CominSoonPage from "@/app/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | MNHS WEB PORTAL",
};

export default function UsersPage() {
  return (
    <>
      <PortalNavbar />
      <CominSoonPage />
    </>
  );
}
