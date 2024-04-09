import React from "react";

const ViewInTable = ({ data, Title }) => {
  const checkValuesOfMine = Object.entries(data).map((item, i) => item);

  const checkValueCorrectOrNot = (value) => {
    if (typeof value === "object") {
      return Object.entries(value).map(([subKey, subValue], i) => (
        <div key={i}>
          <span className="font-medium">{subKey}</span>
          <span className="ml-1">: {subValue}</span>
        </div>
      ));
    } else {
      return <span>{value}</span>;
    }
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-3xl font-bold">{Title}</h1>
        <div className="border border-blue-100 p-5">
          <div className="grid grid-cols-2">
            {checkValuesOfMine?.map(([key, value], index) => {
              return (
                <div key={index}>
                  <div className="grid grid-flow-col justify-normal">
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInTable;
