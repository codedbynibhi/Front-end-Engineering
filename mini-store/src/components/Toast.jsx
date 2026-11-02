import { useEffect } from "react";

// Small confirmation message that hides itself after a short delay
export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(onClose, 2200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      ✅ {message}
    </div>
  );
}
