export default function EmptyState({ message = "Tidak ada data untuk ditampilkan." }) {
  return (
    <div className="py-12 text-center text-gray-500">
      <p>{message}</p>
    </div>
  );
}
