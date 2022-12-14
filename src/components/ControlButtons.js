import { Component } from "react";

class ControlButtons extends Component {
  render() {
    let speed;
    if (this.props.control.speed === 5) {
      speed = "..";
    } else if (this.props.control.speed === 4) {
      speed = "...";
    } else {
      speed = ".";
    }
    return (
      <div className="button-panel">
        {/* play/pause control */}

        {this.props.control.paused ? (
          <>
            {/* pause */}
            <button
              className="button"
              onClick={() => {
                this.props.toggleplay();
              }}
            >
              <svg
                className="svg-icon"
                role="img"
                height="48"
                width="48"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.25 18.25V29.7q0 .9.725 1.325.725.425 1.425-.075l9.05-5.8q.65-.4.65-1.15 0-.75-.65-1.2L21.4 17q-.7-.45-1.425-.025-.725.425-.725 1.275ZM24 43.75q-4.05 0-7.65-1.575-3.6-1.575-6.275-4.25Q7.4 35.25 5.825 31.65 4.25 28.05 4.25 24q0-4.05 1.575-7.65 1.575-3.6 4.25-6.3 2.675-2.7 6.275-4.25 3.6-1.55 7.65-1.55 4.05 0 7.65 1.575 3.6 1.575 6.3 4.25 2.7 2.675 4.25 6.275 1.55 3.6 1.55 7.65 0 4.05-1.575 7.65-1.575 3.6-4.25 6.275-2.675 2.675-6.275 4.25-3.6 1.575-7.65 1.575ZM24 24Zm0 16.85q6.95 0 11.925-4.95Q40.9 30.95 40.9 24t-4.975-11.925Q30.95 7.1 24 7.1q-6.95 0-11.9 4.975T7.15 24q0 6.95 4.95 11.9T24 40.85Z" />
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* play */}
            <button
              className="button"
              onClick={() => {
                this.props.toggleplay();
              }}
            >
              <svg
                className="svg-icon"
                role="img"
                height="48"
                width="48"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.05 31.9q.65 0 1.05-.425t.4-1.025v-13q0-.5-.4-.925-.4-.425-1.05-.425-.6 0-1 .425t-.4.975v13q0 .55.4.975.4.425 1 .425Zm7.9 0q.65 0 1.05-.425t.4-1.025v-13q0-.5-.4-.925-.4-.425-1.05-.425-.6 0-1 .425t-.4.975v13q0 .55.4.975.4.425 1 .425ZM24 43.75q-4.05 0-7.65-1.575-3.6-1.575-6.275-4.25Q7.4 35.25 5.825 31.65 4.25 28.05 4.25 24q0-4.05 1.575-7.65 1.575-3.6 4.25-6.3 2.675-2.7 6.275-4.25 3.6-1.55 7.65-1.55 4.05 0 7.65 1.575 3.6 1.575 6.3 4.25 2.7 2.675 4.25 6.275 1.55 3.6 1.55 7.65 0 4.05-1.575 7.65-1.575 3.6-4.25 6.275-2.675 2.675-6.275 4.25-3.6 1.575-7.65 1.575ZM24 24Zm0 16.85q6.95 0 11.925-4.95Q40.9 30.95 40.9 24t-4.975-11.925Q30.95 7.1 24 7.1q-6.95 0-11.9 4.975T7.15 24q0 6.95 4.95 11.9T24 40.85Z" />
              </svg>
            </button>
          </>
        )}
        {/* mute control */}

        {this.props.control.muted ? (
          <button
            className="button"
            onClick={() => {
              this.props.togglemute();
            }}
          >
            <svg
              className="svg-icon"
              role="img"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M30.05 40.4q-.8.3-1.425-.175T28 38.9q0-.4.2-.7.2-.3.6-.4 4.45-1.55 7.175-5.325Q38.7 28.7 38.7 23.95t-2.725-8.55q-2.725-3.8-7.175-5.3-.35-.1-.575-.425Q28 9.35 28 8.95q0-.8.65-1.275.65-.475 1.4-.225 5.2 1.9 8.375 6.4t3.175 10.1q0 5.6-3.175 10.1T30.05 40.4ZM7.85 29.85q-.6 0-1-.4t-.4-1.05v-8.85q0-.6.4-1t1-.4h6.45l7.4-7.4q.65-.65 1.525-.3.875.35.875 1.3V36.2q0 .95-.875 1.325T21.7 37.2l-7.4-7.35ZM27 32.3V15.65q2.75.85 4.4 3.175Q33.05 21.15 33.05 24q0 2.9-1.65 5.15-1.65 2.25-4.4 3.15Zm-5.75-16.7L15.6 21H9.3v5.95h6.3l5.65 5.45ZM16.6 24Z" />
            </svg>
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              this.props.togglemute();
            }}
          >
            <svg
              className="svg-icon"
              role="img"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m39.4 43.85-5.55-5.6q-1 .7-2 1.25t-2.15.9q-.75.3-1.375-.175T27.7 38.9q0-.4.2-.675t.6-.425q.8-.3 1.65-.675.85-.375 1.65-.925l-8-8v8.05q0 .95-.875 1.3-.875.35-1.525-.35L14 29.85H7.55q-.65 0-1.025-.4-.375-.4-.375-1.05v-8.85q0-.6.375-1t1.025-.4h6.15L3.75 8.2q-.45-.45-.425-1.05.025-.6.475-1.05.45-.45 1-.45t1 .45l35.75 35.65q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.075.45t-1.075-.45Zm-9.7-36.4q5.2 1.9 8.4 6.4t3.2 10.1q0 2.5-.7 4.925t-2.1 4.575l-2.05-2.1q1-1.65 1.475-3.525.475-1.875.475-3.875 0-4.85-2.7-8.725t-7.2-5.175q-.4-.1-.6-.4-.2-.3-.2-.7 0-.8.65-1.275Q29 7.2 29.7 7.45Zm-10.9 15.8Zm13.35 3.8L27.7 22.6V16q2.3 1.1 3.675 3.25T32.75 24q0 .8-.15 1.575-.15.775-.45 1.475Zm-8.35-8.3-5.2-5.2 2.8-2.8q.65-.65 1.525-.275.875.375.875 1.275Zm-2.85 13.9v-7.3L16.6 21H9v5.95h6.25Z" />
            </svg>
          </button>
        )}

        {/* speed */}
        <div
          className="speed-wrapper"
          onClick={() => {
            this.props.toggleSpeed();
          }}
        >
          <div className="speed-meter">{speed}</div>
          <button className="button">
            <svg
              className="svg-icon"
              role="img"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.5 31.65q1.1 1.1 3.275 1.05 2.175-.05 3.125-1.6l8.9-13.85q.3-.5-.1-.925-.4-.425-.9-.075L21.05 25.2q-1.45 1-1.55 3.175-.1 2.175 1 3.275Zm-10.7 8.1q-.8 0-1.6-.4T7 38.2q-1.3-2.35-1.975-4.8-.675-2.45-.675-5.25 0-4.1 1.55-7.725t4.225-6.325q2.675-2.7 6.25-4.275Q19.95 8.25 24 8.25q2.3 0 4.75.575t4.9 1.975q.9.55 1 1.275.1.725-.5 1.175-.4.3-.925.375-.525.075-.925-.175-2.1-1.2-4.375-1.75T24 11.15q-6.95 0-11.85 4.975-4.9 4.975-4.9 12.025 0 2.25.6 4.525.6 2.275 1.75 4.225h28.75q1.1-1.8 1.75-4.175.65-2.375.65-4.675 0-1.8-.475-3.925T38.6 20.05q-.25-.45-.175-.95.075-.5.475-.85.5-.4 1.125-.325.625.075.975.625 1.25 2.35 1.925 4.65.675 2.3.675 4.55.05 3-.6 5.6-.65 2.6-2 4.85-.55 1.1-1.2 1.325-.65.225-1.65.225ZM24 24Z" />
            </svg>
          </button>
        </div>

        {/* full screen  */}
        {/* iphone exception */}
        {window.navigator.userAgent.match(/iPhone/i) ? (
          ""
        ) : document.fullscreenElement || document.webkitFullscreenElement ? (
          <button
            className="button"
            onClick={() => {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }}
          >
            <svg
              className="svg-icon"
              role="img"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" />
            </svg>
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              const body = document.querySelector("body");
              if (body.requestFullscreen) {
                body.requestFullscreen();
              } else if (body.webkitRequestFullscreen) {
                body.webkitRequestFullscreen();
              }
              body.requestFullscreen();
            }}
          >
            <svg
              className="svg-icon"
              role="img"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.65 38.35v-10.2h3.4v6.8h6.8v3.4Zm0-18.5V9.65h10.2v3.4h-6.8v6.8Zm18.5 18.5v-3.4h6.8v-6.8h3.4v10.2Zm6.8-18.5v-6.8h-6.8v-3.4h10.2v10.2Z" />
            </svg>
          </button>
        )}

        {/* replay */}
        <button
          className="button"
          onClick={() => {
            this.props.replay();
          }}
        >
          <svg
            className="svg-icon"
            role="img"
            height="48"
            width="48"
            viewBox="0 0 48 48"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M24 43.75q-7.1 0-12.15-4.7Q6.8 34.35 6.3 27.4q-.05-.55.35-1 .4-.45 1.05-.45.55 0 .95.425.4.425.5 1.025.55 5.7 4.775 9.575Q18.15 40.85 24 40.85q6.2 0 10.55-4.325Q38.9 32.2 38.9 26q0-6.25-4.225-10.575Q30.45 11.1 24.25 11.1h-1.1l2.6 2.65q.45.4.45.975t-.45.975q-.45.45-1 .45t-1-.45l-5.15-5.15q-.25-.25-.35-.475-.1-.225-.1-.525 0-.3.1-.525.1-.225.35-.475l5.2-5.25q.4-.35.975-.35t.975.35q.4.5.4 1.05t-.4.95l-2.9 2.9H24q3.7 0 6.95 1.4t5.65 3.8q2.4 2.4 3.8 5.65 1.4 3.25 1.4 6.9 0 3.7-1.4 6.95t-3.8 5.65q-2.4 2.4-5.65 3.8-3.25 1.4-6.95 1.4Z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default ControlButtons;
