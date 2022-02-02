// get 12 hour status, code from barclock
const is12Hour = (require("Storage").readJSON("setting.json", 1) || {})["12hour"];

// define background
var imgBg = require("heatshrink").decompress(atob("2GwgJC/AH4A/AH4A/AH4A/AH4A/ACcGAhAV/Cp3gvdug+Gj0AgeABYMBAQMIggVEg/w/9/h/Gn8As3ACpk559zznmseAs0B13nq/Rie+uodCIIUZw9hzFmv+AgcCmco7MRilow1ACpN8gFhwMilFRCoMowgVEIIVhIINhwFg4GiCpfw/dhx/mn4uBCoXRhWktAVFTIVhw9mj8YseDkUnqPEoeuugVEAAlgSgICBACAVC8AUQCQQVSAEsD/4ASeYgA/ACkHNiK5Cj4VR/AVBng+RCQVwCqMOAQPhIKOHgEB44VR8YVBx4VR+eAgOfCqPxwEDCqX5CoKvS/PAgc/YqQVU/gV/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/CsMfCqP4CoOfCqP54EBx4VR+OAgPPCqPzwEA44VR4cAgHhCqMHCoNwAQIAPjwCBngVRvgCBV6XwCoMHCqPAHyIA/AEigEf4IAOkAEDoAPJWAtA+PHv+Al6uPCofAGAgALoHz51/8AVT+IVS+4VPpMR73woH27n/8Eh8+ZmadIqsoyGICofAkMUktJFZAVBzgVBv34YgMhi8RkIVJnGQIIN8/H34FB8kJiIVIkVEyGQkF8/Pj4GBkhBKCoOexEQvHx8fBgMXzMxTJkICoXCVx8AggDGABsD/4AB/AVQAH4APA"));

// define fonts

Graphics.prototype.setFontDSDigitalBold = function(scale) {
  // Actual height 48 (56 - 9)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAD/gAAAAAAAAB//AAAAAAAAA//wAAAAAAAAP/8AAAAAAAAH/+AAAAAAAAD//AAAAAAAAB//gAAAAAAAAf/4AAAAAAAAD/8AAAAAAAAAf+AAAAAAAAAH/gAAAAAAAAA/wAAAAAAAAQH4AAAAAAAAPwcAAAAAAAAD/gAAAAAAAAB/8AAAAAAAAA//gAAAAAAAAP/4AAAAAAAAH/+AAAAAAAAD//AAAAAAAAB//gAAAAAAAAP/4AAAAAAAAD/8AAAAAAAAAf+AAAAAAAAAD/AAAAAAAAAAfwAAAAAAAAAH4AAAAAAAAAA8AAAAAAAAAAHAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4H//4AAAAf//h//+AAAAN//+f//kAAAB3//h//5gAAAPf/4H/+cAAAB9/+Af/ngAAAP3/gB/58AAAB/AAAAAfgAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAH8AAAB/AAAAA/gAAAP4AAAAD8AAAB+f8AP/fgAAAPv/wD/98AAAB7//A//3gAAAO//8P//cAAABv//z//9gAAAL//8P//0AAAAf//A///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gB/wAAAAAA/+Af/AAAAAAP/4H/8AAAAAD//h//wAAAAA//+f//AAAAAP//h//8AAAAD//4H//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//4AAAAAAAB//+AAAAMAAAf//kAAABwAAB//5gAAAPAABn/+cAAAB8AAef/ngAAAPwAH5/58AAAB/AA/gAfgAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AD8AAAB+f8/AAfgAAAPv/zwAB8AAAB7//MAAHgAAAO//8AAAcAAABv//wAABgAAAL//8AAAEAAAAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAgAAAOAAAAAAMAAAB4AAMAADgAAAPgADwAA8AAAB+AA/AAPgAAAP4AH8AD8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gAfgAAAPz/n5/78AAAB9/+ef/vgAAAPf/5n/+8AAAB3//h//7gAAAN//+f//sAAABf//h//+gAAAD//4H//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4AAAAAAAAf//gAAAAAAAB//+AAAAAAAAH//gAAAAAAAAf/5gAAAAAAAB/+eAAAAAAAAH/n4AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAAA/gAAAAAAAAAH8AAAAAAAAf8/P/AAAAAAP/zz/8AAAAAD//M//wAAAAA//8P//AAAAAP//z//8AAAAD//8P//wAAAAf//A///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//AAAAAAAAD//8AAAAAAABv//wAAAgAAAO//8AAAMAAAB7//MAADgAAAPv/zwAA8AAAB+/8/AAPgAAAP4AH8AD8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gAfgAAAPwAH5/78AAAB8AAef/vgAAAPAABn/+8AAABwAAB//7gAAAMAAAf//sAAABAAAB//+gAAAAAAAH//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4H//4AAAAf//h//+AAAAN//+f//kAAAB3//h//5gAAAPf/5n/+cAAAB9/+ef/ngAAAP3/n5/58AAAB/AA/gAfgAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AD8AAAB+AA/P/fgAAAPgADz/98AAAB4AAM//3gAAAOAAAP//cAAABgAAD//9gAAAIAAAP//0AAAAAAAA///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAMAAAAAAAAAABwAAAAAAAAAAPAAAAAAAAAAB8AAAAAAAAAAPwAAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAP4AAAAAAAAAB/AAAAAAAAAAPz/gB/wAAAAB8/+Af/AAAAAPP/4H/8AAAABz//h//wAAAAM//+f//AAAABP//h//8AAAAD//4H//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4H//4AAAAf//h//+AAAAN//+f//kAAAB3//h//5gAAAPf/5n/+cAAAB9/+ef/ngAAAP3/n5/58AAAB/AA/gAfgAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AD8AAAB+f8/P/fgAAAPv/zz/98AAAB7//M//3gAAAO//8P//cAAABv//z//9gAAAL//8P//0AAAAf//A///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//AAAAAAAAD//8AAAAAAABv//wAAAgAAAO//8AAAMAAAB7//MAADgAAAPv/zwAA8AAAB+/8/AAPgAAAP4AH8AD8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gA/gAAAP4AH8AH8AAAB/AA/gAfgAAAPz/n5/78AAAB9/+ef/vgAAAPf/5n/+8AAAB3//h//7gAAAN//+f//sAAABf//h//+gAAAD//4H//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAB/AAAAAAH8AAP4AAAAAA/gAB/AAAAAAH8AAP4AAAAAA/gAB/AAAAAAH8AAP4AAAAAA/gAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="), 46, atob("DCIjESMjIyMjIyMjDw=="), 69+(scale<<8)+(1<<16));
};

