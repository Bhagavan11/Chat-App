const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 2 === 0
                  ? "bg-blue-400/20 animate-pulse"
                  : "bg-blue-400/10"
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
