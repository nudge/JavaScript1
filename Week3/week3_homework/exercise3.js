'use strict';

const numChildren = [5, 4, 8, 2, 1];
const partnerNames = ['Jack', 'Mike', 'Lucas', 'Noah', 'Ted'];
const locations = ['Dubai', 'Amsterdam', 'London', 'Seattle', 'Paris'];
const jobs = ['pilot', 'developer', 'doctor', 'waiter', 'officer'];

function tellFortune(number_of_children, partner_name, geographic_location, job_title) {
  const random = Math.round(Math.random() * 4);

  return `You will be a ${job_title[random]} in ${geographic_location[random]}, and married to ${partner_name[random]} with ${number_of_children[random]} kids.`;
}

tellFortune(numChildren, partnerNames, locations, jobs);
