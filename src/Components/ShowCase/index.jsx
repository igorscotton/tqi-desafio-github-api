import Card from '../Card';
import { useUserRepo } from '../../Providers/UserRepo';
import { useUserStarred } from '../../Providers/UserStarred';
import { useState } from 'react';
import { ShowCaseS, ShowCaseCard, Button} from './style'

const ShowCase = () => {
    const {repositories} = useUserRepo();
    const {starred} = useUserStarred();

    const [repo, setRepo] = useState(true);

    return (
        <ShowCaseS>
            <div>
                <Button onClick={() => setRepo(true)}>Repositories</Button>
                <Button onClick={() => setRepo(false)}>Starred</Button>
            </div>
            <ShowCaseCard>
                {
                repo ? 
                repositories && repositories.map((repositorie) => <Card repositorie={repositorie}></Card> ) : 
                starred && starred.map((repositorie) => <Card repositorie={repositorie}></Card>)
                }
            </ShowCaseCard>
        </ShowCaseS>
    )
}

export default ShowCase