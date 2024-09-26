import React from "react";
import CustomerRFQs from "@/Components/CustomerRFQs";
import { GetRFQs } from "@/app/functions/ServerFunctions";
export default async function page() {
  let quotations=[];
  const response= await GetRFQs()
  if (response.status===200){
    quotations= response.data;
  }
  return <CustomerRFQs quotations={quotations} />;
}
