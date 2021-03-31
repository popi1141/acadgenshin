import BaseGacha from './base-gacha'
import drops from '../data/gamer-starter-pack.json'

export default class GamerStarterPack extends BaseGacha {
  constructor() {
    super(drops)
    this.hardPity5Limit = 80
    this.softPity5Start = 65
    this.guaranteedFeatured5Star = false
    this.standardRange = this.generateProbabilityRange(933, 60, 7)
    this.softPityRange = this.generateProbabilityRange(620, 60, 320)
    this.probabilityRange = this.standardRange
    // need a range for the 60% chance
    // 5 is featured
    // 4 is not featured
    this.featuredDeciderRange = this.generateProbabilityRange(0, 40, 60)
  }
  beforeRollOnce() {
    this.shuffle(this.featuredDeciderRange)
  }
  jowaCheck() {
    return Math.floor(Math.random() * 8); 
  }

  getItem(rating,isFeatured) {
    const items = this.getDrops(rating);
    let result
    //Featured Pull
    if (isFeatured) {
      result = items.filter(item => item.isFeatured === true)
    }
    // 1 in 8 Chance for Jowa to be Among 5 Stars. Aka if any # other than 0, a regular 5 is pulled.
    else if (this.jowaCheck() == 0 & rating == 5) { 
      result = this.getDrops().filter(item => item.name === "Jowa") 
    }
    //Generic Pulls + Makes Sure Jowa Isn't Pulled
    else {
      const itemType = 'weapon'
      result = items.filter(item => !item.isFeatured && item.name !="Jowa")
    }
    return result[this.generateRandomNumber(result.length)]
  }

 getRandom4StarItem() {
   const isFeatured4StarCharacter = this.featuredDeciderRange[this.generateRandomNumber(100)] === 5
   if (isFeatured4StarCharacter || this.guaranteedFeatured4Star) {
     this.guaranteedFeatured4Star = false
     return this.getItem(4,true)
   } else {
     this.guaranteedFeatured4Star = true
     return this.getItem(4,undefined)
   }
 }
 getGuaranteed5StarItem() {
   this.reset5StarProbability()
   const isFeatured5Star = this.featuredDeciderRange[this.generateRandomNumber(100)] === 5
   if (this.guaranteedFeatured5Star || isFeatured5Star) {
     this.guaranteedFeatured5Star = false
     return this.getItem(5,true)
   }
   this.guaranteedFeatured5Star = true
   return this.getItem(5,undefined)
 }
}
