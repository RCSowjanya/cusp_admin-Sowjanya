"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import DashboardHeader from "@/Components/DashboardHeader";
import { useSelector, useDispatch } from 'react-redux';
import { SessionOut } from "@/Components/SessionOut";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { persistor } from "@/redux/store";
export default function ClientLayout({ children }) {
  const authState = useSelector((state) => state.auth);
  const pathname = usePathname();
  const router= useRouter();
  // Extract the last segment of the path
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";
  const dispatch = useDispatch();

  // Capitalize the first letter of the last segment
  const capitalizedTitle = pathname.includes("Proposal-View")?"Proposal-View: "+lastSegment:
    lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    const ClearReduxStore = () => {
        dispatch({ type: 'RESET_STORE' });
        persistor.purge().then(() => {
          console.log('Redux state and persisted data cleared.');
        });
  }
  const handleLogout=async()=>{
    ClearReduxStore();
    toast.success("Logged Out Successfully...")
    setTimeout(() => {
      router.push("/")
    }, 2000);
  }
  if (!authState.AdminUserName) {
    return (
      <SessionOut />
    )
  }
  return (
    <div className="flex min-h-screen justify-between">
      <div className="flex min-h-screen">
        <Sidebar isActiveItem={pathSegments} setIsActiveItem={pathSegments} />
      </div>
      <div
        className={`flex-1 transition-all duration-300
        `}
      >
        <DashboardHeader title={capitalizedTitle} userInfo={authState} handleLogout={handleLogout} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
