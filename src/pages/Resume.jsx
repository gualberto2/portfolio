import React from "react";

const Resume = () => {
  return (
    <section className="px-2 max-w-[95%] mx-auto 2xl:max-w-6xl">
      <h1 className="pt-20 flex flex-col text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-8">
        Resume
      </h1>
      <div>
        <h2>Feel free to download my resume if you would like =)</h2>
        <div className="bg-[#ededed] p-4">
          <iframe
            src="../embeds/portfolio.pdf"
            title="Resume PDF"
            width="100%"
            height="500px"
            type="application/pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
