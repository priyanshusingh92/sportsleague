import React from 'react';

import './style.sass';

const Table = ({ labels, data, tableStyle }) => {
  return (
    <div className="table-container">
      <table className={`table-${tableStyle}`}>
        <thead className="table-header">
          {labels.map((label, index) => (
            <th
              key={label.name + index}
              className={`table-cloumn table-align-item-${label.align} table-item-width-${label.width}`}
            >
              {label.name}
            </th>
          ))}
        </thead>
        <tbody>
          {data
            ? data.map((row, index) => (
                <tr key={index}>
                  {labels.map((label, index) => (
                    <td
                      key={label.field + index}
                      className={`table-cloumn table-item-${label.bold && 'bold'} table-align-item-${
                        label.align
                      } table-item-width-${label.width}`}
                      style={{ color: `${label.color}` }}
                    >
                      {label.flag ? (
                        <p className={`table-flag-item-${label.flag}`}>
                          {row[label.field]} <img src={`https://countryflagsapi.com/svg/${row[label.field]}`} />
                        </p>
                      ) : (
                        row[label.field]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
