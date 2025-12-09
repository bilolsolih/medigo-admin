// src/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// export default function DashboardLayout() {
//   return (
//     // <div className="flex h-screen bg-[#f5f6fa]">
//     //   <Sidebar />

//     //   <div className="flex-1 flex flex-col overflow-hidden">
//     //     <Topbar />

//     //     <main className="flex-1 overflow-y-auto p-6">
//     //       <Outlet />
//     //     </main>
//     //   </div>
//     // </div>

//     <div className="">
//      <Topbar />

//    <div className="">
//        <Sidebar />

//       <main className="">
//         <Outlet />
//     </main>
//       </div>
//     </div>
//   );
// }

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col bg-white">

      <div className="h-[100px] w-full flex items-center justify-end">
        <Topbar />
      </div>

      <div className="flex flex-1 overflow-hidden px-6 pb-6 pt-6 gap-6">

        <aside className="w-[276px] bg-[#FCFCFD] rounded-xl shadow-lg">
          <Sidebar />
        </aside>

        <main className="flex-1 bg-white rounded-xl  p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

