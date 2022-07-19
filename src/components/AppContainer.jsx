const AppContainer = ({ children }) => (
  <div className="relative flex min-h-screen w-full flex-col items-center  justify-center space-y-16 bg-purple bg-[url('/images/pattern-hills.svg')] bg-bottom bg-no-repeat  font-sans text-7xl font-bold text-softRed">
    <h1 className="text-4xl font-bold uppercase text-white">
      We're launching soon
    </h1>
    <img src="/images/bg-stars.svg" className="absolute top-0 " alt="" />
    <div className="flex items-center space-x-8">{children}</div>
  </div>
);

export default AppContainer;
