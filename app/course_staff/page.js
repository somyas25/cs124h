"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar.js";
import "../../styles/CourseStaff.css";

export default function Home() {
  const [staffMembers, setStaffMembers] = useState([]); // [{ semester, staff: [...] }, ...]
  const [selectedMember, setSelectedMember] = useState(null); // store the whole member object
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    import("../../data/staff_data.json").then((mod) => {
      // handle both { default: {data: [...]}} and { default: [...] } shapes gracefully
      const payload = mod?.default ?? mod;
      const semesters = payload?.data ?? payload ?? [];
      if (mounted) setStaffMembers(Array.isArray(semesters) ? semesters : []);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Lock scroll & add ESC-to-close when modal is open
  useEffect(() => {
    if (!selectedMember) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedMember]);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  if (!staffMembers?.length) return null;

  // Guard the selected semester index
  const safeSemesterIndex =
    selectedSemesterIndex >= 0 && selectedSemesterIndex < staffMembers.length
      ? selectedSemesterIndex
      : 0;

  const currentSemester = staffMembers[safeSemesterIndex];
  const people = Array.isArray(currentSemester?.staff)
    ? currentSemester.staff
    : [];

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="header">
          <h1
            className={`title ${selectedMember ? "opacity-20" : "opacity-100"}`}
          >
            Our Staff
          </h1>
        </div>

        <div className="tabsContainer">
          {staffMembers.map((semesterData, index) => (
            <button
              key={`${semesterData.semester}-${index}`}
              onClick={() => {
                setSelectedSemesterIndex(index);
                // If you switch semesters, close any open modal to avoid stale data
                if (selectedMember) closeModal();
              }}
              className={`tabButton ${
                safeSemesterIndex === index ? "activeTab" : ""
              }`}
              type="button"
            >
              {semesterData.semester}
            </button>
          ))}
        </div>

        <div
          className={`staff-card-container ${
            selectedMember ? "opacity-20" : "opacity-100"
          }`}
        >
          {people.map((member) => (
            <div
              className="staff-card-box"
              key={member.id ?? member.name}
              onClick={() => openModal(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && openModal(member)
              }
            >
              <div className="staff-image-box">
                <img src={member.image} alt={member.name} />
              </div>
              <p className="staff-card-text">{member.name}</p>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div
            className="popup"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-name"
          >
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
              role="document"
            >
              <button className="close" onClick={closeModal} aria-label="Close">
                &times;
              </button>

              <div className="image-popup">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>

              <div className="text-content">
                <h2 id="member-name">{selectedMember.name}</h2>
                <p className="role">{selectedMember.role}</p>

                <div className="staff-details">
                  <div className="detail-item">
                    <div className="label">Year:</div>
                    <div className="value">{selectedMember.year || "N/A"}</div>
                  </div>

                  <div className="detail-item">
                    <div className="label">Major:</div>
                    <div className="value">{selectedMember.major || "N/A"}</div>
                  </div>

                  <div className="detail-item">
                    <div className="label">Semesters as PM:</div>
                    <div className="value">
                      {selectedMember.semesters || "N/A"}
                    </div>
                  </div>

                  {selectedMember.email && (
                    <div className="detail-item">
                      <div className="label">UIUC Email:</div>
                      <div className="value">{selectedMember.email}</div>
                    </div>
                  )}
                </div>

                <div className="bio-section">
                  <div className="bio">{selectedMember.bio}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
