import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 40px;

  background-color: #fff;
  color: rgb(143, 143, 143);

  text-align: center;
  border-radius: 5px;
`;

export const User = styled.div`
  display: block;
  line-height: 2;
  margin-bottom: 20px;
`;

export const UserImg = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 1px solid black;
`;

export const UserName = styled.p`
  font-weight: 900;
  font-size: larger;
  color: black;
`;

export const ProfileList = styled.ul`
  display: flex;
  border-end-end-radius: 5px;
  border-end-start-radius: 5px;
  border: 1px solid rgb(172, 172, 172);

  background-color: #b4dde9;

  margin-left: auto;
  margin-right: auto;
`;

export const ProfileListItem = styled.li`
  padding: 15px;

  display: flex;
  flex-direction: column;
  width: 100%;

  &:first-child {
    border-right: 1px solid rgb(172, 172, 172);
  }
  &:last-child {
    border-left: 1px solid rgb(172, 172, 172);
  }
`;

export const ProfileDesc = styled.p`
  color: black;
  font-size: large;
  font-weight: 700;
`;
