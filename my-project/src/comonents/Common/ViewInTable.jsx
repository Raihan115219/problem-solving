import React from "react";

const ViewInTable = ({ employee }) => {
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
      <div className="overflow-hidden">
        <table className="table-auto">
          <tbody className="divide-y divide-gray-200">
            {Object.entries(employee).map(([key, value]) => (
              <tr key={key} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewInTable;
