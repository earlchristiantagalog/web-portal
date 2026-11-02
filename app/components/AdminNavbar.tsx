"use client";
import {
  Menu,
  Gauge,
  CalendarDays,
  NotebookText,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admindashboard", label: "Dashboard", icon: Gauge },
  { href: "/adminschedule", label: "Schedule", icon: CalendarDays },
  { href: "/adminsubjects", label: "Subjects", icon: NotebookText },
  { href: "/site-settings", label: "Site Settings", icon: Settings },
  { href: "/users", label: "Users", icon: User },
];

export default function PortalNavbar() {
  const pathName = usePathname();

  const isActive = (href: string) =>
    pathName === href || pathName.startsWith(href + "/");
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <button
            className="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border-0 bg-transparent fs-5 rounded-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portalSidebar"
            aria-controls="portalSidebar"
            aria-label="Toggle sidebar"
          >
            <Menu size={26} />
          </button>
          <ul className="navbar-nav me-auto mb-2 mt-1 mb-lg-0 mx-3">
            <img src="/next.svg" width={100} alt="Logo" />
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        style={{ width: "250px" }}
        id="portalSidebar"
        aria-labelledby="portalSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <img src="/next.svg" width={100} alt="Logo" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            {links.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);

              return (
                <a
                  key={href}
                  href={href}
                  suppressHydrationWarning
                  className={`list-group-item list-group-item-action d-flex align-items-center gap-2 fw-bold ${
                    active ? "active fw-bold" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon size={18} />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
