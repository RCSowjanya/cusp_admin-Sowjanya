"use server"
import { PostMethod, GetMethod } from "./ServerActions";

//Sending Email to Installer for Login
export async function LoginEmail(body) {
    console.log("triggered")
    const url = process.env.NEXT_LOGIN_EMAIL_URL
    const response = await PostMethod(url, body)
    console.log(response)
    return response;
}
export async function GetRFQs(){
    const url= process.env.NEXT_GETRFQs
    const response= await GetMethod(url)
    console.log(response)
    return response
}
export async function GetAllInstallers(){
    const url= process.env.NEXT_GET_INSTALLERS_LIST
    const response= await GetMethod(url)
    console.log(response)
    return response
}
export async function GetInstallerDetByID(installerID){
    const url= process.env.NEXT_GET_INSTALLERS_DET+"?company_id="+installerID
    console.log(url)
    const response= await GetMethod(url)
    console.log("res is", response)
    return response
}
export async function GetProposalDetByID(installerID){
    const url= process.env.NEXT_GET_PROPOSALS_DET+"?company_id="+installerID
    console.log(url)
    const response= await GetMethod(url)
    console.log("res is", response)
    return response
}
export async function GetFileURL(filename){
    console.log(filename)
    const url= process.env.NEXT_AWS_FILE_URL+"?fileKey="+filename.replace("https://cuspdevelopment.s3.amazonaws.com/","")
    console.log("URL IS", url)
    const response= await GetMethod(url)
    console.log(response)
    return response;
}
export async function GetRFQDetByID(quoteid){
    console.log(quoteid)
    const url= process.env.NEXT_RFQ_DET_BYID+"?customer_id="+quoteid
    console.log("URL IS", url)
    const response= await GetMethod(url)
    console.log(response)
    return response;
}
