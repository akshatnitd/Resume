var bio = {
    "name": "AKSHAT GARG",
    "role": "Web Developer",
    "contacts":{"mobile":"9832914765","mail":"akshatnitd@gmail.com","github": "https://www.github.com/akshatnitd","location":"Sri Ram Colony, Sevoke Road, Siliguri"},
    "picture": "images/me.jpg",
    "welcome": "Get ready to be enthrilled!",
    "skills": ["C","C++","Python","HTML", "CSS", "JS","BootStrap"]
};

var work = {
    "jobs": [{"job_position":"Self-Employed", "employer": "SDE", "location": "SMHS, Siliguri"}]
};

var education = {
    "schools": [{
        "name": "Delhi Public School",
        "location": "Dagapur, Siliguri",
        "degree": "Senior-Secondary"
    }, {
        "name": "NIT",
        "location": "NIT, Mahatma Gandhi Avenue, A-Zone, Durgapur",
        "degree": "B.Tech"
    }],
    "online_course": ["Udacity", "Codacademy"]
};

var projects = {
    "scripts": [{
        "name": "IMDB_Portal",
        "des": "Python script for movies"
    }, {
        "name": "Flight_Schedule",
        "des": "Python script for Flight schedule"
    }],

    "websites": [{
        "name": "DNSL",
        "des": "Tea company website"
    }, {
        "name": "Portfolio",
        "des": "Portfolio website hosted on github"
    }]
};


//bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedPicture);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcome);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedmobile);
$("#footerContacts").append(formattedmobile);

var formattedmail = HTMLemail.replace("%data%", bio.contacts.mail);
$("#header").append(formattedmail);
$("#footerContacts").append(formattedmail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedgithub);
$("#footerContacts").append(formattedgithub);

var formattedcloc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedcloc);
$("#footerContacts").append(formattedcloc);


$("#header").append(HTMLskillsStart);
for(skill in bio.skills)
{
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
$("#skills").append(formattedSkills);

}

//education
var formattedschooln1 = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedschoold1 = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedschooll1 = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedschooln2 = HTMLschoolName.replace("%data%", education.schools[1].name);
var formattedschoold2 = HTMLschoolDegree.replace("%data%", education.schools[1].degree);
var formattedschooll2 = HTMLschoolLocation.replace("%data%", education.schools[1].location);

var course1 = HTMLonlineSchool.replace("%data%", education.online_course[0])
var course2 = HTMLonlineSchool.replace("%data%", education.online_course[1])


$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedschooln1);
$(".education-entry").append(formattedschoold1);
$(".education-entry").append(formattedschooll1);


$(".education-entry").append(formattedschooln2);
$(".education-entry").append(formattedschoold2);
$(".education-entry").append(formattedschooll2);


$("#education").append(HTMLonlineClasses);
$("#education .eg").append(course1);
$("#education .eg").append(course2);


//work

work.display= function(){
    
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkt = HTMLworkTitle.replace("%data%", work.jobs[job].employer);
        var formattedworke = HTMLworkEmployer.replace("%data%", work.jobs[job].job_position);
        var formattedworkl = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedTitlejob = formattedworkt + formattedworke + formattedworkl;
        $(".work-entry:last").append(formattedTitlejob);

    }
}
work.display();
//projects


projects.display= function() {
    
    $("#projects").append(HTMLprojectStart);
    
    for (var pro in projects.scripts)
    {
        var projectscriptn = HTMLprojectTitle.replace("%data%", projects.scripts[pro].name);
        var projectscriptd = HTMLprojectDescription.replace("%data%", projects.scripts[pro].des);
        
        $(".project-entry").append(projectscriptn);
        $(".project-entry").append(projectscriptd);

        
    }    
    
    for (var pro in projects.websites)
    {
        var projectwebn = HTMLprojectTitle.replace("%data%", projects.websites[pro].name);
        var projectwebd = HTMLprojectDescription.replace("%data%", projects.websites[pro].des);
        
        $(".project-entry").append(projectwebn);
        $(".project-entry").append(projectwebd);

        
    }    
}

projects.display();


function inName(name){
    name= name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0]+" "+name[1];
    
}

//$('#header').append(internationalizeButton);
$('#mapDiv').append(googleMap);

