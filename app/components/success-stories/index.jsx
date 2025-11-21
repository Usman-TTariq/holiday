import Image from "next/image";
// import Button from "../common/button";
import TestimonialCard from "../testimonial-card";

const SuccessStories = () => {

//   const testimonials = [
//     {
//       name: "Emily K",
//       desc: "I stumbled upon Hollywood Books Publisher when I was at a crossroads with my writing project. Their ghostwriting services are the real deal. They took my concept and turned it into a page-turner, But what really sets them apart is their attention to detail. They don't just write; they collaborate with you and value your feedback. Trust me, they're the dream team for aspiring authors.",
//       image: ""
//     },
//   ];

  return (
    <div className="relative py-10 bg-[#F3F3F3]">
      <div className="absolute top-0 left-0 w-[10%]">
        <Image
          src="/images/publishtop.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 left-[8%] w-[12%]">
        <Image
          src="/images/publishpaperstar.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 left-[5%] w-[12%]">
        <Image
          src="/images/publishbookface.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 right-0 w-[12%]">
        <Image
          src="/images/publishright.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[12%]">
        <Image
          src="/images/publisherbottombookface.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container">
        <div className="font-childhood text-black text-[60px] text-center">
          Success Stories from Our Authors
        </div>
      </div>
      <TestimonialCard />
    </div>
  );
};

export default SuccessStories;
