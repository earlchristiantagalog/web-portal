import type { Metadata } from "next";
import PortalNavbar from "@/app/components/AdminNavbar";

export const metadata: Metadata = {
  title: "Dashboard | MNHS WEB PORTAL",
};

const user = "EARL CHRISTIAN";

export default function AdminDashboard() {
  return (
    <>
      <PortalNavbar />

      <main className="container-fluid px-4 py-4">
        <h3 className="fw-semibold mb-4">Hi, {user}! 👋</h3>

        {/* Alert */}
        <div
          className="alert alert-success alert-dismissible fade show mb-4"
          role="alert"
        >
          wdawdadawdawdawdw
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div className="row g-4">
          {/* Main column */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-body fw-semibold">New Section</div>
              <div className="card-body">awdasdwdawdawd</div>
            </div>
          </div>

          {/* Side blocks */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-body fw-semibold">Timeline</div>
              <div className="card-body text-body-secondary">
                No upcoming activities due.
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-header bg-body fw-semibold">
                Announcements
              </div>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">
                  Announcement title
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
