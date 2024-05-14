import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Row from "../ui/Row";
import Heading from "../ui/heading";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations/>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
