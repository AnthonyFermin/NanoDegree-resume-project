
/*var name = "Anthony Fermin"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var skills = ["awesomeness", "80 WPM", "JavaScript", "HTML", "CSS"];

var bio = {
	"name" : "Anthony Fermin",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : "917-745-6918",
		"email" : "AnthonyFerminAFC@gmail.com",
		"github" : "Ant-Drive",
		"twitter" : "N/A",
		"location" : "New York City"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : skills,
	"bioPic" : "",
};

var work = {
	"jobs" : [
		{
		"employer" : "T-Mobile",
		"title" : "Retail Sales Associate",
		"dates" : "06/13 - 04/14",
		"location" : "Corona, NY",
		"description" : "Greeted customers and assisted them as soon as they entered the location, Diagnosed customer’s lifestyle necessities and recommended a complete product solution, Amiably assisted customers in resolving issues concerning their T-Mobile account and devices, Assisted customers in purchasing new devices via T-Mobile iPad during busy hours, Handled cash/credit transactions and opened/closed point of sale cash registers"
		},
		{
		"employer" : "Best Buy",
		"title" : "Wireless Sales Lead",
		"dates" : "12/12 - 06/13",
		"location" : "Elmhurst, NY",
		"description" : "Supervised and managed employee interaction with customers, Ensured sales floor is presentable and prices were updated, Handled inventory adjustments, received products and transferred products from other locations, Filled out daily management paperwork, Logged daily safe/ register totals and ordered change when needed, Was responsible for all tasks related to opening and closing the store"
		}
	]
}

var education = {
	"schools" : [
		{
		"name" : "LaGuardia Community College",
		"location" : "Long Island City, NY",
		"major" : "Computer Science",
		"degree" : "Associates",
		"graduation" : 2015
		}
	],
	"onlineCourses" : [
		{
		"title" : "Nanodegree: Front-end Web Developer",
		"school" : "Udacity",
		"URL" : "www.Udacity.com"
		},
		{
		"title" : "Intro to JS: Drawing & Animation",
		"school" : "Khan Academy",
		"URL": "www.KhanAcademy.org"
		},
		{
		"title" : "JQuery",
		"school" : "Codecademy",
		"URL" : "www.Codecademy.com"
		},
		{
		"title" : "Make an Interactive Website",
		"school" : "Codecademy",
		"URL" : "www.Codecademy.com"
		},
		{
		"title" : "Make a Website",
		"school" : "Codecademy",
		"URL" : "www.Codecademy.com"
		},
		{
		"title" : "HTML & CSS",
		"school" : "Codecademy",
		"URL" : "www.Codecademy.com"
		}
	]
}
	
var projects = {
	"Udacity" : [
		{
			"name": "Project 1: Mockup to Website",
			"URL" : "github link"
		},
		{
			"name" : "Project 2: Interactive Resume",
			"URL" : "https://github.com/AnthonyFermin/NanoDegree-resume-project"
		}
	],
	"Codecademy" : {
		"bootstrapProject" : "Dawn Website",
		"URL" : "github link"
	}
}
//------------------------ CODE SECTION ---------------------------

if (bio.skills.length >  0){
	$('#header').append(HTMLskillsStart);

	for(skill in bio.skills){
		$('#skills').append(HTMLskills.replace( "%data%" , bio.skills[skill]));
	}
}
var displayWork = function(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);	
	}
}
displayWork();
