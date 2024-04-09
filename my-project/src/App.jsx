import React from "react";

import "./App.css";
import ViewInTable from "./comonents/Common/ViewInTable";

function App() {
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
      <ViewInTable />
    </div>
  );
}

export default App;
