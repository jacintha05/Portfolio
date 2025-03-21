import AboutImg from '../assets/me.webp';

export default function About () {
    const config  = {
        line1: 'Hi, I am  Jacintha Priyadharshini J. A passionate MERN Stack Developer who loves crafting smart, scalable web solutions and automating workflows with Power Automate!',
        line2: 'With expertise in React.js, Tailwind CSS, Bootstrap, and AngularJS on the frontend, and Node.js, Express.js, MongoDB, and Mongoose on the backend, I build seamless and efficient applications.',
        line3: 'As a fresher, I am eager to innovate, solve challenges, and bring ideas to life through code and automation! 🚀'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
        <img src={AboutImg} className="w-72 h-80 md:w-96 md:h-[450px] object-cover mx-auto" />


        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}