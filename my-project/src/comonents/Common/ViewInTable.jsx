import React from "react";

const ViewInTable = () => {
  return (
    <div className="my-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <h1>View</h1>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
          </tbody>
          <h1>Hello world</h1>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewInTable;
