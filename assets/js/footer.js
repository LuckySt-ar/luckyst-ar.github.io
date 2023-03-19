/* Footer */
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
    
adjustFooter();
window.addEventListener('resize', adjustFooter);

/* Gallery */
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

// Call the function when the page loads
setSameHeight();

// Call the function when the window is resized
window.addEventListener('resize', setSameHeight);