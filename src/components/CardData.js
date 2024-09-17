import bilding from '../images/bilding.jpg'
import pill from '../images/pill.jpg'
import server from '../images/server.jpg'
import solar from '../images/solar.jpg'
const CardData = [
    {
      title: "Commercial Buildings",
      description: "Manage HVAC, electrical, plumbing, mechanical and other assets throughout asset lifecycle, from planning and construction to operation, maintenance, and eventual replacement.",
      image: bilding,
    },
    {
      title: "Data centers and processors",
      description: "Data center EAM solution that is crucial for optimizing the performance, reliability, and lifecycle of critical assets, ranging from racks, servers, cooling equipment to power units.",
      image: server, 
    },
    {
      title: "Healthcare & Life Science",
      description: "Asset register for infrastructure and medical equipment including location, condition, warranty, maintenance history to ensure compliance with healthcare & safety regulations.",
      image: pill,
    },
    {
      title: "Energy and other Utilities",
      description: "EAM solution to manage critical assets of nuclear, solar, wind energy, and organizations in the generation, transmission and distribution of electric, gas, water utility industries.",
      image: solar,
    },
  ];
  
  export default CardData;