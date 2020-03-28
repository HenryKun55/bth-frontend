import styled, { css } from 'styled-components';
import { colors } from '../../styles';
import { darken } from 'polished';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
`;

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    background: ${colors.background};
    box-shadow: 0 0 100px rgba(0,0,0,0.2);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const TitleHeader = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Logo = styled.img`
  height: 64px;  
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid ${colors.greyLight};
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.3, colors.white)};
  }
`;

export const Link = styled(LinkRouter)`
  width: 260px;
  height: 60px;
  background: ${colors.red};
  border: 0;
  border-radius: 8px;
  color: ${colors.white};
  font-weight: bold;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  margin-left: auto;
  transition: background 0.2s;

  &:hover {
      background: ${darken(0.1, colors.red)};
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 24px;
  list-style: none;
`;

export const Card = styled.li`
  background: ${colors.white};
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const CardTitle = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: ${colors.greyDark};
  ${({first}: {first?: boolean}) => css`
    margin-top: ${!first ? 32 : 0}px;
  `}
`;

export const CardDescription = styled.p`
  color: ${colors.subtitle};
  line-height: 21px;
  font-size: 16px;
`;

export const Trash = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: 0;
  background: transparent;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Nothing = styled.h1`
  margin-top: 80px;
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.subtitle};
`;