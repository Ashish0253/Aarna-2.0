export default function SearchTestPackages() {
  return (
    <div className="bg-white border-2 border-transparent rounded-2xl sm:mx-[15%] mx-4 my-20 pb-5 px-10 shadow-xl">
      <div className="text-2xl font-bold text-black pt-8 pb-4">
        Search Test and Packages
      </div>
      <div className="sm:flex justify-start text-xs font-semibold text-primary ">
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-2 my-1 sm:my-0 hover:bg-tertiary hover:text-white ease-out">
          LifeStyle Disorder
        </button>
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-2 hover:bg-tertiary hover:text-white ease-out">
          {" "}
          Conditions
        </button>
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-4  hover:bg-tertiary hover:text-white ease-out">
          {" "}
          Alphabet
        </button>
      </div>
      <div className="text-gray-500 flex justify-end underline text-sm p-1 font-semibold">
        <button> View All</button>{" "}
      </div>
    </div>
  );
}
