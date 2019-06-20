
const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");

gulp.task("build:css", function () {
	return gulp.src("./src/less/chive.less")
		.pipe(less({
			paths: [ path.join(__dirname, "less", "includes") ]
		}))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch:css",()=>{
	gulp.watch("./src/less/**/*.less",["build:css"]);
});

gulp.task("default", ["build:css"]);
