import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const DeleteModal = ({ isOpen, onClose, onConfirm, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-2xl"
            >
              <div className="relative p-6">
                <button 
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <AlertTriangle size={24} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">Delete Article?</h3>
                <p className="mb-6 text-gray-400">
                  Are you sure you want to delete <span className="font-semibold text-white">"{title}"</span>? 
                  This action cannot be undone and will remove the article from the public view.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              {/* Decorative bottom bar */}
              <div className="h-1 w-full bg-gradient-to-r from-red-600 to-orange-600" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
