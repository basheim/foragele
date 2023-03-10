# Foragele

## Summary
The NextJS App for the https://programmingbean.com website.


## Operation
The service is managed on EC2 using the shared [Release Scripts](https://github.com/basheim/release-scripts) with the 
-f identifier.

To build and push a new image, run `sh ./scripts/image_build.sh`.

### Local Run

Command line: run `npm run dev`

## Known issues

Sometimes the blog posts will not be pulled correctly during build. A restart of the beans-backend fixes this. Currently in investigation (moving from Tomcat to Hikari connection pool).