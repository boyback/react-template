import styled from "styled-components";
const Wrapper = styled.div`
  .layout {
    height: 100vh;
    display: flex !important;
    .side {
      width: 200px;
    }
    > .layout {
      width: calc(100vw - 200px);
      display: flex;
      flex-direction: column;
      background: #fafbff;
      padding: 20px 87px 0;
      .header {
        display: flex;
        justify-content: space-between;
        height: 100px;
        .welecome {
          width: 200px;
          .name {
            font-size: 16px;
          }
          .tip {
            font-size: 20px;
            font-weight: bold;
          }
        }
        .search {
          display: flex;
          width: 200px;
          height: 30px;
          .tip {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: blue;
          }
        }
      }
      .content {
        min-height: calc(100vh - 260px);
      }
      .status-card {
        width: 100%;
        height: 189px;
        background: #ffffff;
        box-shadow: 0px 11px 21px 1px rgba(143, 149, 178, 0.15);
        border-radius: 20px;
        margin-bottom: 10px;
      }
      .bill-card {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        .bill-chart {
          width: 932px;
          height: 290px;
          background: #ffffff;
          box-shadow: 0px 11px 21px 1px rgba(143, 149, 178, 0.15);
          border-radius: 20px;
          margin-right: 20px;
        }
        .bill-editor {
          width: 100%;
          height: 290px;
          background: #ffffff;
          border-radius: 20px;
        }
      }
    }
  }
`;
export default Wrapper;
