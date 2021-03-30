import BaseGacha from './base-gacha'
import drops from '../data/lodi-event-wish.json'

export default class LodiEventWish extends BaseGacha {
  constructor() {
    super(drops)
  }
}
