import { useState, useEffect } from "react";
import "./App.css";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

function App() {
  const [emoji, setEmoji] = useState("👩🏽‍💻");
  const emojiList = ["👩🏽‍💻", "👩🏾‍🔬", "🖥️", "💻", "📱"];
  const len = emojiList.length;
  const changeEmoji = () => {
    setEmoji(emojiList[Math.floor(Math.random() * len)]);
  };

  const [question, setQuestion] = useState("");
  const [punchline, setPunchline] = useState("Click for Joke");
  const [lineSwitch, setLineSwitch] = useState(false);

  let audio = new Audio("./audio.mp3");
  let audio2 = new Audio("./audio2.wav");

  useEffect(() => {
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data[0].question);
        setQuestion(data[0].question);
        setPunchline(data[0].punchline);
      });
  }, []);

  const playMusic = () => {
    audio.play();
  };
  const pauseMusic = () => {
    audio.pause();
  };
  const playClap = () => {
    audio2.play();
  };

  return (
    <div className="App bg-[#FBFBF1]">
      <div className="m-10">
        <div class="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="bg-[#F27143] text-transparent">*</div>
          <div className="bg-[#432818] text-transparent">*</div>
          <div className="bg-[#6F1D1B] text-transparent">*</div>
          <div className="bg-[#FFE6A7] text-transparent">*</div>
        </div>

        <div class="transform my-4 grid grid-flow-col hover:scale-105 transition-all">
          <div className="bg-[#FFE6A7] col-span-2 row-span-3 grid place-items-center">
            <img
              className="p-4 hover:animate-skip"
              src="/Girl_Tech_Geek_logo.webp"
              alt="Logo"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 grid-rows-10 gap-4">
          <div
            className="bg-[#F27143] col-span-1 row-span-6 grid place-items-center hover:cursor-pointer hover:scale-110 transition-all"
            onClick={changeEmoji}
          >
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-10xl xl:text-12xl transform transition-all hover:animate-skip ease-in-out">
              {emoji}
            </p>
          </div>
          <div className="bg-[#6F1D1B] text-white col-span-1 row-span-8 grid place-items-center hover:scale-110 transition-all">
            <img
              className="h-32 p-4 hover:animate-skip"
              src="./java.svg"
              alt="Java"
            />
          </div>
          <div className="bg-[#432818] text-white col-span-1 row-span-8 grid place-items-center hover:scale-110 transition-all">
            <div className="grid place-items-center">
              <img
                className="h-32 p-4 hover:animate-skip "
                src="./python.svg"
                alt="Python"
              />
            </div>
          </div>
          <div className="bg-[#6F1D1B] text-white col-span-1 row-span-8 grid place-items-center hover:scale-110 transition-all flex items-center justify-center">
            <div className="grid place-items-center">
              <img
                className="h-32 p-4 hover:animate-skip"
                src="./c++.svg"
                alt="C++"
              />
            </div>
          </div>
          <div
            className="bg-[#FFE6A7] col-span-3 row-span-5 grid place-items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://girltechgeek.org/products/tech-coaching";
            }}
          >
            <p className="break-words text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold font-mono hover:text-gray-600 hover:animate-skip">
              Get Tech Coaching Today!
            </p>
          </div>
        </div>

        <div className="grid my-4 grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4">
          <div className="bg-[#FFE6A7] row-span-2 text-transparent">*</div>
          <div
            className="bg-[#6F1D1B] grid items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out h-48"
            onClick={() => {
              setLineSwitch(!lineSwitch);
            }}
          >
            <div className="p-2 hover:animate-skip ease-in-out grow">
              {lineSwitch ? (
                <p className="break-words text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-white font-bold font-mono ">
                  {punchline}
                </p>
              ) : (
                <div className="hover:animate-skip ease-in-out">
                  <p className=" break-words text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  text-white font-mono">
                    Click For Random Programmer Joke
                  </p>
                  <p className=" break-words text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-white font-bold font-mono">
                    {question}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="bg-[#F27143] hover:cursor-pointer"
            onClick={playMusic}
          ></div>
          <div
            className="bg-[#6F1D1B] grid items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/girltechgeek/";
            }}
          >
            <div className="grid  place-items-center">
              <FaInstagramSquare className="text-5xl sm:text-6xl md:text-7xl lg:text-10xl xl:text-12xl text-white transform transition-all hover:animate-skip ease-in-out" />
            </div>
          </div>
          <div
            className=" bg-[#FFE6A7] md:bg-[#F27143] text-transparent hover:cursor-pointer"
            onClick={playClap}
          ></div>
          <div
            className="bg-[#432818] grid items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/deshayq/";
            }}
          >
            <div className="grid place-items-center">
              <FaLinkedin className="text-5xl sm:text-6xl md:text-7xl lg:text-10xl xl:text-12xl text-white content-center transform transition-all hover:animate-skip ease-in-out" />
            </div>
          </div>
          <div
            className="bg-[#F27143] text-transparent hover:cursor-pointer"
            onClick={pauseMusic}
          ></div>
        </div>

        <div class="grid my-4 grid-cols-4 grid-rows-1 gap-4">
          <div className="bg-[#F27143] text-transparent">*</div>
          <div className="bg-[#432818] text-transparent">*</div>
          <div className="bg-[#6F1D1B] text-transparent">*</div>
          <div className="bg-[#FFE6A7] text-transparent">*</div>
        </div>
      </div>
    </div>
  );
}

export default App;
