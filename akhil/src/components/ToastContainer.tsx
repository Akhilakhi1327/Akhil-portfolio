import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, AlertCircle, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

const toastIcons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  error: <XCircle className="w-5 h-5 text-red-400" />,
  info: <Info className="w-5 h-5 text-blue-400" />,
  warning: <AlertCircle className="w-5 h-5 text-amber-400" />,
};

const toastColors: Record<ToastType, string> = {
  success: "border-emerald-500/30 bg-emerald-500/10",
  error: "border-red-500/30 bg-red-500/10",
  info: "border-blue-500/30 bg-blue-500/10",
  warning: "border-amber-500/30 bg-amber-500/10",
};

// Global toast event system
type ToastListener = (toast: Toast) => void;
let listeners: ToastListener[] = [];

export const toast = {
  success: (title: string, message?: string) => dispatchToast("success", title, message),
  error: (title: string, message?: string) => dispatchToast("error", title, message),
  info: (title: string, message?: string) => dispatchToast("info", title, message),
  warning: (title: string, message?: string) => dispatchToast("warning", title, message),
};

function dispatchToast(type: ToastType, title: string, message?: string) {
  const newToast: Toast = { id: Date.now().toString(), type, title, message };
  listeners.forEach((fn) => fn(newToast));
}

const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener: ToastListener = (t) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id));
      }, 4500);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((fn) => fn !== listener);
    };
  }, []);

  const dismiss = (id: string) => setToasts((prev) => prev.filter((x) => x.id !== id));

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`pointer-events-auto flex items-start gap-3.5 px-4 py-3.5 rounded-2xl border backdrop-blur-xl shadow-2xl min-w-[280px] max-w-xs ${toastColors[t.type]}`}
            style={{ background: "rgba(11, 15, 25, 0.92)" }}
          >
            <div className="mt-0.5 shrink-0">{toastIcons[t.type]}</div>
            <div className="flex-1">
              <div className="font-semibold text-white text-sm">{t.title}</div>
              {t.message && <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{t.message}</div>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="text-slate-500 hover:text-slate-300 transition-colors mt-0.5 shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
