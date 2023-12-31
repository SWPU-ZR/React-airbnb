import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  background-color: rgb(33, 33, 33);
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .swiper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex: 1;

    .pictures {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画的样式 */
      .pic-enter {
        transform: translate(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }

      .pic-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all 150ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 150ms ease;
      }
    }

    .control {
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      position: absolute;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
