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

const imgElements = gsap.utils.toArray(".home_features-list_image-wrapper img");
imgElements.forEach((img) => {
	gsap.fromTo(
		img,
		{
			clipPath: "circle(0% at 50% 50%)",
			yPercent: 10,
		},
		{
			clipPath: "circle(70% at 50% 50%)",
			ease: "power1.out",
			//stagger: 0.2,
			yPercent: 0,
			duration: 2,
			scrollTrigger: {
				trigger: img,
				start: "top 100%",
				end: "bottom 50%",
				//scrub: 5,
				//markers: true,
			},
			stagger: {
				each: 0.3,
				from: "center",
				grid: "auto",
				ease: "power2.inOut",
			},
		}
	);
});

gsap.from(".home_hero-header_lightbox", {
	delay: 0.3,
	duration: 1.8,
	autoAlpha: 1,
	clipPath: "inset(0 0 0 101%)",
	ease: "power3.inOut",
});
