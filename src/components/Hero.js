import HeroImg from '../assets/heroi.webp';
import { AiOutlineTwitter,  AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md"; // Import Gmail icon



export default function Hero() {
    const config = {
        subtitle: "I'm a MERN-Stack developer!",
        description: "A fast learner with a knack for problem-solving, I thrive on turning challenges into opportunities. Innovation fuels me, and I love bringing ideas to life with smart, impactful solutions!",
        social: {
            linkedin: "https://www.linkedin.com/in/jacintha-priyadharshini-ab0463288/",
            email: "mailto:jacinthapriyadharshini05@gmail.com"
        }
    };
    


    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-white text-6xl font-hero-font">
              Hi, <br /> I'm <span className="text-black">Jacintha</span> Priyadharshini
              <p className="text-2xl">{config.subtitle}</p>
            </h1>
            <p className="text-lg text-gray-200 mt-4">{config.description}</p> {/* Added description */}
            <div className="flex py-10">
              <a href={config.social.linkedin} className="mr-5 hover:text-white">
                <AiOutlineLinkedin size={40} />
              </a>
              <a href={config.social.email} className="hover:text-white">
                <MdEmail size={40} />
              </a>
            </div>
          </div>
          <img className="md:w-1/4 w-2/4" src={HeroImg} />
        </section>
      );
    }      
