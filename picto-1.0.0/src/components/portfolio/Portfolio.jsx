import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card.jpg";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/Log.jpg";
import card4 from "../../assets/images/portfolio-images/graphics.jpg";


const projectData = [
  {
    id: 1,
    image: card1,
    category: "Web Application(PHP)",
    title: "GoBus-Web Based Bus E-Ticket Management System",
    description:
      "GoBus is a complete web-based bus ticket booking system designed to make bus travel easier and more organized for passengers, administrators, and transport companies. Users can search for available buses, purchase tickets online, make payments, and manage their bookings comfortably from home, no more waiting in long lines at the counter.",
    link: "https://github.com/nazrulislam01865/GoBus-Web-Based-Bus-E-Ticket-Management-System",
  },
  {
    id: 2,
    image: card2,
    category: "C# Application",
    title: "Car Rental Service-UTHAO",
    description:
      "CarRentalService is a C# application for managing car rentals. It allows users to browse available vehicles, make reservations, and manage bookings. Features include user authentication, rental duration tracking, pricing calculations, and admin control over vehicle inventory and transactions, offering a user-friendly experience.",
    link: "https://github.com/nazrulislam01865/CarRentalService-UTHAO-",
  },
  {
    id: 3,
    image: card3,
    category: "JAVA Swing Application",
    title: "Dhaka Route",
    description:
      "Dhaka Route is a java swing based application that will find the buses available on the user selected Route.A user can sign up and login into the app then they will be able to search for buses . An Admin can change the rate ratio per km and also add new buses and new locations to the system.",
    link: "https://github.com/nazrulislam01865/DhakaRoute",
  },
  {
    id: 4,
    image: card4,
    category: "Open GL C++ Application",
    title: "FindYourHome 2D based maze game",
    description:
      "FindYourHome is a 2D maze game developed using OpenGL in C++. Players navigate through a maze to find their home while avoiding obstacles. The game features simple controls, scoring based on time taken, and increasing difficulty levels, providing an engaging experience for players.",
    link: "https://github.com/nazrulislam01865/FindYourHome-2D-based-maze",
  },

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">University Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my university project, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
      </div>
    </div>
  );
};

export default Portfolio;
