# es6modulewp
The same thing as [es6module](https://github.com/jonathanlurie/es6module) but uses Webpack4 instead of Rollup.  

# Extra
Since I clone this repo a lot and use it as a start for almost every new project, I decided to create a script to:
- clone (with depth=1)
- remove the `.git` folder
- remove files and folder that are going to be replaced anyway (doc, dist bundles)
- replace the every "es6modulewp" by "mynewfancymodule"
- removes readme's content
- run `npm install`

```bash
function es6modulewp(){
  git clone --depth=1 --branch=master https://github.com/jonathanlurie/es6modulewp.git  $1
  cd $1
  rm -rf .git
  rm -rf dist/* documentation.md doc/* package-lock.json
  find . -type f -iname '*' -exec sed -i '' "s/es6modulewp/$1/g" "{}" +;
  printf "# $1\n[here goes the readme]\n" > readme.md
  npm install
}
```

Copy the script to the `.bashrc` and to run it:
```bash
es6modulewp mynewfancymodule
```
