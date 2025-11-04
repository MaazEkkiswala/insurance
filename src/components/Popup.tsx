import { X } from 'lucide-react';

interface ItemDescription {
  label: string;
  info: string;
}

interface EnhancedServicePopupProps {
  open: boolean;
  onClose: () => void;
  title: string; // description.label
  info: string; // description.info
  siblings?: ItemDescription[]; // other items for tag badges
}

const EnhancedServicePopup = ({
  open,
  onClose,
  title,
  info,
  siblings = [],
}: EnhancedServicePopupProps) => {
  if (!open) return null;

  // Auto-extract bullet points by splitting into sentences
  const bullets = info.split('.').filter((w) => w.trim().length > 15);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-xl max-h-[85vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Label */}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">{info}</p>

        {/* Bullet Key Highlights */}
        {bullets.length > 2 && (
          <>
            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Key Highlights
            </h3>

            <ul className="mt-2 space-y-2">
              {bullets.slice(0, 5).map((b, idx) => (
                <li key={idx} className="text-gray-700 flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  {b.trim()}.
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Related Tags */}
        {siblings.length > 1 && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Other Options
            </h3>

            <div className="flex gap-2 flex-wrap">
              {siblings
                .filter((s) => s.label !== title)
                .map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-red-50 border border-red-300 text-red-700 rounded-full"
                  >
                    {item.label}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicePopup;
