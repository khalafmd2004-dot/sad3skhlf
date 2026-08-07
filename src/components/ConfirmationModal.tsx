import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-5 shadow-2xl space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-100">{title}</h3>
            <p className="text-xs text-rose-400 font-medium">تحذير: هذا الإجراء نهائي</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 whitespace-pre-line">
          {message}
        </p>

        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {cancelLabel}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-lg shadow-rose-600/20"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
