import { useParams } from "react-router-dom";

export default function Invoice() {
    const prams=useParams();
    return <h2>Invoice {prams.invoiceId}</h2>;
  }