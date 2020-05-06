import styled from 'styled-components';

export const NavStyle = styled.div`
  background-color: #7A8382;
  border: 2px solid white;
  padding: 20px;
  font-family: "Courier New", Courier, monospace
  margin-right: auto;
  margin-left: auto; 
  padding-left: 420px;
`;

export const AppName = styled.h1`
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-left: 100px;
  background-color: #7A8382;
`;

export const NavButton = styled.button`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.3em 5em;
  border-radius: 5px;
  background-color: #0ACEAF;
  color: white;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    color: #F80289;
  }
`;

export const PlaylistDeleteButton = styled.button`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.1em 1em;
  border-radius: 5px;
  background-color: #FA0B03;
  color: white;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    color: #F80289;
  }
`;

export const PlaylistButton = styled.button`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.1em 1em;
  border-radius: 5px;
  background-color: #0ACEAF;
  color: white;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    color: #F80289;
  }
`;

export const Playlists = styled.div`
  margin: 1rem;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid white;
  text-align: center;
`;

export const SongsContainerDiv = styled.div`
  margin: 1rem;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid white;
  text-align: center;
`;

export const Songs = styled.div`
  margin: 1rem;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #0ACEAF;
  text-align: left;
`;

export const PlaylistContainerHeader = styled.div`
  color: white;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`
export const PlaylistTitle = styled.div`
color: white;
font-family: "Courier New", Courier, monospace;
&:hover {
    color: #0ACEAF;
  }
text-align: center;
`

export const Button = styled.button`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.1em 1em;
  border-radius: 5px;
  background-color: #0ACEAF;
  color: white;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    color: #F80289;
  }
`;

export const DeleteButton = styled.button`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.1em 1em;
  border-radius: 5px;
  background-color: #FA0B03;
  color: white;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    color: #F9BC0D;
  }
`;

export const DeleteButtonHolder = styled.div`
text-align: center;
justify-content: center;
`

export const ArtistPlaying = styled.div`
  color: white;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`
export const TitlePlaying = styled.div`
  color: #F9BC0D;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`

export const Current = styled.div`
  color: white;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`

export const Search = styled.div`
  color: white;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`

export const CurrentPlaylist = styled.div`
  color: #0ACEAF;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
`

export const Image = styled.div`
justify-content: center;
text-align: center;
`

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Col2 = styled.div`
  padding: 3px;
  border-radius: 40px;
  flex: 10;
  color: #F9BC0D;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

export const Col3 = styled.div`
  padding: 0px;
  border-radius: 0px;
  flex: 25;
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  margin: 1rem;
  grid-template-columns: 50% 50%;
  padding: 10px;
  border-radius: 40px;
  background-color: #7A8382;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  justify-content: center;
  padding: 25px;
  border-radius: 50px;
  flex: 25;
`;