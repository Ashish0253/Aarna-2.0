import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ sidebar }) {
  return (
    <div>
      {sidebar && (
        <div className="sm:block hidden my-10 grid-rows-4 justify-end fixed right-2 bg-white h-[360px] border-2 border-transparent rounded-lg shadow-lg z-10 text-xs text-primary font-bold">
          <div className="">
            <div className="border-b-2 border-gray-300 grid justify-items-center p-2">
              <Link
                href="/nearest-centre"
                className="grid justify-items-center"
              >
                <div>
                  <Image
                    src="/sidebar/LOCATION 1.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">Nearest</div>
                <div>Centre</div>
              </Link>
            </div>
            <div className="border-b-2 border-gray-300 p-2">
              <Link href="/book-a-test" className="grid justify-items-center">
                <div>
                  <Image
                    src="/sidebar/BOOK A TEST 2.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">Book a</div>
                <div> Test</div>
              </Link>
            </div>

            <div className="border-b-2 border-gray-300 grid justify-items-center p-2">
              <Link href="/" className="grid justify-items-center">
                <div>
                  <Image
                    src="/sidebar/PRESCRIPTION 1.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">Upload </div>
                <div> Prescription</div>
              </Link>
            </div>
            <div className=" grid justify-items-center p-2">
              <Link href="/" className="grid justify-items-center">
                <div>
                  <Image
                    src="/sidebar/DOWNLOAD REPORT 2.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="">Download </div>
                <div> Report</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
