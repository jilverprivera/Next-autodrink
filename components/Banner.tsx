import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import Networks from "../components/Networks";

const Banner = () => {
  return (
    <div className="w-full h-screen relative principal">
      <Networks />
      <div className="mx-auto h-screen max-w-7xl relative flex flew-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold mb-8">
            !Tus bebidas en segundos!
          </h1>
          <div className="w-4/6">
            <p className="text-md mb-16 leading-7">
              Selecciona una bebida de nuestro catálogo, pagas y verás un
              espectáculo por parte de nuestro robot IRB-1200 realizando tu
              bebida.
            </p>
          </div>
          <button className="flex items-center justify-center">
            <span>Ver cómo funciona</span>
            <span className="ml-3 w-10 h-10 text-2xl text-white rounded-full flex items-center justify-center bg-red-400">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <motion.div className="">
          <Image
            src="/images/IRB-1200.webp"
            alt="bg"
            width={680}
            height={680}
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
