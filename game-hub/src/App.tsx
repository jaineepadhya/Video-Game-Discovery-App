import { Grid, GridItem, Show} from "@chakra-ui/react"


function App() {
return <Grid templateAreas={{
  //small screens like mobile
  base: `"nav"  "main"`,
  //wider screens like 1024 px and above
  lg: `"nav nav" "aside main"`
}} >
<GridItem area="nav" bg= "coral">Nav</GridItem>
<Show above="lg">
<GridItem area="aside" bg= "gold">Aside</GridItem> 
</Show>
<GridItem area="main" bg= "dodgerblue">Main</GridItem>


</Grid>
}

export default App
