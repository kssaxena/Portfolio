import { useContext } from "react";
import { TransitionContext } from "../App";

const TransitionLink = ({ to, children, className }) => {
  const transitionTo = useContext(TransitionContext);

  const handleClick = (e) => {
    e.preventDefault();
    transitionTo(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
