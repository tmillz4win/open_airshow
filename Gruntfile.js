module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    phonegapsplash: {
      your_target: {
        // Source file: the PNG. 
        src: 'res/splash.png',
        // Destination directory where are stored all splashscreens 
        dest: '',
        // Optionnal, it produces splashscreen and layout for all phonegap targets if not specified 
        options: {
        // A list of layouts, it produces landscape and portrait if not specified 
        layouts: ['landscape', 'portrait'],
        // A  list of phone targets, it produces android, bada, blackberry, ios, webos, windows-phone if not specified 
        profiles: ['ios', 'android']
        }
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-phonegapsplash');
  
  // Default task
  grunt.registerTask('default', ['phonegapsplash']);

};