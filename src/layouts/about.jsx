import React from "react";
import Navbar from "../components/navbar";
import TopButtonsBanner from "../components/topButtonsBanner";
import CopyRight from "../components/copyright";
import Touch from "../components/touch";

const About = () => {
  return (
    <>
      <div className="select-none">
        <TopButtonsBanner />
        <Navbar />
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src=""
                alt="Dr. Sravanthi Tummalapalli"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">
                Dr. Sravanthi Tummalapalli
              </h2>
              <h5 className="text-lg">MDS</h5>
              <h4 className="text-xl">Prosthodontist & Implantologist</h4>
            </div>
            <p className="mt-5 text-start  md:text-lg lg:text-xl lg:w-[84rem] justify-self-center">
              Dr. Sravanthi Tummalapalli is a highly skilled and accomplished
              Prosthodontist and Implantologist with a passion for providing
              exceptional dental care. With an impressive academic background
              and numerous research publications in esteemed national and
              international journals (including the British Dental Journal,
              European journals, Indian and Romanian journals). Dr. Sravanthi
              Tummalapalli brings a wealth of knowledge to his precise. As a
              testament to his professional standing, he is a life member of the
              Indian Prosthodontic Society and the Dental Council of India. He
              possesses remarkable expertise in prosthetic rehabilitation of the
              full mouth with dental implants (fixed permanent teeth), removable
              complete dentures, partial dentures, veneers, and smile designing.
              He has attended numerous scientific conferences where he has
              presented his research work, further contributing to the
              advancement of dental knowledge. His presentations have been
              highly regarded, earning top ratings from his peers. He believes
              in putting patients at ease by taking the time to understand their
              unique needs and concerns. Dr. Sravanthi Tummalapalli’s commitment
              to excellence, extensive research contributions, and dedication to
              patient care make him an outstanding choice for individuals
              seeking top-notch prosthodontic and implant services. From him,
              you can expect personalized care, innovative solutions, and a
              commitment to helping you achieve a healthy, beautiful smile that
              enhances your overall quality of life.
            </p>
          </div>
        </div>
        <Touch />
        <CopyRight />
      </div>
    </>
  );
};

export default About;
