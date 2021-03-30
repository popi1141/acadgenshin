import BaseGacha from './base-gacha'
import drops from '../data/university-alliance-cup.json'

export default class UniversityAllianceCup extends BaseGacha {
  constructor() {
    super(drops)
  }
}
