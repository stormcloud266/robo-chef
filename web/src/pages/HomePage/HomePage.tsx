import { useAuth } from 'src/auth'
import PostsListCell from 'src/components/PostsListCell'

const HomePage = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
      {/* MetaTags, h1, paragraphs, etc. */}
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={() => signUp()}>sign up</button>
      <br />
      <button onClick={() => logIn()}>log in</button>
      <br />
      <button onClick={() => logOut()}>sign out</button>

      <PostsListCell take={10} skip={0} />
    </>
  )
}

export default HomePage
