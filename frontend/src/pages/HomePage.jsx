import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import { UsersIcon } from "lucide-react";

const HomePage = () => {
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome to Mingo</h2>
          <Link to="/friends" className="btn btn-primary btn-sm">
            <UsersIcon className="mr-2 size-4" />
            Explore Friends
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Your Network</h3>
              <p>{loadingFriends ? "Loading..." : `${friends.length} friends connected`}</p>
              <div className="card-actions justify-end mt-4">
                <Link to="/friends" className="btn btn-outline btn-sm">View All</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Friend Requests</h3>
              <p>Check pending requests</p>
              <div className="card-actions justify-end mt-4">
                <Link to="/notifications" className="btn btn-outline btn-sm">View All</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Video Calls</h3>
              <p>Start a new call with a friend</p>
              <div className="card-actions justify-end mt-4">
                <Link to="/friends" className="btn btn-outline btn-sm">Choose Friend</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Getting Started</h3>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Create Account</li>
              <li className="step step-primary">Complete Profile</li>
              <li className="step">Connect with Friends</li>
              <li className="step">Start Chatting and Calling</li>
              <li className="step">Share Photos and Files</li>
            </ul>
            <div className="mt-4 text-sm opacity-70">
              <p>Mingo brings you a feature-rich messaging experience:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Real-time messaging with typing indicators</li>
                <li>High-quality video and voice calls</li>
                <li>Share photos, videos, and documents</li>
                <li>Create group chats with your friends</li>
                <li>Stay connected on any device</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
