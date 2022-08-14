import Navbar from "../components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar>{children}</Navbar>
    </div>
  );
};

export default MainLayout;
