/* ========================================
  constants
======================================== */

// buttons
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

// letters
const letterR = {
  selector: "#letter-r",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M25,430 V25 H330 C380,25 405,50 405,100 V110 C405,160 380,185 330,185 M330,185 C380,185 405,210 405,260 V430 M330,185 H25",
    "M25,650 V25 H110 C160,25 185,50 185,100 V110 C185,160 160,185 110,185 M110,185 C160,185 185,210 185,260 V650 M110,185 H25",
    "M25,210 V25 H110 C160,25 185,50 185,80  V90  C185,120 160,145 110,145 M110,145 C160,145 185,160 185,200 V210 M110,145 H25",
    "M25,210 V25 H110 C160,25 185,50 185,80  V90  C185,120 160,145 110,145 M110,145 C160,145 185,160 185,200 V210 M110,145 H25",
    "M25,210 V25 H110 C160,25 185,50 185,80  V90  C185,120 160,145 110,145 M110,145 C160,145 185,160 185,200 V210 M110,145 H25",
    "M25,650 V25 H110 C160,25 185,50 185,100 V110 C185,160 160,185 110,185 M110,185 C160,185 185,210 185,260 V650 M110,185 H25",
  ],
};
const letterE = {
  selector: "#letter-e",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M650,25 L465,25 L465,405 L650,405 M640,185 L465,185",
    "M430,25 L245,25 L245,625 L430,625 M420,185 L245,185",
    "M430,25 L245,25 L245,185 L430,185 M420,95  L245,95",
    "M430,25 L245,25 L245,185 L430,185 M420,95  L245,95",
    "M650,25 L245,25 L245,185 L650,185 M640,95  L245,95",
    "M430,25 L245,25 L245,625 L430,625 M420,185 L245,185",
  ],
};
const letterD = {
  selector: "#letter-d",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M845,100 C845,50 820,25 770,25 H685 V405 H770 C820,405 845,380 845,330 V100Z",
    "M845,100 C845,50 820,25 770,25 H465 V185 H770 C820,185 845,160 845,110 V100Z",
    "M845,100 C845,50 820,25 770,25 H465 V625 H770 C820,625 845,600 845,550 V100Z",
    "M845,100 C845,50 820,25 770,25 H465 V185 H770 C820,185 845,160 845,110 V100Z",
    "M845,100 C845,50 820,25 770,25 H685 V185 H770 C820,185 845,160 845,110 V100Z",
    "M845,100 C845,50 820,25 770,25 H465 V625 H770 C820,625 845,600 845,550 V100Z",
  ],
};
const letterF = {
  selector: "#letter-f",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M25,870 V465 L210,465 M200,625 L25,625",
    "M25,870 V685 L210,685 M200,795 L25,795",
    "M25,870 V245 L210,245 M200,575 L25,575",
    "M25,870 V245 L100,245 M90,575  L25,575",
    "M25,870 V245 L100,245 M90,575  L25,575",
    "M25,870 V685 L210,685 M200,795 L25,795",
  ],
};
const letterL = {
  selector: "#letter-l",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M245,440 L245,845 L430,845",
    "M245,660 L245,845 L430,845",
    "M245,220 L245,845 L430,845",
    "M135,220 L135,845 L210,845",
    "M135,220 L135,845 L210,845",
    "M245,660 L245,845 L320,845",
  ],
};
const letterA = {
  selector: "#letter-a",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M465,870 V540 C465,490 490,465 540,465 H550 C600,465 625,490 625,540 V870 M625,625 L465,625",
    "M465,870 V320 C465,270 490,245 540,245 H550 C600,245 625,270 625,320 V870 M625,625 L465,625",
    "M465,870 V760 C465,710 490,685 540,685 H550 C600,685 625,710 625,760 V870 M625,795 L465,795",
    "M245,870 V320 C245,270 270,245 320,245 H550 C600,245 625,270 625,320 V870 M625,625 L245,625",
    "M245,870 V320 C245,270 270,245 320,245 H330 C380,245 405,270 405,320 V870 M405,625 L245,625",
    "M355,870 V760 C355,710 380,685 430,685 H550 C600,685 625,710 625,760 V870 M625,795 L355,795",
  ],
};
const letterG = {
  selector: "#letter-g",
  timeline: gsap.timeline({ repeat: -1 }),
  dValues: [
    "M845,540 C845,490 820,465 770,465 H760 C710,465 685,490 685,540 V770 C685,820 710,845 760,845 H770 C820,845 845,820 845,770 V625 H770",
    "M845,320 C845,270 820,245 770,245 H760 C710,245 685,270 685,320 V770 C685,820 710,845 760,845 H770 C820,845 845,820 845,770 V625 H770",
    "M845,760 C845,710 820,685 770,685 H760 C710,685 685,710 685,760 V770 C685,820 710,845 760,845 H770 C820,845 845,825 845,805 V795 H770",
    "M845,320 C845,270 820,245 770,245 H760 C710,245 685,270 685,320 V770 C685,820 710,845 760,845 H770 C820,845 845,820 845,770 V625 H770",
    "M845,320 C845,270 820,245 770,245 H540 C490,245 465,270 465,320 V770 C465,820 490,845 540,845 H770 C820,845 845,820 845,770 V625 H770",
    "M845,760 C845,710 820,685 770,685 H760 C710,685 685,710 685,760 V770 C685,820 710,845 760,845 H770 C820,845 845,825 845,805 V795 H770",
  ],
};
const letters = [letterR, letterE, letterD, letterF, letterL, letterA, letterG];

// displacement map
const imageFilter = {
  selector: "#image-filter",
  timeline: gsap.timeline({ repeat: -1 }),
};

/* ========================================
  timelines
======================================== */

// letters
letters.forEach((letter) => {
  for (let index = 0; index < letter.dValues.length; index++) {
    const isLast = index + 1 === letter.dValues.length;
    const from = letter.dValues[index];
    const to = letter.dValues[isLast ? 0 : index + 1];

    letter.timeline.fromTo(
      letter.selector,
      { attr: { d: from } },
      { attr: { d: to }, ease: "power3.inOut" }
    );
  }
});

// displacement map
imageFilter.timeline.fromTo(
  imageFilter.selector,
  { attr: { x: "-100%" } },
  { attr: { x: "0%" }, ease: "linear", duration: 5 }
);

/* ========================================
  events
======================================== */

pauseButton.addEventListener("click", () => {
  letters.forEach((letter) => letter.timeline.pause());
  imageFilter.timeline.pause();
});
resumeButton.addEventListener("click", () => {
  letters.forEach((letter) => letter.timeline.resume());
  imageFilter.timeline.resume();
});
