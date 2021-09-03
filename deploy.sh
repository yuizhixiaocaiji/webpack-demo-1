yarn build &&
git checkout gh-pages &&
rm -rf *.html *.css *.js *.jpg &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push