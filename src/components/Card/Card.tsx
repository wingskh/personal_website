import "./Card.scss";

export const Card = (props) => {
  return (
    <div style={props.style} className="standardCardContainer">
      {props.children}
    </div>
  );
};
