/*$("#main").append("Anthony Fermin");

var awesomeThoughts = "I am Anthony and I am AWESOME!"
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append(funThoughts);*/

var name = "Anthony Fermin"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "80 wpm", "JavaScript", "HTML", "CSS"];

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

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo.mobile);
$("#main").append(bio.contactInfo.email);
$("#main").append(bio.skills);

var work = {
	"employer" : "T-Mobile",
	"jobPosition" : "Retail Sales Associate",
	"years" : "1"
}
 work.city = "corona, NY";


var education = {
	"school" : "LaGuardia Community College",
	"major" : "Computer Science",
	"degree" : "Associates",
	"location" : "Long Island City, NY"
}

education["grade"] = "Sophomore";

$("#main").append(work.employer);
$("#main").append(work.jobPosition);
$("#main").append(work.years);
$("#main").append(work.city);

$("#main").append(education["school"]);
$("#main").append(education["major"]);
$("#main").append(education["degree"]);
$("#main").append(education["location"]);
$("#main").append(education["grade"]);