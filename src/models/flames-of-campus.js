import BaseGacha from './base-gacha'
import drops from '../data/flames-of-campus.json'

export default class FlamesOfCampus extends BaseGacha {
  constructor() {
    super(drops)
  }
}
