scss ?= sass/public_analytics.css.scss
css ?= css/public_analytics.css

all: styles html

html:
	./node_modules/gulp/bin/gulp.js

styles:
	sass $(scss):$(css)

watch:
	sass --watch $(scss):$(css)

clean:
	rm -f $(css) index.html
