cd ./build
touch .nojekyll
git init
git branch -m main gh-pages
git add .
git commit -m "github pages update"
git remote add origin git@github.com:Ashung/works.git
git push origin -d gh-pages
git push origin gh-pages