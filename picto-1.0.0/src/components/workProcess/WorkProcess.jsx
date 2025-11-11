import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Deans Award-\n AIUB",
    description:
      "In 2025, my academic efforts were recognized with the Dean's Award from AIUB for Best performance for Fall 2024-25, Spring 2024-25",
    svgPath:
      "M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.317.471l-6.223 2.49A.5.5 0 0 1 9 16.5v-1a.5.5 0 0 1 .317-.471l5.223-2.09A.5.5 0 0 0 15 12.5v-11a.5.5 0 0 1 .817-.387zM 0 12.5V1.5A.5.5 0 0 1 .817.113a.5.5 0 0 1 .817.387v11a.5.5 0 0 0 .466.499l5.223 2.09A.5.5 0 0 1 8 15.5v1a.5.5 0 0 1-.529.499l-6.223-2.49A.5.5 0 0 1 0 14v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.332l.332.133.5.2a.5.5 0 0 1 .29.471l.5 2.5a.5.5 0 0 1-.471.529l-.5.1a.5.5 0 0 1-.529-.471l-.5-2.5a.5.5 0 0 1 .29-.471l.5-.2h-.332a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1.332l.332.133.5.2a.5.5 0 0 1 .29.471l.5 2.5a.5.5 0 0 1-.471.529l-.5.1a.5.5 0 0 1-.529-.471l-.5-2.5a.5.5 0 0 1 .29-.471l.5-.2h-.332a.5.5 0 0 1-.5-.5v-1zM 4 11.5v-11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
  },
  {
    id: 2,
    title: "PHP Certified from \n UDEMY",
    description:
      "Completed a comprehensive PHP course on UDEMY, enhancing my web development skills and understanding of server-side scripting.",
    svgPath:
      "M8.78 1.632a.5.5 0 0 1 .44 0l6 3a.5.5 0 0 1 0 .736l-6 3a.5.5 0 0 1-.44 0l-6-3a.5.5 0 0 1 0-.736l6-3zM1.05 6.236a.5.5 0 0 0 0 .736l6.018 3.009a.5.5 0 0 0 .44 0l6.018-3.009a.5.5 0 0 0 0-.736L8.502 3.23a.5.5 0 0 0-.44 0L1.05 6.236zm13.9 0a.5.5 0 0 0 0 .736l6.018 3.009a.5.5 0 0 0 .44 0l6.018-3.009a.5.5 0 0 0 0-.736L8.502 3.23a.5.5 0 0 0-.44 0L1.05 6.236zM0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"
  },
  {
    id: 3,
    title: "Participated in \n MIST Hackathon",
    description:
      "Participated in the MIST Hackathon, collaborating with peers to develop innovative solutions under time constraints, enhancing my teamwork and problem-solving skills.",
    svgPath:
      "M8.78 1.632a.5.5 0 0 1 .44 0l6 3a.5.5 0 0 1 0 .736l-6 3a.5.5 0 0 1-.44 0l-6-3a.5.5 0 0 1 0-.736l6-3zM1.05 6.236a.5.5 0 0 0 0 .736l6.018 3.009a.5.5 0 0 0 .44 0l6.018-3.009a.5.5 0 0 0 0-.736L8.502 3.23a.5.5 0 0 0-.44 0L1.05 6.236zm13.9 0a.5.5 0 0 0 0 .736l6.018 3.009a.5.5 0 0 0 .44 0l6.018-3.009a.5.5 0 0 0 0-.736L8.502 3.23a.5.5 0 0 0-.44 0L1.05 6.236zM0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"
  },

];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Education</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          I am currently pursuing a BSc in Computer Science & Engineering at the <b>American International University-Bangladesh (AIUB)</b>, where I have been studying since September 2022. My coursework has provided me with a strong foundation in key areas, including <b>Advance.Net, Software Engineering, Data Structure, Algorithms, Advanced Computer Network, AI, and Database management</b>. I have consistently performed well in my <strong>Data Structure and Algorithms</strong> courses and was an active member of the <strong>AIUB Computer Club</strong>. Prior to university, I completed both my <strong>Higher Secondary School Certificate </strong>and <strong>Secondary School Certificate </strong> from <strong>MEH Arif College</strong>.
        </p>

      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
