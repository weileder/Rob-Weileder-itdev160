//Variable declarations
var title = 'The 20 Best Atom Packages for Front End Developers';
var author = 'by Tiffany Tse';
var date = new Date().toISOString().split('T')[0];


//Get the elements for the ids
var jst = document.getElementById('title');
var jsa = document.getElementById('author');
var jsd = document.getElementById('date');
//Inject contect into ids
jst.textContent = title;
jsa.textContent = author;
jsd.textContent = date;

//Data for simulating a database
var data = [
  {
    name: 'Emmet',
    url: 'https://atom.io/packages/emmet',
    descrip: 'Code Snippet Tool - Number one code snippet tool used by front end developers. It expands text to valid HTML tags by using the tab key after typing a few characters of the intended tag.',
    author: 'emmetio',
    downloads: 2439164,
    stars: 2750,
    selector: 'p1'
  },
  {
    name: 'Atom-Beautify',
    url: 'https://atom.io/packages/atom-beautify',
    descrip: 'Cleans Up Your Code - It automatically indents and makes your code more readable.',
    author: 'Glavin001',
    downloads: 6027541,
    stars: 5053,
    selector: 'p2'
  },
  {
    name: 'Pigments',
    url: 'https://atom.io/packages/pigments',
    descrip: 'Displays Colors In Your Project - Highlights yout color codes with the color that is stated. ',
    author: 'abe33',
    downloads: 2545847,
    stars: 3603,
    selector: 'p3'
  }
];

//Package Contructor
function Package(data) {
  this.name = data.name;
  this.url = data.url;
  this.descrip = data.descrip;
  this.author = data.author;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;

  this.getFormattedDownloads = function() {
    return this.downloads.toLocaleString();
  };

   this.getFormattedStars = function() {
     return this.stars.toLocaleString();
   };
};

//Writing to Page
function writePackageInfo(package) {
    //Refer to elements
    var selector = package.selector,
      nameE1 = document.getElementById(selector + '-name'),
      urlE1 = document.getElementById(selector + '-url'),
      descripE1 = document.getElementById(selector + '-descrip'),
      authorE1 = document.getElementById(selector + '-author'),
      downloadsE1 = document.getElementById(selector + '-downloads'),
      starsE1 = document.getElementById(selector + '-stars');

    //Write to elements
    nameE1.textContent = package.name;
    urlE1.textContent = package.url;
    descripE1.textContent = package.descrip;
    authorE1.textContent = "Author: " + package.author;
    downloadsE1.textContent = "Downloads: " + package.downloads;
    starsE1.textContent = "Rating: " + package.stars + " stars";
};

function makeItHappen() {
  //write package data
  for (let i = 0; i < data.length; i++) {
    const package = data[i];
    console.log(package.name);
    writePackageInfo(package);
  };
}

//Call the function to perform the required tasks
makeItHappen();
