import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2026 Addis Eats. All rights reserved.</p>
        <p>Contact: +251 942 425 447</p>
        <p>Made with ❤️ in Ethiopia</p>
      </footer>
    </div>
  );
}

export default Layout;
