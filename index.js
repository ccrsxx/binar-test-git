class TakeOffError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TakeOffError';
  }
}

class FlightError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FlightError';
  }
}

class EngineError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EngineError';
  }
}
