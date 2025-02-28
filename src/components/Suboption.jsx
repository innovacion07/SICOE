const SubOption = ({ suboption, onClick }) => {
  return (
    <div className="suboption" onClick={onClick}>
      <img src={suboption.icon} alt={suboption.name} className="suboption-icon" />
      {suboption.name}
    </div>
  );
};

export default SubOption;
