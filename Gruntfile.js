module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// webflags project options are here


	});

	// register tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// add some tasks
	grunt.registerTask('default', ['uglify']);

};