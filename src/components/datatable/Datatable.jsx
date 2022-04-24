import "./datatable.scss"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {

    const actionColumn = [
        {
            field: "action",
            hearderName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <button className="viewButton">View</button>
                        <button className="deleteButton">Delete</button>
                    </div>
                );
            },
        },
    ];

  return (
    <div className="datatable">
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable