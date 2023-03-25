export default function Departments() {
  return (
    <div>
      <div className="border-2 border-transparent rounded-2xl  mx-[13%] my-20 pb-10 px-12">
        <div className="flex justify-start  text-sm font-semibold text-primary">
          <button className="border-2 border-primary rounded-xl px-8 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
            Pathology
          </button>
          <button className="border-2 border-primary rounded-xl px-8 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
            {" "}
            Radiology
          </button>
        </div>
      </div>
    </div>
  );
}
