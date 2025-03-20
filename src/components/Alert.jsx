export default function Alert({ tipe, pesan }) {
  return (
    <div className="mt-1 mb-3 text-sm">
      {tipe === "error" ? (
        <div className="p-2 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">
          <p>{pesan}</p>
        </div>
      ) : tipe === "success" ? (
        <div className="p-2 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
          <p>{pesan}</p>
        </div>
      ) : null}
    </div>
  );
}
