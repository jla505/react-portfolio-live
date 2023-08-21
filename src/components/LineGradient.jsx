const LineGradient = ({ width = "w-full" }) => { //default width
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;  //cant use hr with rainblue
};

export default LineGradient;
