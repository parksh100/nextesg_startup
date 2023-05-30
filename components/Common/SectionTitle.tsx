const SectionTitle = ({
  title,
  paragraph1,
  paragraph2,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph1: string;
  paragraph2: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className=" text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph1}
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph2}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
