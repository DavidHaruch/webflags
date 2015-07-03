module.exports = function(grunt) {

	// Time Grunt
	require('time-grunt')(grunt);
	// Jit Grunt
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// webflags project options are here
		sass: {
			options: {
					sourceMap: false,
			},
			dist: {
				files: {
					'styles.css': 'sass/main.scss',
				}
			}
		},

		uglify: {
			js: {
				files: {
					'js/scripts.min.js': ['js/dev/*.js'],
				}
			}
		},

		autoprefixer: {
			options: {
				// Task-specific options go here.
				browsers: ['last 2 versions']
			},
			single_file: {
				src: 'styles.css',
				dest: 'styles.prefix.css',
			},
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'styles.min.css': 'styles.prefix.css'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: './',
				}
			}
		},

		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass','autoprefixer','cssmin'],
				options: {
					livereload: true,
				},
			},
			js: {
				files: ['js/dev/*.js'],
				tasks: ['uglify:js'],
				options: {
					livereload: true,
				},
			},
			html: {
				files: ['*.html'],
				tasks: ['cssmin'],
				options: {
					livereload: true,
				},
			}
		},

	});

	// register tasks
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-connect');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-autoprefixer');

	// add some tasks
	grunt.registerTask('default', ['sass','uglify','autoprefixer','cssmin','connect','watch']);

};