/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration) {
    const durationFrom = filters.duration.from;
    const durationTo = filters.duration.to;
    console.log(durationFrom, 'from');
    console.log(durationTo, 'to');
    output = output.filter(trip => trip.days >= durationFrom && trip.days <= durationTo);
    
  }
  // TODO - filter by tags
  if(filters.tags) {
    const traveltags = new RegExp(filters.tags, 'i');
    output = output.filter(trip => traveltags.test(trip.tags));
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => new RegExp (tripId, 'i').test(trip.id));
  

  // TODO - filter trips by tripId
  
  

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => new RegExp (countryCode, 'i').test(trip.country.code));


  // TODO - filter trips by countryCode
  

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
