import { fib } from "./fib";
import {Builder, Capabilities} from 'selenium-webdriver';
import { expect } from "chai";
import "mocha";
import { driver } from 'mocha-webdriver';


describe("Fibonacci", () => {
    it("fib(0)=0", () => {
        expect(fib(0)).to.equal(0);
    });
    it("fib(1)=1", () => {
        expect(fib(0)).to.equal(0);
    });
    it("fib(2)=1", () => {
        expect(fib(0)).to.equal(0);
    });
    it("fib(3)=2", () => {
        expect(fib(0)).to.equal(0);
    });
    it("fib(40)=102334155", () => {
        expect(fib(40)).to.equal(102334155);
    });
});


describe('testDrugi', () => {
    it('should say something', async function() {
        this.timeout(20000);
        await driver.get('file:///home/cgev/Dropbox/CS/JS/www/index.html');

        expect(await driver.find('select[name=from]').getText()).to.include('Vilnus');
        await driver.find('input[type=text]').sendKeys('Jan Woreczko');
    });
})
