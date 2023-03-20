/* ------ Footer ------ */
function adjustFooter() {
      let body = document.body;
      let html = document.documentElement;
      let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      let footer = document.getElementsByTagName('footer')[0];
      let footerHeight = footer.offsetHeight;
      
      if (height > window.innerHeight) {
        footer.style.position = 'relative';
      } else {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
      }
    }

/* ------ Gallery ------ */
function setSameHeight() {
  // Get all the list items in the nft list
  const nftItems = document.querySelectorAll('.nft-list figure');

  // Reset the height of all the list items
  nftItems.forEach(item => item.style.height = 'auto');

  // Find the tallest list item
  let tallestItem = 0;
  nftItems.forEach(item => {
    if (item.offsetHeight > tallestItem) {
      tallestItem = item.offsetHeight;
    }
  });

  // Set the height of all the list items to the tallest item
  nftItems.forEach(item => item.style.height = tallestItem + 'px');
}


/* ------ Square Images ------ */
function makeSquare() {
  var containers = document.querySelectorAll('.square-container');
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var image = container.querySelector('.square');
    var containerWidth = container.offsetWidth;
    image.style.height = containerWidth + 'px';
  }
}


/* ------ Background ------ */
// Define an array of background image URLs
const backgroundImages = [
  '../assets/images/background1.png',
  '../assets/images/background2.png',
  '../assets/images/forgottendreams.jpg',
];

// Pick a random background image URL from the array
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
const randomImageUrl = backgroundImages[randomIndex];

// Set the body background image to the random image URL
document.body.style.backgroundImage = `url('${randomImageUrl}')`;


function loadFunctions(){
  setSameHeight();
  makeSquare();
  adjustFooter();
}

window.addEventListener('load', loadFunctions);
window.addEventListener('resize', loadFunctions);