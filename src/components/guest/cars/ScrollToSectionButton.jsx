export default function ScrollButton({ targetId , label ,className}) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
      className={className}
    >
      {label}
    </button>
  );
}
