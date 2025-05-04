const MingoLogo = ({ size = "9", className = "" }) => {
  return (
    <img
      src="/mingo/android-chrome-512x512.png"
      alt="Mingo Logo"
      className={`size-${size} ${className}`}
    />
  );
};

export default MingoLogo; 