"use client";
import PortalNavbar from "@/app/components/AdminNavbar";
import { Plus, FileDiff, Trash, SquarePen, Eye } from "lucide-react";
import { useState } from "react";

const section = "1A";
const schedules = [
  { value: "20684-eng7", label: "20684 - ENGLISH 7" },
  { value: "20685-math7", label: "20685 - MATH 7" },
  { value: "20686-sci7", label: "20686 - SCIENCE 7" },
  { value: "20687-fil7", label: "20687 - FILIPINO 7" },
  { value: "20688-ap7", label: "20688 - ARALING PANLIPUNAN 7" },
];
const dayOptions = ["M", "T", "W", "TH", "F"];

export default function ScheduleClient() {
  const [selected, setSelected] = useState<string[]>([]);

  const [subjectName, setSubjectName] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [room, setRoom] = useState("");

  const toggleDay = (day: string) =>
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );

  return (
    <>
      <PortalNavbar />

      <main className="container-fluid px-4 py-4">
        {/* Alert */}
        {/* <div className="alert alert-success mb-4" role="alert">
          wdawdadawdawdawdw
        </div> */}
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary mx-2 d-inline-flex align-items-center gap-1"
            data-bs-toggle="modal"
            data-bs-target="#addSchedule"
          >
            <Plus size={18} /> ADD SCHEDULE
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary d-inline-flex align-items-center gap-1"
            data-bs-toggle="modal"
            data-bs-target="#addSubjectSchedule"
          >
            <Plus size={18} /> ADD SUBJECT SCHEDULE
          </button>
        </div>
        <div className="row g-4">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="col">SECTION</th>
                <th className="col">SCHEDULE</th>
                <th className="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1A</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary d-inline-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#viewSchedule"
                  >
                    <Eye size={18} />
                  </button>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary d-inline-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#editSchedule"
                      aria-label="Edit schedule"
                      title="Edit schedule"
                    >
                      <SquarePen size={18} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger d-inline-flex align-items-center"
                      aria-label="Delete schedule"
                      title="Delete schedule"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* View Schedule Modal */}
      <div
        className="modal fade"
        id="viewSchedule"
        tabIndex={-1}
        aria-labelledby="viewScheduleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewScheduleLabel">
                VIEW SECTION {section} SCHEDULE
              </h1>
            </div>
            <div className="modal-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>SUBJECT CODE</th>
                    <th> SUBJECT NAME</th>
                    <th>DAY</th>
                    <th>TIME</th>
                    <th>ROOM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Schedule Modal */}
      <div
        className="modal fade"
        id="editSchedule"
        tabIndex={-1}
        aria-labelledby="editScheduleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editScheduleLabel">
                EDIT SECTION {section} SCHEDULE
              </h1>
            </div>
            <div className="modal-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>SUBJECT CODE</th>
                    <th> SUBJECT NAME</th>
                    <th>DAY</th>
                    <th>TIME</th>
                    <th>ROOM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                  <tr>
                    <td>26365</td>
                    <td>ENGLISH 7</td>
                    <td>MWF</td>
                    <td>7:00 - 8:00 AM</td>
                    <td>MDP 102</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Schedule Modal */}
      <div
        className="modal fade"
        id="addSchedule"
        tabIndex={-1}
        aria-labelledby="addScheduleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addScheduleLabel">
                ADD SECTION SCHEDULE
              </h1>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="col-md-6 mb-4">
                  <label htmlFor="sectionName" className="form-label">
                    Section Name
                  </label>
                  <input
                    type="text"
                    id="sectionName"
                    className="form-control"
                  />
                </div>
                <div className="row g-4">
                  <label htmlFor="subjectSchedule" className="form-label">
                    Assigned Subject Schedule
                  </label>
                  <select
                    id="subjectSchedule"
                    multiple
                    size={8}
                    className="form-select"
                    value={selected}
                    onChange={(e) =>
                      setSelected(
                        Array.from(e.target.selectedOptions, (o) => o.value),
                      )
                    }
                  >
                    {schedules.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <div className="form-text">
                    Hold <code>Ctrl</code> to select multiple.
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Selected Schedules{" "}
                      <span className="badge text-bg-secondary">
                        {selected.length}
                      </span>
                    </label>

                    {selected.length === 0 ? (
                      <div className="text-body-secondary">
                        No schedule selected.
                      </div>
                    ) : (
                      <ul className="list-group">
                        {schedules
                          .filter((s) => selected.includes(s.value))
                          .map((s) => (
                            <li
                              key={s.value}
                              className="alert alert-primary d-flex justify-content-between align-items-center mb-2"
                            >
                              {s.label}
                              <button
                                type="button"
                                className="btn-close"
                                aria-label={`Remove ${s.label}`}
                                onClick={() =>
                                  setSelected(
                                    selected.filter((v) => v !== s.value),
                                  )
                                }
                              ></button>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary d-inline-flex align-items-center gap-1"
              >
                <FileDiff size={18} />
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Subject Schedule Modal */}
      <div
        className="modal fade"
        id="addSubjectSchedule"
        tabIndex={-1}
        aria-labelledby="addSubjectScheduleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addSubjectScheduleLabel">
                ADD SUBJECT SCHEDULE
              </h1>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="mb-4">
                  <label htmlFor="subjectName" className="form-label">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    id="subjectName"
                    className="form-control"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label d-block">Days</label>
                  <div
                    className="btn-group gap-2"
                    role="group"
                    aria-label="Select days"
                  >
                    {dayOptions.map((day) => (
                      <span key={day}>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id={`day-${day}`}
                          autoComplete="off"
                          checked={days.includes(day)}
                          onChange={() => toggleDay(day)}
                        />
                        <label
                          className="btn btn-outline-primary rounded"
                          htmlFor={`day-${day}`}
                        >
                          {day}
                        </label>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label htmlFor="startTime" className="form-label">
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="startTime"
                      className="form-control"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="endTime" className="form-label">
                      End Time
                    </label>
                    <input
                      type="time"
                      id="endTime"
                      className="form-control"
                      value={endTime}
                      min={startTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="room" className="form-label">
                    Room
                  </label>
                  <input
                    type="text"
                    id="room"
                    className="form-control"
                    placeholder="e.g. MDP 102"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary d-inline-flex align-items-center gap-1"
              >
                <FileDiff size={18} />
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
