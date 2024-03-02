/****
 * Load first: GSAP, ScrollTrigger, SplitText
 *****/
gsap.registerPlugin(ScrollTrigger, SplitText);

function setupSplits() {
	const targets = gsap.utils.toArray(".split");
	targets.forEach((target) => {
		let splitHeading = new SplitText(target, {
			type: "words, chars",
		});
		let chars = splitHeading.chars; //an array of all the divs that wrap each character
		gsap.from(chars, {
			yPercent: 130,
			stagger: 0.05,
			ease: "back.out",
			duration: 0.7,
			scrollTrigger: {
				trigger: target,
				//markers: true,
				start: "top 75%",
				end: "bottom center",
				//scrub: true
			},
		});
	});
}
setupSplits();

gsap.fromTo(
	".home_features-list_image-wrapper img",
	{
		clipPath: "circle(0% at 50% 50%)",
	},
	{
		clipPath: "circle(70% at 50% 50%)",
		ease: "power1.out",
		stagger: 0.2,
		duration: 2,
		scrollTrigger: {
			trigger: ".home_features-list_list",
			start: "top 75%",
			end: "bottom 100%",
			scrub: 5,
			//markers: true,
		},
	}
);

gsap.from(".home_hero-header_lightbox", {
	delay: 0.3,
	duration: 1.8,
	autoAlpha: 1,
	clipPath: "inset(0 0 0 101%)",
	ease: "power3.inOut",
});

gsap.to(
	{
		backgroundImage: "linear-gradient(-100deg,rgba(255, 224, 0, 0.2),rgba(255, 224, 0, 0.7) 95%,rgba(255, 224, 0, 0.1))",
		ease: "power1.out",
		stagger: 0.2,
		duration: 1,
		scrollTrigger: {
			trigger: ".section_home_features-list",
			start: "top 75%",
			end: "bottom 100%",
			//markers: true,
		},
	}
);