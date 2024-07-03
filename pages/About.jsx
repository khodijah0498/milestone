import React from "react";
const about_image = "/images/Get_backtoschool.jpeg";

const About = () => {
  return (
    <div className="md:pt-2.5 md:pb-4 px-6 md:px-mid mb-36">
      <div className="md:grid py-10 md:py-mid grid-cols-2 ">
        <div className="flex  h-full w-full justify-start md:h-[468px] md:w-[462px]">
          <img src={about_image} className="" alt="About Image" />
        </div>
        <div className="">
          <span className="text-secondary text-2xl font-bold leading-[33.6px]">
            Who we are
          </span>
          <div className="md:h-[777px] text-lg font-medium leading-[25.2px] text-justify flex gap-10 flex-col">
            <p>
              Milestone Agenda for Youth Empowerment and Development Initiative,
              MAFYEDI, is a non-profit organization that is dedicated to
              empowering young people to drive social change and development in
              their local communities. As an organization, we believe in the
              transformative power of education to liberate young people and
              change their lives for the better. We, therefore, work to defend
              and promote quality education as a fundamental right of every
              child irrespective of their socio-economic background, religion
              and ethnicity. As part of our commitment to youth development, we
              actively advocate for the formulation of youth-centric policies
              and interventions.
            </p>
            <div>
              <span className="text-primary text-2xl font-bold leading-[33.6px]">
                What we do
              </span>
              <p>
                <ul className="list-disc">
                  <li>
                    We campaign for access to quality public education,
                    especially at the basic level
                  </li>
                  <li>
                    We promote the understanding and implementation of the
                    United Nations Sustainable Development Goals, SDGs, with
                    particular focus on Goals 4 (Quality Education), 5 (Gender
                    Equality) and 13 (Climate Action).
                  </li>
                  <li>
                    We advocate people-centric governance and responsible
                    leadership for sustainable development{" "}
                  </li>
                  <li>
                    We promote and encourage youth participation in politics,
                    leadership and decision making.{" "}
                  </li>
                  <li>We advance gender equality and girl-child development</li>
                  <li>We promote climate education and climate justice</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary md:h-[226px] md:w-[608px] p-12 rounded-3xl">
        <span className="text- text-lg font-semibold">OUR MISSION</span>
        <p className="text-xl ">
          To empower and mobilise young people to address our generation's most
          pressing issues
        </p>
      </div>
    </div>
  );
};

export default About;
