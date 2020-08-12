import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function DashBoardSelector({ axios }) {
  const [dashboardList, setDashboardList] = useState(false);

  useEffect(() => {
    axios.get("/api/dashboard-list").then(({ data }) => {
      setDashboardList(data);
    });
  }, []);
  return (
    <section>
      {dashboardList &&
        dashboardList.map((dashboard) => <Link to={dashboard.path} />)}
    </section>
  );
}
