import React, { Component } from 'react';
import BannerButton from './banner-button';
import { Carousel } from 'react-responsive-carousel';
import Modal from './modal';
import Settings from './settings'

const banners = require.context('../assets/images/banners', true);
const others = require.context('../assets/images/others', true);
export default class Banners extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBanner: 'gamer-starter-pack',
      banners: {
        'gamer-starter-pack': 'Gamer Packs and Boosts',
        'lodi-event-wish': 'Holders of the Torch',
        'flames-of-campus': 'Flames of Campus'
      },
      wishes: {
        'gamer-starter-pack': 'gamerStarterPack',
        'lodi-event-wish': 'lodiEventWish',
        'flames-of-campus': 'flamesOfCampus'
      },
      isSettingsPageVisible: false
    }

  }
  componentDidMount() {
    this.setState({ selectedBanner: this.props.selectedBanner })
  }

  onCarouselChange(index) {
    this.switchBanner(Object.keys(this.state.banners)[index])
  }
  switchBanner(selectedBanner) {
    this.setState({ selectedBanner }, () => this.props.setCurrentDetails(selectedBanner))
  }
  get bannerText() {
    return this.state.banners[this.state.selectedBanner]
  }
  toggleSettingsModal(isSettingsPageVisible) {
    this.setState({
      isSettingsPageVisible
    })
  }

  render() {
    const {
      selectedBanner,
      isSettingsPageVisible
     } = this.state
    const {
      wasDisclaimerSeen,
      setView,
      setSelectedWish,
      hideModal,
      reset,
      wish,
      getFormattedCharacterEventWish,
      updateCharacterEventWish,
      saveData,
      userWishes
    } = this.props
    const bannerKeys = Object.keys(this.state.banners);
    const selectedBannerIndex = bannerKeys.findIndex(b => b === selectedBanner)
    return (
      <>
        {
          wasDisclaimerSeen
            ? null
            : <Modal hideModal={hideModal} />
        }
        {
          isSettingsPageVisible &&
          <Settings
            closeSettings={() => this.toggleSettingsModal(false)}
            reset={() => reset(selectedBanner)}
            updateCharacterEventWish={updateCharacterEventWish}
            getFormattedCharacterEventWish={getFormattedCharacterEventWish}
          />
        }
        <div className="wrapper banners">
          <div className="giws-banners-container">
            <div className="heading">
              <div className="current-banner">
                <img src={others(`./logo.png`).default}/> 
                <div className="current-banner-text">{this.bannerText}</div>
              </div>
              <div className="select-banner">
                {
                  bannerKeys.map(banner => (
                    <BannerButton
                      key={banner}
                      isSelected={banner === selectedBanner}
                      className={banner}
                      onClick={() => this.switchBanner(banner)}
                    />
                  ))
                }
              </div>
            </div>
            <div className="carousel-container">
              <Carousel
                className={"carousel"}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                emulateTouch={false}
                showArrows={false}
                infiniteLoop={true}
                selectedItem={selectedBannerIndex}
                onChange={this.onCarouselChange.bind(this)}
              >
                {
                  bannerKeys.map(banner => {
                    return (
                      <div key={banner} className={`banner-slide ${banner}`}>
                        <div
                        title={`Your wish counter, you have wished ${userWishes[banner]} times`}
                        className="wish-counter">{userWishes[banner]}</div>
                        <img src={banners(`./${banner}.png`).default} />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
            <div className="action-container">
              <div className="button-container">
                  <button
                    onClick={() => this.toggleSettingsModal(true)}
                  >Settings</button>
                </div>
              <div className="wish-container d-flex justify-content-center">
                <div
                  onClick={() => {
                    wish(this.state.wishes[selectedBanner], true)
                  }}
                  className="wish-button"
                >Wish</div>
                <div className="wish-button"
                  onClick={() => {
                    wish(this.state.wishes[selectedBanner])
                  }}
                >
                  Wish x10
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
