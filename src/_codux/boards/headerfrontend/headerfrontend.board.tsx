import { createBoard } from '@wixc3/react-board';
import { Headerfrontend } from '../../../components/headerfrontend/headerfrontend';

export default createBoard({
    name: 'Headerfrontend',
    Board: () => <Headerfrontend />
});
