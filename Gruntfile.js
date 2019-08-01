var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
   lambda_invoke: {
      default: {
         options: {
            file_name: 'CreateThumbnail.js'
         }
      }
   },
   lambda_deploy: {
      default: {
         options: {
            profile: "tah",
            region: "us-east-2",
            timeout: 10,
            memory: 1024
         },
         function: 'CreateThumbnail',
         arn: 'arn:aws:lambda:us-east-2:919568423267:function:CreateThumbnail',
         package: 'dist/lambda-thumbnails_0-0-1_latest.zip'
      }
   },
   lambda_package: {
      default: {
         options: {
            include_time: false
         }
      }
   }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])