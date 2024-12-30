const AppIcon = ({ color, size = "md" }) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };
  return (
    <div className={`${color} ${sizes[size]} rounded-2xl shadow-lg`}></div>
  );
};
export default AppIcon;
