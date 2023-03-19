export default function SearchTestPackages() {
  return (
    <div className="border-2 border-transparent rounded-2xl  mx-[13%] my-20 pb-10 px-12 shadow-primary">
      <div className="text-2xl font-bold text-primary py-8 ">
        Search Test and Packages
      </div>
      <div className="flex justify-start  text-sm font-semibold text-primary">
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
          LifeStyle Disorder
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
          {" "}
          Conditions
        </button>
        <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
          {" "}
          Alphabet
        </button>
      </div>
      <div className="flex justify-end underline text-base p-1 font-semibold m-4">
        <button> View All</button>{" "}
      </div>
    </div>
  );
}
