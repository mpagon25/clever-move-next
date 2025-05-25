"use client";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import SectionCard from "../section-card/section-card";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <SectionCard
        className="bg-white w-xl"
        p="sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-start mb-6">
          {title && (
            <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
          )}
        </div>
        <div>{children}</div>
      </SectionCard>
    </div>,
    document.body
  );
}
