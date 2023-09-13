import "./JobExperience.scss";

export const JobExperience = ({ jobExp, isLast, childKey }) => {
  const { subtitle, title, period, learnt = [], logo, desc } = jobExp;

  return (
    <div
      style={{
        marginBottom: isLast ? "20px" : "0px",
      }}
      className="JobExperienceContainer"
      key={childKey}
    >
      <div className="top">
        <div className="companyLogoContainer">
          <div className="companyBackground">
            <img className="companyLogo" src={logo} alt={subtitle} />
          </div>
        </div>
        <div className="jobDetailContainer">
          <div className="jobTitle">{title}</div>
          <div className="companyName">{subtitle}</div>
          <small>{period}</small>
          {desc}
        </div>
      </div>
      {learnt.length > 0 && (
        <div className="bottom">
          {learnt.map((item, index) => {
            return (
              <div className="responsibilitySymbol">
                <code>-&nbsp;</code>
                <code key={index}>{item}</code>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
