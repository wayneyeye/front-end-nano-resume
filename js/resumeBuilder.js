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
			name : "University of Texas at Dallas",
			location : "Dallas, TX",
			degree : "Master of Science",
			majors : ["Management Science", "Data Science"],
			dates : "2017 - present",
			url : "#UTDallas"
		},
		{
			name : "Northwestern University",
			location : "Evanston, IL",
			degree : "Master of Science",
			majors : ["Engineering"],
			dates : "2013 - 2015",
			url : "#Northwestern"
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
		// console.log(education);
		// full-time enrollment
		education.schools.forEach(function(item){
			// console.log('debug');
			$('#education').append(HTMLschoolStart);
			var formattedschoolNameDeg = HTMLschoolName.replace('%data%',item.name)
			+ HTMLschoolDegree.replace('%data%',item.degree);
			formattedschoolNameDeg.replace('#',item.url);
			var formattedschoolDates = HTMLschoolDates.replace('%data%',item.dates);
			var formattedschoolLocation = HTMLschoolLocation.replace('%data%',item.location);
			var formattedschoolMajor = HTMLschoolMajor.replace('%data%',item.majors);
			$('.education-entry').last().append(formattedschoolNameDeg);
			$('.education-entry').last().append(formattedschoolDates);
			$('.education-entry').last().append(formattedschoolLocation);
			$('.education-entry').last().append(formattedschoolMajor);
		});

		// online-courses
		$('#education').append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(item){
			var formattedonlineclassTitleSchool = HTMLonlineTitle.replace('%data%',item.title) + 
			HTMLonlineSchool.replace('%data%',item.school);
			formattedonlineclassTitleSchool.replace('#',item.url);
			var formattedonlineclassDate = HTMLonlineDates.replace('%data%',item.dates);
			var formattedonlineURL = HTMLonlineURL.replace('%data%',item.url);
			formattedonlineURL.replace('#',item.url);
			$('#education').append(HTMLschoolStart);
			$('.education-entry').last().append(formattedonlineclassTitleSchool);
			$('.education-entry').last().append(formattedonlineclassDate);
			$('.education-entry').last().append(formattedonlineURL);					
		});
	}
};
education.display();
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
			images : ['images/image1.png','images/image2.png']
		},
		{
			title : "Developing a smart input method",
			dates : "In Progress",
			description : "Developing an awesome UI tools",
			images : ['images/image1.png']
		}
	],
	display : function() {
		// display bio function goes from here!
		// console.log(projects);
		projects.projects.forEach(function(item){
			$('#projects').append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace('%data%',item.title);
			var formattedprojectDates = HTMLprojectDates.replace('%data%',item.dates);
			var formattedprojectDescription = HTMLprojectDescription.replace('%data%',item.description);
			$('.project-entry').last().append(formattedprojectTitle);	
			$('.project-entry').last().append(formattedprojectDates);	
			$('.project-entry').last().append(formattedprojectDescription);	
			item.images.forEach(function(item){
				var formattedprojectImg = HTMLprojectImage.replace('%data%',item);
				$('.project-entry').last().append(formattedprojectImg);
			});
		});
	}
};projects.display();
// Add google maps
$('#mapDiv').append(googleMap);
initializeMap();