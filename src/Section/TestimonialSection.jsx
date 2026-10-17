import React from "react";
import Animated from "../Components/Animated";
import { testimonials } from "../data/data";
import { StarIcon } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="px-auto mt-44" id="testimonials">
      <div className="text-center mb-14">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-4">
            Loved by food lovers
          </p>
        </Animated>
        <Animated delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            What our Guests Say
          </h2>
        </Animated>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.15}
            className="border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="size-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                "{item.review}"
              </p>
            </div>
            <div className="flex gap-3 item-center mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-11 rounded-full object-cover shrink-0 border-[2px] border-[blue]"
              />
              <div>
                <p className="font-medium leading-tight mb-0.5">{item.name}</p>
                <p className="text-zinc-600">{item.location}</p>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
