import { CardS, NameRepositorie, FullNameRepositorie, LinkRepositorie } from './style'
const Card = ({repositorie}) => {
    return (
        <CardS>
            <NameRepositorie>{repositorie && repositorie.name}</NameRepositorie>
            <FullNameRepositorie>full name: <LinkRepositorie href={repositorie && repositorie.html_url}>{repositorie && repositorie.full_name}</LinkRepositorie></FullNameRepositorie>
        </CardS>
    )
}

export default Card