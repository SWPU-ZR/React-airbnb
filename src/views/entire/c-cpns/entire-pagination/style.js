import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-pagination-item {
      border-color: #fff;
      border-radius: 50%;
      a {
        &:hover {
          text-decoration: underline #fff;
        }
      }
    }
    .ant-pagination-item-active {
      background-color: #222;
      a {
        color: #fff;
      }
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`;
