/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio, education, work, projects;
// Bio Part
bio = {
	name : "Wayne Ye",
	role : "Front-end Developer",
	contacts : {
		mobile: "222-333-4444",
		email: "wayneye@udacity.com",
		github: "wayneye.github.io",
		location: "Dallas, TX"
	},
	welcomeMessage : "Welcome to my resume site!",
	skills : ["Javascript", "HTML", "CSS", "Awesomeness"],
	biopic : "images/fry.jpg",
	display : function() {
		// display bio function goes from here!
		var formattedName = HTMLheaderName.replace('%data%',bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
		var formattedgithub = HTMLgithub.replace('%data%',bio.contacts.github);
		var formattedlocation = HTMLlocation.replace('%data%',bio.contacts.location);
		$('#header').prepend(formattedName);
		$('#name').after(formattedRole);
		$('#topContacts').append(formattedMobile);
		$('#topContacts').append(formattedEmail);
		$('#topContacts').append(formattedgithub);
		$('#topContacts').append(formattedlocation);
		$('#footerContacts').append(formattedMobile);
		$('#footerContacts').append(formattedEmail);
		$('#footerContacts').append(formattedgithub);
		$('#footerContacts').append(formattedlocation);
		//header picture area
		var formattedbioPic = HTMLbioPic.replace('%data%',bio.biopic);
		$('#header').append(formattedbioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
		$('#header').append(formattedwelcomeMsg);
		$('#header').append(HTMLskillsStart);
		bio.skills.forEach(function(item){
			var skill = HTMLskills.replace('%data%',item);
			$('#skills').append(skill);
		})
	}
 };
bio.display();

// Education Part
education = {
	schools : [
		{
			name : "Northwestern University",
			location : "Evanston, IL",
			degree : "Master of Science",
			majors : ["Engineering"],
			dates : "2013 - 2015",
			url : "#Northwestern"
		},
		{
			name : "University of Texas at Dallas",
			location : "Dallas, TX",
			degree : "Master of Science",
			majors : ["Management Science"],
			dates : "2017 -",
			url : "#UTDallas"
		}
	],
	onlineCourses : [
		{
			title : "Data Science",
			school : "Coursera",
			dates : "2015 - 2016",
			url : "#Coursera"
		}
	],
	display : function() {
		// display bio function goes from here!
		console.log(education);
	}
};
// education.display();
// Work Part
work = {
	jobs : [
		{
			employer : "ATCG Solutions",
			title : "Junior Consultant",
			location : "Richardson, TX",
			dates : "2015 - 2016",
			description : "1. Designed DB Schema\n2. Developed SQL Server scripts for downstream analysis"		
		},
		{
			employer : "Nestle R&D",
			title : "Process Engineer Intern",
			location : "Shanghai, China",
			dates : "2012 Summer",
			description : "1. Designed Smart Coffee Machine\n2. Helped contact key parts manufactors"		
		}
	],
	display : function() {
		// display bio function goes from here!
		// console.log(work);
		work.jobs.forEach(function(item) {
			$('#workExperience').append(HTMLworkStart);
			var formattedworkTitle = HTMLworkEmployer.replace('%data%',item.employer)+HTMLworkTitle.replace('%data%',item.title);
			var formattedworkDates = HTMLworkDates.replace('%data%',item.dates);
			var formattedworkLocation = HTMLworkLocation.replace('%data%',item.location);
			var formattedworkDescription = HTMLworkDescription.replace('%data%',item.description);	
			$('.work-entry').last().append(formattedworkTitle);
			$('.work-entry').last().append(formattedworkDates);
			$('.work-entry').last().append(formattedworkLocation);
			$('.work-entry').last().append(formattedworkDescription);
		})		
	}	
 };
 work.display();
// Projects Part
projects = {
	projects : [
		{
			title : "Front-end Developing",
			dates : "In Progress",
			description : "Developing an awesome website",
			images : []
		},
		{
			title : "Developing a smart input method",
			dates : "In Progress",
			description : "Developing an awesome UI tools",
			images : []
		}
	],
	display : function() {
		// display bio function goes from here!
		console.log(projects);
	}
};
// projects.display();
