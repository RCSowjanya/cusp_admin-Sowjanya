import React from "react";
import CustomerRFQs2 from "@/Components/CustomerRFQs2";
import { GetRFQDetByID } from "@/app/functions/ServerFunctions";
export default async function page({params}) {
  let quotedet={}
  const response= await GetRFQDetByID(params.quoteid)
  console.log(response)
  if (response.status===200){
    quotedet= response.data
  }
  return <CustomerRFQs2 quotedetails={quotedet}/>;
}
