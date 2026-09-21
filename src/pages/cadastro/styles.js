import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const AvisoText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #DDDDDD;
`

export const LoginText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #EEEEEE;
`

export const CriarText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-left: 5px;
    color: #0c60b4;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin-top: 20px;
    a {
        text-decoration: none;
    }
`