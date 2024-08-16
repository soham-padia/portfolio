import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const StatsComponent = () => {
  const [stats, setStats] = useState({ visits: [] });
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const visitTimestamp = sessionStorage.getItem("visitTimestamp");
    const now = new Date().getTime();

    if (!visitTimestamp || now - visitTimestamp > 24 * 60 * 60 * 1000) {
      axios
        .post("https://soham-express-portfolio.vercel.app/update-stats")
        .then((response) => {
          console.log("Stats updated", response.data);
          sessionStorage.setItem("visitRecorded", "true");
          sessionStorage.setItem("visitTimestamp", now.toString());
        })
        .catch((error) => {
          console.error("Error updating stats:", error);
        });
    }

    axios
      .get("https://soham-express-portfolio.vercel.app/stats")
      .then((response) => {
        console.log(response.data); // Check what the actual data looks like
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });

    axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  const usersToday = () => {
    const today = new Date();
    return stats.visits.filter(
      (visit) => new Date(visit.time).toDateString() === today.toDateString()
    ).length;
  };

  const usersLast7Days = () => {
    const today = new Date();
    const last7Days = new Date(today.setDate(today.getDate() - 7));
    return stats.visits.filter(
      (visit) =>
        new Date(visit.time) >= last7Days && new Date(visit.time) <= today
    ).length;
  };

  const viewsThisMonth = () => {
    const today = new Date();
    return stats.visits.filter((visit) => {
      const visitDate = new Date(visit.time);
      return (
        visitDate.getMonth() === today.getMonth() &&
        visitDate.getFullYear() === today.getFullYear()
      );
    }).length;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="basis-1/2 flex flex-col justify-center items-start md:p-6 md:m-10 p-4 m-4 rounded-lg backdrop-blur-sm"
    >
      <h1 className="font-mono font-light text-3xl mb-4 text-center">
        Visitor Stats
      </h1>
      <div className="w-full md:max-w-[500px] flex flex-col gap-4 bg-transparent backdrop-blur-sm shadow-md p-4">
        <div className="flex flex-col items-start">
          <p className="text-5xl font-extrabold mb-2">{stats.visits.length}</p>
          <p className="text-lg font-medium">Total Visits</p>
        </div>
        <p className="text-lg font-semibold">Users Today: {usersToday()}</p>
        <p className="text-lg font-semibold">
          Users Last 7 Days: {usersLast7Days()}
        </p>
        <p className="text-lg font-semibold">
          Views This Month: {viewsThisMonth()}
        </p>
        <p className="text-lg font-semibold">Your IP Address: {ipAddress}</p>
      </div>
    </motion.div>
  );
};

export default StatsComponent;
