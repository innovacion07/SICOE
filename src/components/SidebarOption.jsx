import SubOption from "./SubOption";

const SidebarOption = ({
  option,
  activeOption,
  toggleSubOption,
  suboptions,
  handleSuboptionClick,
}) => {
  return (
    <div>
      <div
        className={`option ${activeOption === option.name ? "active" : ""}`}
        onClick={() => toggleSubOption(option.name)}
      >
        <img
          src={activeOption === option.name ? option.pressedIcon : option.icon}
          alt={option.name}
          className="option-icon"
        />
        {option.name}
      </div>

      {activeOption === option.name && suboptions && (
        <div className="suboptions">
          {suboptions.map((suboption, subindex) => (
            <SubOption
              key={subindex}
              suboption={suboption}
              onClick={() => handleSuboptionClick(suboption)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarOption;
