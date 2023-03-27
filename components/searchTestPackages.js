export default function SearchTestPackages() {
  return (
    <div className="bg-white border-2 border-transparent rounded-2xl  mx-[15%] my-20 pb-5 px-12 shadow-xl">
      <div className="text-2xl font-bold text-primary pt-8 pb-4">
        Search Test and Packages
      </div>
      <div className="flex justify-start  text-xs font-semibold text-primary">
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-2 hover:bg-secondary hover:text-white ease-out">
          LifeStyle Disorder
        </button>
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-2 hover:bg-secondary hover:text-white ease-out">
          {" "}
          Conditions
        </button>
        <button className="border-2 border-primary rounded-2xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
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
