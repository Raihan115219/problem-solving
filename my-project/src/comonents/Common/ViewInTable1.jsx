import React, { Fragment } from "react";

const ViewInTable1 = ({ data, object, separator }) => {
  return (
    <table>
      <tbody>
        {data.map((row, index) => {
          return (
            <>
              {index === separator && (
                <tr>
                  <td colSpan="6">Billing Information</td>
                </tr>
              )}
              <tr key={index}>
                {row.map((innnerRow, index) => (
                  <Fragment key={index}>
                    <td>{innnerRow}</td>
                    <td width="10%" align="center">
                      :
                    </td>
                    <td>
                      {innnerRow === "manager"
                        ? object[innnerRow].firstName
                        : object[innnerRow]}
                    </td>
                    <td width="10%"></td>
                  </Fragment>
                ))}
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
export default ViewInTable1;
