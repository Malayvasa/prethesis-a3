
function App() {
  return (
    <div className="w-screen min-h-screen py-48 text-center bg-stone-100 text-stone-800 font-sans space-y-48 flex flex-col items-center justify-center">
      
      <div className="flex flex-col space-y-12 items-center">
      <div className="text-7xl w-1/2">The monkey that did everything <br/> on his own</div>
      <div className="text-2xl">by Malay Vasa</div>
      </div>
      


      <div className="relative md:h-[512px] md:w-[1024px] aspect-auto w-auto">
        <img className="md:h-[512px] md:w-[1024px] aspect-auto mix-blend-multiply w-auto" src="images/forest.png"></img>
        <img className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdOne" src="images/cold-1.png"></img>
        <img className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdTwo animation-delay-1000" src="images/cold-2.png"></img>
      </div>
      
      <div className="text-3xl mx-12 md:text-5xl w-1/2">It was a cold winter morning, the forest was covered in a thick fog.</div>

      <img className="md:h-[725px] md:w-[725px] aspect-auto mix-blend-multiply w-auto" src="images/owl.png"></img>

      <div className="text-3xl mx-12 md:text-5xl w-1/2">The wise owl, sat on a branch and looked down on the forest floor.</div>

      <div className="text-3xl mx-12 md:text-5xl w-1/2">He saw the animals curled up together, trying to save all the warmth they had.</div>

      <img className="md:h-[612px] md:w-[1224px] aspect-auto mix-blend-multiply w-auto" src="images/animals.png"></img>

      <div className="text-3xl mx-12 md:text-5xl w-1/2">In this bunch, there was a monkey in the corner.</div>
      
      <div className="flex flex-col text-3xl md:text-5xl">
        <div className="flex-shrink-0">
          Even though 
        </div>
        
        <div className="">
          he was <span className="text-8xl inline-block shake-little shake-constant"> shivering,</span>
        </div>

        <img className="md:h-[512px] md:w-[512px] aspect-auto mix-blend-multiply w-auto shake-little shake-constant" src="images/monkey.png"></img>
      </div>

      
      
      <div className="text-3xl mx-12 md:text-5xl w-1/2">
          he did not sit with the others.
      </div>

    </div>
  );
}

export default App;
