import React from "react";

const DataTable = props => {
  const table = Object.values(props.data).map((entry, index) => {
    return (
      <tr scope="row" key={index}>
        <td>{index + 1}</td>
        <td>{entry.date}</td>
        <td>{entry.category}</td>
        <td>{entry.description}</td>
        <td>
          {entry.amount}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => props.handleEdit(index)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => props.handleDelete(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Date</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
};
export default DataTable;
