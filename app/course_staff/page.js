"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar.js";
import "../../styles/CourseStaff.css";

export default function Home() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState(0);

  useEffect(() => {
    import("../../data/staff_data.json").then((data) => {
      setStaffMembers(data.data);
    });
  }, []);

  const openModal = (memberId) => setSelectedMember(memberId);
  const closeModal = () => setSelectedMember(null);

  if (staffMembers.length === 0) return null;

  const selectedMemberData = staffMembers.find(member => member.id === selectedMember);

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="header">
          <h1 className={`title ${selectedMember ? "opacity-20" : "opacity-100"}`}>
            Our Staff
          </h1>
        </div>

        <div className="tabsContainer">
          {staffMembers.map((semesterData, index) => (
            <button
              key={semesterData.semester}
              onClick={() => setSelectedSemesterIndex(index)}
              className={`tabButton ${
                selectedSemesterIndex === index ? "activeTab" : ""
              }`}
            >
              {semesterData.semester}
            </button>
          ))}
        </div>

        <div className={`staff-card-container ${selectedMember ? "opacity-20" : "opacity-100"}`}>
          {staffMembers[selectedSemesterIndex].staff.map((member) => (
            <div
              className="staff-card-box"
              key={member.id}
              onClick={() => openModal(member.id)}
            >
              <div className="staff-image-box">
                <img src={member.image} alt={member.name} />
              </div>
              <p className="staff-card-text">{member.name}</p>
            </div>
          ))}
        </div>

        {selectedMember && selectedMemberData && (
          <div className="popup" onClick={closeModal}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              
              <div className="image-popup">
                <img src={selectedMemberData.image} alt={selectedMemberData.name} />
              </div>
              
              <div className="text-content">
                <h2>{selectedMemberData.name}</h2>
                <p className="role">{selectedMemberData.role}</p>

                <div className="staff-details">
                  <div className="detail-item">
                    <div className="label">Year:</div>
                    <div className="value">{selectedMemberData.year || "N/A"}</div>
                  </div>

                  <div className="detail-item">
                    <div className="label">Major:</div>
                    <div className="value">{selectedMemberData.major || "N/A"}</div>
                  </div>

                  <div className="detail-item">
                    <div className="label">Semesters as PM:</div>
                    <div className="value">{selectedMemberData.semesters || "N/A"}</div>
                  </div>
                </div>

                <div className="bio-section">
                  <div className="bio">{selectedMemberData.bio}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}