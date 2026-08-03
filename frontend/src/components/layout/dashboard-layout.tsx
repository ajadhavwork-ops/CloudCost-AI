import Sidebar from "./sidebar";
import TopNavbar from "./top-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="flex min-h-screen bg-transparent">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <TopNavbar />

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}