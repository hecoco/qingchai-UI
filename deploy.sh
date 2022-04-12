yarn build &&
cp CNAME dist/ &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:hecoco/qingchai-UI-website.git &&
git push -f -u origin master:gh-pages &&
cd -