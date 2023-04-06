import Breadcrumb from "@/components/Breadcrumb";

export default function Departments() {
  const breadcrumbData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Departments",
      link: "/departments",
    },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbData} />
      <div className="border-2 border-transparent rounded-2xl  mx-[15%] my-5 pb-10">
        <div className="flex justify-start  text-xs font-semibold text-primary">
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
