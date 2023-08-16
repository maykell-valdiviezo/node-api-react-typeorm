import React, {FunctionComponent, useState} from "react";
import {styled} from "@mui/system";
import {Button, FormControl, TextField} from "@mui/material";
import {getUnixTime, parseISO} from 'date-fns'

const CreateEventContainer = styled('div')({
    minWidth: "80vw"
})
const TitleContainer = styled('div')({
    fontSize: "18px",
    paddingBottom: "20px"
})


const handleOnChange = (set: Function) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        set(event.target.value);
    };
};
const CreateEvent: FunctionComponent = () => {
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("")
    const [startDateTime, setStartDateTime] = useState("");
    const [endDateTime, setEndTime] = useState("");

    const isSubmitEnable = eventName.length > 0 && description.length > 0 && startDateTime.length > 0 && endDateTime.length > 0;

    const handleCreateEventClick = () => {

        // need to convert to unix before sending the payload

        const event = {
            name: eventName,
            description,
            startDate: getUnixTime(parseISO(startDateTime)),
            endDate: getUnixTime(parseISO(endDateTime))
        }

        console.log()
        fetch('http://localhost:3001/events', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(event)
        }).then(() => console.log("data sent: **", event));
    };
    return <CreateEventContainer>
        <FormControl>
            <TitleContainer>Create a new Event</TitleContainer>
            <TextField
                required sx={{marginTop: "10px"}}
                fullWidth
                id="event-name"
                label="event-name"
                variant="filled"
                onChange={handleOnChange(setEventName)}
            ></TextField>

            <TextField
                required sx={{marginTop: "10px"}}
                fullWidth
                id="description"
                label="description"
                variant="filled"
                onChange={handleOnChange(setDescription)}
            ></TextField>

            <span>
                <TextField required
                           id="startDateTimeEvent"
                           label="Start Date/Time Event"
                           type="datetime-local"
                           defaultValue="2023-08-12T10:30"
                           sx={{width: 250, marginTop: "20px", marginRight: "20px"}}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           onChange={handleOnChange(setStartDateTime)}
                />

                <TextField required
                           id="endDateTimeEvent"
                           label="End Date/Time Event"
                           type="datetime-local"
                           defaultValue="2023-08-12T10:30"
                           sx={{width: 250, marginTop: "20px"}}
                           InputLabelProps={{
                               shrink: true,
                           }}
                           onChange={handleOnChange(setEndTime)}
                />
            </span>

            <Button sx={{marginTop: "20px"}} disabled={!isSubmitEnable} variant="contained"
                    onClick={handleCreateEventClick}>Create Event</Button>

        </FormControl>
    </CreateEventContainer>
}

export default CreateEvent;