export default function Error({ message = "Terjadi kesalahan. Silakan coba lagi." }) {
  return (
    <div className="py-12 text-center text-red-500">
      <p>{message}</p>
    </div>
  );
}
