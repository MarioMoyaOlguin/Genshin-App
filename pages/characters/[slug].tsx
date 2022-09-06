import { useRouter } from "next/router";
import characters from "../../data/characters";


const characterDetails = () => {

    const router = useRouter()
    const name = router.query.slug
    
    // @ts-ignore: Unreachable code error
    const data = characters.find( elem => elem === name);
    
    console.log(router.query.slug)

  return (
    <div>
        <p>Post: {name}</p>
        
    </div>
  )
}

export default characterDetails