// ==UserScript==
// @name         upButtonClick
// @namespace    http://tampermonkey.net/
// @version      1
// @description  fuck hh
// @author       aboba
// @match        https://hh.ru/*
// @grant        none
// ==/UserScript==


////aft click //*[@id="HH-React-Root"]/div/div[3]/div[1]/div/div/div[1]/div[4]/div[2]/div/div[6]/div/div/div/div[1]/div/span/button
////can click //*[@id="HH-React-Root"]/div/div[3]/div[1]/div/div/div[1]/div[4]/div[2]/div/div[6]/div/div/div/div[1]/span/button
////*[@id="HH-React-Root"]/div/div[3]/div[1]/div/div/div[1]/div[4]/div[2]/div/div[6]/div/div/div/div[1]/div/span/button
///html/body/div[5]/div/div[3]/div[1]/div/div/div[1]/div[4]/div[2]/div/div[6]/div/div/div/div[1]/div/span/button


window.onload = function () {

    const buttonXPath = '/html/body/div[5]/div/div[3]/div[1]/div/div/div[1]/div[4]/div[2]/div/div[6]/div/div/div/div[1]/span/button';
    const sec = 1000;
    const min = 60*sec;
    const hour = 60*min;

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function data(){
        var d = new Date();
        return d.toLocaleTimeString('en-US', { hour12: false });
    }

    function up(){
        let b = getElementByXpath(buttonXPath);
        if (null == b) {
            console.log('bot now (no element) | ' + data());
            return;
        }
        let text = b.textContent;
        if(text === 'Поднять в поиске'){
            setTimeout(() => {
                b.click();
                location.reload();
                console.log('system was fucked by us | ' + data());
            }, min + getRandomInt(15*sec));
        }
        else console.log('bot now (other text) | ' + data());
    }

    setInterval(up, min * 15 + getRandomInt(30*sec));
}