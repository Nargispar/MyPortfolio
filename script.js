const skill_percents = document.querySelectorAll('.skill-percent');


skill_percents.forEach(function(skill_percents){
	const skillValue = skill_percents.getAttribute('skill-data');

	let count = 0;
	const updatecount = setInterval(function(){
		if(count < skillValue){
			count++;

			skill_percents.textContent = count + "%";
		}
		else{
			clearInterval(updatecount);
		}
	},20)
	
})



let skill_page = document.querySelector('.skillss').addEventListener('click',function(event){
	event.preventDefault();
	console.log("skill clicked")
	document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
});

let project = document.querySelector('.project').addEventListener('click', function(event){
	event.preventDefault();
	document.querySelector('.project-main').scrollIntoView({behavior: "smooth"});
})
let contact = document.querySelector('.contact').addEventListener('click', function(event){
	event.preventDefault();
	document.querySelector('.contact-container').scrollIntoView({behavior: "smooth"});
});
let Home = document.querySelector('.home').addEventListener('click', function(event){
	event.preventDefault();
	document.querySelector('.hero-section').scrollIntoView({behavior: "smooth"});
});
