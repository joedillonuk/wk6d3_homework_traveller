const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((total, item) => {
    return total + item.distance;
  }, 0);
  return result;
};

Traveller.prototype.getAllModesOfTransport = function () {
  return result = this.journeys.map((journey => {
    return journey.transport;
  }))
};

Traveller.prototype.getUniqueModesOfTransport = function () {
let  array = this.getAllModesOfTransport();
return uniqueArray = [...new Set(array)]
};


module.exports = Traveller;
