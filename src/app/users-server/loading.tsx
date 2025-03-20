"use client";
import  { useEffect } from "react";

// Component xử lý lỗi
export default function Error({ error }: { error: Error }) {
    useEffect(() => {
      console.log(error);
    }, [error]);
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-red-500">Error fetching users data</div>
      </div>
    );
  }