import styled from 'styled-components';


export const Container = styled.div`
    width: 1160px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 75px;
`;
export const ContainerAuth = styled.div`
    width: 366px;
    min-height: 401px;
    margin-top: 100px;
    padding-top: 33px;
    padding-bottom: 47px;
    border-radius: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
export const ContainerChangeData = styled(ContainerAuth)`
    gap: 10px;
`;
