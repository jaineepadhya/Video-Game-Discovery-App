import { Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"


function App() {
  return (
    <Grid templateAreas={{
  //small screens like mobile
  base: `"nav"  "main"`,
  //wider screens like 1024 px and above
  lg: `"nav nav" "aside main"`
}} >
<GridItem area="nav">
  <NavBar/>
</GridItem>
<Show above="lg">
<GridItem area="aside" >Aside</GridItem> 
</Show>
<GridItem area="main" >Main</GridItem>


    </Grid>
  )
  
}

export default App
