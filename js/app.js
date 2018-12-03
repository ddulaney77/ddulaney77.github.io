




//project scroller
const data = [
  {
    name: 'Project 3: Newletter Registration Form',
    title: 'Create a responsive, mobile-first registration form with validation and incluing:text,email,telephone inputs,checkboxes,radio buttons and textareas',
    experience: 'HTML, CSS, form elements',
    practice: 'input fields, form validation, form fields, css transitions',
    image: 'img/exceed3.png'
  },
  {
    name: 'Project 4: Interactive Photo Gallery',
    title: 'Create an Interactive photo gallery using JavaScript and jQuery. Include a search area where photos will hide and show depending on user input. When the user clicks on a thumbnail, the photo will display and should have a back and previous arrows to cycle through photos.',
    experience: 'HTML, CSS, JavaScript, Jquery, flexbox',
    practice: 'lighbox display, search/filter fields, text captions,',
    image: 'img/exceed4.png'
  },
  {
    name: 'Project 5: Web Style Guide',
    title: 'Create a sass project building a web style guide. You will create a sass project using partials, variables, extends, and mixins to apply the styles and classes to the style guide page',
    experience: ' HTML,CSS, Javascript, flexbox, Sass',
    practice: 'Sass partials, mixins and variables, functions, media queries, buttons, logos',
    image: 'img/exceed5.png'
  },
  {
    name: 'Project 6: HTML Video Player and transcript',
    title: 'Build an interactive video player using JavaScript and the HTML5 Video API. Sysnchronize the video and the transcript and highlight as the video progresses. Implement a media player.',
    experience: 'HTML,CSS, Javascript, API ',
    practice: 'audio and video, event listeners',
    image: 'img/exceed6.png'
  },
  {
    name: 'Project 7: Wheel of Success Game',
    title: 'Create a browser version of “Wheel of Success”, a word guessing game where players click letters from an onscreen keyboard to guess a random phrase.',
    experience: 'HTML, CSS transitions, Javascript, Jquery, flexbox',
    practice: 'arrays, functions, event listeners',
    image: 'img/exceed7.png'
  },
  {
    name: 'Project 8: Corgy Dog Animations',
    title: 'Use and add SVGs and CSS animations to spruce up and add a bit of character to a website. Use SVG files for: Background, Menu, Logo, Dog Images',
    experience: ' HTML,CSS animations, Javascript, SVGs, flexbox',
    practice: 'CSS transitions/transforms, SVGs, keyframes',
    image: 'img/exceed8.png'
  },
  {
    name: 'Project 9: Web Dashboard',
    title: 'Build a web dashboard complete with JavaScript-driven charts and graphs.',
    experience: 'HTML,CSS grids, Javascript, Sass, charts.js',
    practice: 'Sass partials/variables/mixins, search fields, alert notification, charts/graphs with data, updating data, SVGs/icons, autocomplete, local storage, modals, form input/validation and error alerts,',
    image: 'img/exceed9.png'
  },
  {
    name: 'Project 10: API Photo Gallery',
    title: 'Use the Random User Generator API to build an employee directory. Request a JSON object from the API and parse the data so that employees are listed in a grid with their thumbnail image. Clicking the employee’s image/name will open a modal with more information',
    experience: ' HTML,CSS, Javascript, random generator API, CSS grids, ajax/JSON',
    practice: 'filter and search data, modals, random generator API, photo gallery',
    image: 'img/exceed10.png'
  },

];

const profiles = profileIterator(data);



// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Title: ${currentProfile.title}</li>
        <li class="list-group-item">Experience: ${currentProfile.experience}</li>
        <li class="list-group-item">Practice: ${currentProfile.practice}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Call first profile
nextProfile();
// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}