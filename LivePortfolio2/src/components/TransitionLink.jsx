import { useContext } from "react";
import { TransitionContext } from "../App";

const TransitionLink = ({ to, children, className, close }) => {
  const transitionTo = useContext(TransitionContext);

  const handleClick = (e) => {
    e.preventDefault();
    transitionTo(to);
    close();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
