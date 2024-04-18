import React, { useEffect, useState } from "react";

import "./App.css";
import ViewInTable from "./comonents/Common/ViewInTable";
import ViewInTable1 from "./comonents/Common/ViewInTable1";

function App() {
  const [data, setData] = useState();
  const [view, setView] = useState(false);
  const [Title, setTile] = useState();
  const [formattedData, setFormattedData] = useState([]);

  const employee = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    jobId: "123456",
    jobTitle: "Software Engineer",
    location: "New York",
    site: "Headquarters",
    manager: { firstName: "Jane", lastName: "Smith", staffID: "789012" },
    category: "Full-time",
    arcID: "ABC123",
    altEmail: "john.doe@example.com",
    streetAddress: "123 Main St",
    city: "Anytown",
    cellPhone: "555-555-5555",
    state: "NY",
    zipCode: "12345",
  };

  const contractor = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    jobId: "12345",
    jobTitle: "Software Engineer",
    location: "New York",
    site: "Headquarters",
    manager: { firstName: "Jane", lastName: "Smith", staffID: "6789" },
    category: "IT",
    businessPolicy: "Standard",
    joiningDate: "2024-04-09",
    businessPhone: "123-456-7890",
    laptopNeeded: "YES",
    needAccess: "YES",
    arcID: "A123456",
    demoID: "A123456",
    altEmail: "john.doe@example.com",
    streetAddress: "123 Main St",
    city: "New York City",
    cellPhone: "987-654-3210",
    state: "NY",
    zipCode: "10001",
  };

  const handleViewButton = (Type) => {
    setView(true);
    if (Type === "employee") {
      setTile("Employee Table");
      setData(employee);
    } else {
      setTile("Contractor Table");
      setData(contractor);
    }
  };
  const objectKeys = Object.keys(contractor);
  console.log(objectKeys.length);
  useEffect(() => {
    const formattedData = [];
    objectKeys.length % 2 === 1 &&
      objectKeys.splice(objectKeys.indexOf("altEmail"), 0, "");

    for (let i = 1; i <= objectKeys.length; i += 2) {
      formattedData.push([objectKeys[i - 1], objectKeys[i]]);
    }
    setFormattedData(formattedData);
  }, []);

  return (
    <div className="container mx-auto my-5">
      <div className="d-flex  gap-6 ">
        <button
          className=" btn mr-5 bg-indigo-400 p-3 text-white"
          onClick={() => handleViewButton("employee")}
        >
          Employee view
        </button>
        <button
          className="btn bg-indigo-400 p-3 text-white"
          onClick={() => handleViewButton("contractor")}
        >
          Contractor view
        </button>
      </div>

      {/* Table component wil be here */}
      {view && <ViewInTable data={data} Title={Title} />}
      {view && (
        <ViewInTable1
          data={formattedData}
          object={data}
          Title={Title}
          separator={Math.round(objectKeys.indexOf("altEmail") / 2)}
        />
      )}
    </div>
  );
}

export default App;
