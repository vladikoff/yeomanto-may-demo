module.exports = function(grunt) {
  grunt.initConfig({
    jscs: {
      src: "*.js",
    },
    yuidoc: {
      compile: {
        name: 'my js library',
        options: {
          paths: './',
          outdir: 'docs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
}
