import styled from '@emotion/styled';

export const Statistics = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 350px;
  border-radius: 5%;
  height: 100%;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;
export const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
`;

const setBgColor = props => {
  switch (props.id) {
    case 'id-1':
      return 'red';
    case 'id-2':
      return 'orange';
    case 'id-3':
      return 'yellow';
    case 'id-4':
      return 'green';
    case 'id-5':
      return 'blue';
    default:
      return 'grape';
  }
};
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 70px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: ${setBgColor};
  &:hover {
    background-color: rgb(22 10 163 / 58%);
    border: 1px solid rgb(60, 60, 60);
    cursor: pointer;
  }
`;
export const Label = styled.span`
  font-size: 14px;
 
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
  color:rgb(22, 10, 163 );
`;
