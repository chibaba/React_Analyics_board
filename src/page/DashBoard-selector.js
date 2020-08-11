import React, { useEffect } from "react";

export function DashBoardSelector({ axios }) {
  useEffect(() => {
    axios.get("/api/dashboard-list").then(({ data }) => {});
  }, []);
}
