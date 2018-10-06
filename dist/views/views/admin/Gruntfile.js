module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
			options: {
                includePaths: ['node_modules/bootstrap-sass/src/assets/stylesheets']
            },
            dist: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'src/assets/css/main.css': 'src/assets/scss/main.scss',  							/* 'All main SCSS' */
                    'src/assets/css/color_skins.css': 'src/assets/scss/color_skins.scss', 				/* 'All Color Option' */
                    
                    'src/assets/css/timeline.css': 'src/assets/scss/pages/timeline.scss', 				/* 'Timeline SCSS to CSS' */
                    'src/assets/css/blog.css': 'src/assets/scss/pages/blog.scss', 						/* 'Blog page' */
                    'src/assets/css/chatapp.css': 'src/assets/scss/pages/chatapp.scss', 				/* 'Chat App Page SCSS to CSS' */
                    'src/assets/css/authentication.css': 'src/assets/scss/pages/authentication.scss', 	/* 'Authentication Page SCSS to CSS' */
                    'src/assets/css/inbox.css': 'src/assets/scss/pages/inbox.scss', 					/* 'Email App' */
                    'src/assets/css/rtl.css': 'src/assets/scss/pages/rtl.scss', 						/* 'RTL Support Dashboard scss' */                    
				}]
            }
        },
        uglify: {
          my_target: {
            files: {
                'src/assets/bundles/libscripts.bundle.js': ['src/assets/plugins/jquery/jquery-v3.2.1.min.js','src/assets/plugins/bootstrap/js/bootstrap.js'], /* main js*/              
                'src/assets/bundles/vendorscripts.bundle.js':
                ['src/assets/plugins/bootstrap-select/js/bootstrap-select.js','src/assets/plugins/jquery-slimscroll/jquery.slimscroll.js','src/assets/plugins/node-waves/waves.js','src/assets/plugins/fullscreen/screenfull.js','src/assets/plugins/jquery-sparkline/jquery.sparkline.js','src/assets/plugins/jquery-countto/jquery.countTo.js'], /* coman js*/
                'src/assets/bundles/mainscripts.bundle.js':
                ['src/assets/js/admin.js','src/assets/js/demo.js','src/assets/js/fullscreen.js'], /*coman js*/
				                
                'src/assets/bundles/index.jvectormap.bundle.js': ['src/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js','src/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js','src/assets/plugins/jvectormap/jquery-jvectormap-in-mill.js','src/assets/plugins/jvectormap/jquery-jvectormap-us-aea-en.js'], /* ChartJs js*/

                'src/assets/bundles/morrisscripts.bundle.js': ['src/assets/plugins/raphael/raphael.min.js','src/assets/plugins/morrisjs/morris.js'], /* Morris Plugin Js */
                'src/assets/bundles/flotscripts.bundle.js': ['src/assets/plugins/flot-charts/jquery.flot.js','src/assets/plugins/flot-charts/jquery.flot.resize.js','src/assets/plugins/flot-charts/jquery.flot.pie.js','src/assets/plugins/flot-charts/jquery.flot.categories.js','src/assets/plugins/flot-charts/jquery.flot.time.js'], /* Flot Chart js*/                
                'src/assets/bundles/chartscripts.bundle.js': ['src/assets/plugins/chartjs/Chart.bundle.js'], /* ChartJs js*/
                'src/assets/bundles/jvectormap.bundle.js': ['src/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js','src/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'], /* ChartJs js*/
                'src/assets/bundles/sparkline.bundle.js': ['src/assets/plugins/jquery-sparkline/jquery.sparkline.js'], /* sparkline js*/               
                'src/assets/bundles/countTo.bundle.js': ['src/assets/plugins/jquery-countto/jquery.countTo.js'], /* CountTo js*/               
                'src/assets/bundles/knob.bundle.js': ['src/assets/plugins/jquery-knob/jquery.knob.min.js'], /* knob js*/
                'src/assets/bundles/fullcalendarscripts.bundle.js': ['src/assets/plugins/fullcalendar/lib/moment.min.js','src/assets/plugins/fullcalendar/lib/jquery-ui.min.js','src/assets/plugins/fullcalendar/fullcalendar.min.js'],   /* calender page js */
                'src/assets/bundles/datatablescripts.bundle.js': ['src/assets/plugins/jquery-datatable/jquery.dataTables.min.js','src/assets/plugins/jquery-datatable/dataTables.bootstrap4.min.js'], /* Jquery DataTable Plugin Js  */
                'src/assets/bundles/footable.bundle.js': ['src/assets/plugins/footable-bootstrap/js/footable.js'], /* knob js*/
              }
            }
        }                
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};


