const Button = ({ children }) => {
  return (
    <button className="w-full bg-blue-500 bottom-0  text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-600 transition-colors">
      {children}
    </button>
  );
};
export default Button;
