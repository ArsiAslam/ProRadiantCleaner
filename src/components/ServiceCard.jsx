const ServiceCard = ({ service, index, hoveredCard, setHoveredCard }) => {
  return (
    <div
      key={index}
      className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 h-80 ${
        hoveredCard === index ? 'scale-105 z-10' : 'scale-100'
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-all duration-500 ${
          hoveredCard === index ? 'bg-black/40' : 'bg-black/60'
        }`}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 text-white">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-6 transition-all duration-500 ${
            hoveredCard === index ? 'translate-y-0 opacity-100 scale-110' : 'translate-y-4 opacity-80'
          }`}
        >
          {service.icon}
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-2">
            {service.title}
          </h3>
          <p
            className={`text-white/90 transition-all duration-500 ${
              hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {service.description}
          </p>
        </div>
        
        {/* Read More Button */}
        <div
          className={`flex justify-end transition-all duration-500 ${
            hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button className="flex items-center gap-2 text-white font-medium group/btn hover:text-blue-300">
            Read More
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
      
      {/* Hover Effect Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/10 transition-all duration-700 ${
            hoveredCard === index ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
          }`}
        ></div>
        <div
          className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-white/10 transition-all duration-700 ${
            hoveredCard === index ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ServiceCard;