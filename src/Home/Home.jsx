import { motion } from 'framer-motion';
import HomeImg from '../assets/homeImg.webp';

const Home = () => {

  const wrapInSpan = (text, num) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        id={num === 'one' && index > 9 || num === 'two' && index < 11 ? 'clr' : ''}
        className={letter === ' ' ? 'space' : `text${num} text`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="w-full h-auto bg-[#C2C0B5] relative z-10 px-[5vw] pt-24 lg:pt-10 flex justify-between items-center flex-col lg:flex-row overflow-hidden">
      <div>
        <h1 className="HomeText leading-none mb-1 text-[clamp(45px,8vw,100px)] font-semibold font-[lightFont]">
          {wrapInSpan('A leading cosmetic', 'one')}
        </h1>
        <h1 className="HomeText leading-none text-[clamp(45px,8vw,100px)] font-semibold font-[lightFont]">
          {wrapInSpan('manufacture for the', 'two')}
        </h1>
        <h1 className="HomeText leading-none text-[clamp(45px,8vw,100px)] font-semibold font-[lightFont]">
          {wrapInSpan('world\'s greatest', 'three')}
        </h1>
        <h1 className="HomeText leading-none text-[clamp(45px,8vw,100px)] font-semibold font-[lightFont]">
          {wrapInSpan('beauty brands.', 'four')}
        </h1>
      </div>

      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [0, 80, 0], }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="HomeImg w-96 lg:w-[35vw] object-cover opacity-0"
        src={HomeImg}
        alt="Home Image"
      />
    </div>
  );
};

export default Home;
