import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "../../constants/constant";

const ServiceItem = ({ service, index, setActive }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;

    const distance = Math.abs(elementCenter - viewportCenter);

    setActive((prev) => {
      // Only update if this item is closer than previous
      if (prev === index) return prev;
      return index;
    });
  }, [isInView, index, setActive]);

  return (
    <div
      ref={ref}
      className="py-20 border-b border-neutral-700 flex flex-col gap-6"
    >
      <h3 className="text-[72px] font-interBold">{service.title}</h3>
      <p className="text-neutral-400 max-w-2xl">{service.description}</p>

      <div className="mt-4 text-neutral-300 flex flex-col gap-5">
        {service.points.map((point, i) => (
          <div key={i} className="flex items-center gap-3 font-montserrat">
            <span className="text-[#F05038]">—</span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-end items-start gap-36 border-t border-gray-800 py-10 px-5 text-neutral-200 text-[18px] min-h-screen relative">
      <h1 className="text-[#F05038] sticky top-0 left-0">// Services</h1>
      <section className="text-neutral-100 px-10 py-32 w-full">
        <div className="flex gap-32 ">
          <div className="sticky top-1/4 -translate-y-1/2 h-fit">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[352px] leading-[220px] font-dmMono text-transparent 
             [-webkit-text-stroke:2px_rgba(255,255,255,0.50)]"
            >
              {services[activeIndex].number}
            </motion.span>
          </div>

          <div className="flex-1 ">
            {services.map((service, index) => (
              <ServiceItem
                key={service.number}
                service={service}
                index={index}
                setActive={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
