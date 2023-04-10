import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])

    return (
        <div>
            <EventCalendar events={[]}/>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить события
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                />
            </Modal>
        </div>
    );
};

export default Event;