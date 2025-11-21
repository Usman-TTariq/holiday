import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="relative bg-[#2D4DB1] py-10">
      <div className="absolute top-0 right-0 w-[180px] h-full">
        <Image
          className="w-full h-full"
          src="/images/portfolioright.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 left-0 w-[180px] h-full">
        <Image
          className="w-full h-full"
          src="/images/portfolioleft.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container">
        <div className="font-childhood text-white text-[60px] text-center">
          Explore Our Portfolio of Recent Children’s Books
        </div>
        <div className="text-white text-[16px] text-center px-[100px]">
          Explore our portfolio to see the children’s books we’ve brought to
          life! From heartwarming tales to thrilling adventures, our work
          highlights the creativity, care, and expertise we bring to every
          project.
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
