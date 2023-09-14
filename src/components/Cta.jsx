import Button from "./Button";

const Cta = () => {
  return (
    <section id="cta" className="bg-brightRed">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h2>
        <div>
          <Button color={"redOnWhite"} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
