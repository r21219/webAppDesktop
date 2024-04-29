import {Button, Form, Stack, InputGroup} from "react-bootstrap";
import {Send} from "react-bootstrap-icons";

const MainChatWindow = () =>{
    return (
        <div className="size-box-main d-flex flex-column">

            <div className="position-sticky top-0 bg-white">
                <p>Pokusný kralík1</p> {/*{userName} až bude předavat nějaka ta jmena -const nahoře definovana ofc*/}
                <hr/>
            </div>

            <div className="flex-grow-1 overflow-auto pt-3">
                <Stack direction="vertical" gap={3} className="justify-content-end">
                    <div className="bubble bubble-right">
                        <div className="userName">já</div>
                        Chat1
                    </div>
                    <div className="bubble bubble-left">
                        <div className="userName">jmeno123</div> {/*{userName} až bude předavat nějaka ta jmena -const nahoře definovana ofc*/}
                        Chat2 ...........................................................................................................................................
                        ................................................................................
                    </div>

                </Stack>
            </div>

            <div className="bg-white">
                <Form>
                    <Form.Group className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Type message" />
                                <Button variant="primary" type="button">
                                    <Send />
                                </Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
export default MainChatWindow;

