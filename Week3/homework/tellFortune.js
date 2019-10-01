'use strict';

function tellFortune(children, partners, location, jobTitle) {
    const rondomChi = Math.floor(Math.random() * children.length);
    const rondomPar = Math.floor(Math.random() * partners.length);
    const rondomLoc = Math.floor(Math.random() * location.length);
    const rondomJob = Math.floor(Math.random() * jobTitle.length);
    return console.log(`You will be a ${jobTitle[rondomJob]} in ${location[rondomLoc]}, and married to ${partners[rondomPar]} with ${children[rondomChi]} kids`)
}
const numChildren = [1, 2, 3, 4];
const partnerNames = ['Eva', 'Emma', 'Anna', 'Tess', 'Mila'];
const locations = ['Irak', 'Netherland', 'Brazil', 'Gernany', 'Turkey'];
const jobs = ['Front-End developer', 'Back-end developer', 'Full-Stack developer', 'Sport coach', 'Policeman'];

tellFortune(numChildren, partnerNames, locations, jobs);