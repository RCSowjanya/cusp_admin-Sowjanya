import React from "react";
import SolarInstallers from "@/Components/SolarInstallers";
import { GetAllInstallers } from "@/app/functions/ServerFunctions";
export default  async function page() {
  let installers=[];
  const response= await GetAllInstallers()
  if (response.status===200){
    installers= response.data;
  }
  return <SolarInstallers installers={installers} />;
}
