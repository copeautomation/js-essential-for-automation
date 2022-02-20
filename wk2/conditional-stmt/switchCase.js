/**
 * Switch case
 *
 */

let browser = "brave"

switch (browser) {
  case "chrome":
    console.log(`>> Running chrome browser...`);
    break;
  case "firfox":
    console.log(`>> Running firefox browser...`);
    break;
  case "edge":
    console.log(`>> Running edge browser...`);
    break;
  default:
    console.log(`No valid browser: ${browser} is provided`);
}