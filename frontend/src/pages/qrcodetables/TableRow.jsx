// TableRow.jsx
import React, { useRef } from "react";
import QRCode from "qrcode.react";
import ReactToPrint from "react-to-print";

const QRCodePrintComponent = React.forwardRef(({ value }, ref) => (
  <div ref={ref} className="qrcode">
    <QRCode value={value} />
  </div>
));

const TableRow = ({ table, onEdit, onDelete }) => {
  const qrCodeRef = useRef();
  const url = import.meta.env.VITE_BASE_URL;

  return (
    <tr>
      <td>
        <QRCodePrintComponent
          ref={qrCodeRef}
          value={`${url}/?table=${table.number}`}
        />
      </td>
      <td>{table.number}</td>
      <td>
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => qrCodeRef.current}
        />
        <button onClick={() => onDelete(table._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
