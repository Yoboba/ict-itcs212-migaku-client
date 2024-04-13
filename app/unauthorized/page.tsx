export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-red-200">
      <div className="flex-col space-y-4">
        <div className="text-center text-6xl font-bold">UNAUTHORIZED</div>
        <div className="text-center text-xl">
          You are either not logged, or missing permissions to access this page.
        </div>
      </div>
    </div>
  );
}
