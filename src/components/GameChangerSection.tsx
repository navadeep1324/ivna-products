// Benefit-Statistic pairs data - matching reference image order
const benefitPairs = [
  {
    icon: "/icons/fast icon.png",
    label: "Faster",
    description: "Faster client responses through real-time call tracking and alerts.",
    value: "40%",
    valueLabel: null,
  },
  {
    icon: "/icons/Overlay.png",
    label: "Better Team",
    description: "Performance with AI-driven insights and feedback",
    value: "60%",
    valueLabel: "UPTO",
  },
  {
    icon: "/icons/Overlay (1).png",
    label: "Saves Time",
    description: "Weekly by eliminating manual note-taking and follow-ups.",
    value: "6+",
    valueLabel: "hours",
  },
  {
    icon: "/icons/Overlay (2).png",
    label: "Visibility",
    description: "Visibility into every call, transcript, and action item.",
    value: "100%",
    valueLabel: null,
  },
  {
    icon: "/icons/lead conversion .png",
    label: "Lead Conversion",
    description: "Improves prospect lead conversion rates by 25% through prompt follow-ups.",
    value: "25%",
    valueLabel: null,
  },
  {
    icon: "/icons/workflow.png",
    label: "Workflow Efficiency",
    description: "Boosts workflow efficiency by up to 50% through platform integration.",
    value: "50%",
    valueLabel: "UP TO",
  },
];

export const GameChangerSection = () => {
  // Function to format headings with line breaks for two-word labels
  const formatHeading = (label: string) => {
    const words = label.split(' ');
    if (words.length === 2) {
      return (
        <>
          {words[0]} <br /> {words[1]}
        </>
      );
    }
    return label;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
      {/* Background image positioned vertically on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 z-0" style={{ opacity: 0.9 }}>
        <img 
          src="/dashboard/Untitled design (10) 1 (2).png" 
          alt="Background decoration" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[#003E94]">How Voica Redefines the Way</span>{" "}
            <span className="text-[#003E94]">Businesses Communicate</span>
          </h2>
        </div>
        
        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Experience the measurable edge that AI-powered communication brings.
          </p>
        </div>
        
        {/* Benefit-Statistic Pairs Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefitPairs.map((pair, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow mx-auto" style={{ maxWidth: '320px', marginTop: '25px' }}>
              {/* L-shaped background element - full width bottom, 50% width top */}
              {/* Horizontal part of L - full width at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E4F0FE] rounded-b-xl z-0 content-card"></div>
              {/* Vertical part of L - 50% width at the top */}
              <div className="absolute top-0 left-0  h-1/2 bg-[#E4F0FE] rounded-tr-xl z-0 heading-card"></div>
              
              {/* Number box - positioned closer to heading with reduced margin and added padding/margin */}
              <div className="absolute right-0 -mt-2 bg-white rounded-lg z-10 shadow-sm number-main-card"
                   style={{ 
                     border: '2px solid transparent',
                     backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #9BEAA6, #36C0ED)',
                     backgroundClip: 'padding-box, border-box',
                     backgroundOrigin: 'border-box',
                     padding: '1px 15px',
                     marginTop: '1.75rem',
                     marginRight: '2.75rem'
                   }}>
                <div className="p-4 text-center min-h-[80px] flex flex-col justify-center number-card">
                  <div className="text-xl font-bold text-gray-900">{pair.value}</div>
                  {pair.valueLabel && (
                    <div className="text-xs font-medium text-gray-600 uppercase mt-1">{pair.valueLabel}</div>
                  )}
                </div>
              </div>
              
              {/* Icon and heading - positioned in top left corner with reduced margin */}
              <div className="absolute top-0 left-0 mt-3 ml-3 z-10">
                <div className="flex items-start p-3">
                  <img
                    src={pair.icon}
                    alt={`${pair.label} icon`}
                    className="w-8 h-8"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 ml-2">
                    {formatHeading(pair.label)}
                  </h3>
                </div>
              </div>
              
              {/* Content area - adjusted padding to avoid overlap with numbers and icon/heading */}
              <div className="p-6 pt-20 relative z-10 heading-content">
                <p className="mt-1 text-sm text-gray-600 desc-content">{pair.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};