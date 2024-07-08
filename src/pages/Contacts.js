import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ContactList } from "components/ContactList/ContactList";
import { Form } from "components/Form/Form";
import { fetchContacts } from '../redux/operation';
import { getIsLoading } from '../redux/selectors';
import { ContactFilter } from "components/ContactFilter/ContactFilter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <Form />
            <ContactFilter />
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList />
        </>
    );
}
