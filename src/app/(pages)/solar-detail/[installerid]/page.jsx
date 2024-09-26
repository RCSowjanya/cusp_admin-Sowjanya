import React from "react";
import SolarInstallers2 from "@/Components/SolarInstallers2";
import { GetInstallerDetByID , GetProposalDetByID} from "@/app/functions/ServerFunctions";
export default async function page({params}) {
  let installerDet={};
  let proposals=[]
  const response=await GetInstallerDetByID(params.installerid)
  if (response.status===200){
    console.log("solar det", response.data[0])
    installerDet=response.data[0]
  }
  const presponse=await GetProposalDetByID(params.installerid)
  if (presponse.status===200){
    console.log("solar det", presponse.data[0])
    proposals=presponse.data[0]
  }
  return <SolarInstallers2 installerDet={installerDet} proposals={proposals} />;
}
