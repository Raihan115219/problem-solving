import React from "react";

// eslint-disable-next-line react/prop-types
const ViewInTable = ({ data, Title }) => {
  const checkValuesOfMine = Object.entries(data).map((item, i) => item);

  const CorrectObjectValue = (value) => {
    if (typeof value === "object") {
      return Object.entries(value).map(([secondaryKey, secondaryValue], i) => (
        <div key={i}>
          <span className="font-medium">
            {secondaryKey
              .split(/(?=[A-Z])/)
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(" ")}
          </span>
          <span className="ml-1">: {secondaryValue}</span>
        </div>
      ));
    } else {
      return <span>{value}</span>;
    }
  };

  return (
    <div>
      <div className="my-5">
        <div className="overflow-x-auto"></div>

        <h1 className="text-3xl font-bold">{Title}</h1>
        <div className="border border-blue-100 p-5">
          <table className="table">
            <thead className="grid grid-cols-2 grid-flow-row">
              {checkValuesOfMine?.map(([key, value], index) => {
                return (
                  <tr key={index}>
                    <td>
                      {key
                        .split(/(?=[A-Z])/)
                        .map(
                          (part) => part.charAt(0).toUpperCase() + part.slice(1)
                        )
                        .join(" ")}
                    </td>
                    <td>:</td>
                    <td>{CorrectObjectValue(value)}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewInTable;
