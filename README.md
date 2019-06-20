
# Requied:
- Node version: > 6
- Vue CLI version : 3

# Some of errors when use install VUE CLI:
- if you are using vue-cli please uninstall it before installing vue-cli 3
- Turn off Anti-virus software before , because it maybe rise some issues to prevent install VUE CLI

# Run client side:

 $ cd client <br/>
 $ npm run serve

# Deloy to github Page
1. create local branch: git branch gh-page
2. init new file name is "vue.config.js" same location with package.json  
3. copy this code to vue config file:
  // vue.config.js

<code> 
  module.exports = {
      publicPath: 'shop-friendly-with-google'
  } 
</code>

4. Find and open the file .gitignore located in root directory of your project.Next, find and comment the line which has the text ‘/dist’.
5. Run npm run build, and wait for it to finish
6. Run the command: git add dist && git commit -m "Initial dist subtree commit"
7. Run the command: git subtree push --prefix dist origin gh-pages

8. Navigate to github on your browser and open your repository. Next click ‘Settings’ and find: GiHub Pages

# See more at this link ( I've just coppied this) 
https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd
