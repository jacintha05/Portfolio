import websiteImg1 from '../assets/Acc.png';
import websiteImg2 from '../assets/bus.png';
import websiteImg3 from '../assets/vote.webp';
import websiteImg4 from '../assets/Admin.webp';
import websiteImg5 from '../assets/games.png';
import websiteImg6 from '../assets/speech.jpg';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Smart-Adapt Accounting - Built with MERN Stack and Power Automate',
                link: 'https://github.com/jacintha05/Smart-Adapt-Accounting.git'
            },
            {
                image: websiteImg3,
                description: 'Voting Application - Built with MERN Stack',
                link: 'https://github.com/jacintha05/Voting.git'
            },
            {
                image: websiteImg4,
                description: 'Student Admission Portal - Built with MERN Stack',
                link: 'https://github.com/jacintha05/Admin1.git'
            },
            {
                image: websiteImg5,
                description: 'Gaming Application - Built with JavaScript',
                link: 'https://github.com/jacintha05/Web-application-games-.git'
            },
            {
                image: websiteImg6,
                description: 'Speech Recognizing Games - Built with Machine Learning & JavaScript',
                link: 'https://github.com/jacintha05/Speech_Recognizing_Game.git'
            },
            {
                image: websiteImg2,
                description: 'Bus Pass Management System - Built with PHP and MySQL',
                link: 'https://github.com/jacintha05/Buspassmanagement.git'
            },
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects, built with PHP, React, JavaScript, and more. Check them out!</p>
                </div>
            </div>
            <div className="w-full px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {config.projects.map((project, index) => (
                        <div key={index} className="relative group bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            {/* Project Image */}
                            <img className="h-[200px] w-full object-cover rounded-lg" src={project.image} alt="Project Thumbnail" />

                            {/* Description and Button - Hidden initially, shown on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <p className="text-center text-lg font-semibold px-4">{project.description}</p>
                                <a className="btn bg-secondary text-white px-4 py-2 rounded-md mt-3 hover:bg-opacity-80 transition" 
                                   target="_blank" rel="noopener noreferrer" 
                                   href={project.link}>View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
