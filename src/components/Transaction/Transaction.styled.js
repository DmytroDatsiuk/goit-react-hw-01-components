import styled from 'styled-components';

export const Transaction = styled.table`
  width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-collapse: collapse;
`;

export const TransactionThead = styled.thead`
  background-color: #00a0eb;
  color: white;
  text-transform: uppercase;
  font-size: smaller;

`;

export const TransactionTheadTh = styled.th`
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;

`;

export const TransactionTbody = styled.tbody`
  background-color: rgba(72, 191, 247, 0.525);
  color: gray;
  text-transform: capitalize;
  font-size: smaller;
  
  &:nth-child(2n) {
  background-color: white;
}
`;

export const TransactionTheadTd = styled.td`
font-weight: 300;
font-size: smaller;
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;
`;
