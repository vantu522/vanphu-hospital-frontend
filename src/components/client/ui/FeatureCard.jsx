// components/FeatureCard.jsx
const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="rounded-2xl shadow-md p-6 bg-white">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  