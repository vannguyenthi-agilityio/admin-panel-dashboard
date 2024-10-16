import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

// Components
import { Sidebar, Header } from "@/components";

// Contexts
import { CustomerProvider } from "@/context";

const Layout = () => {
  const location = useLocation();
  const [isCollapseSidebar, setIsCollapseSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapseSidebar(isCollapseSidebar => !isCollapseSidebar);
  };

  return (
    <>
      <Sidebar
        isCollapse={isCollapseSidebar}
        toggleSidebar={toggleSidebar}
        pathname={location.pathname}
      />
      <Header className="absolute top-0 right-[16px]"/>
      <CustomerProvider>
        <div className={isCollapseSidebar ? "sm:ml-[105px]" : "md:ml-[265px]"}>
          <Outlet />
        </div>
      </CustomerProvider>
    </>
  )
};

export default Layout;
