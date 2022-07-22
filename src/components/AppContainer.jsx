const AppContainer = ({ children }) => (
  <div className="backgrounds relative flex min-h-screen w-full flex-col items-center  justify-start space-y-24 bg-purple  pt-[8.5rem] ">
    <h1 className="text-center text-xl uppercase tracking-[.35em] text-white md:text-2xl">
      We're launching soon
    </h1>
    <div className="z-10 flex  items-center space-x-6 md:space-x-8">
      {children}
    </div>
    <div className="absolute bottom-14 flex space-x-9 ">
      <img src="/images/icon-facebook.svg" className="ficon w-7" />
      <img src="/images/icon-pinterest.svg" className="ficon w-7" />
      <img src="/images/icon-instagram.svg" className="ficon w-7" />
    </div>
  </div>
);

export default AppContainer;
