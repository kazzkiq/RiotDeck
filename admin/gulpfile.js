// Importing modules

var gulp         =  require('gulp'),
	minifycss    =  require('gulp-minify-css'),
	uglify       =  require('gulp-uglify'),
	rename       =  require('gulp-rename'),
	notify       =  require('gulp-notify'),
	autoprefixer =  require('gulp-autoprefixer'),
	concat       =  require('gulp-concat'),
	less         =  require('gulp-less'),
	del          =  require('del');
	
	
// Setting base paths

var assets = 'app/assets',
	dist = 'public';


// Tasks from now on...

gulp.task('styles', ['clean-styles'], function(){
	return gulp.src(assets + '/styles/main.less')
		.pipe(less())
		.pipe(autoprefixer('last 5 version'))
		.pipe(concat('all.css', {newLine: '\n\n\n'}))
		.pipe(rename({suffix: '.debug'}))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(rename({basename: 'all', suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(dist + '/css'))
		.pipe(notify({message: 'Styles finished'}));
});

gulp.task('scripts', ['clean-scripts'], function(){
	return gulp.src(assets + '/js/*.js')
		.pipe(concat('all.js', {newLine: ';'}))
		.pipe(rename({suffix: '.debug'}))
		.pipe(gulp.dest(dist + '/js'))
		.pipe(uglify())
		.pipe(rename({basename: 'all', suffix: '.min'}))
		.pipe(gulp.dest(dist + '/js'))
		.pipe(notify({message: 'Scripts finished'}));
});

gulp.task('default', function(){
	console.log("Hello!");
});

gulp.task('clean-styles', function(cb){
	del([dist + '/css'], cb);
});

gulp.task('clean-scripts', function(cb){
	del([dist + '/js'], cb);
});


// Watchers from now on...

gulp.task('watch-all', function(){
	gulp.watch(assets + '/styles/*.less', ['styles']);
	gulp.watch(assets + '/js/*.js', ['scripts']);
});