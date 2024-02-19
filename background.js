const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.com/docs/webstore";

chrome.action.onClicked.addListener((tab) => {
	// tabURL = tab.url;
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: remove,
	});
});

const twitterRmv = () => {
	console.log("removing twtter");

	const anchors = document.getElementsByTagName("a");
	for (let i = 0; i < anchors.length; i++) {
		const element = anchors[i];
		// console.log(element);
		element.remove();
	}

	const mains = document.getElementsByClassName(
		"css-175oi2r r-150rngu r-16y2uox r-1wbh5a2 r-113js5t"
	);
	for (let i = 0; i < mains.length; i++) {
		const element = mains[i];
		// console.log(element);
		element.remove();
	}

	alert(anchors.length);
};

const remove = () => {
	const url = window.location.toString();
	if (url.includes("twitter")) {
		console.log("removing twtter");

		const blackListedLabels = [
			"X",
			"Home",
			"Lists",
			"Communities",
			"Search and explore",
			"Premium",
			"More menu items",
			"Home timeline",
			"Timeline: Trending now",
		];

		blackListedLabels.forEach((label) => {
			const element = document.querySelector(`[aria-label="${label}"]`);
			if (element) {
				element.remove();
			} else {
				console.log(`cant find element with aria label${label}`);
			}
		});
	} else if (url.includes("instagram")) {
		console.log("removing insta");

		// const menuElements = document.getElementsByClassName("x1iyjqo2 xh8yej3");
		// const menuChildrens = menuElements[0].childNodes;

		// for (let i = 0; i < menuChildrens.length; i++) {
		// 	const menuItem = menuChildrens[i];

		// 	if (i == 0 || i == 1) {
		// 		menuItem.remove();
		// 	}
		// }

		const blackList = [
			":r1a:",
			":r1c:",
			":r1d:",
			":r1f:",
			":r2:",
			":r4:",
			":r5:",
			":r8:",
		];
		blackList.forEach((label) => {
			const element = document.querySelector(`[aria-describedby="${label}"]`);
			if (element) {
				element.remove();
			} else {
				console.log(`cant find ig element with aria label${label}`);
			}
		});

		const mains = document.getElementsByClassName(
			" x78zum5 x1q0g3np xl56j7k xh8yej3"
		);
		for (let i = 0; i < mains.length; i++) {
			const els = mains[i];

			els.remove();
		}

		// alert(anchors.length);
	} else {
		// alert("we good");
	}
};
