
export function Button({ children, onClick, variant = 'default' }) {
  const base = 'px-4 py-2 rounded font-semibold';
  const style =
    variant === 'outline'
      ? 'border border-white text-white bg-transparent hover:bg-white/10'
      : 'bg-white text-black hover:bg-gray-200';

  return (
    <button onClick={onClick} className={base + ' ' + style}>
      {children}
    </button>
  );
}
