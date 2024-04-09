import React from "react";

import "./App.css";
import ViewInTable from "./comonents/Common/ViewInTable";

function App() {
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
  return (
    <div className="container mx-auto my-5">
      <div className="d-flex justify-center gap-6 ">
        <button className=" btn mr-5 bg-indigo-400 p-3 text-white">
          Employee view
        </button>
        <button className="btn bg-indigo-400 p-3 text-white">
          Contractor view
        </button>
      </div>

      {/* Table component wil be here */}
      <ViewInTable employee={employee} />
    </div>
  );
}

export default App;
