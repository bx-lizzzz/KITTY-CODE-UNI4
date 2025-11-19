// src/pages/Team.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

const Team = () => {
  const [team, setTeam] = useState([]);

  const fetchTeam = async () => {
    try {
      const snapshot = await getDocs(collection(db, "teamMembers"));
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTeam(data);
    } catch (error) {
      console.error("Error loading team:", error);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Nuestro Equipo 🐾
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((m) => (
          <motion.div
            key={m.id}
            className="bg-white border border-pink-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-bold text-pink-600">{m.name}</h2>
            <p className="text-sm text-gray-700">{m.role}</p>

            <p className="text-gray-600 mt-3 text-sm">{m.bio}</p>

            {m.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {m.skills.map((sk, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            )}

            {m.socialLinks && (
              <div className="mt-4 flex gap-4 text-sm">
                {m.socialLinks.linkedin && (
                  <a
                    href={m.socialLinks.linkedin}
                    target="_blank"
                    className="text-pink-500 underline"
                  >
                    LinkedIn
                  </a>
                )}
                {m.socialLinks.github && (
                  <a
                    href={m.socialLinks.github}
                    target="_blank"
                    className="text-pink-500 underline"
                  >
                    GitHub
                  </a>
                )}
                {m.socialLinks.email && (
                  <a
                    href={`mailto:${m.socialLinks.email}`}
                    className="text-pink-500 underline"
                  >
                    Email
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
