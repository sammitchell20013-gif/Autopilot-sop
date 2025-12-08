import Sidebar from "@/components/app/sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <main className="md:ml-[280px] transition-all duration-300 pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}

