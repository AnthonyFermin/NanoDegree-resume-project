var bio = {
	"name" : "Anthony Fermin",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "917-745-6918",
		"email" : "AnthonyFerminAFC@gmail.com",
		"github" : "AnthonyFermin",
		"twitter" : "fermin_anthony",
		"location" : "Queens, New York"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : ["awesomeness", "80 WPM", "JavaScript", "HTML", "CSS"],
	"bioPic" : "images/fry.jpg",
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
		var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
		var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%" , bio.contacts.twitter);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%" , bio.welcomeMessage);

		if(bio.bioPic.length > 0){
			var formattedBioPic = HTMLbioPic.replace("%data%" , bio.bioPic);
			$("#header").prepend(formattedBioPic);
		}

		$("#header").prepend(formattedWelcomeMsg);
		$("#header").prepend(formattedTwitter);
		$("#header").prepend(formattedGithub);
		$("#header").prepend(formattedLocation);
		$("#header").prepend(formattedEmail);
		$("#header").prepend(formattedMobile);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
	}
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
	],
	"display" : function(){
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

var projects ={
	"project" : [
		{
			"title" : "Udacity Front-End Web Developer NanoDegree Project 2",
			"dates" : "January 2015",
			"description" : "Interactive Resume : Interactive Resume- https://github.com/AnthonyFermin/NanoDegree-resume-project",
			"image" : ""
		},
		{
			"title": "Udacity Front-End Web Developer NanoDegree Project 1",
			"dates" : "November 2014",
			"description" : "Mockup to Website - I was given a JPG of a mockup website then I replicated it using HTML and CSS",
			"image" : ""
		},
		{
			"title" : "Codecademy HTML and CSS Bootstrap Project",
			"dates" : "June 2014",
			"description" : "Dawn: A Website using Bootstrap",
			"image" : ""
		}
	],
	"display" : function(){
		for(project in projects.project){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.project[project].title);
			var formattedDate = HTMLprojectDates.replace("%data%" , projects.project[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.project[project].description);
			$('.project-entry:last').append(formattedTitle);
			$('.project-entry:last').append(formattedDate);
			$('.project-entry:last').append(formattedDescription);
			
			if(projects.project[project].image.length > 0){
				var formattedImage = HTMLprojectImage.replace("%data%" , projects.project[project].image);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}


//------------------------ CODE SECTION ---------------------------


bio.display();
work.display();
projects.display();


if (bio.skills.length >  0){
	$('#header').append(HTMLskillsStart);

	for(skill in bio.skills){
		$('#skills').append(HTMLskills.replace( "%data%" , bio.skills[skill]));
	}
}



$('#main').append(internationalizeButton);
var inName = function(oldName) {
    var finalName = oldName.trim();
    var spaceLoc = finalName.search(" ");
    var firstName = finalName[0].toUpperCase() + finalName.slice(1,spaceLoc).toLowerCase();
    var lastName = finalName.slice(spaceLoc).toUpperCase();
    finalName = firstName + lastName;
  
    return finalName;
};

$("#mapDiv").append(googleMap);



