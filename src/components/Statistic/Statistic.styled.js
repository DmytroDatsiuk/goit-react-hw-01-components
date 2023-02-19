import styled from 'styled-components';

export const StatisticSection = styled.div`
  width: 300px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  color: gray;
  box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.3);

  /* padding: 15px; */
`;

export const StatisticTitle = styled.h2`
  text-align: center;

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StatisticList = styled.ul`
  display: flex;
  border: 1px solid rgb(172, 172, 172);

  border-end-end-radius: 5px;
  border-end-start-radius: 5px;
`;

export const StatisticListItem = styled.li`
  width: 100%;
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${props => {
    switch (props.isColor) {
      case '.docx':
        return 'rgba(172, 171, 247, 0.525)';
      case '.pdf':
        return 'rgba(32, 121, 247, 0.525)';
      case '.mp3':
        return 'rgba(72, 191, 247, 0.525)';
      case '.psd':
        return 'rgba(122, 141, 247, 0.525)';

      default:
        return 'white';
    }
  }};

  &:not(:last-child) {
    border-right: 1px solid rgb(172, 172, 172);
  }
`;

export const StatisticLabel = styled.span`
  font-size: small;
`;

export const StatisticPercentage = styled.span`
  font-size: large;
  color: black;
`;
