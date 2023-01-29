import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Premieres from "../components/Premieres"
import Soon from "../components/Soon"
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://kuendejtslkarpwddqsr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1ZW5kZWp0c2xrYXJwd2RkcXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MjQ2NDAsImV4cCI6MTk4OTEwMDY0MH0.jXdJ48UEhcfoD9ndu7xnNPW2zeyGfR1w1Qg1SfMiKko')


const Home = ({movies}) => {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Premieres movies={movies}/>
      <Footer />
    </div>
  )
}

export default Home


export async function getServerSideProps() {

  let { data } = await supabase.from('movies').select()

  return {
    props: {
      movies: data
    }
  }
}
