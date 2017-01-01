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
		emaile: "wayneye@udacity.com",
		github: "wayneye.github.io",
		location: "Dallas, TX"
	},
	welcomeMessage : "Welcome to my resume site!",
	skills : ["Javascript", "HTML", "CSS", "Awesomeness"],
	biopic : "images/fry.jpg",
	display : function() {
		// display bio function goes from here!
		console.log(bio);
	}
 };
// bio.display();

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

 };
// Projects Part
projects = {

};