const Button = ({ children }) => {
  return (
    <button className="lg:py-5 py-3  font-mono outline-none px-5 lg:px-7 bg-yellow-500 hover:bg-yellow-400 text-white rounded-full shadow-xl">
      {children}
    </button>
  );
};

export default Button;
