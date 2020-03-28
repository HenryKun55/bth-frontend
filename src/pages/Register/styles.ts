import styled, { css } from 'styled-components';
import { colors } from '../../styles';
import { darken } from 'polished';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
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

export const FormAddress = styled.div`
  display: flex;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Logo = styled.img`
  
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  margin-top: 8px;
  ${({ width, marginLeft }: { width?: number, marginLeft?: number }) => css`
    width: ${width+'px' || `100%`};
    margin-left: ${marginLeft || 0}px;
  ` };
`;

export const Button = styled.button`
    width: 100%;
    height: 60px;
    background: ${colors.red};
    border: 0;
    border-radius: 8px;
    color: ${colors.white};
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.1, colors.red)};
    }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 64px 0 32px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: ${colors.subtitle};
`;

export const Link = styled(LinkRouter)`
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${colors.grey};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const ContainerIcon = styled.div`
  margin-right: 8px;
`;

