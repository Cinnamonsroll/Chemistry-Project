import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const cumulativeOffset = (element: any) => {
  let top = 0, left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
};
export default function Home() {
  useEffect(() => {
    document.onmousemove = (event) => {
      const $card = document.querySelector(".card");
      const e = event || window.event;
      const x = (e.pageX - cumulativeOffset($card).left - (350 / 2)) * -1 / 100;
      const y = (e.pageY - cumulativeOffset($card).top - (350 / 2)) * -1 / 100;

      const matrix = [
        [1, 0, 0, -x * 0.00055],
        [0, 1, 0, -y * 0.00055],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ];
      //@ts-ignore
      if ($card) $card.style.transform = `matrix3d(${matrix.toString()})`;
    }
  }, [])
  return (
    <div className="w-full h-screen flex justify-center items-center grid-cols-3">
      <div className="h-full w-full flex justify-center items-center flex-col gap-4" >
        <div className="w-6/12 h-[1px] border-slate-600 border-dashed border-2"></div>
        <div className="w-6/12">
          <h2 className="text-2xl text-[#d1d0c5] font-semibold">Discovery:</h2>
          <Link href={"https://www.rsc.org/periodic-table/element/87/francium"} passHref target="_blank">
            <p className="text-[#d1d0c5] text-base hover:underline hover:cursor-pointer break-words">Francium was discovered in <span className="text-[#e2b714]">1939</span> by <span className="text-[#e2b714]">Marguerite Perey</span> at the <span className="text-[#e2b714]">Curie Institute in Paris</span>.  She had purified a sample of actinium free of all its known radioactive impurities and yet its radioactivity still indicated another element was present, and which she rightly deduced was the missing element 87.</p>
          </Link>
        </div>
        <div className="w-6/12 h-1 border-slate-600 border-dashed border-2"></div>
      </div>
      <div className="h-full w-full flex justify-center items-center" >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.2,
            delay: 0,
          }}
          style={{ perspective: "600deg" }}
          className="w-40 h-40 rounded-md bg-[#101010] card hover:cursor-pointer glow grid grid-rows-3 flex-col ">
          <div className="flex justify-start p-2">
            <p className="text-sm text-white">87</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-white text-2xl">Fr</h1>
            <p className="text-sm text-white">Francium</p>
          </div>
          <div className="flex justify-center items-end pb-2">
            <p className="text-sm text-white">223</p>
          </div>
        </motion.div>
      </div>
      <div className="h-full w-full flex justify-center items-center flex-col gap-4" >
        <div className="w-6/12 h-[1px] border-slate-600 border-dashed border-2"></div>
        <div className="w-6/12">
          <h2 className="text-2xl text-[#d1d0c5] font-semibold">Five Things we Can't do Without Francium:</h2>
          <Link href="https://www.rsc.org/periodic-table/element/87/francium" target="_blank">
            <p className="text-[#d1d0c5] text-base hover:underline hover:cursor-pointer break-words">Francium has many use cases, they may not be as common as something like <span className="text-[#e2b714]">oxygen</span> but the few uses it has are very important, one of the most importance is it is used to help cure cancer. It is also commonly used within the field of research; it has played a <span className="font-bold">huge</span> role in the atomic structure. It is also used in many spectroscopic experiments. Francium is also a highly radioactive metal, and since it exhibits such a short half-life, it does not have more impact on the enviornment.</p>
          </Link>
        </div>
        <div className="w-6/12 h-1 border-slate-600 border-dashed border-2"></div>
      </div>
    </div>
  )
}
