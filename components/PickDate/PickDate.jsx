// import { format } from "date-fns";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
// import "./BookModal.module.css";
const PickDate = ({
  treatment,
  handleModal,
  selectedDate,
  setSelectedDate,
}) => {
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  const user = activeUser;
 
  const minDate = moment().add(5, "days").startOf("day").toDate(); // Disable dates before 5 days from today
  const maxDate = moment().add(40, "days").endOf("day").toDate(); // Disable dates after 30 days from today

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isHoliday = (date) => {
    // Add your logic to determine if a date is a holiday
    return false;
  };

  const disabledDates = [
    ...Array.from({ length: 31 }, (_, i) =>
      moment().startOf("month").add(i, "days").toDate()
    ), // Disable all days in other months
    ...Array.from({ length: moment().date() - 1 }, (_, i) =>
      moment().subtract(i, "days").toDate()
    ), // Disable all days before today in current month
    ...Array.from(
      { length: moment(maxDate).diff(moment(), "days") + 1 },
      (_, i) => moment().add(i, "days").toDate()
    ), // Disable all days after 30 days from today
  ].filter((date) => date < minDate || date > maxDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mt-5 text-black sm:text-xl">
        {/* {treatment.name} */} Pick a Delivery date
      </h3>
      {/* <input
              type="text"
              placeholder="Type here"
              name="date"
              className="input input-bordered w-full max-w-xs mt-5"
              //   defaultValue={format(selected, "PP")}
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              name="slot"
              className="input input-bordered w-full max-w-xs mt-5"
              //   defaultValue={treatment.slots[0]}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={user.email}
              disabled
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              defaultValue={user.displayName}
              className="input input-bordered w-full max-w-xs mt-2"
              required
            />

            <input
              type="number"
              defaultValue={treatment.price}
              name="price"
              disabled
              className="input input-bordered w-full max-w-xs mt-2"
              required
            /> */}
      <div className="flex justify-center border w-fit p-1 mt-2 rounded-xl pl-5">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          maxDate={maxDate}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          showMonthDropdown
          placeholderText="Select Delivery Date"
          dateFormat="dd/MM/yyyy"
          excludeDates={disabledDates}
        />
      </div>
    </div>
  );
};

export default PickDate;
