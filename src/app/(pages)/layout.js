import { Inter } from "next/font/google";
import "../globals.css";
// import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="md:flex md:flex-row">
          <div className="md:w-[330px] w-full ">
          <Sidebar />
          </div>
          <div className="md:w-[1100px]">
            
          </div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
