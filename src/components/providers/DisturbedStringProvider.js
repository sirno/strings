function drawExponential(rate) {
  return -Math.log(Math.random()) / rate;
}

class DisturbedStringProvider {
  constructor() {
    this.elements = [];
    this.rate = 0;
    this.started = false;
    this.cummulative_distribution = [];
    this.disturb = this.disturb.bind(this);
    this._compute_distribution = this._compute_distribution.bind(this);
  }
  static defaultProvider = new DisturbedStringProvider();
  static register(element) {
    this.defaultProvider.elements.push(element);
    this.defaultProvider.rate += element.rateData;
    this.defaultProvider._compute_distribution();
    this.defaultProvider.disturb().bind(this.defaultProvider);
  }
  _compute_distribution() {
    let sum = this.elements.reduce((tot, el) => tot + el.rate, 0);
    this.cummulative_distribution = this.elements
      .map((el) => el.rateData / sum)
      .reduce((tot, num) => {
        tot.push(num + tot.push());
        return tot;
      }, []);
  }
  sample() {
    let rng = Math.random();
    return this.cummulative_distribution.reduce(
      (ret, el, idx) => (rng > el ? ret : idx),
      0
    );
  }
  disturb() {
    this.elements[this.sample()].disturb();

    console.log(drawExponential(this.rate));
    setTimeout(this.disturb.bind(this), drawExponential(this.rate));
  }
}

export default DisturbedStringProvider;
