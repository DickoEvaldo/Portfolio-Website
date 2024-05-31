import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 style={{ color:'#2d334a' }}className="mt-2 pl-10 font-bold text-4xl" >Hi,</h1>
        <h1 style={{ color:'#2d334a' }}className="mt-1.5 pl-10 font-bold text-4xl" >I'm Dicko Evaldo</h1>
        <h1 style={{ color:'#2d334a' }}className="mt-1.5 pl-10 font-bold text-4xl" >A Front End Developer</h1>
        <h1 style={{ color:'#2d334a' }}className="mt-8 pl-10 text-xl" >
          Fomo is the killer of studies - Alan turing 
        </h1>
        {/* <div className="avatar pl-10 mt-10">
          <div className="w-60 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div> */}
        <div className="mt-6 pl-9 flex justify-start gap-5">
          <a href="https://www.linkedin.com/in/dicko-evaldo-58a07b244/?trk=opento_sprofile_goalscard" target="_blank"><LinkedInIcon sx={{ fontSize: 50, color: '#2d334a' }} ></LinkedInIcon></a>
          <a href="https://github.com/DickoEvaldo" target="_blank"><GitHubIcon sx={{ fontSize: 48, color: '#2d334a' }} ></GitHubIcon></a>
          <button style= {{ backgroundColor:"#ffd803", color: 'black', border: '0px' }} className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
            </button>
        </div>
      </div>
      <div style={{ backgroundColor: '#e3f6f5' }}className="p-8 mt-60 ">
        <h2 style={{ color:'gray' }}className="pl-10 text-xl">Introduction</h2>
        <h1 style={{ color:'#2d334a' }}className="mt-2 pl-10 font-bold text-4xl" >About Me</h1>
        <h1 style={{ color:'#2d334a' }}className="mt-2 pl-10 text-xl" >
          I'm a Computer Science Student at UNSW that is especially interested in Web Development, Software Development, Databasae Management. I have several experience with Backend Development using JavaScript, Express.js and Java. I learn new skills quickly and able to adapt to new environments.
        </h1>

        <h1 style={{ color:'#2d334a' }}className="mt-20 pl-10 font-bold text-4xl" >My Projects</h1>
        <div className="mt-10 pl-10 grid grid-cols-3 gap-12">
          <div className="flex flex-col p-10 bg-white rounded-md">
            <h1 style={{ color:'#2d334a' }}className="font-bold text-2xl" >My Fridge</h1>
            <h1 style={{ color:'#2d334a' }}className="mt-5 text-xl" >With every scan, MyFridge provides personalized health ratings and recommendations tailored to your specific health conditions and goals, offering insightful guidance for each item.</h1>
          </div>
          <div className="flex flex-col p-10 bg-white rounded-md">
            <h1 style={{ color:'#2d334a' }}className="font-bold text-2xl" >Portfolio Website</h1>
            <h1 style={{ color:'#2d334a' }}className="mt-5 text-xl" >This comprehensive personal website showcases my professional journey, academic achievements, and creative endeavors.</h1>
          </div>
        </div>
      </div>

    </>
  );
}

