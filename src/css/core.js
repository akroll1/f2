import styled from '@emotion/styled'
import {Typography} from '@material-ui/core'

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
    height: 5rem;
    margin: 1rem auto;
    animation: spinner-spin infinite 5s linear;
`;