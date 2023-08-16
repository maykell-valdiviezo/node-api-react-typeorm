import {FunctionComponent, useEffect, useState} from "react";
import {styled} from "@mui/system";
import BasicTable from "@/components/basic.table";
import CreateEvent from "@/components/create.event";

const HomeContainer = styled('div')({
    flex: 1, padding: "30px"
})

const EventsContainer = styled('div')({
    width: '100%', paddingTop: '60px'
})

const TitleContainer = styled('div')({
    fontSize: "18px",
    paddingBottom: "20px"
})

const Home: FunctionComponent = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3001/events');
                const jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.error('Error fetching the data:', error)
            }
        }

        fetchData();
    }, []);

    return <HomeContainer>
        <TitleContainer>EVENTS</TitleContainer>
        <CreateEvent/>
        <EventsContainer>
            <TitleContainer>List of events</TitleContainer>
            {
                !!data && <BasicTable rows={data}/>
            }
        </EventsContainer>
    </HomeContainer>
}
export default Home;

