function looksrareGallery(collections) {
  const options = { method: 'GET', headers: { accept: 'application/json' } };
  const maxRetryAttempts = 3;

  collections.forEach(collection => {
    const { collectionAddress, tokenId, buyLink } = collection;
    const url = `https://api.looksrare.org/api/v1/tokens?collection=${collectionAddress}&tokenId=${tokenId}`;

    fetchWithRetry(url, options, maxRetryAttempts)
      .then(response => response.json())
      .then(response => {
        const imageURI = response.data.imageURI;
        const modifiedImageURI = imageURI.includes('https://static.looksnice.org/') ? imageURI.replace('https://static.looksnice.org/', 'https://looksrare.mo.cloudinary.net/') : imageURI;
        
        const li = `
          <li class="nft">
            <a class="more-info" href="${buyLink}">
              <figure>
                <picture class="square-container">
                  <img src="${modifiedImageURI}?resource_type=image&f=auto&c=limit&w=800&q=auto" alt="${response.data.name}" title="${response.data.name}" class="square">
                </picture>
                <figcaption>
                  <h3>${response.data.name}</h3>
                  <p>${response.data.description}</p>
                </figcaption>
              </figure>
            </a>
          </li>
        `;
        document.getElementById('response').insertAdjacentHTML('beforeend', li);
      })
      .catch(err => console.error(err));
  });

  function fetchWithRetry(url, options, maxRetryAttempts) {
    return new Promise((resolve, reject) => {
      const retry = (attempt) => {
        fetch(url, options)
          .then(response => {
            if (response.ok) {
              resolve(response);
            } else {
              const error = new Error(`HTTP Error: ${response.status}`);
              error.status = response.status;
              throw error;
            }
          })
          .catch(error => {
            if (attempt < maxRetryAttempts) {
              console.warn(`Request failed, retrying... (${attempt + 1}/${maxRetryAttempts})`);
              setTimeout(() => retry(attempt + 1), 1000 * Math.pow(2, attempt));
            } else {
              reject(error);
            }
          });
      };
      retry(0);
    });
  }
}