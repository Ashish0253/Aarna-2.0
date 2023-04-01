export default function WhyAarna() {
  return (
    <div>
      <div className=" border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Why Aarna Diagnostic Centre
        </div>
        <div className="grid grid-cols-3">
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">3 Lakh</div>
            <div>Samples Collected</div>
          </div>
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">50+</div>
            <div>Collection Centres</div>
          </div>
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">10 Lakh</div>
            <div>Total No. of Customers</div>
          </div>
          <div className="p-8 pt-0">
            <div className="font-bold text-xl text-tertiary">2</div>
            <div>Labs</div>
          </div>
          <div className="p-8 pt-0">
            <div className="font-bold text-xl text-tertiary">5000+</div>
            <div>Total No. of Tests & Panels</div>
          </div>
          <div className="p-8 pt-0">
            <div className="font-bold text-xl text-tertiary">300</div>
            <div>Tests per day</div>
          </div>
        </div>

        <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> Explore &gt;&gt;</button>{" "}
        </div>
      </div>

      <div className="border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Offer & Anouncement
        </div>
        <div className="text-tertiary flex justify-end underline text-base p-1 font-semibold m-4">
          <button> View All</button>{" "}
        </div>
      </div>

      <div className="border-2 border-transparent rounded-2xl mx-[15%] my-10 pb-3 text-black">
        <div className="font-bold text-2xl py-4 border-b-4 border-black">
          Quality
        </div>
        <div className="grid grid-cols-3">
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">600+</div>
            <div>
              Instruments used for real <br /> time QC monitoring
            </div>
          </div>
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">250+</div>
            <div>Quality Checks</div>
          </div>
          <div className="p-8">
            <div className="font-bold text-xl text-tertiary">15+</div>
            <div>
              Quality indicator monitored <br /> on daily basis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
