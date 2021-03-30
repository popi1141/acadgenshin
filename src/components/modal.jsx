import React from 'react';

export default function Modal(props) {
  const { hideModal } = props
  return(
    <div
    onClick={hideModal}
    className="modal-container">
      <div className="disclaimer-modal m-2"
      onClick={e => e.stopPropagation()}
      >
        <div className="disclaimer-modal-content p-2">
        <div
        onClick={hideModal}
        className="close-button"></div>
          <h2>Disclaimer</h2>
          <p>
            This AcadArena Gacha Simulator was only created for fun for April Fool's day to celebrate the Philippine esports and campus esports scene and is not meant for any monetary gain.
          </p>

          <p>
            The project is a custom fork of the amazing work done by Uzair Ashraf. The source code is available <a href="https://github.com/uzair-ashraf/genshin-impact-wish-simulator" target="_blank">here</a>, please give it a star if you like it!
          </p>

          <p>
            Work is inspired by MiHoYo's Genshin Impact, as well as the Gacha Genre in general.
          </p>
        </div>
      </div>
    </div>
  )
}
