import styled from 'styled-components';

export const Friend = styled.ul`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const FriendActive = styled.span`
  color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const FriendImg = styled.img`
  border-radius: 4px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
`;
