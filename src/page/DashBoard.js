import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from '../component/Chart'



export default function Dashboard({ axios, dashboardName }) {
  const config = useSelector(({ DashboardReducer }) => DashboardReducer.config);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/api/dashboard/${dashboardName}`).then(({ data }) => {
      dispatch({
        type: "SET_CONFIG",
        payload: data,
      });

      const getData = ({ endpoint }, index) => {
        axios.get(endpoint).then(({ data }) => {
          dispatch({
            type: "SET_DATA",
            payload: [index, data],
          });
        });
      };

      data.forEach((config, index) => {
        getData(config, index);
      });
    });
  }, []);

  return (
    <section className="dashboard">{
      config && config.map((config, index) => {
        const component = require(`../component/${config.type}.js`).default;
        return (<Chart config={config}> {
          config.data ? React.createElement(component, { config: config, key: index }) : ''
        }
        </Chart>)
      })
    }</section>
  )
}
