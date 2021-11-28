import { getSession } from "next-auth/react"

const sessionFinder = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    console.log(session);
    res.send(session)
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}

export default sessionFinder;