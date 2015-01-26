
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
	"employer" : "T-Mobile",
	"jobPosition" : "Retail Sales Associate",
	"years" : "1",
	"city" : "corona, NY"
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