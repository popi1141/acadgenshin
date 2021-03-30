import BaseGacha from './base-gacha'
import drops from '../data/standard-wish.json'

export default class StandardWish extends BaseGacha {
  constructor() {
    super(drops)
  }
}
