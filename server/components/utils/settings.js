/*jshint esversion: 6 */
// Global settings are configured here
const settings = {
    company_name: "Contacts Application",
    app_name: "NodeJS Express",
    SERVER_PORT: process.env.PORT, 
    API_HOST: process.env.API_HOST,
};
console.log("\nConfigurations:");
console.log(settings);

module.exports = settings;