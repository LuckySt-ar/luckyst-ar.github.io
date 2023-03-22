# luckyst-ar.github.io
Lucky Star's NFT Gallery Website

# Read Me
This site is built with Jekyll and relies mostly on:
- CSS
- HTML
- Javascript
- Liquid

## Site Management
Here are the key files to manage the website. Please note:
1. All of the yml files should be formatted as demonstrated.
2. All of the markdown pages accept basic html and liquid.

### YML Files
+ **_data** 
  + credits.yml - list of site credits on the Links page
  + featured.yml - featured NFTs module (shown everywhere except gallery)
  + links.yml - list of important links on the Links page
  + navigation.yml - header navigation
  + nfts.yml - list of NFTs to feature in the gallery
  + settings.yml - general site settings, copyright, and contact form
  
### Markdown Files
+ **about.markdown**
+ **contact.markdown**
+ **gallery.markdown**
+ **index.markdown**
+ **links.markdown**

# Credits
This site is a rebuilt clone of the original Digital Altar [site](https://digitalaltar.com/) and [repository](https://github.com/Digital-Altar/digital-altar.github.io), used with permission.

The [LooksRare API](http://api.looksrare.org) powers the NFT gallery, with no API key necessary unless your site is seeing a lot of traffic & needs an increase to the 120 calls per minute limit. We may finesse caching in the future to avoid this & achieve better results. Note: We also use [Cloudflare](https://www.cloudflare.com) to help with caching and delivering content.
