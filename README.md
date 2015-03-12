## Public analytics

A collaboration to publish website analytics.

### Building the Stylesheets and HTML

* Install Gulp and dependences

```bash
npm install
```

```bash
./node_modules/gulp/bin/gulp.js
```
or
```bash
make watch
```

* To compile everything, run:

```bash
./node_modules/gulp/bin/gulp.js all
```


### Deploying the app

To deploy this app to `analytics.usa.gov`, you will need authorized access to 18F's Amazon S3 bucket for the project.

If using `s3cmd`, the command to deploy the site is:

```bash
s3cmd put --recursive -P --add-header="Cache-Control:max-age=0" *.html images js css s3://18f-dap/
```

But temporarily, the command is:

```bash
s3cmd put --recursive -P --add-header="Cache-Control:max-age=0" *.html demo images js css s3://18f-dap/
```

This deploys `index.html`, and the relevant static assets, to the bucket. For now, it sets a cache time of 0, though we may increase this.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
