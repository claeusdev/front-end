var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
// gulp.task('scripts', function(){
// 	gulp.src('js/*.js')
// });

gulp.task('styles', function(){
	gulp.src('./sass/app.sass')
		.pipe(sass())
		.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./sass/*.sass', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload)
});


gulp.task('default', ['styles', 'serve']);