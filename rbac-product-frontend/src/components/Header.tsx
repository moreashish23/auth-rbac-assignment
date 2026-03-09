import LogoutButton from "./LogoutButton";

const Header = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="flex justify-between items-center bg-white shadow p-4 mb-6">
      <h1 className="text-lg font-semibold">
        RBAC Product System
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          Role: {role}
        </span>

        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;