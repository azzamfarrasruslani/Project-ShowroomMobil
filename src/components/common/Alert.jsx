export default function Alert({ tipe, pesan }) {
  return (
    <div className="mt-1 mb-3 text-sm">
      {tipe === "error" ? (
        <div className="rounded-md border-l-4 border-red-500 bg-red-100 p-2 text-red-700">
          <p>{pesan}</p>
        </div>
      ) : tipe === "success" ? (
        <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-2 text-green-700">
          <p>{pesan}</p>
        </div>
      ) : null}
    </div>
  );
}