// tiny font for percentage first char 48 6 by 8 
var fontTiny = atob("AH6BgYF+ACFB/wEBAGGDhYlxAEKBkZFuAAx0hP8EAPqRkZGOAH6RkZFOAICHmKDAAG6RkZFuAHKJiYl+AAAAAAAAAAAAAAAA");
// date font first char 48 12 by 15
var fontDate = atob("AAAAAfv149wAeADwAeADwAeADvHr9+AAAAAAAAAAAAAAAAAAAAAAAAAPHn9/AAAAAAP0A9wweGDwweGDwweGDvAL8AAAAAAAAAAAgwOGDwweGDwweGDvHp98AAAAA/gB6AAwAGAAwAGAAwAGAPHj9/AAAAAfgF6BwweGDwweGDwweGDgHoB+AAAAAfv169wweGDwweGDwweGDgHoB+AAAAAAAAAAgAGAAwAGAAwAGAAvHh9/AAAAAfv169wweGDwweGDwweGDvHr9+AAAAAfgF6BwweGDwweGDwweGDvHr9+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

// define days of the week images
var imgMon = E.toArrayBuffer(atob("Ig8BgHwfD5AvB8HD8z8wMPzPzMQzM/M/DMz8z8c7f7f7z////3Oz+3+PzPzPw/M/M/D8z8z8PzPzPw/vB8/n/8H3/A=="));
var imgTue = E.toArrayBuffer(atob("Ig8BwDv9wDAOfmgf/5+Z///n5n/5+fmf/n5+Z//fv9oH////Af37/b/+fn5n/5+fmf/n5+Z/+fn5n/5/g+gfn+D8AA=="));
var imgWed = E.toArrayBuffer(atob("Ig8Bf7gHgM/NA9Az8z/z8PzP/Pw/M/8/D8z/z8c7QPf7z+A//3O3/3+MzP/PwzM/8/D8z/z8PzP/PxAtA9A4B4B4DA=="));
var imgThu = E.toArrayBuffer(atob("Ig8BgHf7f6Ac/M/P/z8z8//PzPzz8/M/PPz8z8+/QLf7/+A///v3+3+8/PzPzz8/M/PPz8z88/PzPzz8/vB/P3/8HA=="));
var imgFri = E.toArrayBuffer(atob("Ig8B/wDwP7+geg/P5/5+c/n/n5z+f+fnP5/5+c/oHoF7/AfAf/7/7/+/n/k/z+f+R/P5/5j8/n/nHz+/++PP7//8+A=="));
var imgSat = E.toArrayBuffer(atob("Ig8B4DwDwDgOgXAJ/5+f/n/n5/+f+fn55/5+fnoHoF/fAfAf//+b/f3/5n5+f/mfn5/+Z+fn//n5+eAef358B7//nA=="));
var imgSun = E.toArrayBuffer(atob("Ig8BwHf7D7Ac/MHD/z8wMP/PzMQ/8/M/D/z8z8QPf7f6A/////83+3+/zPzPz/M/M/P8z8z8//PzPwA/B8/oD8H3/A=="));



// define icons
var imgSep = E.toArrayBuffer(atob("BhsBAAAAAA///////////////AAAAAAA"));
var imgPercent = E.toArrayBuffer(atob("BwcBuq7ffbqugA=="));
var img24hr = E.toArrayBuffer(atob("EwgBj7vO53na73tcDtu9uDev7vA93g=="));
var imgPM = E.toArrayBuffer(atob("EwgB+HOfdnPu1X3ar4dV9+q+/bfftg=="));

// settings
var separator = true;
var is24hr = !is12Hour;
var leadingZero = true;

//the following 2 sections are used from waveclk to schedule minutely updates
// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}

function drawBackground() {
  g.setBgColor(0,0,0);
  g.setColor(1,1,1);
  g.clear();
  g.drawImage(imgBg,0,0);
  g.reset();
}

function draw(){
  drawBackground();
  var date = new Date();
  var h = date.getHours(), m = date.getMinutes();
  var d = date.getDate(), w = date.getDay();
  g.reset();
  g.setBgColor(0,0,0);
  g.setColor(1,1,1);

  //draw 24 hr indicator and 12 hr specific behavior
  if (is24hr){
    g.drawImage(img24hr,32, 65);
    if (leadingZero){
      h = ("0"+h).substr(-2);
      }
  } else if (h > 12) {
    g.drawImage(imgPM,40, 70);
    h = h - 12;
    if (leadingZero){
      h = ("0"+h).substr(-2);
    } else {
      h = " " + h;
    }
  } else if (h === 0) {
    // display 12:00 instead of 00:00 for 12 hr mode
    h = "12";
  }

  //draw separator
  if (separator){
  g.drawImage(imgSep, 85,105);}

  //draw day of week
  var imgW = null;
  if (w == 0) {imgW = imgSun;}
  if (w == 1) {imgW = imgMon;}
  if (w == 2) {imgW = imgTue;}
  if (w == 3) {imgW = imgWed;}
  if (w == 4) {imgW = imgThu;}
  if (w == 5) {imgW = imgFri;}
  if (w == 6) {imgW = imgSat;}
  g.drawImage(imgW, 85, 63);


  // draw nums
  g.setColor(0,0,0);
  g.setBgColor(1,1,1);
  // draw date
  g.setFontCustom(fontDate, 48, 12, 15);
  g.drawString(("0"+d).substr(-2), 123,63, true);
  // draw time
  g.setClipRect(12,90,163,145);
  g.setFont("DSDigitalBold");
  if (h<10) {
    if (leadingZero) {
      h = ("0"+h).substr(-2);
    } else {
      h = " " + h;
    }
  }
  g.setFontAlign(1,1);
  g.drawString(h[0], 50, 155, true);
  g.drawString(h[1], 82, 155, true);
  if (m<10) {
    m = ("0"+m).substr(-2);
  } else {
    m = m.toString();
  }
  g.drawString(m[0], 129, 155, true);
  g.drawString(m[1], 161, 155, true);
  //g.drawString(("0"+m).substr(-2), 92, 90, true);

  // widget redraw
  Bangle.drawWidgets();
  queueDraw();
}

/**
 * This watch is mostly dark, it does not make sense to respect the
 * light theme as you end up with a white strip at the top for the
 * widgets and black watch. So set the colours to the dark theme.
 *
 */
g.setTheme({bg:"#000",fg:"#fff",dark:true}).clear();
draw();

//the following section is also from waveclk
Bangle.on('lcdPower',on=>{
  if (on) {
    draw(); // draw immediately, queue redraw
  } else { // stop draw timer
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
  }
});

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
