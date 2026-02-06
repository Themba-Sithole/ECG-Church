interface BroadcastLowerThirdProps {
  badges?: Array<{
    text: string;
    type: 'now' | 'live' | 'label';
  }>;
  className?: string;
}

export function BroadcastLowerThird({ badges, className = '' }: BroadcastLowerThirdProps) {
  if (!badges || badges.length === 0) return null;

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {badges.map((badge, index) => {
        if (badge.type === 'now') {
          return (
            <div key={index} className="bg-white px-4 py-2 rounded flex items-center">
              <span className="font-['Montserrat'] font-black text-black text-sm uppercase tracking-wider">
                {badge.text}
              </span>
            </div>
          );
        }
        
        if (badge.type === 'live') {
          return (
            <div key={index} className="bg-primary px-4 py-2 rounded flex items-center gap-2 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-['Montserrat'] font-black text-white text-sm uppercase tracking-wider">
                {badge.text}
              </span>
            </div>
          );
        }
        
        // label type
        return (
          <div key={index} className="bg-black px-4 py-2 rounded border border-white/20">
            <span className="font-['Montserrat'] font-bold text-white text-sm uppercase tracking-wide">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
