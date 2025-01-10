export default function Loading() {
  return (
    <>
      <div className="absolute h-screen w-screen bg-white inset-0 flex items-center justify-center z-50">
        <div className="animate-pulse">
          <h3 className="font-semibold text-4xl">Musc</h3>
        </div>
      </div>
    </>
  );
}
