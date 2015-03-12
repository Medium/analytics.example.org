all:
	./node_modules/gulp/bin/gulp.js

html:
	./node_modules/gulp/bin/gulp.js ejs

styles:
	./node_modules/gulp/bin/gulp.js sass

watch:
	./node_modules/gulp/bin/gulp.js watch

clean:
	rm -f $(css) index.html
