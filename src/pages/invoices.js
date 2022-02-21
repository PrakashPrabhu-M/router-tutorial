import React from "react";
import ReactDOM from "react-dom";
import {getInvoices} from '../data';
import {Link, Outlet} from 'react-router-dom';

export default function Invoices(prop){
    let invoices = getInvoices();
    return(
        <div>
            <h2>These are the invoices</h2>
            <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {invoices.map(invoice => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
    <Outlet/>
        </div>
    );
}