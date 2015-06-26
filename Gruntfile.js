module.exports = function(grunt) {

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
    		tasks: ['sass'],
    	},
    	js: {
    		files: ['js/dev/*.js'],
    		tasks: ['uglify:js'],
    	}
  	},


	});

	// register tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// add some tasks
	grunt.registerTask('default', ['sass','uglify','connect','watch']);

};