
function App() {
  return (
    <div className="w-screen min-h-screen leading-extra-loose py-24 md:py-48 text-center bg-stone-100 text-stone-800 font-sans space-y-24 md:space-y-48 flex flex-col items-center justify-center">
      
      <div className="flex flex-col space-y-12 items-center">
      <div className="text-4xl md:text-7xl w-1/2">The monkey that did everything <br/> on his own</div>
      <div className="text-2xl">by Malay Vasa</div>
      </div>
      


      <div className="relative md:h-[512px] md:w-[1024px] aspect-auto w-auto">
        <img className="md:h-[512px] md:w-[1024px] aspect-auto mix-blend-multiply w-auto" src="images/forest.png"></img>
        <img className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdOne" src="images/cold-1.png"></img>
        <img className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdTwo animation-delay-1000" src="images/cold-2.png"></img>
      </div>
      
      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">It was a cold winter morning, the forest was covered in a thick fog.</div>

      <img className="md:h-[725px] md:w-[725px] aspect-auto mix-blend-multiply w-auto" src="images/owl.png"></img>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">The wise owl, sat on a branch and looked down on the forest floor.</div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">He saw the animals curled up together, trying to save all the warmth they had.</div>

      <img className="md:h-[612px] md:w-[1224px] aspect-auto mix-blend-multiply w-auto" src="images/animals.png"></img>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">In this bunch, there was a monkey in the corner.</div>
      
      <div className="flex flex-col text-2xl md:text-5xl items-center">
        <div className="flex-shrink-0">
          Even though he was 
        </div>
        
        <div className="">
           <span className="text-4xl md:text-8xl inline-block shake-little shake-constant"> shivering,</span>
        </div>

        <img className="md:h-[512px] md:w-[512px] aspect-auto mix-blend-multiply w-auto shake-little shake-constant" src="images/monkey.png"></img>
      
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          he did not sit with the others.
      </div>
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        The animals, all wanted to find an escape from the <span className="shake-little shake-constant">cold.</span> After a lot of discussion, they decided to build a bonfire.
      </div>

      <img className="md:h-[612px] md:w-[612px] aspect-auto mix-blend-multiply w-auto" src="images/bonfire.png"></img>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        The monkey remembered that he had seen a bunch of humans build a bonfire before.
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He needed three things to build one :
        </div>
      
        <div className="text-2xl mx-12 md:text-5xl">
          stones, sticks and dry hay.
        </div>

        <div className="flex flex-col md:flex-row pt-32">
        <div>
          <img className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply" src="images/stones.png"></img>
        </div>

        <div>
          <img className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply" src="images/wood.png"></img>
        </div>

        <div>
          <img className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply" src="images/hay.png"></img>
        </div>
      </div>
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        He decided to set out on building a perfect bonfire all by himself.
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        To get the first ingredient, he went to the lake.
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        Although he did not know how to swim he was determined to get the stones from the bottom of the lake himself.
      </div>

      <img className="md:h-[725px] md:w-[1450px] aspect-auto mix-blend-multiply w-auto" src="images/lake.png"></img>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        Seeing how well the crocodile was swimming, he tries to copy him. 
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        After several failed attempts he was approached by the otter.
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        The Otter offers to help the monkey by getting him the large stones from the bottom of the lake. 
      </div>

      <img className="md:h-[725px] md:w-[1450px] aspect-auto mix-blend-multiply w-auto" src="images/otter.png"></img>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        The monkey refuses to take help, and continues to copy the crocodile and fails again.
      </div>

      <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
        Disappointed by his inability to swim, he picks up the smaller rocks from the edge of the lake.
      </div>

      <img className="md:h-[725px] md:w-[1450px] aspect-auto mix-blend-multiply w-auto" src="images/small-rocks.png"></img>

    </div>
  );
}

export default App;
