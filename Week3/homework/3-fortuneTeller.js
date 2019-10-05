'use strict'

function random(array){
  return Math.floor(Math.random() * array.length);
}

const children = [1, 10, 5, 0, 3];
const partners = ["Mariam","Lura","Paula", "Sophia","karlijn"];
const locations = [ "Amsterdam", "Paris", "new york", "Tokyo","Berlin"];
const jobs = ["Developer", "Actor", "Doctor", "Lawyer", "Accountant"];

function tellFortune(children, partners, locations, jobs){
  return `You will be a ${jobs[random(jobs)]} in ${locations[random(locations)]}, and married to ${partners[random(partners)]} with ${children[random(children)]} kids.`
}

let fortune = tellFortune(children, partners, locations, jobs);
console.log(fortune);