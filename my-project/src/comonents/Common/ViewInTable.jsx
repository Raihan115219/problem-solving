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
          <div className="grid grid-cols-2">
            {checkValuesOfMine?.map(([key, value], index) => {
              return (
                <div key={index}>
                  <table className="table overflow-x-auto table-lg">
                    <tbody>
                      <thead>
                        <tr>
                          <th>
                            {key
                              .split(/(?=[A-Z])/)
                              .map(
                                (part) =>
                                  part.charAt(0).toUpperCase() + part.slice(1)
                              )
                              .join(" ")}
                          </th>
                          <th>:</th>
                          <th>{CorrectObjectValue(value)}</th>
                        </tr>
                      </thead>
                    </tbody>
                  </table>
                </div>
              );
            })}
            {/* {checkValuesOfMine?.map(([key, value], index) => {
              return (
                <div key={index}>
                  <div className="flex">
                    <div>
                      {key
                        .split(/(?=[A-Z])/)
                        .map(
                          (part) => part.charAt(0).toUpperCase() + part.slice(1)
                        )
                        .join(" ")}
                    </div>
                    <div>:</div>
                    <div>{checkValueCorrectOrNot(value)}</div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInTable;
