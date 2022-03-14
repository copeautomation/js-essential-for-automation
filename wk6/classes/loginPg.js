"use strict";

const Page = require("./page")

/**
 * A login page
 *
 * @lessons
 * 1. How to inherit properties from base class?
 * 2. How to call base class property or method?
 * 3. How to create an object?
 *
 * @terminology
 * super class -> sub-class
 * base class -> derived class
 * parent class -> child class
 *
 */


class LoginPage extends Page {

    constructor(){
       super() // this must the first line the child class constructor
       // TODO
       console.log(`Calling the child constructor..`);
       this.runDate = "2022-01-01"
       console.log(`The rundate is:${this.runDate}`);
    }

    // Getter property
    get loginBtn(){
        return 'loginBtn'
    }

    // Click a login btn
    clickLoginBtn(){
        this.click(this.loginBtn)
    }

}

// Object creation
let loginPg = new LoginPage()
// console.log(typeof loginPg); // object

// // Calling a parents' metho
// loginPg.navigateTo("google.com")

// // calling the own method
// loginPg.clickLoginBtn()

