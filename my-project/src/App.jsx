import React, { useState } from "react";

import "./App.css";
import ViewInTable from "./comonents/Common/ViewInTable";

function App() {
  const [data, setData] = useState();
  const [view, setView] = useState(false);
  const [Title, setTile] = useState();

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
    </div>
  );
}

export default App;
