import styled from '@emotion/styled'
import {Typography,Button} from '@material-ui/core'

export const SelectWrapper = styled.div`
    width: 30%;
    margin: 1rem auto;
    margin-bottom: 3rem;
    cursor: pointer;
`;
export const B = styled(Button)`
    color: #333;
`;
export const PageWrapper = styled.div`
    margin: 2%;
    padding: 2%;
`;
export const Heading = styled(Typography)`
    text-align: center;
`;
export const Loader = styled.div`
    text-align: center;
    padding: 1rem;
    display: flex;
`;
export const Spinner = styled.img`
    height: 10rem;
    margin: 1rem auto;
    animation: spinner-spin infinite 5s linear;
`;