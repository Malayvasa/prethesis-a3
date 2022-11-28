import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Children, useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  hidden: { opacity: 0, y: 0 },
};

const Box = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="flex flex-col items-center box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="w-screen min-h-screen leading-extra-loose py-24 md:py-48 text-center bg-white text-stone-900 font-sans space-y-48 md:space-y-48 flex flex-col items-center justify-center">
      <Box>
        <div className="flex flex-col space-y-12 items-center">
          <div className="text-4xl md:text-7xl w-1/2">
            The monkey that did everything <br /> on his own
          </div>
          <div className="text-2xl">by Malay Vasa</div>
        </div>
      </Box>

      <Box>
        <div className="relative md:h-[512px] md:w-[1024px] aspect-auto w-auto">
          <img
            className="md:h-[512px] md:w-[1024px] aspect-auto mix-blend-multiply w-auto"
            src="images/forest.png"
          ></img>
          <img
            className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdOne"
            src="images/cold-1.png"
          ></img>
          <img
            className="md:h-[512px] md:w-[1024px] aspect-auto w-auto absolute top-0 animate-moveColdTwo animation-delay-1000"
            src="images/cold-2.png"
          ></img>
        </div>

        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          It was a cold winter morning, the forest was covered in a thick fog.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[725px] md:w-[725px] aspect-auto mix-blend-multiply w-auto"
          src="images/owl.gif"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          The wise owl, sat on a branch and looked down on the forest floor.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He saw the animals curled up together, trying to save all the warmth
          they had.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[612px] md:w-[1224px] aspect-auto mix-blend-multiply w-auto"
          src="images/animals.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          In this bunch, there was a monkey in the corner.
        </div>
      </Box>

      <Box>
        <div className="flex flex-col text-2xl md:text-5xl items-center">
          <div className="flex-shrink-0">Even though he was</div>

          <div className="">
            <span className="text-4xl md:text-8xl inline-block shake-little shake-constant">
              {' '}
              shivering,
            </span>
          </div>

          <Box>
            <img
              className="md:h-[512px] md:w-[512px] aspect-auto mix-blend-multiply w-auto shake-little shake-constant"
              src="images/monkey.png"
            ></img>
          </Box>

          <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
            he did not sit with the others.
          </div>
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          The animals, all wanted to find an escape from the{' '}
          <span className="shake-little shake-constant">cold.</span> After a lot
          of discussion, they decided to build a bonfire.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[612px] md:w-[612px] aspect-auto mix-blend-multiply w-auto"
          src="images/bonfire.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          The monkey remembered that he had seen a bunch of humans build a
          bonfire before.
        </div>
      </Box>

      <Box>
        <div className="flex flex-col items-center">
          <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
            He needed three things to build one :
          </div>

          <div className="text-2xl mx-12 md:text-5xl">
            stones, sticks and dry hay.
          </div>

          <div className="flex flex-col md:flex-row pt-32">
            <Box>
              <div>
                <img
                  className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply"
                  src="images/stones.png"
                ></img>
              </div>
            </Box>

            <Box>
              <div>
                <img
                  className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply"
                  src="images/wood.png"
                ></img>
              </div>
            </Box>

            <Box>
              <div>
                <img
                  className="h-[200px] w-[200px] md:h-[450px] md:w-[450px] aspect-auto mix-blend-multiply"
                  src="images/hay.png"
                ></img>
              </div>
            </Box>
          </div>
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He decided to set out on building a perfect bonfire all by himself.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          To get the first ingredient, he went to the lake.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Although he did not know how to swim he was determined to get the
          stones from the bottom of the lake himself.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/lake.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Seeing how well the crocodile was swimming, he tries to copy him.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          After several failed attempts he was approached by the otter.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/otter.png"
        ></img>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/otter-profile.png"
            ></img>
          </div>
          <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            I can help you get the large stones from the bottom of the lake, I know how to swim.
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
        <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            No I'm learning from the crocodile, I can do it myself.
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
         
        </div>
      </Box>

    
      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          The monkey continues to copy the crocodile but isn't able to get deeper. 
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Disappointed by his inability to swim, he picks up the smaller rocks
          from the edge of the lake.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/small-rocks.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Next, He starts looking for hay. The forest floor is cold and damp,
          and he is unable to find anything dry.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He climbs on trees and looks all over the place, while doing so a crow
          notices and approaches him.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          "I have seen dry leaves by the large oak tree" says the crow, "that
          should also work for the fire".
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
          <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            No, I've only seen the humans use hay, leaves won't work
          </div>
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He picks up damp hay and moves ahead.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/damp-hay.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          To get the last ingredient, the sticks, he climbs onto the tree and
          jumps on the branch hoping to break it.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          But in doing that he ends up falling and hurting himself.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/monkey-fall.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Seeing him hurt, an elephant approaches him.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/elephant.png"
        ></img>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/elephant-profile.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            You'll hurt yourself if you keep doing that. I can break some
            branches for you with my trunk, let me help you.
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="text-2xl text-black md:text-5xl md:w-1/2 flex-shrink">
            No you can't get sticks that way, I'll do it myself
          </div>

          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          He again tries and is only able to take the few branches he could
          collect.
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          At night, tired and disappointed, he tries making the bonfire.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/bonfire-make.png"
        ></img>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
          <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            I've failed, this isn't anything like what I saw the humans make
          </div>
        </div>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Frustrated, he curls up and sulks in the corner trying to fall asleep.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/sad-monkey.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Looking at the entire situation the owl comes to the monkey.
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/owl-profile.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-4xl md:w-1/3 flex-shrink">
            Why did you not let the otter help you? He could have gotten the you
            the stones you needed
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="text-2xl text-black md:text-4xl md:w-1/3 flex-shrink">
            I didn't trust the otters skills as I thought it would be better to
            learn swimming from the crocodile and get them myself.
          </div>

          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/owl-profile.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-4xl md:w-1/3 flex-shrink">
            But you trusted the birds skill of flying, why did you not take her
            suggestion and use dry leaves?
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="text-2xl text-black md:text-4xl md:w-1/3 flex-shrink">
            I didn't trust her idea for replacing the hay, as I had only seen
            the humans use dry hay.
          </div>

          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/owl-profile.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-4xl md:w-1/3 flex-shrink">
            You understood the elephants idea. Why did you not take his help?
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="text-2xl text-black md:text-4xl md:w-1/3 flex-shrink">
            I didn't trust their process of getting the branch, as I had not
            done or seen that before.
          </div>

          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-12 sm:mx-2 mx-0 flex-col  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[550px] w-[1100px] md:h-[550px] md:w-[1100px] flex-grow mix-blend-multiply"
              src="images/owl-monkey-1.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            The first step in working with others is{' '}
            <span className="font-bold underline ">trust.</span>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            Doing everything on your own can be overwhelming, getting help makes
            it much easier.
          </div>
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/materials.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          Soon the other animals come with the materials, and together they made
          the bonfire.
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/happy-bonfire.png"
        ></img>
      </Box>

      <Box>
        <div className="text-2xl mx-12 md:text-5xl md:w-1/2">
          As they sit around the bonfire
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
          <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            I should have trusted you with your skills and ideas, just because
            they were different from what I do it doesn't make them wrong.
          </div>
        </div>
      </Box>

      <Box>
        <img
          className="md:h-[550px] md:w-[1100px] aspect-auto mix-blend-multiply w-auto"
          src="images/owl-monkey.png"
        ></img>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/monkey-profile.png"
            ></img>
          </div>
          <div className="text-2xl md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
            Thank you for making me realise this
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-4 sm:mx-2 mx-0 flex-row  items-center justify-center">
          <div className="text-2xl text-black md:mr-12 md:text-4xl md:w-1/3 flex-shrink">
          It wasn't me that helped you, you realised it yourself.
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] flex-grow mix-blend-multiply"
              src="images/owl-profile.png"
            ></img>
          </div>
        </div>
      </Box>

      <Box>
        <div className="flex gap-12 sm:mx-2 mx-0 flex-col  items-center justify-center">
          <div className="flex-shrink-0">
            <img
              className="h-[100px] w-[100px] md:h-[350px] md:w-[350px] flex-grow mix-blend-multiply"
              src="images/owl-profile.png"
            ></img>
          </div>
          <div className="text-2xl text-black md:mr-12 md:text-5xl md:w-1/2 flex-shrink">
          You reflected on your actions and that led you to the <span className='font-bold'>answer</span> 
          </div>
        
        </div>
      </Box>

    </div>
  );
}

export default App;
