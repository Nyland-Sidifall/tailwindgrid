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

  useEffect(() => {
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data[0].question);
        setQuestion(data[0].question);
        setPunchline(data[0].punchline);
      });
  }, []);

  return (
    <div className="App bg-[#FBFBF1]">
      <div className="m-10">
        <div class="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="bg-[#F27143] text-transparent">*</div>
          <div className="bg-[#432818] text-transparent">*</div>
          <div className="bg-[#6F1D1B] text-transparent">*</div>
          <div className="bg-[#FFE6A7] text-transparent">*</div>
        </div>

        <div class="my-4 grid grid-flow-col hover:scale-105 transition-all">
          <div className="bg-[#FFE6A7] col-span-2 row-span-3 grid place-items-center">
            <img className="p-4" src="/Girl_Tech_Geek_logo.webp" alt="Logo" />
          </div>
        </div>

        <div class="grid grid-cols-4 grid-rows-10 gap-4">
          <div
            className="bg-[#F27143] col-span-1 row-span-6 grid place-items-center hover:cursor-pointer hover:scale-110 transition-all"
            onClick={changeEmoji}
          >
            <p className="text-8xl transition-all ease-in-out">{emoji}</p>
          </div>
          <div className="bg-[#6F1D1B] text-white col-span-1 row-span-8 grid place-items-center">
            <p className="text-3xl">Java</p>
          </div>
          <div className="bg-[#432818] text-white col-span-1 row-span-8 grid place-items-center">
            <p className="text-3xl">Python</p>
          </div>
          <div className="bg-[#6F1D1B] text-white col-span-1 row-span-8 grid place-items-center">
            <p className="text-3xl">C++</p>
          </div>
          <div
            className="bg-[#FFE6A7] col-span-3 row-span-5 grid place-items-center hover:cursor-pointer hover:scale-110 transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://girltechgeek.org/products/tech-coaching";
            }}
          >
            <p className="text-xl font-bold">Get Tech Coaching Today!</p>
          </div>
        </div>

        <div className="grid my-4 grid-cols-4 grid-rows-2 gap-4">
          <div className="bg-[#FFE6A7] row-span-2 text-transparent">*</div>
          <div
            className="bg-[#6F1D1B] grid items-center hover:scale-110 transition-all ease-in-out"
            onClick={() => {
              setLineSwitch(!lineSwitch);
            }}
          >
            <div className="p-2">
              {lineSwitch ? (
                <p className="text-s text-white hover:cursor-pointer font-bold">
                  {punchline}
                </p>
              ) : (
                <div>
                  <p className="text-s text-white hover:cursor-pointer">
                    Click For Random Programmer Joke
                  </p>
                  <p className="text-xl text-white hover:cursor-pointer font-bold">
                    {question}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#F27143] text-transparent">2</div>
          <div
            className="bg-[#6F1D1B] grid items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/girltechgeek/";
            }}
          >
            <div className="grid  place-items-center">
              <FaInstagramSquare className="text-6xl text-white" />
            </div>
          </div>
          <div className="bg-[#F27143] text-transparent">4</div>
          <div
            className="bg-[#432818] grid items-center hover:scale-110 hover:cursor-pointer transition-all ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/deshayq/";
            }}
          >
            <div className="grid place-items-center">
              <FaLinkedin className="text-6xl text-white content-center" />
            </div>
          </div>
          <div className="bg-[#F27143] text-transparent">6</div>
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