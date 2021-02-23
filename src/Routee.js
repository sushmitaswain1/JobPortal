


const Routee = ({path, children}) => {
    
  return window.location.pathname === path ? children : null;

};

export default Routee;