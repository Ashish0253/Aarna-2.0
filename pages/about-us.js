export default function AboutUs() {
  return (
    <div>
      <section className="p-10 grid grid-cols-2">
        <div></div>
        <div className="p-4">
          <div className="font-bold text-primary text-2xl p-2">Our Mission</div>
          <div className="p-2">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the
            industry&apos;s standard <br /> dummy text ever since the 1500s,
            when an <br /> unknown printer took a galley of type and <br />{" "}
            scrambled it to make a type specimen book.
          </div>
        </div>
      </section>
      <section className="p-10 grid grid-cols-2">
        <div className="p-4 grid justify-items-end">
          <div className="font-bold text-primary text-2xl p-2">Our Vision</div>
          <div className="p-2 flex text-right">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the
            industry&apos;s standard <br /> dummy text ever since the 1500s,
            when an <br /> unknown printer took a galley of type and <br />{" "}
            scrambled it to make a type specimen book.
          </div>
        </div>
        <div></div>
      </section>
      <section>
        <div>Our Values</div>
      </section>
      <section>
        <div className="border-2 border-transparent rounded-2xl  mx-[13%] my-20 pb-10 px-12">
          <div className="text-2xl font-bold text-primary py-8 ">Ethos</div>
          <div className="flex justify-start  text-sm font-semibold text-primary">
            <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
              Board of Directors
            </button>
            <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4 hover:bg-secondary hover:text-white ease-out">
              {" "}
              Senior Management
            </button>
            <button className="border-2 border-primary rounded-xl px-4 py-1 mr-4  hover:bg-secondary hover:text-white ease-out">
              Administration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
