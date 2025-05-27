"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar.js";
import "../../styles/CourseStaff.css";

export default function Home() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    import("../../data/staff_data.json").then((data) => {
      setStaffMembers(data.data);
    });
  }, []);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  if (staffMembers.length === 0) return null;

  return (
    <div className="main-content">
      <Navbar />
      <main>
        <h1
          className={`title ${selectedMember ? "opacity-20" : "opacity-100"}`}
        >
          Our Staff
        </h1>
        <div
          className={`staff-card-container ${
            selectedMember ? "opacity-20" : "opacity-100"
          }`}
        >
          {staffMembers.map((member) => (
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

        {selectedMember && (
          <div className="popup" onClick={closeModal}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              {staffMembers
                .filter((member) => member.id === selectedMember)
                .map((member) => (
                  <React.Fragment key={member.id}>
                    <div className="image-popup">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="text-content">
                      <h2>{member.name}</h2>
                      <p className="role">{member.role}</p>

                      <div className="label">Year:</div>
                      <div>{member.year || "N/A"}</div>

                      <div className="label">Major:</div>
                      <div>{member.major || "N/A"}</div>

                      <div className="label">Semesters as PM:</div>
                      <div>{member.semesters || "N/A"}</div>

                      <div className="bio">{member.bio}</div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
