import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import supabase from '../assets/supabase';

const StatsComponent = () => {
  const [stats, setStats] = useState([]);
  const [ipAddress, setIpAddress] = useState("");
  console.log(import.meta.env.VITE_SUPABASE_URL);

  useEffect(() => {
    const fetchStats = async () => {
      let { data: statss, error } = await supabase
        .from('stats')
        .select('*');

      if (error) {
        console.error('Error fetching stats:', error);
      } else {
        setStats(statss);
        console.log(stats);
      }
    };

    const updateStats = async () => {
      const { data, error } = await supabase
        .from('stats')
        .insert([{ created_at: new Date().toISOString() }])
        .select();

      if (error) {
        console.error('Error updating stats:', error);
      } else {
        fetchStats(); // Fetch stats again to update the view
      }
    };

    const fetchIPAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchStats();
    fetchIPAddress();

    const visitTimestamp = sessionStorage.getItem('visitTimestamp');
    const now = new Date().getTime();

    if (!visitTimestamp || now - visitTimestamp > 2 * 1000) {
      updateStats();
      sessionStorage.setItem('visitRecorded', 'true');
      sessionStorage.setItem('visitTimestamp', now.toString());
    }

  }, []);

  const usersToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    return stats.filter(stat => stat.created_at.slice(0, 10) === today).length;
  };

  const usersLast7Days = () => {
    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);
    return stats.filter(stat => {
      const statDate = new Date(stat.created_at);
      return statDate >= last7Days && statDate <= today;
    }).length;
  };

  const viewsThisMonth = () => {
    const today = new Date();
    return stats.filter(stat => {
      const statDate = new Date(stat.created_at);
      return statDate.getMonth() === today.getMonth() && statDate.getFullYear() === today.getFullYear();
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
          <p className="text-5xl font-extrabold mb-2">{stats.length}</p>
          <p className="text-lg font-medium">Total Visits</p>
        </div>
        <p className="text-lg font-semibold">Users Today: {usersToday()}</p>
        <p className="text-lg font-semibold">Users Last 7 Days: {usersLast7Days()}</p>
        <p className="text-lg font-semibold">Views This Month: {viewsThisMonth()}</p>
        <p className="text-lg font-semibold">Your IP Address: {ipAddress}</p>
      </div>
    </motion.div>
  );
};

export default StatsComponent;
